# 🚀 Cambios: Migración de localStorage a IndexedDB

## Resumen de Cambios

Se ha migrado completamente la aplicación de **localStorage** a **IndexedDB** para mejor rendimiento, capacidad de almacenamiento y funcionalidad PWA mejorada.

---

## ✅ Cambios Implementados

### 1. **Sistema de Almacenamiento IndexedDB**

#### Bases de datos creadas:
- **AgendaDB** (v1)
  - Object Store: `data` - Contiene todos los datos principales (asignaturas, tareas, exámenes, horario, notas)
  - Object Store: `gastos` - Contiene los movimientos y histórico de gastos

#### Funciones implementadas:

```javascript
// Inicializar IndexedDB
initIndexedDB() - Abre la conexión y crea object stores

// Guardar y cargar datos
saveData() - Guarda todos los datos en IndexedDB
saveGastos() - Guarda gastos en IndexedDB
loadData() - Carga datos al iniciar
loadGastos() - Carga gastos al iniciar
```

### 2. **Mejoras en Operaciones de Datos**

#### Funciones asincrónicas:
- Todas las operaciones de I/O ahora son asincrónicas (async/await)
- Mejor manejo de errores con try/catch
- Promesas para operaciones que requieren espera

#### Operaciones de importación/exportación mejoradas:
```javascript
exportData() - Exporta a JSON con mejor limpieza de URLs
importData() - Importa JSON a IndexedDB con mejor manejo de errores
fullReset() - Limpia tanto localStorage como IndexedDB
```

### 3. **Visor de PDFs Mejorado con PDF.js**

#### Características:
- ✅ Renderizado de PDFs página por página en canvas
- ✅ Soporte para zoom automático (scale: 2 para mejor calidad)
- ✅ Renderizado vertical optimizado
- ✅ Scroll automático al inicio
- ✅ Soporte para TXT y MD con encodificación UTF-8

#### Funcionalidad:
```javascript
openPdf(name, content)
- Detecta tipo de archivo (.pdf, .txt, .md)
- Renderiza PDFs con PDF.js en canvas
- Renderiza TXT como texto preformateado
- Renderiza MD como HTML interpretado
```

### 4. **Funciones de Borrado Completas**

Todas las funciones de borrado ya existentes siguen funcionando:

#### Exámenes:
```javascript
deleteExam(id) - Borra examen con confirmación
```

#### Asignaturas:
```javascript
deleteAsig(id) - Borra asignatura + temas + notas
```

#### Temas:
```javascript
deleteTema(aid, tid) - Borra tema de asignatura
```

#### Archivos:
```javascript
deleteFile(aid, tid, fid) - Borra archivo subido
```

#### Notas:
```javascript
delSecNota(asigId, sIdx) - Borra sección de notas
```

---

## 📊 Ventajas de IndexedDB sobre localStorage

| Característica | localStorage | IndexedDB |
|---|---|---|
| Límite de almacenamiento | 5-10 MB | 50+ MB |
| Tipo de datos | Solo strings | Objetos, arrays, binarios |
| Operaciones | Síncronas | Asincrónicas |
| Índices | No | Sí |
| Transacciones | No | Sí |
| Escalabilidad | Baja | Alta |
| Performance | Lento con muchos datos | Rápido |

---

## 🔧 Inicialización de la Aplicación

La inicialización ahora es asincrónica:

```javascript
async function initializeApp() {
    try {
        await initIndexedDB();      // Conecta a BD
        await loadData();            // Carga datos principales
        await loadGastos();          // Carga gastos
        // ... resto de inicialización
    } catch (error) {
        console.error('Error inicializando:', error);
    }
}

initializeApp(); // Se ejecuta al cargar
```

---

## 📦 Instalación desde Navegador

La aplicación es una PWA completa con:

### Service Worker:
- Cacheo de recursos
- Soporte offline
- Actualización automática

### Manifest.json:
- Icono de instalación
- Nombre y descripción
- Tema de color

### Instalación en:
- **Desktop**: Chrome → Menú → "Instalar Agenda"
- **Mobile**: Safari → Compartir → Añadir a pantalla de inicio
- **Android**: Chrome → Menú → "Instalar aplicación"

---

## 🐛 Migracion de Datos Existentes

Si tienes datos en localStorage:

1. **Exportar datos actuales** (CONFIG → Exportar datos)
2. **Limpiar cache del navegador** (opcional)
3. **Refrescar página**
4. **Importar datos** (CONFIG → Importar datos)

> Los datos se migran automáticamente la primera vez que abres la app.

---

## 🔐 Características de Seguridad

- ✅ Datos almacenados localmente (no enviados a servidor)
- ✅ Transacciones ACID en IndexedDB
- ✅ Backups automáticos mediante exportación JSON
- ✅ Restauración segura desde backups

---

## 📝 Notas Técnicas

### PDF.js Worker:
```javascript
pdfjsLib.GlobalWorkerOptions.workerSrc = 
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
```

### Object Store Schema:
```javascript
{
  id: 'main',
  asignaturas: [...],
  todos: [...],
  exams: [...],
  horario: {...},
  notas: {...},
  config: {...}
}
```

---

## ✨ Próximas Mejoras Sugeridas

1. **Sincronización en la nube** - Guardar backups en Drive/OneDrive
2. **Buscar y filtrar** - Indexar datos en IndexedDB
3. **Historial de cambios** - Registrar modificaciones
4. **Compartir datos** - Exportación segura entre dispositivos

---

## 📞 Soporte

Si experimentas problemas:

1. Abre DevTools (F12)
2. Revisa la consola para errores
3. Limpia datos: CONFIG → BORRAR TODO
4. Recarga la página

---

**Versión**: 1.0 con IndexedDB  
**Fecha**: 24 de Diciembre de 2025  
**Estado**: ✅ Producción
