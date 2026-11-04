# EP-003 Sistema de Relaciones Públicas (RRPP) y Listas

**Goals:** G-02 (Trazabilidad de los Relaciones Públicas (PR)), G-03 (Sincronización en Puerta)
**Baseline:** requirements-v1-reviewed
**Boundary:** La gestión de pagos o transferencias bancarias a los RRPP queda expresamente excluida. Solo se simulará el cálculo de los importes acumulados con datos ficticios.
**Iteration assignments:** The planning workbook is the sole source for iteration allocation; this specification defines requirements, estimates and dependencies only.

## Epic outcome
Los relaciones públicas (RRPP) disponen de una herramienta autónoma para generar sus listas de invitados, atraer clientes con condiciones dinámicas y monitorizar las comisiones generadas por su trabajo de captación.

## Stories

### US-010 Generar enlace de invitación de RRPP
> Como relaciones públicas, quiero generar un enlace web único asociado a mi perfil, para enviarlo por redes sociales y que las entradas obtenidas a través de él se asocien a mi cuenta.
**User story (As a / I want / so that):** As an RRPP, I want a unique invitation link associated with my synthetic profile, so that ticket sales can be attributed to my referral account.

**Priority:** Must
**Estimate:** 5 h-p
**Estimate source:** `specs/EP-003-Sistema-RRPP/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: materializa la atribución requerida por G-02 y habilita las conversiones del RRPP. Riesgo: enlaces duplicados, falsificados o con identificadores personales invalidan la trazabilidad. Dependencias: US-011 y US-012 consumen el enlace; requiere un perfil RRPP autorizado.
**Uncertainty:** Low
**Predecessors:** Ninguna

#### Acceptance criteria
**US-010-AC-01:** El panel del RRPP debe tener un botón para "Crear nueva lista".
**US-010-AC-02:** El sistema debe generar una URL única que incluya el identificador del RRPP en los parámetros.
**US-010-AC-03:** El sistema debe proporcionar un botón rápido para copiar el enlace al portapapeles del dispositivo móvil.
**US-010-AC-04:** Si el navegador deniega el acceso al portapapeles, el enlace debe seguir visible y seleccionable para copiarlo manualmente.
**US-010-AC-05:** Un usuario sin rol RRPP no podrá generar ni administrar enlaces de RRPP.
**US-010-AC-06:** Si el enlace es desconocido o su referencia fue alterada, el sistema no atribuirá una reserva y mostrará un estado no válido.
**US-010-AC-07:** Al crear una lista, el RRPP podrá seleccionar el evento y configurar los tramos horarios y las condiciones/precios aplicables; la lista mostrará esas condiciones antes de que un asistente se inscriba.
**US-010-AC-08:** Si falta una condición obligatoria (evento, ventana o precio), el sistema no publicará la lista y señalará el dato que falta.

#### Verification and constraints
El identificador generado no debe exponer datos personales sensibles del RRPP en la URL.

#### Need and objective
**Need:** El RRPP necesita compartir una referencia distinguible para atribuir las reservas asociadas a su captación.
**Objective:** Contribuir a G-02 con una referencia única que permita contar conversiones de forma reproducible.

#### Business rules
- Cada enlace corresponde a un perfil RRPP sintético autorizado y permite identificar su atribución sin exponer identidad personal.
- La URL debe distinguirse de otros enlaces activos; su uso no equivale por sí solo a una entrada validada.
- Sólo una cuenta con rol RRPP puede generar el enlace.
- Cada lista publicada tiene evento, ventanas y condiciones visibles; los importes concretos deben proceder de una decisión/configuración aprobada, no de un valor inventado en la historia.

#### Constraints
- No se incluyen nombres, correos ni identificadores personales reales en la URL.
- Las cuentas, los eventos y los datos de prueba son sintéticos; no se integra con redes sociales externas.

#### Non-functional requirements
- El enlace debe resistir falsificación o manipulación de la atribución, conforme a la protección de enlaces exigida por la constitución.
- El flujo de copiar ofrece confirmación accesible y alternativa cuando el permiso del portapapeles no está disponible.

#### Edge cases
- El portapapeles no está disponible: se muestra el enlace y una alternativa manual, sin perderlo.
- El token es desconocido o alterado: no se atribuye una reserva y se muestra un estado no válido.
- El usuario carece del rol RRPP: se deniega la generación sin revelar datos del perfil.
- Falta evento, precio o ventana horaria: se evita publicar condiciones incompletas.

#### Dependencies and assumptions
- US-011 y US-012 consumen la referencia para atribución y alta en lista.
- Supuesto: el entorno dispone de un perfil RRPP sintético cuya autorización puede comprobarse.
- La autenticación/autorización es un prerrequisito de producto no desglosado en una historia del catálogo; confirmar dónde se especifica.

#### Open questions
- Confirmar el mecanismo/alcance aprobado de autenticación y autorización para el rol RRPP; responsable sugerido: Product Owner; resolver antes de declarar Ready la historia.


### US-011 Consultar comisiones acumuladas
> Como relaciones públicas, quiero ver un panel con el recuento de personas que han entrado mediante mi enlace esta noche, para saber exactamente qué rendimiento he generado.

**Priority:** Should
**Estimate:** 4 h-p
**Estimate source:** `specs/EP-003-Sistema-RRPP/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: muestra el rendimiento del RRPP tras la captación y asistencia. Riesgo: un cálculo no determinista contradice la exigencia constitucional de auditoría. Dependencias: necesita atribución de US-010, validación de compra en US-001 y validación de lista en US-013.
**User story (As a / I want / so that):** As an RRPP, I want to see unique attendees from my attributed list who were validated at the door, so that I can review verified conversions and the simulated commission.
**Commission rate:** Pendiente de aprobación/configuración; el ejemplo `2 €/persona` no es un valor aprobado.
**Uncertainty:** Medium
**Predecessors:** US-010, US-001 (validación de entrada comprada), US-013 (validación de lista)

#### Acceptance criteria
**US-011-AC-01:** El panel debe mostrar el número de asistentes únicos atribuidos al RRPP mediante compra o inscripción a su lista cuyo QR ya fue validado en puerta.
**US-011-AC-02:** El sistema mostrará la comisión simulada como el número de asistentes validados multiplicado por la tarifa aprobada y configurada. Mientras no exista una tarifa aprobada, mostrará el número de asistentes y señalará la comisión como pendiente; no aplicará el ejemplo de 2 €/persona.
**US-011-AC-03:** Una compra o inscripción atribuida cuyo QR no haya sido validado no suma como asistente ni genera comisión simulada.
**US-011-AC-04:** Una misma inscripción/entrada validada no se contará más de una vez, aunque haya reintentos o eventos duplicados.

#### Verification and constraints
Los cálculos de comisión deben actualizarse de forma reactiva cada vez que la US-001 valida una entrada en la puerta.

#### Non-functional requirements
- El panel separa inscripciones atribuidas, asistentes validados y comisión simulada para que no se confundan conversión y asistencia.
- El resultado debe poder reconciliarse con la referencia de RRPP y la validación de puerta, sin exponer datos personales.

#### Edge cases
- Sin tarifa configurada, la comisión se identifica como pendiente y no como cero.
- Una inscripción sin entrada validada no incrementa el número de asistentes.
- Una validación duplicada no incrementa el recuento más de una vez.


### US-012 Apuntarse a lista con condiciones dinámicas
> Como cliente, quiero apuntarme a la lista de un RRPP que me indique condiciones horarias concretas (ej. "Entrada gratis antes de la 1:30"), para obtener ventajas al entrar temprano.
**User story (As a / I want / so that):** As an attendee, I want to join an RRPP's synthetic guest list, so that I can receive the entry conditions that apply to that list.

**Priority:** Must
**Estimate:** 6 h-p
**Estimate source:** `specs/EP-003-Sistema-RRPP/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: habilita la captación atribuible de G-02 y el acceso por lista de G-03. Riesgo: duplicados o condiciones ambiguas producen decisiones de puerta incorrectas. Dependencias: requiere el enlace de US-010 y el contrato de validación de US-013.
**Uncertainty:** Medium
**Predecessors:** US-010

#### Acceptance criteria
**US-012-AC-01:** Al acceder al enlace del RRPP, el cliente verá las condiciones de la lista claramente especificadas (ej. precio por tramo horario).
**US-012-AC-02:** El asistente deberá elegir una identidad sintética del entorno de prueba; no se solicitarán ni guardarán nombre, email u otros datos personales reales.
**US-012-AC-03:** El sistema generará un QR de referencia único asociado a la lista y a sus condiciones, sin incluir datos personales.
**US-012-AC-04:** Una identidad sintética sólo podrá registrarse una vez en la misma lista para el mismo evento/día; un intento repetido mostrará la inscripción existente.
**US-012-AC-05:** Si la lista está cerrada o el enlace no es válido, el sistema no completará la inscripción y mostrará un motivo comprensible.
**US-012-AC-06:** Antes de confirmar, el asistente verá el evento, cada ventana horaria, su zona horaria y la condición/precio asociado; si la zona horaria no está definida, la lista no se presenta como lista para inscripciones.

#### Verification and constraints
El formulario de registro debe evitar que la misma identidad sintética se apunte varias veces a la misma lista para el mismo día.

#### Need and objective
**Need:** El asistente necesita conocer y conservar las condiciones de una lista antes de llegar a puerta.
**Objective:** Contribuir a G-02 vinculando la inscripción a un enlace RRPP y a G-03 proporcionando una referencia verificable para el acceso.

#### Business rules
- Una inscripción pertenece a un enlace/lista, un evento y una identidad sintética; no se duplican inscripciones para la misma combinación.
- Las condiciones y ventanas horarias deben mostrarse antes de confirmar la inscripción.
- La entrada por lista no se considera autorizada hasta que US-013 valide la referencia y aplique las condiciones vigentes.
- La zona horaria debe provenir de configuración del evento/lista. Si no está configurada, la historia no está lista para implementar.
- El criterio inclusivo/exclusivo en el instante límite de cada ventana requiere decisión del equipo de producto; no queda fijado por esta historia.

#### Constraints
- Se prohíbe usar datos personales reales; los nombres/emails no son necesarios para el flujo de prueba.
- El QR no debe transportar información personal ni permitir alterar las condiciones.
- Las listas y eventos usan datos sintéticos.

#### Non-functional requirements
- Las condiciones deben ser legibles y accesibles antes de confirmar.
- La referencia debe resistir falsificación y reutilización; la validación temporal se apoya en el reloj de servidor indicado en US-013.
- La inscripción repetida debe ser idempotente para la misma identidad/lista/evento.

#### Edge cases
- Inscripción duplicada: devolver la inscripción ya existente, sin emitir otra referencia válida.
- Enlace desconocido, lista cerrada o QR alterado: no completar la inscripción o no conceder acceso; mostrar un mensaje recuperable.
- Fallo de conexión durante el alta: informar que el resultado está pendiente y permitir consultar/reintentar sin duplicar.
- Hora exactamente en el límite de la promoción: aplicar la regla sólo cuando el equipo haya aprobado si el límite es inclusivo o exclusivo.

#### Dependencies and assumptions
- Depende funcionalmente del enlace/lista de US-010 y del mecanismo de comprobación de US-013.
- Supuesto: el entorno proporciona identificadores sintéticos estables para deduplicar inscripciones sin PII.

#### Open questions
- Decidir si el instante límite del tramo es inclusivo o exclusivo y registrar zona horaria por evento; responsable sugerido: Product Owner; resolver antes de declarar Ready las historias US-012 y US-013.


### US-013 Validar acceso por lista de invitados
> Como personal de puerta (portero), quiero escanear un QR de lista y que el sistema compruebe la hora actual, para saber si el cliente entra gratis o si debo cobrarle en puerta según sus condiciones.
**User story (As a / I want / so that):** As a door staff member, I want to validate a guest-list QR against the approved event conditions, so that I can apply the correct access result and prevent duplicate entry.

**Priority:** Must
**Estimate:** 7 h-p
**Estimate source:** `specs/EP-003-Sistema-RRPP/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: aplica en puerta las condiciones de captación de G-02 y mantiene una decisión sincronizada de acceso G-03. Riesgo: hora local manipulable o QR reutilizado causa cobros/accesos erróneos. Dependencias: US-012 emite la referencia y US-001 aporta el flujo de escaneo.
**Uncertainty:** High
**Predecessors:** US-012, US-001

#### Acceptance criteria
**US-013-AC-01:** Al escanear un QR de lista, el sistema comparará la hora del servidor con el tramo y la zona horaria configurados para el evento.
**US-013-AC-02:** Si la referencia y la condición son válidas, la pantalla comunicará el resultado mediante texto e icono además del color; el color no será la única señal.
**US-013-AC-03:** Si el cliente llega fuera de la condición aprobada, la pantalla mostrará "Fuera de hora" y la tarifa/condición procedente de la configuración aprobada; no mostrará `[X]` como importe real.
**US-013-AC-04:** Si el QR ya se utilizó para autorizar un acceso, se rechaza el segundo uso y se informa "Referencia ya utilizada".
**US-013-AC-05:** El resultado para un instante exactamente igual al límite se aplica solo cuando la decisión inclusiva/exclusiva esté registrada; hasta entonces la historia no se considera lista para planificar.

#### Verification and constraints
El sistema debe utilizar la hora del servidor principal y no la hora local del dispositivo del portero para evitar manipulaciones en el escaneo.

#### Business rules
- Las ventanas usan la zona horaria configurada del evento, no la zona local arbitraria del dispositivo.
- El límite temporal inclusivo o exclusivo necesita una decisión del PO y no se asume.
- Una referencia ya utilizada no autoriza otro acceso.

#### Non-functional requirements
- La evaluación debe ser determinista para la misma referencia, hora del servidor y condiciones aprobadas.
- El estado se comunica con texto e icono, además del color.
- Los importes aplicados proceden de configuración aprobada y quedan trazables.

#### Edge cases
- QR ya usado: rechazarlo sin incrementar de nuevo asistencia o comisión.
- Falta zona horaria o regla del instante límite: no resolver silenciosamente; indicar condición no confirmada.
- Reloj/servicio de tiempo no disponible: no confirmar una autorización temporal no verificada.
- QR inválido o alterado: denegar acceso y no atribuir la visita.

#### Dependencies and assumptions
- Requiere la inscripción y referencia emitida por US-012, las condiciones configuradas mediante US-010 y el evento sintético.
- El contrato de escaneo debe interoperar con US-001 y evitar dobles autorizaciones.
- La autorización del personal de puerta y la configuración de eventos/condiciones no están detalladas en una historia aprobada; confirmar su fuente antes de implementar.

#### Open questions
- Registrar decisión de borde temporal (inclusivo/exclusivo), zona horaria de evento y contrato de QR compartido; responsable sugerido: Product Owner con Tech Lead; resolver antes de comprometer US-013.
