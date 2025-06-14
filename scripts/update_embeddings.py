#!/usr/bin/env python3
"""
Semantika - Update Embeddings Script
Genera y actualiza embeddings para todos los componentes en la base de datos
"""

import os
import sys
import time
import logging
from typing import List, Tuple
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

import psycopg
from openai import OpenAI, OpenAIError

# Configuración de logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Configuración
PG_OPTS = {
    "host": os.getenv("PGHOST", "localhost"),
    "port": os.getenv("PGPORT", "5432"),
    "dbname": os.getenv("PGDATABASE", "semantikadb"),
    "user": os.getenv("PGUSER", "semantika"),
    "password": os.getenv("PGPASSWORD", "semantika"),
}

EMBED_MODEL = "text-embedding-3-small"
EMBED_DIM = 512
BATCH_SIZE = 10
DELAY_BETWEEN_BATCHES = 1  # segundos

def get_openai_client() -> OpenAI:
    """Inicializa y retorna cliente de OpenAI."""
    try:
        client = OpenAI()
        logger.info("✅ Cliente OpenAI inicializado")
        return client
    except Exception as e:
        logger.error(f"❌ Error inicializando OpenAI: {e}")
        sys.exit(1)

def get_components_without_embeddings() -> List[Tuple[str, str, str]]:
    """Obtiene componentes que no tienen embeddings."""
    try:
        with psycopg.connect(**PG_OPTS) as conn:
            with conn.cursor() as cur:
                cur.execute("""
                    SELECT id, description, 
                           CASE 
                               WHEN props IS NOT NULL THEN description || ' ' || props::text 
                               ELSE description 
                           END as full_text
                    FROM components 
                    WHERE embedding IS NULL 
                    ORDER BY id;
                """)
                
                components = cur.fetchall()
                logger.info(f"📊 Encontrados {len(components)} componentes sin embeddings")
                return components
                
    except psycopg.Error as e:
        logger.error(f"❌ Error consultando base de datos: {e}")
        sys.exit(1)

def generate_embedding(client: OpenAI, text: str) -> List[float]:
    """Genera embedding para un texto dado."""
    try:
        response = client.embeddings.create(
            model=EMBED_MODEL,
            input=text.strip(),
            dimensions=EMBED_DIM
        )
        return response.data[0].embedding
        
    except OpenAIError as e:
        logger.error(f"❌ Error generando embedding: {e}")
        raise
    except Exception as e:
        logger.error(f"❌ Error inesperado: {e}")
        raise

def update_component_embedding(component_id: str, embedding: List[float]) -> bool:
    """Actualiza el embedding de un componente en la base de datos."""
    try:
        vec_literal = "[" + ",".join(f"{x:.6f}" for x in embedding) + "]"
        
        with psycopg.connect(**PG_OPTS) as conn:
            with conn.cursor() as cur:
                cur.execute("""
                    UPDATE components 
                    SET embedding = %s::vector, updated_at = CURRENT_TIMESTAMP 
                    WHERE id = %s;
                """, (vec_literal, component_id))
                
                if cur.rowcount == 1:
                    conn.commit()
                    return True
                else:
                    logger.warning(f"⚠️ No se actualizó ninguna fila para {component_id}")
                    return False
                    
    except psycopg.Error as e:
        logger.error(f"❌ Error actualizando embedding para {component_id}: {e}")
        return False

def process_components_batch(client: OpenAI, components: List[Tuple[str, str, str]]) -> Tuple[int, int]:
    """Procesa un lote de componentes."""
    success_count = 0
    error_count = 0
    
    for component_id, description, full_text in components:
        try:
            logger.info(f"🔄 Procesando: {component_id}")
            
            # Generar embedding
            embedding = generate_embedding(client, full_text)
            
            # Actualizar en base de datos
            if update_component_embedding(component_id, embedding):
                success_count += 1
                logger.info(f"✅ {component_id} actualizado exitosamente")
            else:
                error_count += 1
                logger.error(f"❌ Error actualizando {component_id}")
                
        except Exception as e:
            error_count += 1
            logger.error(f"❌ Error procesando {component_id}: {e}")
            
    return success_count, error_count

def verify_embeddings() -> None:
    """Verifica que todos los componentes tengan embeddings."""
    try:
        with psycopg.connect(**PG_OPTS) as conn:
            with conn.cursor() as cur:
                # Contar componentes totales
                cur.execute("SELECT COUNT(*) FROM components;")
                total = cur.fetchone()[0]
                
                # Contar componentes con embeddings
                cur.execute("SELECT COUNT(*) FROM components WHERE embedding IS NOT NULL;")
                with_embeddings = cur.fetchone()[0]
                
                # Contar componentes sin embeddings
                missing = total - with_embeddings
                
                logger.info(f"📊 Resumen de embeddings:")
                logger.info(f"   Total de componentes: {total}")
                logger.info(f"   Con embeddings: {with_embeddings}")
                logger.info(f"   Sin embeddings: {missing}")
                
                if missing == 0:
                    logger.info("🎉 ¡Todos los componentes tienen embeddings!")
                else:
                    logger.warning(f"⚠️ {missing} componentes aún necesitan embeddings")
                    
    except psycopg.Error as e:
        logger.error(f"❌ Error verificando embeddings: {e}")

def test_similarity_search() -> None:
    """Prueba básica de búsqueda por similitud."""
    try:
        client = get_openai_client()
        test_query = "botón para confirmar acciones"
        
        logger.info(f"🔍 Probando búsqueda con: '{test_query}'")
        
        # Generar embedding de prueba
        embedding = generate_embedding(client, test_query)
        vec_literal = "[" + ",".join(f"{x:.6f}" for x in embedding) + "]"
        
        with psycopg.connect(**PG_OPTS) as conn:
            with conn.cursor() as cur:
                cur.execute("""
                    SELECT id, 1/(1 + (embedding <-> %s::vector)) AS score 
                    FROM components 
                    WHERE embedding IS NOT NULL
                    ORDER BY embedding <-> %s::vector 
                    LIMIT 3;
                """, (vec_literal, vec_literal))
                
                results = cur.fetchall()
                
                logger.info("🎯 Resultados de búsqueda:")
                for component_id, score in results:
                    logger.info(f"   {component_id}: {score:.3f}")
                    
    except Exception as e:
        logger.error(f"❌ Error en prueba de similitud: {e}")

def main():
    """Función principal."""
    logger.info("🚀 Iniciando actualización de embeddings")
    
    # Verificar estado inicial
    verify_embeddings()
    
    # Obtener componentes sin embeddings
    components = get_components_without_embeddings()
    
    if not components:
        logger.info("✅ Todos los componentes ya tienen embeddings")
        test_similarity_search()
        return
    
    # Inicializar cliente OpenAI
    client = get_openai_client()
    
    # Procesar en lotes
    total_success = 0
    total_errors = 0
    
    for i in range(0, len(components), BATCH_SIZE):
        batch = components[i:i + BATCH_SIZE]
        batch_num = (i // BATCH_SIZE) + 1
        total_batches = (len(components) + BATCH_SIZE - 1) // BATCH_SIZE
        
        logger.info(f"📦 Procesando lote {batch_num}/{total_batches} ({len(batch)} componentes)")
        
        success, errors = process_components_batch(client, batch)
        total_success += success
        total_errors += errors
        
        # Pausa entre lotes para evitar rate limits
        if i + BATCH_SIZE < len(components):
            logger.info(f"⏳ Esperando {DELAY_BETWEEN_BATCHES} segundos...")
            time.sleep(DELAY_BETWEEN_BATCHES)
    
    # Resumen final
    logger.info(f"🏁 Procesamiento completado:")
    logger.info(f"   ✅ Éxitos: {total_success}")
    logger.info(f"   ❌ Errores: {total_errors}")
    
    # Verificar estado final
    verify_embeddings()
    
    # Prueba de búsqueda
    if total_success > 0:
        test_similarity_search()

if __name__ == "__main__":
    main() 