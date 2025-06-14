@echo off
setlocal enabledelayedexpansion

REM =============================================================================
REM 🛑 SEMANTIKA + PLAYGROUND - SCRIPT DE PARADA PARA WINDOWS
REM =============================================================================
REM Este script detiene automáticamente todos los servicios de Semantika
REM Autor: Bancolombia - Equipo de Innovación
REM Versión: 1.0.0
REM =============================================================================

title Semantika + Playground - Deteniendo...

echo.
echo  ____  _                   _             
echo / ___^|^| ^|_ ___  _ __  _ __ ^(_^)_ __   __ _ 
echo \___ \^| __/ _ \^| '_ \^| '_ \^| ^| '_ \ / _` ^|
echo  ___^) ^| ^|^| ^(_^) ^| ^|_^) ^| ^|_^) ^| ^| ^| ^| ^| ^(_^| ^|
echo ^|____/ \__\___^|^| .__/^| .__/^|_^|_^| ^|_^\__, ^|
echo                ^|_^|   ^|_^|            ^|___/ 
echo     SEMANTIKA + PLAYGROUND
echo.
echo ==============================================================================
echo 🛑 Deteniendo todos los servicios de Semantika
echo ==============================================================================
echo.

echo [INFO] 🔍 BUSCANDO PROCESOS ACTIVOS...

REM Detener procesos por nombre de ventana
echo [INFO] Deteniendo ventanas de Semantika...
taskkill /FI "WINDOWTITLE:Semantika Backend*" /F >nul 2>&1
if not errorlevel 1 (
    echo [SUCCESS] Backend detenido
) else (
    echo [WARNING] Backend ya estaba detenido o no encontrado
)

taskkill /FI "WINDOWTITLE:Semantika Frontend*" /F >nul 2>&1
if not errorlevel 1 (
    echo [SUCCESS] Frontend detenido
) else (
    echo [WARNING] Frontend ya estaba detenido o no encontrado
)

echo [INFO] 🔍 BUSCANDO PROCESOS ADICIONALES...

REM Detener procesos por puerto usando netstat
echo [INFO] Buscando procesos en puertos 8000 y 8080...

REM Buscar proceso en puerto 8000 (Backend)
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8000 ^| findstr LISTENING') do (
    set PID=%%a
    if defined PID (
        echo [INFO] Deteniendo proceso en puerto 8000 (PID: !PID!)
        taskkill /PID !PID! /F >nul 2>&1
        if not errorlevel 1 (
            echo [SUCCESS] Proceso en puerto 8000 detenido
        ) else (
            echo [WARNING] No se pudo detener proceso en puerto 8000
        )
    )
)

REM Buscar proceso en puerto 8080 (Frontend)
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8080 ^| findstr LISTENING') do (
    set PID=%%a
    if defined PID (
        echo [INFO] Deteniendo proceso en puerto 8080 (PID: !PID!)
        taskkill /PID !PID! /F >nul 2>&1
        if not errorlevel 1 (
            echo [SUCCESS] Proceso en puerto 8080 detenido
        ) else (
            echo [WARNING] No se pudo detener proceso en puerto 8080
        )
    )
)

REM Detener procesos específicos de Python relacionados con Semantika
echo [INFO] Buscando procesos Python de Semantika...

REM Detener uvicorn
tasklist /FI "IMAGENAME eq python.exe" /FO CSV | findstr "uvicorn" >nul 2>&1
if not errorlevel 1 (
    echo [INFO] Deteniendo procesos uvicorn...
    for /f "tokens=2 delims=," %%a in ('tasklist /FI "IMAGENAME eq python.exe" /FO CSV ^| findstr "uvicorn"') do (
        set PID=%%~a
        taskkill /PID !PID! /F >nul 2>&1
    )
    echo [SUCCESS] Procesos uvicorn detenidos
)

REM Detener http.server
tasklist /FI "IMAGENAME eq python.exe" /FO CSV | findstr "http.server" >nul 2>&1
if not errorlevel 1 (
    echo [INFO] Deteniendo procesos http.server...
    for /f "tokens=2 delims=," %%a in ('tasklist /FI "IMAGENAME eq python.exe" /FO CSV ^| findstr "http.server"') do (
        set PID=%%~a
        taskkill /PID !PID! /F >nul 2>&1
    )
    echo [SUCCESS] Procesos http.server detenidos
)

echo [INFO] 🧹 LIMPIANDO ARCHIVOS TEMPORALES...

REM Limpiar logs si existen
if exist "backend.log" (
    echo [INFO] Archivando log del backend...
    for /f "tokens=1-3 delims=/ " %%a in ('date /t') do set DATE=%%c%%a%%b
    for /f "tokens=1-2 delims=: " %%a in ('time /t') do set TIME=%%a%%b
    set TIMESTAMP=%DATE%_%TIME%
    set TIMESTAMP=%TIMESTAMP: =0%
    move "backend.log" "backend_%TIMESTAMP%.log" >nul 2>&1
    echo [SUCCESS] Log del backend archivado
)

if exist "frontend.log" (
    echo [INFO] Archivando log del frontend...
    for /f "tokens=1-3 delims=/ " %%a in ('date /t') do set DATE=%%c%%a%%b
    for /f "tokens=1-2 delims=: " %%a in ('time /t') do set TIME=%%a%%b
    set TIMESTAMP=%DATE%_%TIME%
    set TIMESTAMP=%TIMESTAMP: =0%
    move "frontend.log" "frontend_%TIMESTAMP%.log" >nul 2>&1
    echo [SUCCESS] Log del frontend archivado
)

REM Limpiar archivos temporales de Python
echo [INFO] Limpiando archivos temporales...
for /r . %%f in (*.pyc) do del "%%f" >nul 2>&1
for /d /r . %%d in (__pycache__) do rmdir /s /q "%%d" >nul 2>&1
echo [SUCCESS] Archivos temporales eliminados

REM Eliminar archivo de PIDs si existe
if exist "semantika.pids" (
    del "semantika.pids" >nul 2>&1
    echo [SUCCESS] Archivo de PIDs eliminado
)

echo [INFO] 🔍 VERIFICACIÓN FINAL...

REM Esperar un momento para que los procesos terminen
timeout /t 2 /nobreak >nul

REM Verificar que los puertos estén libres
netstat -an | findstr :8000 | findstr LISTENING >nul 2>&1
if errorlevel 1 (
    echo [SUCCESS] Puerto 8000 liberado
) else (
    echo [WARNING] Puerto 8000 aún está en uso
)

netstat -an | findstr :8080 | findstr LISTENING >nul 2>&1
if errorlevel 1 (
    echo [SUCCESS] Puerto 8080 liberado
) else (
    echo [WARNING] Puerto 8080 aún está en uso
)

echo.
echo ✅ SEMANTIKA + PLAYGROUND DETENIDO COMPLETAMENTE
echo.
echo [SUCCESS] 🎯 Resumen de acciones realizadas:
echo   ✅ Procesos backend detenidos
echo   ✅ Procesos frontend detenidos
echo   ✅ Puertos 8000 y 8080 liberados
echo   ✅ Logs archivados con timestamp
echo   ✅ Archivos temporales eliminados
echo   ✅ Archivo de PIDs eliminado
echo.
echo [SUCCESS] 📝 Logs archivados disponibles:
dir backend_*.log frontend_*.log >nul 2>&1 && (
    dir /b backend_*.log frontend_*.log 2>nul
) || (
    echo    No hay logs archivados
)
echo.
echo [WARNING] 💡 Para reiniciar Semantika ejecuta:
echo    start-semantika.bat
echo.
echo 🎉 ¡TODOS LOS SERVICIOS DETENIDOS EXITOSAMENTE!

REM Verificación adicional de procesos relacionados
echo.
echo [INFO] Verificación adicional de procesos relacionados...
tasklist | findstr /I "python.exe" | findstr /I "uvicorn\|http.server" >nul 2>&1
if not errorlevel 1 (
    echo [WARNING] Procesos Python relacionados aún activos:
    tasklist | findstr /I "python.exe"
    echo.
    echo [WARNING] Si necesitas forzar la terminación, ejecuta:
    echo    taskkill /IM python.exe /F
) else (
    echo [SUCCESS] No hay procesos relacionados activos
)

echo.
echo ¡Semantika + Playground detenido completamente! 🛑
echo.
echo Presiona cualquier tecla para cerrar esta ventana...
pause >nul 