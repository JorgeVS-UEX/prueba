# Definition of Done (DoD)

Una historia está **Done** cuando el incremento implementado satisface los criterios aplicables de esta lista y existe evidencia revisable. Si un criterio no aplica, el equipo deja constancia del motivo.

## Implementación y aceptación

- El comportamiento implementado corresponde a la historia aprobada y a sus reglas y restricciones.
- Todos los criterios de aceptación se han verificado; los resultados y defectos conocidos están registrados.
- Los casos de error, límites, concurrencia y reintentos aplicables se han probado, no solo el recorrido ideal.
- Los escenarios críticos de concurrencia aplicables (compra simultánea, doble escaneo QR, sincronización del aforo y atribución de comisiones) se han verificado con evidencia.
- Se ejecutaron pruebas de carga cuando el requisito de rendimiento o la constitución las hacen aplicables; el resultado y las condiciones de prueba están registrados.
- No quedan defectos bloqueantes abiertos para el alcance de la historia.

## Pruebas y calidad

- Se ejecutaron las pruebas automatizadas y manuales pertinentes y se conserva evidencia reproducible.
- Se comprobaron los requisitos no funcionales aplicables, incluidos seguridad, privacidad, accesibilidad, rendimiento y consistencia cuando correspondan.
- Los datos de prueba son ficticios o sintéticos; no se introdujeron datos personales, bancarios o de identificación reales.
- La historia mantiene trazabilidad entre objetivo, requisito, cambios y pruebas/evidencias.

## Integración y documentación

- El cambio está integrado mediante el flujo de revisión acordado por el equipo.
- Los commits y la pull request referencian el ID de historia (US) o tarea correspondiente, manteniendo la trazabilidad.
- El incremento integrado compila y se ejecuta en el entorno acordado, y no introduce regresiones conocidas.
- Se verificaron las interacciones y contratos con las dependencias afectadas.
- La documentación técnica, de usuario o de operación se actualizó cuando el cambio la afecta.
- Las instrucciones necesarias para instalar y ejecutar el incremento están actualizadas y se han seguido en el entorno acordado.

## Cierre

- La revisión por pares requerida por el proceso del proyecto se completó.
- El equipo registró cualquier limitación aceptada y su seguimiento; la aceptación de una limitación no cambia por sí sola el requisito ni la prioridad.

Done describe evidencia del incremento; no significa que se haya aprobado una línea base o un cambio de alcance.
