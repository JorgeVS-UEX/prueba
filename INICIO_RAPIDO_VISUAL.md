# 📱 GUÍA VISUAL - INSTALACIÓN EN MÓVIL

## ⚡ COMIENZA AQUÍ (5 MINUTOS)

### Paso 1: Inicia el Servidor

Abre una terminal y ejecuta:

```bash
cd /home/jorge/Visual/GestorWeb
python3 -m http.server 8000
```

Deberías ver:
```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

✅ **¡El servidor está corriendo!**

---

### Paso 2: Abre en el Navegador

#### 📖 En Desktop
Abre tu navegador y ve a:
```
http://localhost:8000/app.html
```

#### 📱 En Móvil (en la misma red)
1. Abre navegador en tu móvil
2. Ve a:
```
http://TU_IP:8000/app.html
```

**¿Cuál es tu IP?** En la terminal verás algo como:
```
http://192.168.1.100:8000
```

---

### Paso 3: Instala la App

#### 🍎 iPhone (Safari)

1. Abre Safari
2. Presiona el botón **Compartir** (cuadro con flecha ⬆️)
3. Busca **"Añadir a pantalla de inicio"**
4. Presiona **"Añadir"**

```
Safari → ⬆️ Compartir → Añadir a pantalla de inicio → Añadir
```

✅ La app aparecerá en tu home

#### 🤖 Android (Chrome)

1. Abre Chrome
2. Presiona el **Menú** (⋮ tres puntos)
3. Selecciona **"Instalar app"**
4. Confirma **"Instalar"**

```
Chrome → ⋮ Menú → Instalar app → Instalar
```

✅ Se instalará automáticamente

#### 💻 Windows/Mac (Chrome/Edge)

1. Abre Chrome o Edge
2. Presiona el **Botón de instalar** (arriba a la derecha, si aparece)
3. Confirma

```
Chrome → 📥 Instalar → Confirmar
```

✅ Aparecerá en Inicio/Aplicaciones

---

## 🧪 VERIFICAR QUE FUNCIONA

Abre en tu navegador:
```
http://localhost:8000/test-pwa.html
```

Deberías ver algo como esto:

```
🧪 Test PWA - Crystal Pro

✅ Service Worker Support
   ✅ Service Worker soportado

✅ LocalStorage
   ✅ LocalStorage funciona

✅ manifest.json
   ✅ Manifest encontrado

✅ Service Worker Registrado
   ✅ Service Worker registrado y activo

✅ Protocolo de Seguridad
   ✅ localhost (PWA compatible)

✅ Instalabilidad
   ✅ App lista para instalar

6/6 tests pasados
✅ PWA completamente configurado
```

Si ves esto ✅ **¡TODO FUNCIONA!**

---

## 🎮 PRUEBA LA APP

### Primeros Pasos

1. **Navega por secciones**
   - Presiona los botones de abajo
   - INICIO → ASIGNATURAS → NOTAS → GASTOS → HORARIO → AJUSTES

2. **Crea tu primera asignatura**
   - 📚 ASIGNATURAS
   - Escribe un nombre (ej: "Matemáticas")
   - Presiona "Crear"

3. **Añade un tema**
   - En la asignatura, escribe el nombre del tema
   - Presiona "+ Añadir Tema"

4. **Prueba la consola**
   - Abre: F12 (Consola)
   - Deberías ver logs como:
   ```
   ✓ addAsig() called
   ✓ Nueva asignatura: {id: 170..., name: "...", temas: []}
   ```

---

## 📱 PROBAR OFFLINE

El verdadero poder de PWA es que funciona **sin internet**.

### Prueba

1. **Instala la app** (ver pasos arriba)
2. **Abre la app instalada** desde tu home
3. **Desactiva wifi/datos**
4. **¡La app sigue funcionando!**

```
✅ Puedes crear asignaturas sin internet
✅ Puedes ver tus datos
✅ Cuando vuelve conexión, se sincroniza
```

---

## 🎨 PERSONALIZACIÓN

### Cambiar Tema

**En la app:**
1. ⚙️ AJUSTES
2. Selecciona: **Modo Oscuro** o **Modo Claro**
3. ✅ Se aplica inmediatamente

### Cambiar Icono (según teléfono)

**iPhone:**
1. Toca y mantén presionado el icono
2. Selecciona "Editar"
3. Cambia el icono (puedes elegir emoji)

**Android:**
1. Mantén presionado el icono
2. Selecciona "Editar icono"
3. Elige emoji o imagen

---

## 💾 RESPALDAR DATOS

Si quieres guardar tus datos:

1. ⚙️ AJUSTES
2. Presiona **"Respaldar Datos"**
3. Se descarga un archivo `crystal-pro-backup.json`
4. Guárdalo en un lugar seguro

**Para restaurar:**
1. ⚙️ AJUSTES
2. Presiona **"Restaurar desde archivo"**
3. Selecciona tu archivo de backup
4. ✅ Tus datos se restauran

---

## 🌐 SI QUIERES UN DOMINIO REAL

Si tienes un dominio (ej: miapp.com):

1. **Sube los archivos** via FTP o SSH
2. **Asegúrate de HTTPS** (obligatorio para PWA)
3. **Accede a:** `https://miapp.com/app.html`
4. **Comparte el link** con otros usuarios
5. **Ellos podrán instalar directamente**

---

## 🐛 SI ALGO FALLA

### "No veo el botón instalar"

1. Abre consola (F12)
2. Ve a pestaña **Application**
3. Busca **Manifest** en el menú izquierdo
4. Si dice ❌ error: intenta actualizar (Ctrl+Shift+R)

### "La app se abre lentamente"

- Primera vez: es normal (instalando caché)
- Siguiente veces: debe abrir instantáneamente
- Si sigue lento: limpia caché del navegador

### "No funciona sin internet"

1. Abre consola (F12)
2. Ve a **Application → Service Workers**
3. Deberías ver: `service-worker.js (activated and running)`
4. Si no está: actualiza la página

---

## 📊 INFORMACIÓN TÉCNICA

### Archivos en tu dispositivo

```
~350 KB de tamaño total
├── app.html (150 KB)
├── Cache (200 KB)
└── Índices
```

### Actualizaciones

- La app **se actualiza automáticamente**
- **No tienes que hacer nada**
- Los cambios se descargan en segundo plano

### Privacidad

```
✅ Tus datos están EN TU DISPOSITIVO
✅ Nada se envía a servidores
✅ Puedes borrar todo cuando quieras
✅ Sin anuncios ni trackers
```

---

## ✅ CHECKLIST COMPLETO

- [ ] Inicia servidor: `python3 -m http.server 8000`
- [ ] Abre: `http://localhost:8000/app.html`
- [ ] Ves la app en el navegador
- [ ] Buscas el botón "Instalar"
- [ ] Presionas "Instalar"
- [ ] Confirmas la instalación
- [ ] La app aparece en tu home/pantalla de inicio
- [ ] Abres la app desde el icono
- [ ] Creas una asignatura de prueba
- [ ] Desactivas wifi/datos
- [ ] La app sigue funcionando 🎉
- [ ] ✅ ¡COMPLETADO!

---

## 🚀 SIGUIENTES PASOS

```
HOY:
  ✅ Instala la app en tu móvil

MAÑANA:
  ✅ Crea tus asignaturas reales
  ✅ Añade temas y PDFs

SEMANA:
  ✅ Planifica tu horario
  ✅ Controla tus gastos
  ✅ Organiza tus tareas
```

---

## 📚 MÁS INFORMACIÓN

Si quieres saber más:

- 📖 **README.md** - Guía general
- 📋 **PWA_SETUP.md** - Guía técnica (para desarrolladores)
- 📱 **INSTALACION_MOVIL.md** - Instrucciones detalladas por dispositivo

---

## 🎉 ¡LISTO!

```bash
# Ejecuta esto ahora:
cd /home/jorge/Visual/GestorWeb
python3 -m http.server 8000

# Luego abre:
http://localhost:8000/app.html

# ¡Y instala! 📱
```

---

**Versión**: 2.2 PWA
**Última actualización**: 22 de Diciembre de 2025

¡Disfruta tu app! 🚀
