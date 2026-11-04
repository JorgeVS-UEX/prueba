# Definition of Ready (DoR)

Una historia está **Ready** cuando el equipo puede entenderla, estimarla y planificarla sin decisiones de producto pendientes que impidan empezar. Los criterios siguientes se aplican antes de comprometer una historia en una iteración.

## Identificación y trazabilidad

- Tiene un ID único y estable (`US-XXX`) y pertenece a una épica identificada (`EP-XXX`).
- Identifica al usuario o actor y expresa la necesidad y el resultado esperado.
- Está vinculada a uno o más objetivos vigentes de `specs/product/goals.md`; la relación es coherente con el alcance aprobado.

## Valor y alcance

- El valor para el usuario o el proyecto y la razón de prioridad están documentados.
- El alcance, los límites y los términos relevantes tienen una interpretación compartida.
- La historia describe un resultado comprensible e inspeccionable; si agrupa resultados independientes, se ha acordado su división o se ha documentado por qué se mantiene unida.

## Criterios y reglas

- Los criterios de aceptación describen resultados observables y verificables, incluidos los errores y casos límite relevantes.
- Las reglas de negocio y las restricciones aplicables están identificadas sin prescribir decisiones técnicas que correspondan al plan.
- Los requisitos no funcionales aplicables tienen una medida o método de verificación acordado; las cifras pendientes de decisión están explícitamente señaladas.

## Estimación y dependencias

- Tiene prioridad MoSCoW con justificación basada en valor, riesgo y dependencias.
- Tiene una estimación en horas-persona (h-p), con incertidumbre indicada y supuestos relevantes visibles.
- La estimación indica su responsable o fuente y la fecha/versión de referencia; si no se conoce, queda pendiente y la historia no se declara Ready para comprometerla.
- Las dependencias previas y los contratos compartidos están identificados; las dependencias externas tienen responsable o condición de resolución.
- El equipo dispone de información de capacidad para evaluar el compromiso de iteración; no se deduce capacidad a partir de la estimación.

## Preguntas y datos

- No quedan preguntas sin respuesta que impidan comprender, probar o estimar la historia.
- Las preguntas abiertas están registradas con su responsable por rol, condición o fecha de resolución e impacto; una pregunta que bloquee comprensión, prueba o estimación impide declarar la historia Ready.
- Los datos de ejemplo o prueba cumplen las restricciones de privacidad y usan exclusivamente datos sintéticos cuando así lo exige el proyecto.

La revisión de Ready es una condición para planificar, no una aprobación de implementación ni una garantía de que no surgirán dudas posteriores.
