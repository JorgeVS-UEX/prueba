#!/bin/bash

# Crystal Pro - Servidor Local para PWA
# Este script inicia un servidor que permite instalar la PWA

echo "🚀 Iniciando Crystal Pro Server..."
echo ""
echo "📋 Archivos detectados:"
ls -lh app.html manifest.json service-worker.js 2>/dev/null | awk '{print "   " $9 " (" $5 ")"}'
echo ""

# Detectar Puerto disponible
PORT=8000
while lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1; do
    PORT=$((PORT+1))
done

echo "✅ Usando puerto: $PORT"
echo ""
echo "📱 URLs de acceso:"
echo "   Local:      http://localhost:$PORT"
echo "   En red:     http://$(hostname -I | awk '{print $1}'):$PORT"
echo ""
echo "📲 Para instalar en móvil:"
echo "   1. Ve a: http://TU_IP:$PORT/app.html"
echo "   2. Presiona el botón 'Instalar'"
echo "   3. ¡Listo!"
echo ""
echo "🧪 Para probar PWA:"
echo "   http://localhost:$PORT/test-pwa.html"
echo ""
echo "⚠️  Presiona Ctrl+C para parar el servidor"
echo ""

# Iniciar servidor
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT --directory .
elif command -v python &> /dev/null; then
    python -m http.server $PORT --directory .
else
    echo "❌ Python no encontrado. Instala Python 3."
    exit 1
fi
