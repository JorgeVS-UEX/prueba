# Informe de revisión de requisitos v01

## 1. Metadatos

| Campo | Valor |
|---|---|
| Proyecto | NightShift Software — `proyecto-gps-26-27-gc01` |
| Modo | Revisión focalizada posterior a cambios |
| Fecha | 2026-10-14 |
| Baseline declarada | `requirements-v1-reviewed`; aprobación humana no verificada |
| Alcance | EP-001 a EP-003; EP-004 revisada como diferida, no como alcance actual |
| Informe previo | No localizado en las rutas del repositorio; primera versión persistida |
| Revisión de fuente del informe | Resultado textual del requirements-reviewer, revisado y guardado por el asistente; el agente indicó que no podía persistir el archivo |
| Modelo/herramienta exactos | No disponibles en los metadatos accesibles; no inferidos |

## 2. Fuentes y límites

Revisados: `.specify/memory/constitution.md`, `specs/product/mission.md`, `specs/product/goals.md`, `specs/definition-of-ready.md`, `specs/definition-of-done.md`, `specs/EP-001-Gestion-Aforo/spec.md`, `specs/EP-002-Venta-Entradas/spec.md`, `specs/EP-003-Sistema-RRPP/spec.md`, `specs/EP-004-Reservas-Zonas-VIP/spec.md`, `docs/organization/capacity.md`, `docs/organization/decisions.md`, `docs/organization/team-charter.md`, `docs/organization/proposals/identity-configuration.md`, `docs/project/ai-traceability.md` y `.github/agents/*.agent.md`.

No se abrió ningún Excel ni PDF. El archivo `docs/organization/Planificacion_NightShift_Sprint1.xlsx` existe en el repositorio, pero su contenido, fórmulas, tarifas, plan y viabilidad no se comprobaron. No se accedió a la Wiki externa. No se encontró evidencia local de ratificación de `requirements-v1-reviewed` ni de la autoridad formal del solicitante como Product Owner. Tampoco se verificó código o ejecución de una aplicación.

## 3. Evaluación

**Recomendación: NEEDS_REFINEMENT.** Hay requisitos detallados y DoR/DoD compartidos, pero siguen pendientes decisiones y fuentes que impiden declarar Ready algunas historias Must o aprobar una baseline/plan. Esto no constituye aprobación ni rechazo del producto.

## 4. Compatibilidad y comprobación de afirmaciones

| Afirmación revisada | Resultado comprobado |
|---|---|
| Estructura de gobierno y especificaciones inexistente o duplicada | No respaldada por el inventario actual: existen `.specify/memory/constitution.md`, `specs/product/`, `specs/definition-of-ready.md`, `specs/definition-of-done.md` y `.github/agents/`. No aparecen copias de especificaciones con prefijos `179199...` en el inventario revisado. |
| No existe Excel | Incorrecta en cuanto a existencia: hay un `.xlsx` en `docs/organization/`. Su contenido no se pudo inspeccionar, por lo que las fórmulas y viabilidad quedan sin verificar. |
| 82 h-p, Must 43 / Should 19 / Could 20 | Confirmado por suma de las 16 estimaciones de historia del catálogo completo. |
| EP-004 fuera de S-01–S-04 | Confirmado como diferimiento indicado por el solicitante y registrado en DEC-001; ratificación formal por el PO pendiente. EP-004 suma 17 h-p. El alcance sin EP-004 suma 65 h-p (Must 43, Should 13, Could 9). |
| IT-002 sobreasignada: 40 h-p frente a 35 h | No demostrado. Las 35 h están publicadas para Sprint 1, no para IT-002; además 40 h-p incluye US-014 (6 h-p) de EP-004 diferida. IT-002 sin US-014 sería 34 h-p, pero capacidad IT-002 y mapeo actual del workbook no se verificaron. |
| `.specify/` ausente | Incorrecta: `.specify/memory/constitution.md` existe. |
| Wiki, tarifas y aprobación de baseline | No se pudieron confirmar a partir de los documentos locales revisados. La ausencia en el repositorio no demuestra la ausencia de contenido en una Wiki externa. |
| Sobre capacidad y compromiso | `capacity.md` publica 35 h efectivas para Sprint 1, pero fechas, ausencias y confirmaciones individuales siguen pendientes. IT-002 e IT-003 no tienen capacidad confirmada. |

## 5. Hallazgos

### IPR-v01-001 — Autoridad y disposición de alcance pendientes

- **Categoría/severidad:** Alcance / MAJOR.
- **Bloqueante:** Sí, para tratar el catálogo como baseline aprobada.
- **Fuentes:** `docs/organization/decisions.md` DEC-001; `specs/product/goals.md`; especificación EP-004.
- **Evidencia:** El solicitante eligió diferir EP-004, pero el registro indica que la ratificación formal del PO está pendiente. La etiqueta `requirements-v1-reviewed` no acredita por sí misma aprobación, fecha, autoridad ni inventario exacto de requisitos.
- **Impacto:** El alcance actual y la baseline no tienen disposición formal verificable.
- **Acción/pregunta:** El PO debe ratificar DEC-001 y registrar versión/alcance exactos, o emitir una decisión distinta; no reintroducir EP-004 sin decisión.
- **Responsable sugerido:** Product Owner / equipo.
- **Confianza:** Alta.

### IPR-v01-002 — Identidad y configuración operativa sin fuente aprobada

- **Categoría/severidad:** Cobertura / MAJOR.
- **Bloqueante:** Sí para las historias que requieran roles o configuración aún no definida.
- **Fuentes:** `.specify/memory/constitution.md` 1.4; US-002, US-004, US-007, US-010, US-012 y US-013; propuesta `docs/organization/proposals/identity-configuration.md`.
- **Evidencia:** La constitución exige control por rol; algunas historias hacen referencia a roles, perfil autorizado, eventos o aforo configurado. La propuesta de identidad/configuración está expresamente pendiente y no es una épica aprobada.
- **Impacto:** No se puede asegurar quién configura o autoriza roles, eventos, aforo, zona horaria, condiciones y tarifas.
- **Acción/pregunta:** Decidir si existe ya una fuente aprobada o si se incorpora una capacidad al alcance; definir responsable y permisos antes de comprometer historias afectadas.
- **Responsable sugerido:** Product Owner / Administración / Tech Lead.
- **Confianza:** Alta.

### IPR-v01-003 — Decisiones de negocio que bloquean preparación de historias

- **Categoría/severidad:** Madurez de requisitos / MAJOR.
- **Bloqueante:** Sí para las historias señaladas, según DoR.
- **Fuentes:** US-001, US-002, US-010, US-011, US-012 y US-013.
- **Evidencia:** Faltan nivel de carga concurrente y responsable, fuente aprobada del aforo, autenticación/autorización RRPP, tarifa de comisión aprobada, zona horaria del evento y regla inclusiva/exclusiva del límite temporal. Algunas preguntas constan ya con responsable sugerido, pero siguen sin resolución.
- **Impacto:** No se puede declarar Ready las historias bloqueadas por esas decisiones ni verificar sus condiciones de prueba.
- **Acción/pregunta:** Resolver cada pregunta en la especificación/registro de decisiones, con responsable por rol y disparador de validación.
- **Responsable sugerido:** Product Owner / Administración / Tech Lead / QA, según pregunta.
- **Confianza:** Alta.

### IPR-v01-004 — Horizonte, capacidad futura y coste incompletos

- **Categoría/severidad:** Planificación / MAJOR.
- **Bloqueante:** Sí para una conclusión de viabilidad temporal o económica; no altera las estimaciones en h-p.
- **Fuentes:** `specs/product/goals.md`; `docs/organization/capacity.md`.
- **Evidencia:** Horizonte, presupuesto, tarifas y moneda están pendientes; capacidad de IT-002/IT-003 y asignaciones por persona/rol también. La fuente de 35 h de Sprint 1 no tiene confirmación individual completa.
- **Impacto:** No se puede concluir duración, sobreasignación, margen ni coste monetario.
- **Acción/pregunta:** Acordar horizonte y tarifas si aplican; confirmar capacidad y ausencias para cada iteración, y asignaciones antes de evaluar límites por persona/rol.
- **Responsable sugerido:** PO / cliente / integrantes / Scrum Master.
- **Confianza:** Alta.

### IPR-v01-005 — Trazabilidad de IA y documentos externos limitada

- **Categoría/severidad:** Trazabilidad / MINOR.
- **Bloqueante:** No para entender los requisitos; sí pendiente para certificar ratificación externa.
- **Fuentes:** `docs/project/ai-traceability.md`; `docs/organization/decisions.md`; Wiki y PDF referidos por el solicitante.
- **Evidencia:** El log conserva la propuesta y decisión indicada sobre EP-004, pero modelo/ID de ejecución no están disponibles y no se comprobó publicación en Wiki. No se proporcionó el PDF para contrastar sus anexos.
- **Impacto:** La cadena local queda documentada, pero no prueba publicación externa ni aprobación.
- **Acción/pregunta:** Completar modelo/herramienta cuando estén disponibles y sincronizar decisiones en la Wiki por el equipo autorizado; aportar el PDF si se requiere una comprobación literal.
- **Responsable sugerido:** Equipo.
- **Confianza:** Alta.

## 6. Matriz DoR resumida

C1 = identificación/trazabilidad; C2 = valor/alcance; C3 = criterios/reglas; C4 = estimación/dependencias y datos para evaluar capacidad; C5 = preguntas/datos. `NOT_ASSESSABLE` en C4 refleja que hay estimaciones y fuentes declaradas, pero no disponibilidad confirmada para cada iteración. Las historias de EP-004 se mantienen separadas por estar diferidas.

| Historia activa | C1 | C2 | C3 | C4 | C5 | Observación |
|---|---|---|---|---|---|---|
| US-001 | MET | MET | MET | NOT_ASSESSABLE | NOT_MET | Nivel de carga concurrente y secuencia con US-007 pendientes |
| US-002 | MET | MET | MET | NOT_ASSESSABLE | NOT_MET | Fuente/responsable de configuración de capacidad pendiente |
| US-003 | MET | MET | MET | NOT_ASSESSABLE | NOT_ASSESSABLE | Capacidad futura y fuente de autorización/registro compartido por confirmar |
| US-004 | MET | MET | MET | NOT_ASSESSABLE | NOT_MET | Fuente aprobada de identidad/rol gerente pendiente |
| US-005 | MET | MET | MET | NOT_ASSESSABLE | NOT_ASSESSABLE | Fuente temporal/configuración de sesión por confirmar |
| US-006 | MET | MET | MET | NOT_ASSESSABLE | NOT_ASSESSABLE | Fuente aprobada de catálogo sintético no identificada |
| US-007 | MET | MET | MET | NOT_ASSESSABLE | NOT_ASSESSABLE | Requiere fuente de identidad/evento y contrato RRPP |
| US-008 | MET | MET | MET | NOT_ASSESSABLE | NOT_ASSESSABLE | Servicio/buzón de prueba no verificado |
| US-009 | MET | MET | MET | NOT_ASSESSABLE | NOT_ASSESSABLE | Disponibilidad del estado sincronizado no verificada |
| US-010 | MET | MET | MET | NOT_ASSESSABLE | NOT_MET | Autorización RRPP por resolver |
| US-011 | MET | MET | MET | NOT_ASSESSABLE | NOT_MET | Tarifa aprobada pendiente |
| US-012 | MET | MET | MET | NOT_ASSESSABLE | NOT_MET | Zona horaria y regla de límite pendientes |
| US-013 | MET | MET | MET | NOT_ASSESSABLE | NOT_MET | Zona horaria, límite temporal y contrato QR pendientes |

**EP-004 / US-014–US-016:** diferidas por DEC-001; no se evalúan como candidatas Ready ni como alcance aprobado. Si el PO las reactiva, requerirán una nueva revisión DoR. La fuente de la estimación registrada para las historias activas es el archivo de especificación y la baseline declarada; los estimadores/fecha de acuerdo continúan pendientes.

## 7. Omisiones candidatas y dependencias

- La propuesta de identidad/configuración (`docs/organization/proposals/identity-configuration.md`) es una candidata no aprobada, no una épica añadida al catálogo.
- US-007 requiere mantener la atribución RRPP en una compra iniciada desde enlace válido y emitir el localizador que consume US-009.
- US-001 declara como predecesora la emisión del QR de US-007. La agrupación histórica ponía US-001 antes de US-007; se eliminaron `Initial plan` de las specs para que no compitan con el workbook, pero la secuencia real no fue verificada.
- US-002 consume entradas confirmadas y salidas de US-003; US-003 ya no tiene a US-002 como predecesora, por lo que no se conserva el ciclo previamente señalado.
- US-012/US-013 dependen de configuración de lista y reglas temporales aprobadas.
- G-04 se define como transversal, cubierto por DoD e instrucciones de ejecución; no es una épica funcional independiente.

## 8. Preguntas priorizadas

1. ¿Ratifica el PO DEC-001 y `requirements-v1-reviewed`? Registrar autoridad, fecha, alcance e IDs exactos.
2. ¿Qué fuente aprobada define autenticación, roles, eventos, aforo máximo/inicial y zona horaria?
3. ¿Qué nivel de carga concurrente y fuente de prueba se aprobarán para US-001/US-002?
4. ¿Qué regla inclusiva/exclusiva aplica en US-012/US-013 y qué configuración horaria se usará?
5. ¿Qué tarifa/moneda se aprueba para US-011 y qué presupuesto/horizonte aplican?
6. ¿Qué capacidad individual/ausencias están confirmadas para IT-001/IT-002/IT-003 y qué evidencia de planificación es revisable?
7. ¿El equipo publicará DEC-001 y la disposición de baseline en la Wiki del repositorio?

## 9. Cierre

Este informe es consultivo. No aprueba requisitos, prioridades, estimaciones, baseline, alcance, plan, tarifas ni calidad de implementación. El archivo Excel existe, pero no fue inspeccionado; la Wiki externa y el PDF no se verificaron. Las conclusiones de capacidad y coste se limitan a la aritmética documental descrita y no equivalen a viabilidad del proyecto.
