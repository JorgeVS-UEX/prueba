#!/bin/bash

# Script de verificación de la aplicación Agenda

echo "🔍 Verificando archivos principales..."
echo ""

# Verificar archivos
files=(
    "app.html"
    "service-worker.js"
    "manifest.json"
    "package.json"
)

for file in "${files[@]}"; do
    if [ -f "/home/jorge/Visual/GestorWeb/$file" ]; then
        echo "✅ $file - Encontrado"
    else
        echo "❌ $file - No encontrado"
    fi
done

echo ""
echo "📊 Estadísticas del archivo principal:"
wc -l /home/jorge/Visual/GestorWeb/app.html

echo ""
echo "🔎 Búsqueda de palabras clave IndexedDB..."
grep -c "IndexedDB\|indexedDB\|initIndexedDB" /home/jorge/Visual/GestorWeb/app.html || echo "Búsqueda completada"

echo ""
echo "📦 Búsqueda de referencias a PDF.js..."
grep -c "pdfjsLib\|pdf.worker" /home/jorge/Visual/GestorWeb/app.html || echo "Búsqueda completada"

echo ""
echo "✨ Verificación completada"
echo ""
echo "💡 Para iniciar el servidor:"
echo "   cd /home/jorge/Visual/GestorWeb"
echo "   chmod +x run-server.sh"
echo "   ./run-server.sh"
