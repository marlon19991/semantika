# 🚀 Scripts de Inicio y Parada - Semantika + Playground

## 📋 Descripción

Scripts automatizados para iniciar y detener toda la aplicación **Semantika + Playground** de manera sencilla y confiable. Estos scripts manejan automáticamente el backend FastAPI, frontend con servidor HTTP, dependencias, logs y limpieza del sistema.

## 📁 Archivos Incluidos

### 🐧 Linux/macOS
- **`start-semantika.sh`** - Script de inicio para sistemas Unix
- **`stop-semantika.sh`** - Script de parada para sistemas Unix

### 🪟 Windows
- **`start-semantika.bat`** - Script de inicio para Windows
- **`stop-semantika.bat`** - Script de parada para Windows

## 🎯 Funcionalidades

### ✅ Script de Inicio (`start-semantika`)
- **Verificación automática** de dependencias (Python, pip)
- **Instalación automática** de requirements.txt si no existe
- **Inicio del backend** FastAPI en puerto 8000
- **Inicio del frontend** servidor HTTP en puerto 8080
- **Tracking de procesos** con archivo de PIDs
- **Apertura automática** del navegador
- **Logs detallados** con colores y timestamps
- **Verificación de salud** de los servicios

### 🛑 Script de Parada (`stop-semantika`)
- **Detención inteligente** de todos los procesos
- **Búsqueda por PIDs** guardados y por puertos
- **Terminación forzada** si es necesario
- **Archivado automático** de logs con timestamp
- **Limpieza de archivos** temporales (.pyc, __pycache__)
- **Verificación final** de puertos liberados
- **Reporte completo** de acciones realizadas

## 🚀 Uso Rápido

### Linux/macOS
```bash
# Iniciar toda la aplicación
./start-semantika.sh

# Detener toda la aplicación
./stop-semantika.sh
```

### Windows
```cmd
# Iniciar toda la aplicación
start-semantika.bat

# Detener toda la aplicación
stop-semantika.bat
```

## 📋 Requisitos Previos

### Estructura de Proyecto
```
Semantika/
├── backend/
│   ├── main.py
│   └── requirements.txt (opcional, se crea automáticamente)
├── frontend/
│   └── ui/
│       └── index.html
├── start-semantika.sh/.bat
├── stop-semantika.sh/.bat
└── README.md
```

### Software Requerido
- **Python 3.7+** (python3 o python)
- **pip** (pip3 o pip)
- **Acceso a puertos** 8000 y 8080

## 🔧 Configuración Automática

### Backend (Puerto 8000)
- FastAPI con Uvicorn
- Modo reload activado para desarrollo
- Host: 0.0.0.0 (accesible desde red local)
- Logs: `backend.log`

### Frontend (Puerto 8080)
- Servidor HTTP de Python
- Servir archivos estáticos desde `frontend/ui/`
- Logs: `frontend.log`

## 📊 Monitoreo y Logs

### URLs de Acceso
- **Frontend Principal**: http://localhost:8080
- **Backend API Docs**: http://localhost:8000/docs
- **Backend Health**: http://localhost:8000/health

### Archivos de Log
```bash
# Ver logs en tiempo real
tail -f backend.log frontend.log

# Logs archivados (después de stop)
backend_YYYYMMDD_HHMMSS.log
frontend_YYYYMMDD_HHMMSS.log
```

### Tracking de Procesos
```bash
# Archivo de PIDs (creado automáticamente)
semantika.pids

# Formato:
backend:12345
frontend:67890
```

## 🛠️ Solución de Problemas

### Problema: Puerto en Uso
```bash
# Linux/macOS - Verificar qué usa el puerto
lsof -i :8000
lsof -i :8080

# Windows - Verificar qué usa el puerto
netstat -ano | findstr :8000
netstat -ano | findstr :8080

# Forzar liberación
./stop-semantika.sh  # o .bat en Windows
```

### Problema: Python No Encontrado
```bash
# Verificar instalación
python --version
python3 --version

# Instalar Python (Ubuntu/Debian)
sudo apt update && sudo apt install python3 python3-pip

# Instalar Python (macOS con Homebrew)
brew install python

# Windows: Descargar desde python.org
```

### Problema: Dependencias Faltantes
```bash
# El script instala automáticamente, pero manualmente:
cd backend
pip install -r requirements.txt

# Si requirements.txt no existe, se crea automáticamente con:
# fastapi, uvicorn, python-multipart, pydantic, etc.
```

### Problema: Permisos (Linux/macOS)
```bash
# Hacer ejecutables los scripts
chmod +x start-semantika.sh stop-semantika.sh

# Si hay problemas de permisos con puertos
sudo ./start-semantika.sh  # No recomendado, usar puertos > 1024
```

## 🎨 Personalización

### Cambiar Puertos
Editar los scripts y modificar:
```bash
# Backend (cambiar 8000)
uvicorn main:app --port 8001

# Frontend (cambiar 8080)
python -m http.server 8081
```

### Agregar Variables de Entorno
```bash
# En start-semantika.sh, antes de iniciar backend:
export OPENAI_API_KEY="tu-api-key"
export ANTHROPIC_API_KEY="tu-api-key"
```

### Personalizar Requirements
Crear `backend/requirements.txt` antes de ejecutar:
```txt
fastapi==0.104.1
uvicorn[standard]==0.24.0
# ... tus dependencias específicas
```

## 🔄 Flujo de Trabajo Típico

### Desarrollo Diario
```bash
# 1. Iniciar aplicación
./start-semantika.sh

# 2. Desarrollar (los cambios se recargan automáticamente)
# - Backend: modo --reload activo
# - Frontend: refrescar navegador

# 3. Al terminar
./stop-semantika.sh
```

### Debugging
```bash
# Iniciar y ver logs
./start-semantika.sh
# Responder 'y' para ver logs en tiempo real

# En otra terminal, detener
./stop-semantika.sh
```

### Producción
```bash
# Modificar scripts para producción:
# - Quitar --reload
# - Usar gunicorn en lugar de uvicorn
# - Configurar nginx para frontend
```

## 📈 Características Avanzadas

### Auto-Recovery
Los scripts detectan y manejan:
- Procesos zombie
- Puertos ocupados
- Dependencias faltantes
- Archivos de configuración ausentes

### Logging Inteligente
- **Colores** para diferentes tipos de mensajes
- **Timestamps** automáticos en logs archivados
- **Rotación** de logs al detener servicios
- **Limpieza** de archivos temporales

### Cross-Platform
- **Detección automática** del sistema operativo
- **Comandos equivalentes** entre Unix y Windows
- **Paths compatibles** con ambos sistemas

## 🎉 Funcionalidades del Playground Integrado

Una vez iniciado, tendrás acceso a:

### 🧠 Generador IA
- Descripción en lenguaje natural
- Generación automática de componentes bc-*
- Integración con modelos de IA (OpenAI, Anthropic)

### 🎮 Playground Interactivo
- **Monaco Editor** con autocompletado
- **Vista previa** en tiempo real
- **Análisis de calidad** automático
- **Simulación responsive**

### 📊 Sistema de Calidad
- **Validez del componente** (sintaxis HTML/CSS)
- **Accesibilidad** (ARIA, semántica)
- **Compatibilidad** con Design System

### 🔄 Integración Bidireccional
- **"Probar en Playground"** - Genera y prueba automáticamente
- **"Enviar a Playground"** - Transfiere código existente
- **Exportación** de código final

## 📞 Soporte

### Logs de Error
```bash
# Si algo falla, revisar:
cat backend.log
cat frontend.log

# O logs archivados:
ls -la backend_*.log frontend_*.log
```

### Comandos de Diagnóstico
```bash
# Verificar procesos activos
ps aux | grep -E "(uvicorn|http.server)"

# Verificar puertos
netstat -tulpn | grep -E "(8000|8080)"

# Verificar Python
which python python3
pip list | grep -E "(fastapi|uvicorn)"
```

---

## 🎯 Resumen de Comandos

| Acción | Linux/macOS | Windows |
|--------|-------------|---------|
| **Iniciar** | `./start-semantika.sh` | `start-semantika.bat` |
| **Detener** | `./stop-semantika.sh` | `stop-semantika.bat` |
| **Ver logs** | `tail -f *.log` | Ver ventanas de consola |
| **Estado** | `lsof -i :8000,:8080` | `netstat -an \| findstr "8000\|8080"` |

---

**¡Semantika + Playground listo para usar con un solo comando! 🚀**