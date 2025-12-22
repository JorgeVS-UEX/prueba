# 📱 INSTALACIÓN DE CRYSTAL PRO EN MÓVIL

## ✨ Lo Nuevo - PWA (Progressive Web App)

Ahora puedes instalar Crystal Pro como una **app nativa** en tu móvil:
- ✅ Se instala desde el navegador
- ✅ Funciona offline completamente
- ✅ Acceso directo en pantalla de inicio
- ✅ No ocupa mucho espacio
- ✅ Se actualiza automáticamente

---

## 📲 INSTALACIÓN EN iPhone

### Opción 1: Instalación por Safari (RECOMENDADO)

1. **Abre Safari en tu iPhone**
2. **Ve a:** `app.html` (o tu dominio donde esté alojado)
3. **Presiona el botón compartir** (cuadro con flecha)
4. **Selecciona "Añadir a pantalla de inicio"**
5. **Dale un nombre** (ej: "Crystal Pro")
6. **Presiona "Añadir"**

✅ **¡Listo!** La app aparecerá en tu pantalla de inicio

### Características en iPhone
- 📱 Se abre a pantalla completa (sin barra de Safari)
- 🔄 Se actualiza cuando hay cambios
- 💾 Guarda todo en la app (offline)
- 🎨 Tema oscuro por defecto

---

## 🤖 INSTALACIÓN EN Android

### Opción 1: Chrome/Edge (RECOMENDADO)

1. **Abre Chrome o Edge en tu Android**
2. **Ve a:** `app.html` (o tu dominio donde esté alojado)
3. **Presiona el menú** (⋮ tres puntos)
4. **Selecciona "Instalar app"** o "Instalar"
5. **Confirma con "Instalar"**

✅ **¡Listo!** Se instalará automáticamente

### Opción 2: Atajos (Samsung, Xiaomi, etc)

Si no ves la opción de instalar:
1. **Abre el navegador**
2. **Ve a:** `app.html`
3. **Presiona el menú** (⋮)
4. **Selecciona "Añadir a pantalla de inicio"**
5. **Dale un nombre**
6. **Presiona "Añadir"**

### Características en Android
- 📱 Se abre a pantalla completa
- 🔄 Se actualiza automáticamente
- 💾 Funciona sin internet (offline)
- 🎨 Respeta el tema del sistema

---

## 🖥️ INSTALACIÓN EN DESKTOP

### Windows

1. **Abre Edge o Chrome**
2. **Ve a:** `app.html`
3. **Presiona el botón instalar** (arriba a la derecha)
4. **Confirma**

✅ Aparecerá en inicio y en el menú de aplicaciones

### Mac

1. **Abre Safari o Chrome**
2. **Ve a:** `app.html`
3. **Menú → Archivo → Crear atajos de aplicación**
4. **Selecciona "Abrir en ventana de aplicación"**
5. **Presiona "Crear"**

### Linux

1. **Abre Chrome o Firefox**
2. **Ve a:** `app.html`
3. **Menú → Crear atajos → Crear atajos**
4. **Selecciona "Ventana de aplicación"**
5. **Presiona "Crear"**

---

## ⚙️ REQUISITOS DEL SERVIDOR

Para que funcione la instalación, la app debe estar servida desde:

### ✅ HTTPS (Obligatorio para PWA)

```bash
# Si usas un servidor local:
python -m http.server 8000

# Si usas Apache:
Asegúrate de que el .htaccess esté configurado
```

### Archivos Necesarios

```
/home/jorge/Visual/GestorWeb/
├── app.html           ✅ Archivo principal
├── manifest.json      ✅ Configuración PWA
├── service-worker.js  ✅ Caché offline
├── browserconfig.xml  ✅ Windows tiles
└── .htaccess         ✅ Servidor Apache
```

---

## 🔄 FUNCIONES OFFLINE

Una vez instalada, la app:

- ✅ **Funciona sin internet**
- ✅ **Guarda todos los datos localmente**
- ✅ **Se actualiza cuando vuelve la conexión**
- ✅ **No consume datos móviles** (después de instalar)

### Datos que se guardan:
- 📚 Asignaturas y temas
- 📊 Notas
- 💰 Gastos
- 📅 Horario
- ✅ Tareas

---

## 🎨 PERSONALIZACIÓN

### Cambiar el tema
- ⚙️ Ve a **AJUSTES**
- 🌙 Selecciona **Modo Oscuro** o **Claro**
- ✅ Se aplica inmediatamente

### Cambiar icono (si tu teléfono permite)
1. **Toca y mantén la app**
2. **Selecciona "Editar"**
3. **Cambia el icono** (puedes elegir emoji)

---

## 🐛 TROUBLESHOOTING

### No aparece el botón "Instalar"

**Causa:** El navegador no detecta el manifest.json

**Solución:**
1. Abre la consola (F12)
2. Ve a **Application → Manifest**
3. Verifica que dice `manifest.json OK`
4. Si hay error, asegúrate de que el archivo existe

### La app se abre lentamente

**Causa:** Primera carga del service worker

**Solución:**
1. Primera vez es normal (instala el caché)
2. Después será más rápido
3. Usa el teléfono sin internet para probar

### Perdí los datos

**Solución:**
1. ⚙️ Ve a **AJUSTES**
2. Presiona **"Respaldar Datos"**
3. Esto descarga un JSON
4. Para restaurar: **Restaurar desde archivo**

---

## 📊 ESTADÍSTICAS PWA

### Tamaño
- app.html: ~150 KB
- Caché: ~200 KB
- **Total instalado: ~350 KB** ✅

### Rendimiento
- Tiempo de carga (1ª): ~2s
- Tiempo de carga (siguientes): ~0.5s
- Offline: instantáneo

### Actualizaciones
- Se comprueban automáticamente
- Se instalan sin intervención
- No interrumpen el uso

---

## 🔐 PRIVACIDAD Y SEGURIDAD

- ✅ **Todos los datos se guardan localmente** (en tu teléfono)
- ✅ **No se envía nada a servidores** (salvo sincronización opcional)
- ✅ **HTTPS obligatorio** para conexiones seguras
- ✅ **Sin publicidad**
- ✅ **Sin trackers**

---

## 🚀 PRÓXIMAS CARACTERÍSTICAS

- 🔜 Sincronización entre dispositivos
- 🔜 Notificaciones de fechas importantes
- 🔜 Compartir asignaturas con compañeros
- 🔜 Integración con calendario

---

## 📞 SOPORTE

Si tienes problemas:

1. **Abre la consola** (F12)
2. **Copia los errores en rojo**
3. **Intenta actualizar** (Ctrl+Shift+R en desktop)
4. **En móvil:** Fuerza parada de la app y abre de nuevo

---

## ✅ CHECKLIST DE INSTALACIÓN

- [ ] Abre app.html en tu navegador
- [ ] Ves el botón "Instalar" (o el menú)
- [ ] Presionas "Instalar"
- [ ] Confirmas la instalación
- [ ] La app aparece en pantalla de inicio
- [ ] Abres la app desde el icono
- [ ] Cierra wifi/datos
- [ ] La app sigue funcionando (offline)
- [ ] ✅ ¡COMPLETADO!

---

**Versión**: 2.2 PWA
**Última actualización**: 22 de Diciembre de 2025
**Estado**: ✅ Listo para instalar
