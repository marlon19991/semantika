# 🚀 Semantika - Inicio Rápido

## **Un Solo Comando Para Todo** ⚡

Para iniciar **Semantika** con el **Sistema Multi-Agente Inteligente** completo:

```bash
./scripts/start.sh
```

¡Y eso es todo! 🎉

## ✅ **Lo Que Hace Automáticamente**

El script `./scripts/start.sh` realiza toda la configuración por ti:

1. **🔍 Verifica dependencias** (Docker, Python)
2. **🐳 Inicia PostgreSQL + Redis** (Docker Compose)
3. **🐍 Configura entorno Python** (virtual environment)
4. **📦 Instala dependencias** (FastAPI, OpenAI, etc.)
5. **📊 Inicializa datos** (componentes Bancolombia)
6. **🧠 Inicia el Sistema Multi-Agente** (puerto 8000)
7. **🌐 Abre el frontend** (en tu navegador)

## 🎯 **URLs Importantes**

Una vez iniciado, tendrás acceso a:

- **🌐 Frontend**: `file://[tu-ruta]/frontend/ui/index.html`
- **🤖 API Inteligente**: `http://localhost:8000`
- **📚 Documentación**: `http://localhost:8000/docs`
- **🗄️ Admin BD**: `http://localhost:8080`
- **💊 Health Check**: `http://localhost:8000/health`

## 🤖 **Probando el Sistema Inteligente**

### **En el Frontend:**
1. Abre el frontend
2. Escribe: `"botón azul que diga Confirmar"`
3. Haz clic en **🤖 IA Inteligente**
4. ¡Ve el código generado automáticamente!

### **Desde la Terminal:**
```bash
# Prueba rápida
curl -X POST "http://localhost:8000/ai/smart-generate" \
  -H "Content-Type: application/json" \
  -d '{"query": "botón rojo que diga Eliminar"}'

# Pruebas completas
./test_smart_ai.sh
```

## 🛑 **Para Detener Todo**

```bash
./scripts/stop.sh
```

## 💡 **Ejemplos de Uso**

El sistema entiende lenguaje natural y genera código exacto:

```bash
"botón azul que diga Confirmar"
→ <bc-button appearance="primary">Confirmar</bc-button>

"input de email requerido"
→ <bc-input type="email" required="true"></bc-input>

"formulario con nombre y email"
→ Formulario completo con campos y botones

"modal para eliminar usuario"
→ Modal estructurado con confirmación
```

## 🔧 **Configuración (Opcional)**

### **API Key de OpenAI**
Si quieres toda la funcionalidad, configura tu API key:

```bash
# Edita el archivo
nano services/llm-service/.env

# Agrega tu clave
OPENAI_API_KEY=sk-tu-clave-aqui
```

### **Ver Logs**
```bash
# Logs del servicio IA
tail -f semantika-llm.log

# Logs de Docker
docker-compose -f infra/docker-compose.yml logs -f
```

## 🏆 **¡Listo!**

Con un solo comando tienes un **sistema multi-agente inteligente** que puede generar cualquier componente del Design System de Bancolombia desde lenguaje natural.

**¡El futuro del desarrollo frontend está aquí!** 🚀✨ 