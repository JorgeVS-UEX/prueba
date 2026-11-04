# Revisión de planificación inicial — NightShift Software

## 1. Metadatos de ejecución

| Campo | Valor |
|---|---|
| Proyecto | NightShift Software |
| Modo | READINESS |
| Fecha de revisión | 2026-10-14 |
| Baseline declarada en las especificaciones | `requirements-v1-reviewed`; su aprobación humana no está acreditada en las fuentes revisadas |
| Alcance revisado | Alcance descrito por S-01–S-04 en `specs/product/goals.md`, asociado a EP-001, EP-002 y EP-003; EP-004 figura como diferida, con ratificación formal pendiente |
| Versiones de fuentes | Constitución 0.0.2 (pendiente de ratificación del equipo; 0.0.1 es la última versión ratificada); las demás fuentes no declaran número de versión en el material revisado |
| Informe de revisión de requisitos | No se identificó un informe nuevo en las rutas de revisión inspeccionadas. No se usó otro informe |
| Workbook indicado | `docs/organization/Planificacion_NightShift_Sprint1.xlsx`; su existencia se toma del dato proporcionado y de la referencia documental. No se abrió, leyó, analizó ni verificó su contenido |
| Commit | No proporcionado |
| Informe previo / RECHECK | No aplica; primer informe identificado |
| Modelo / herramienta | Modelo: no disponible; herramienta/modelo exactos: no disponibles (en el entorno solo se expusieron herramientas de lectura y edición de archivos) |

## 2. Resumen

**Resultado consultivo: NOT_ASSESSABLE.**

No puede emitirse una valoración global sustentada de la viabilidad de la planificación a nivel de workbook porque, por instrucción, no se accedió a su contenido. Se distingue expresamente entre **la existencia declarada del archivo** y **la ausencia de verificación de sus fórmulas, asignaciones, iteraciones, tarifas y resultados**. Además, las fuentes no confirman la aprobación de la baseline ni la ratificación del alcance diferido de EP-004.

**Hallazgos bloqueantes: 6.** Incluyen: workbook no verificable bajo el límite de acceso; baseline y disposición de requisitos sin evidencia de ratificación; alcance de EP-004 pendiente de ratificación del PO; horizonte no definido; capacidad para iteraciones futuras y asignaciones no confirmadas; y prerrequisitos abiertos en historias del alcance que afectan a su madurez y secuenciación. Los hallazgos se detallan en la sección 4.

La aritmética de catálogo permite sostener **82 h-p** en total, de las que **17 h-p corresponden a EP-004 diferida**; el alcance S-01–S-04 sin EP-004 suma **65 h-p**. La capacidad publicada de **35 h** corresponde únicamente a Sprint 1 y no es capacidad confirmada de iteraciones futuras. No hay horizonte, asignaciones por persona ni tarifas. Por tanto, no se concluye viabilidad temporal, sobreasignación ni aprobación de un plan.

## 3. Inventario de evidencia y matriz de compatibilidad

| Dimensión | Estado | Evidencia revisada | Límite de la revisión |
|---|---|---|---|
| Objetivos, alcance y exclusiones | Parcialmente explícitos | `specs/product/goals.md`: G-01–G-04; S-01–S-04; EP-004 queda diferida hasta aprobación de ampliación | La decisión DEC-001 indica selección del solicitante, pero la ratificación formal del PO está pendiente |
| Baseline y disposición humana | Incompletos | Las cuatro especificaciones declaran `requirements-v1-reviewed`; `docs/organization/decisions.md` dice que no se localizó evidencia de aprobación de esa baseline | La etiqueta de baseline no prueba aprobación, fecha, autoridad ni contenido exacto. No se identificó informe nuevo de revisión de requisitos |
| Constitución y gobierno | Parcial | `.specify/memory/constitution.md`: v0.0.2, última modificación 2026-10-14, pendiente de ratificación; v0.0.1 es la última ratificada | La revisión no sustituye la ratificación ni evalúa artefactos excluidos |
| Estimaciones y prioridades | Parcialmente explícitas | Estimaciones en h-p y prioridades Must/Should/Could en las historias EP-001 a EP-004; totales corroborados con `capacity.md` | No se verificó contenido alguno del workbook ni el mapeo de historias a iteraciones allí consignado |
| Madurez / prerrequisitos | Incompleta para algunas historias | Especificaciones explicitan dependencias y preguntas abiertas, incluidas configuración de aforo, autorización RRPP, zona horaria y regla del instante límite | No se consultaron DoR/DoD por la restricción de fuentes; no se declara una evaluación formal contra esas definiciones |
| Capacidad | Parcial y limitada a Sprint 1 | `docs/organization/capacity.md`: 35 h efectivas publicadas para Sprint 1; confirmación individual, ausencias y equivalencia Sprint 1 = IT-001 pendientes | No se confirma capacidad de IT-002 o IT-003 ni se atribuye capacidad a una persona para historias |
| Horizonte y duración | No explícitos | `goals.md` deja horizonte/fecha objetivo pendiente. La duración de Sprint 1 se registra como una semana según la constitución; la longitud del sprint del curso es una semana | Un sprint de una semana no determina horizonte total ni fechas |
| Dependencias | Parcialmente explícitas | Predecesores y dependencias funcionales indicados en las especificaciones | Sin revisar el workbook no se validan asignaciones, secuencia calendarizada ni dependencias representadas allí |
| Recursos y habilidades | Parcial | `capacity.md` declara un único integrante en cada uno de los roles Developer, Tech Lead, DevOps/QA, Scrum Master y Product Owner | No hay asignaciones por persona; los roles publicados no certifican todas las competencias ni implican que solo esas personas puedan contribuir |
| Coste | No evaluable | `goals.md` indica que presupuesto, moneda y tarifas están pendientes; `capacity.md` confirma que no constan tarifas | No se calcula importe monetario ni coste por iteración |
| Planificación del workbook | No verificable por límite de acceso | Se conoce la ruta y la existencia declarada de `Planificacion_NightShift_Sprint1.xlsx` | No se abrió ni se comprobaron fórmulas, datos, tarifas, asignaciones, resultados, consistencia o integridad del archivo |
| Fuentes | Identificadas | Constitución, goals, las cuatro `specs/EP-*/spec.md`, capacidad y decisiones | No se inspeccionaron PDFs, workbook, código, planes, tareas ni otras fuentes no autorizadas |

## 4. Hallazgos

### IPR-v01-001 — Contenido del workbook no verificable

- **Categoría:** Evidencia de planificación / viabilidad
- **Severidad:** CRITICAL
- **Bloqueante:** SÍ
- **Fuente/ID:** Ruta declarada `docs/organization/Planificacion_NightShift_Sprint1.xlsx`; referencia a ese artefacto en la constitución
- **Evidencia observada:** El archivo se declara existente, pero se excluyó expresamente su acceso. No hay evidencia revisada sobre fórmulas, distribución de historias, asignaciones, fechas, tarifas ni resultados.
- **Impacto:** No es posible revisar la hipótesis de planificación ni establecer su viabilidad a nivel de workbook. La existencia del archivo no demuestra la corrección ni validez de su contenido.
- **Acción recomendada:** Solicitar al equipo una exportación o evidencia de planificación expresamente autorizada para revisar, o que el equipo valide los elementos pertinentes por su proceso humano.
- **Pregunta/decisión requerida:** ¿Qué evidencia no restringida autoriza el equipo para comprobar asignaciones, fórmulas, iteraciones y resultados?
- **Rol propietario sugerido:** Equipo de planificación / Scrum Master.

### IPR-v01-002 — Aprobación de baseline y disposición de requisitos sin verificar

- **Categoría:** Baseline / gobernanza
- **Severidad:** MAJOR
- **Bloqueante:** SÍ
- **Fuente/ID:** EP-001–EP-004 (`Baseline: requirements-v1-reviewed`); `docs/organization/decisions.md` (entrada pendiente sobre `requirements-v1-reviewed`)
- **Evidencia observada:** Las especificaciones comparten la etiqueta de baseline. El registro de decisiones dice que no se localizó informe o acta que confirme quién la aprobó, cuándo o qué archivos incluye. No se identificó un informe nuevo de revisión de requisitos en las rutas de revisión inspeccionadas.
- **Impacto:** La referencia común no basta para establecer una baseline humana aprobada o la disposición de requisitos necesaria para fundamentar el ejercicio de planificación.
- **Acción recomendada:** Localizar y registrar la evidencia de revisión/disposición humana, incluyendo la versión exacta de alcance y especificaciones.
- **Pregunta/decisión requerida:** ¿Qué versión y conjunto de historias fueron revisados y aceptados por la autoridad humana correspondiente, y dónde está registrada esa disposición?
- **Rol propietario sugerido:** Product Owner / equipo.

### IPR-v01-003 — Ratificación formal de la exclusión temporal de EP-004 pendiente

- **Categoría:** Alcance / decisión
- **Severidad:** MAJOR
- **Bloqueante:** SÍ
- **Fuente/ID:** `DEC-001`; `goals.md` (alcance y horizonte); `specs/EP-004-Reservas-Zonas-VIP/spec.md`
- **Evidencia observada:** El solicitante indicó diferir EP-004 el 2026-10-14; el registro declara pendiente la ratificación del PO. La especificación marca las historias de EP-004 como diferidas y fuera de la baseline actual.
- **Impacto:** La intención de alcance está documentada, pero su autoridad formal no está acreditada. Esto afecta la confirmación humana del conjunto exacto que debe entrar en la hipótesis.
- **Acción recomendada:** Obtener y registrar la confirmación del PO sobre el alcance actual, sin inferir aprobación a partir de la solicitud.
- **Pregunta/decisión requerida:** ¿Ratifica el PO mantener EP-004 fuera del alcance S-01–S-04 hasta aprobar una ampliación?
- **Rol propietario sugerido:** Product Owner.

### IPR-v01-004 — Horizonte y objetivo temporal no definidos

- **Categoría:** Horizonte / duración
- **Severidad:** MAJOR
- **Bloqueante:** SÍ
- **Fuente/ID:** `specs/product/goals.md` (Horizonte y presupuesto)
- **Evidencia observada:** El horizonte o fecha objetivo aparece pendiente de confirmación. El material distingue h-p de duración de calendario.
- **Impacto:** No puede evaluarse si el alcance estimado cabe en el horizonte ni relacionarse una fecha de entrega con las iteraciones. La duración semanal del sprint no aporta por sí misma un horizonte.
- **Acción recomendada:** Confirmar el horizonte del ejercicio de planificación y su unidad/fechas antes de valorar viabilidad temporal.
- **Pregunta/decisión requerida:** ¿Cuál es el horizonte de entrega que debe usarse en la hipótesis, y quién lo confirma?
- **Rol propietario sugerido:** Product Owner / cliente / Scrum Master.

### IPR-v01-005 — Capacidad de iteraciones futuras y asignaciones individuales no confirmadas

- **Categoría:** Capacidad / recursos
- **Severidad:** MAJOR
- **Bloqueante:** SÍ
- **Fuente/ID:** `docs/organization/capacity.md` (capacidad individual y por iteración)
- **Evidencia observada:** Se publican 35 h efectivas para Sprint 1, sujetas a validación individual; las ausencias están pendientes; la correspondencia Sprint 1 = IT-001 no está confirmada; no hay capacidad para IT-002/IT-003 ni asignaciones por persona o rol.
- **Impacto:** No puede comprobarse disponibilidad para la duración total, la carga por persona o habilidad, ni la factibilidad de las iteraciones futuras. Los roles con capacidad individual publicada —Developer 8 h; Tech Lead 7 h; DevOps/QA 7 h; Scrum Master 6,5 h; Product Owner 6,5 h— no tienen trabajo asignado en la evidencia revisada.
- **Acción recomendada:** Confirmar disponibilidad, ausencias y deducciones por iteración, la equivalencia Sprint 1/IT-001 y las asignaciones de trabajo antes de que el equipo valore límites individuales.
- **Pregunta/decisión requerida:** ¿Qué capacidad confirmada y qué asignaciones por integrante/rol aplican a cada iteración del horizonte acordado?
- **Rol propietario sugerido:** Cada integrante / Scrum Master / equipo.

### IPR-v01-006 — Prerrequisitos y preguntas abiertas en historias Must del alcance

- **Categoría:** Madurez de requisitos / dependencias
- **Severidad:** MAJOR
- **Bloqueante:** SÍ
- **Fuente/ID:** EP-001: US-002; EP-003: US-010, US-012 y US-013
- **Evidencia observada:** US-002 requiere fuente autorizada y responsable para capacidad máxima y aforo inicial; US-010 deja por confirmar autenticación/autorización RRPP; US-012/US-013 requieren zona horaria del evento y decisión inclusiva/exclusiva del límite horario. US-013 también indica que la historia no está lista para planificar hasta que se registre esa decisión.
- **Impacto:** Estos elementos pueden bloquear o alterar la preparación y secuencia de historias Must; su efecto sobre la hipótesis no se verifica mediante una asignación no disponible.
- **Acción recomendada:** Resolver y registrar los prerrequisitos y decisiones identificados antes de considerar esas historias listas para un compromiso temporal.
- **Pregunta/decisión requerida:** ¿Quién proporciona y aprueba la configuración de aforo, el contrato de autorización RRPP, la zona horaria y la regla de borde temporal, y en qué momento se validarán?
- **Rol propietario sugerido:** Product Owner / Administración / Tech Lead.

## 5. Observaciones de aritmética y capacidad/recursos

### Estimaciones de catálogo y alcance

Las sumas usan las estimaciones expresas por historia, en **horas-persona (h-p)**. No representan duración de calendario.

| Conjunto | Cálculo de esfuerzo estimado | Total |
|---|---:|---:|
| EP-001 | US-001 6 + US-002 5 + US-003 3 + US-004 4 + US-005 6 | 24 h-p |
| EP-002 | US-006 4 + US-007 7 + US-008 5 + US-009 3 | 19 h-p |
| EP-003 | US-010 5 + US-011 4 + US-012 6 + US-013 7 | 22 h-p |
| Alcance S-01–S-04, EP-001 a EP-003 | 24 + 19 + 22 | **65 h-p** |
| EP-004 diferida | US-014 6 + US-015 4 + US-016 7 | **17 h-p** |
| Catálogo completo, incluida EP-004 | 65 + 17 | **82 h-p** |

Los totales por prioridad que apoyan esas sumas son: alcance sin EP-004, Must 43 h-p, Should 13 h-p y Could 9 h-p; EP-004 diferida, Should 6 h-p y Could 11 h-p. Para todo el catálogo: Must 43, Should 19 y Could 20 h-p. Estas sumas no confirman qué se planificó en el workbook.

### Capacidad publicada y comparación

`capacity.md` registra nominales por persona de 10 h, total 50 h. La aritmética publicada es:

`50 h nominales − 8,5 h reuniones − 4 h gestión/coordinación − 2,5 h imprevistos = 35 h efectivas publicadas para Sprint 1`.

También suman 35 h las cifras efectivas individuales publicadas (7 + 6,5 + 8 + 6,5 + 7). Las ausencias figuran pendientes y no se tratan como cero. La deducción de 0,5 h de imprevistos por persona aparece sin fundamento confirmado. Por ello, 35 h es un dato publicado condicionado, no una disponibilidad individual confirmada ni un compromiso.

`capacity.md` conserva una agrupación histórica de IT-002 de **40 h-p**, compuesta por US-004, US-007, US-008, US-010, US-012, US-013 y US-014; incluye **6 h-p** de US-014, diferida, y registra 34 h-p sin ella. Esto no establece una sobreasignación frente a las 35 h porque:

1. Las 35 h están registradas para Sprint 1, no para IT-002; la equivalencia Sprint 1 = IT-001 sigue pendiente.
2. No existe capacidad confirmada para IT-002 ni asignación individual de esas historias.
3. El conjunto histórico de 40 h-p incluye US-014 de EP-004, cuya inclusión en el alcance actual no está ratificada y que se declara diferida.
4. Una comparación de equipo solo informa de compatibilidad agregada bajo capacidad y asignación confirmadas; no sustituye la comprobación de horas por persona/rol.

En consecuencia, **no se afirma que IT-002 esté sobreasignada ni que sea viable**. Tampoco se compara el total de 65 h-p con capacidad de una sola semana para inferir duración.

## 6. Dependencias y capacidades

- **Dependencias funcionales de compra/puerta:** US-006 proporciona el evento para US-007; US-007 emite el QR consumido por US-001; US-001 y US-003 alimentan el aforo de US-002. US-004 depende de US-001/US-002 y US-005 consume los registros de US-001.
- **Dependencias RRPP/lista:** US-010 proporciona el enlace/lista utilizado por US-012; US-012 precede a US-013, que además requiere el flujo de escaneo de US-001. US-011 depende de la atribución de US-010 y de validación de puerta US-001. US-007 conserva atribución solo si se inicia desde un enlace RRPP válido.
- **Dependencias externas o de configuración:** fuente autorizada de aforo y aforo inicial para US-002; perfil/rol RRPP y autenticación/autorización para US-010; catálogo, perfiles y datos de prueba sintéticos; zona horaria, condiciones del evento y regla de borde temporal para US-012/US-013. La evidencia no acredita que esas entradas externas estén disponibles.
- **EP-004 diferida:** US-014 precede a US-015 y US-016; US-016 también requiere US-015. Estas dependencias no justifican incorporarlas al alcance actual.
- **Ciclos:** no se identifica un ciclo en las dependencias explícitas de las especificaciones consultadas. Esto no certifica la secuencia o el grafo que pudiera constar en el workbook no inspeccionado.
- **Secuenciación a reconciliar:** `capacity.md` señala que la agrupación histórica coloca US-001 antes de US-007, aunque la dependencia funcional de US-001 declara que consume el contrato de QR producido por US-007. No se infiere una reasignación o un calendario; el equipo debe reconciliar el orden antes de confirmar iteraciones.
- **Capacidad por habilidad:** los límites publicados por rol y la falta de asignaciones impiden evaluar cuellos de botella concretos. No se presupone que otras personas puedan cubrir tareas de Developer, Tech Lead, DevOps/QA, Scrum Master o Product Owner.

## 7. Resultado de coste

**Coste monetario: no evaluable.** No constan tarifa por rol/integrante, moneda ni presupuesto aprobado. Las 65 h-p del alcance actual y las 82 h-p del catálogo completo son estimaciones de esfuerzo, no importes monetarios ni duración. No se calcula coste ni se atribuye una tarifa.

## 8. Preguntas y siguientes acciones sugeridas

| Acción/pregunta | Rol sugerido | Disparador de validación | Bloqueante |
|---|---|---|---|
| Aportar evidencia de planificación revisable y autorizada, o confirmar qué evidencia alternativa se usará; no basta la existencia del workbook | Equipo de planificación / Scrum Master | Antes de valorar asignaciones, fórmulas o viabilidad del workbook | SÍ |
| Acreditar la disposición humana y el inventario exacto de la baseline `requirements-v1-reviewed` | Product Owner / equipo | Antes de iniciar la hipótesis sobre una baseline declarada | SÍ |
| Ratificar o resolver DEC-001 y fijar el alcance S-01–S-04 frente a EP-004 | Product Owner | Antes de consolidar el alcance de planificación | SÍ |
| Confirmar horizonte o fecha objetivo del ejercicio | Product Owner / cliente / Scrum Master | Antes de valorar duración y entrega | SÍ |
| Confirmar capacidad individual por iteración, ausencias, deducciones y asignaciones; aclarar Sprint 1 frente a IT-001 | Integrantes / Scrum Master | Antes de evaluar capacidad y compromisos de iteración | SÍ |
| Resolver fuente y responsable del aforo inicial/máximo, autorización RRPP, zona horaria y regla inclusiva/exclusiva | Product Owner / Administración / Tech Lead | Antes de declarar listas las historias afectadas y confirmar su secuencia | SÍ |
| Acordar tarifas, moneda y presupuesto si el ejercicio debe incluir coste monetario | Responsable de costes / cliente / Product Owner | Antes de calcular o evaluar coste | SÍ para evaluación monetaria; no cambia la aritmética de esfuerzo |

Estas acciones son sugerencias; no representan decisiones aprobadas, asignaciones, estimaciones nuevas ni selección de historias o sprints.

## 9. Disposición RECHECK

No aplica: este es el primer informe de revisión inicial identificado y no se ha aportado informe previo ni disposición humana referenciada.

## 10. Consejo final y límites

Para el alcance descrito por S-01–S-04 y la baseline declarada `requirements-v1-reviewed`, la preparación **no puede evaluarse globalmente** con la evidencia autorizada: el workbook, aunque se declara existente, no se inspeccionó; no se acredita la aprobación de baseline ni la ratificación del alcance diferido; y faltan horizonte, capacidad futura, asignaciones y resolución de prerrequisitos de historias. El resultado **NOT_ASSESSABLE** no significa que el workbook esté mal ni que un plan sea inviable; significa que esos extremos no han sido verificados y que los datos esenciales siguen pendientes.

Esta revisión solo sustenta las sumas de estimación y la aritmética publicada de capacidad descritas arriba. No verifica fórmulas, planificación, costes monetarios, duración, factibilidad temporal ni compromisos. No se accedió al workbook ni a ningún PDF. Las fuentes permanecen sin cambios; se creó únicamente este informe nuevo. No se aprobó ningún plan, compromiso, baseline ni puerta de calidad.
