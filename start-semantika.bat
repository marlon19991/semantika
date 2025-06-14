@echo off
setlocal enabledelayedexpansion

REM =============================================================================
REM 🚀 SEMANTIKA + PLAYGROUND - SCRIPT DE INICIO PARA WINDOWS
REM =============================================================================
REM Este script inicia automáticamente el backend y frontend de Semantika
REM Autor: Bancolombia - Equipo de Innovación
REM Versión: 1.0.0
REM =============================================================================

title Semantika + Playground - Iniciando...

echo.
echo  ____                            _   _ _         
echo / ___^|  ___ _ __ ___   __ _ _ __ ^| ^|_^(_^) ^| ____ _ 
echo \___ \ / _ \ '_ ` _ \ / _` ^| '_ \^| __^| ^| ^|/ / _` ^|
echo  ___^) ^|  __/ ^| ^| ^| ^| ^| ^(_^| ^| ^| ^| ^| ^|_^| ^|   ^< ^(_^| ^|
echo ^|____/ \___^|_^| ^|_^| ^|_^\__,_^|_^| ^|_^\__^|_^|_^|\_\__,_^|
echo.
echo     + PLAYGROUND INTEGRADO
echo.
echo ==============================================================================
echo 🧠 Asistente RAG para Design System + Playground de Testing Integrado
echo ==============================================================================
echo.

REM Verificar directorio actual
if not exist "README.md" if not exist "frontend" if not exist "backend" (
    echo [ERROR] Este script debe ejecutarse desde la raíz del proyecto Semantika
    echo Estructura esperada:
    echo   ├── frontend/
    echo   ├── backend/
    echo   ├── README.md
    echo   └── start-semantika.bat
    pause
    exit /b 1
)

echo [INFO] 🔍 VERIFICANDO DEPENDENCIAS...

REM Verificar Python
python --version >nul 2>&1
if errorlevel 1 (
    python3 --version >nul 2>&1
    if errorlevel 1 (
        echo [ERROR] Python no está instalado. Instala Python 3.7+ para continuar.
        pause
        exit /b 1
    ) else (
        set PYTHON_CMD=python3
    )
) else (
    set PYTHON_CMD=python
)

echo [SUCCESS] Python encontrado
%PYTHON_CMD% --version

REM Verificar pip
pip --version >nul 2>&1
if errorlevel 1 (
    pip3 --version >nul 2>&1
    if errorlevel 1 (
        echo [ERROR] pip no está instalado. Instala pip para continuar.
        pause
        exit /b 1
    ) else (
        set PIP_CMD=pip3
    )
) else (
    set PIP_CMD=pip
)

echo [SUCCESS] pip encontrado
%PIP_CMD% --version

REM Crear archivo de PIDs para tracking
if exist semantika.pids del semantika.pids

echo [INFO] 🔧 CONFIGURANDO BACKEND...

REM Verificar directorio backend
if not exist "backend" (
    echo [ERROR] Directorio 'backend' no encontrado
    pause
    exit /b 1
)

cd backend

REM Verificar requirements.txt
if not exist "requirements.txt" (
    echo [WARNING] requirements.txt no encontrado, creando uno básico...
    (
        echo fastapi==0.104.1
        echo uvicorn[standard]==0.24.0
        echo python-multipart==0.0.6
        echo pydantic==2.5.0
        echo python-dotenv==1.0.0
        echo httpx==0.25.2
        echo numpy==1.24.3
        echo scikit-learn==1.3.0
        echo sentence-transformers==2.2.2
        echo chromadb==0.4.15
        echo langchain==0.0.335
        echo openai==1.3.5
        echo anthropic==0.7.7
    ) > requirements.txt
    echo [SUCCESS] requirements.txt creado
)

REM Crear y activar entorno virtual si no existe
if not exist "venv" (
    echo [INFO] Creando entorno virtual...
    %PYTHON_CMD% -m venv venv
    echo [SUCCESS] Entorno virtual creado
)

echo [INFO] Activando entorno virtual...
call venv\Scripts\activate.bat

REM Actualizar pip en el entorno virtual
echo [INFO] Actualizando pip en entorno virtual...
pip install --upgrade pip --quiet

REM Instalar dependencias del backend
echo [INFO] Instalando dependencias del backend...
pip install -r requirements.txt --quiet

REM Verificar archivo principal
if not exist "main.py" (
    echo [ERROR] main.py no encontrado en el directorio backend
    pause
    exit /b 1
)

echo [SUCCESS] Backend configurado correctamente

echo [INFO] 🌐 INICIANDO SERVICIOS...

REM Iniciar backend (usando el entorno virtual)
echo [INFO] Iniciando servidor FastAPI en puerto 8000...
start "Semantika Backend" /min venv\Scripts\python.exe -m uvicorn main:app --reload --host 0.0.0.0 --port 8000

REM Esperar a que el backend esté listo
echo [INFO] Esperando a que el backend esté listo...
timeout /t 5 /nobreak >nul

cd ..

echo [INFO] 🎨 CONFIGURANDO FRONTEND...

REM Verificar directorio frontend
if not exist "frontend\ui" (
    echo [ERROR] Directorio 'frontend\ui' no encontrado
    pause
    exit /b 1
)

cd frontend\ui

REM Verificar archivo principal
if not exist "index.html" (
    echo [ERROR] index.html no encontrado en frontend\ui
    pause
    exit /b 1
)

REM Iniciar servidor frontend
echo [INFO] Iniciando servidor frontend en puerto 8080...
start "Semantika Frontend" /min %PYTHON_CMD% -m http.server 8080

cd ..\..

REM Esperar a que los servicios estén listos
echo [INFO] Verificando servicios...
timeout /t 3 /nobreak >nul

echo.
echo ✅ SEMANTIKA + PLAYGROUND INICIADO EXITOSAMENTE
echo.
echo [SUCCESS] 🔗 URLs de acceso:
echo    Frontend (Interfaz Principal): http://localhost:8080
echo    Backend API (Documentación):   http://localhost:8000/docs
echo    Backend Health Check:         http://localhost:8000/health
echo.
echo [SUCCESS] 📝 Logs disponibles en las ventanas de consola abiertas
echo.
echo [WARNING] 💡 Para detener todos los servicios ejecuta:
echo    stop-semantika.bat
echo.

REM Intentar abrir el navegador automáticamente
echo [INFO] Abriendo navegador automáticamente...
timeout /t 2 /nobreak >nul
start http://localhost:8080

echo.
echo 🎉 ¡SEMANTIKA + PLAYGROUND ESTÁ LISTO PARA USAR!
echo.
echo Funcionalidades disponibles:
echo   ✅ Generador de componentes con IA
echo   ✅ Playground integrado con Monaco Editor
echo   ✅ Sistema de calidad en tiempo real
echo   ✅ Vista previa responsive
echo   ✅ Exportación de código
echo   ✅ Historial de consultas
echo   ✅ Ejemplos predefinidos
echo   ✅ Documentación integrada
echo.
echo Presiona cualquier tecla para cerrar esta ventana...
echo Los servicios seguirán ejecutándose en segundo plano.
pause >nul 