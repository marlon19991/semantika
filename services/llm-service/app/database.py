"""
Módulo de base de datos para Semantika
"""

import os
import psycopg
from contextlib import contextmanager

# Configuración de PostgreSQL
PG_OPTS = {
    "host": os.getenv("PGHOST", "localhost"),
    "port": os.getenv("PGPORT", "5432"),
    "dbname": os.getenv("PGDATABASE", "semantika"),
    "user": os.getenv("PGUSER", "semantika"),
    "password": os.getenv("PGPASSWORD", "semantika"),
}

@contextmanager
def get_db_connection():
    """
    Context manager para conexiones de base de datos
    """
    conn = None
    try:
        conn = psycopg.connect(**PG_OPTS)
        yield conn
    except Exception as e:
        if conn:
            conn.rollback()
        raise e
    finally:
        if conn:
            conn.close() 