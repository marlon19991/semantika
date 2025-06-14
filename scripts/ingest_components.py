#!/usr/bin/env python3
"""Script de ingesta para la librería de diseño Bancolombia.

Sprint 0: indexa solo `bc-button`.

Uso:
  python scripts/ingest_components.py --component bc-button

Requisitos:
  - Variables de entorno OPENAI_API_KEY
  - Base de datos Postgres levantada (infra/docker-compose.yml)
"""

import argparse
import os
from pathlib import Path
import json
import psycopg
from openai import OpenAI

DS_ROOT = Path(__file__).resolve().parents[1] / "@bancolombia" / "design-system-web"
TABLE = "components"
EMBED_DIM = 512

openai_client = OpenAI()


def ensure_table(conn: psycopg.Connection):
    with conn.cursor() as cur:
        # Extension pgvector (sin parámetros)
        cur.execute("CREATE EXTENSION IF NOT EXISTS vector;")

        # Tabla components con embedding de longitud parametrizada
        cur.execute(
            f"""CREATE TABLE IF NOT EXISTS components (
                id TEXT PRIMARY KEY,
                slug TEXT,
                kind TEXT,
                props JSONB,
                content TEXT,
                embedding vector({EMBED_DIM})
            );""",
        )
        conn.commit()


def extract_content(component_dir: Path) -> str:
    """Concatena todos los .d.ts para generar prompt de embedding."""
    texts = []
    for path in component_dir.glob("*.d.ts"):
        texts.append(path.read_text())
    return "\n".join(texts)


def embed(text: str):
    resp = openai_client.embeddings.create(
        model="text-embedding-3-small",
        input=text,
        dimensions=EMBED_DIM,
    )
    return resp.data[0].embedding


def pgvec_literal(vec: list[float]) -> str:
    return "[" + ",".join(f"{x:.6f}" for x in vec) + "]"


def upsert(conn: psycopg.Connection, comp_id: str, slug: str, kind: str, props: dict, content: str, vector):
    with conn.cursor() as cur:
        cur.execute(
            """INSERT INTO components (id, slug, kind, props, content, embedding)
               VALUES (%s, %s, %s, %s, %s, %s)
               ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, embedding = EXCLUDED.embedding;""",
            (comp_id, slug, kind, json.dumps(props), content, pgvec_literal(vector)),
        )
        conn.commit()


def main():
    parser = argparse.ArgumentParser()
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--component", help="slug del componente a indexar")
    group.add_argument("--all", action="store_true", help="indexar todos los componentes encontrados")
    args = parser.parse_args()

    conn = psycopg.connect(
        host=os.getenv("PGHOST", "localhost"),
        port=os.getenv("PGPORT", "5432"),
        dbname=os.getenv("PGDATABASE", "semantikadb"),
        user=os.getenv("PGUSER", "semantika"),
        password=os.getenv("PGPASSWORD", "semantika"),
        autocommit=False,
    )

    ensure_table(conn)

    def index_one(comp_slug: str):
        comp_dir = DS_ROOT / comp_slug
        if not comp_dir.exists():
            print(f"⚠️  Componente {comp_slug} no encontrado, se omite")
            return
        content = extract_content(comp_dir)
        if not content.strip():
            print(f"⚠️  Componente {comp_slug} sin contenido .d.ts, se omite")
            return
        vector = embed(content)
        upsert(conn, comp_id=comp_slug, slug=comp_slug, kind="directive", props={}, content=content, vector=vector)
        print(f"✅ {comp_slug} indexado")

    if args.all:
        # Detecta subdirectorios que empiezan por bc-
        for p in sorted(DS_ROOT.iterdir()):
            if p.is_dir() and p.name.startswith("bc-"):
                index_one(p.name)
    else:
        index_one(args.component)

    conn.close()


if __name__ == "__main__":
    main() 