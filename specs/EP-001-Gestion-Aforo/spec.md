# EP-001 Control de Accesos y Aforo en Tiempo Real

**Goals:** G-03 (Sincronización en Puerta)
**Baseline:** requirements-v1-reviewed
**Boundary:** Control digital mediante escaneo de dispositivos móviles. Queda excluida la integración con tornos físicos de la discoteca y la conexión con bases de datos policiales reales.
**Iteration assignments:** The planning workbook is the sole source for iteration allocation; this specification defines requirements, estimates and dependencies only.

## Epic outcome
El personal de puerta puede validar las entradas rápidamente mediante un escáner y los responsables del local conocen el aforo exacto en tiempo real para evitar aglomeraciones y cumplir con la normativa.

## Stories

### US-001 Escanear entrada con código QR
> Como personal de puerta (portero), quiero escanear el código QR de la entrada del cliente desde mi dispositivo móvil, para validar su acceso de forma inmediata y sin esperas.
**User story (As a / I want / so that):** As a door staff member, I want to scan a synthetic ticket QR, so that I can admit valid attendees and prevent duplicate entry.

**Priority:** Must
**Estimate:** 6 h-p
**Estimate source:** `specs/EP-001-Gestion-Aforo/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: habilita el control de acceso y la actualización fiable del aforo (G-03). Riesgo: un QR reutilizado o una validación inconsistente comprometería la operación de puerta. Dependencias: requiere el contrato de QR emitido por US-007; es base funcional de US-002 y US-003.
**Uncertainty:** Low
**Predecessors:** US-007 (contrato de QR; dependencia de entrada)

#### Acceptance criteria
**US-001-AC-01:** El sistema debe utilizar la cámara del dispositivo para leer un código QR válido en menos de 2 segundos.
**US-001-AC-02:** Si el QR es válido y no ha sido utilizado, la pantalla debe mostrar un mensaje en verde ("Acceso Permitido") y registrar la hora de entrada.
**US-001-AC-03:** Si el QR ya ha sido escaneado previamente, el sistema debe mostrar una alerta con texto e icono ("Entrada Duplicada") y bloquear el acceso; el color no será la única señal.
**US-001-AC-04:** Sin conexión, el sistema debe registrar localmente el intento como pendiente y no mostrar "Acceso Permitido" hasta confirmar su unicidad al recuperar la conexión.
**US-001-AC-05:** Si varios dispositivos sincronizan intentos para el mismo QR, el sistema debe confirmar como máximo una entrada y mostrar "Entrada Duplicada" a los intentos restantes.
**US-001-AC-06:** Si el QR es ilegible, desconocido o alterado, el sistema debe denegar el acceso y mostrar un mensaje recuperable sin registrar una entrada.

#### Verification and constraints
El escaneo debe probarse con una base de datos de 50 QRs ficticios (datos sintéticos) para simular alta concurrencia. La interfaz debe ser accesible y tener alto contraste para entornos oscuros (condición de luz de la discoteca).

#### Need and objective
**Need:** El personal de puerta necesita distinguir una entrada válida de una ya utilizada sin contar dos veces a la misma persona.
**Objective:** Contribuir a G-03 con una validación de acceso sincronizada y trazable.

#### Business rules
- Un QR de entrada confirmado solo puede generar una entrada válida una vez.
- La hora registrada corresponde al momento en que el sistema confirma la validación; un intento offline permanece pendiente hasta resolver su unicidad.
- Los reintentos del mismo intento no deben producir entradas adicionales.

#### Constraints
- Se usa escaneo simulado desde dispositivo móvil; no se requiere hardware físico.
- Sólo se usan entradas y datos sintéticos. El QR no debe exponer datos personales.

#### Non-functional requirements
- La lectura del QR válido debe cumplir el límite observable de 2 segundos de AC-01.
- La validación debe ser idempotente y proteger contra falsificación y reutilización, incluso con reintentos y sincronización concurrente.
- La interfaz debe ofrecer alto contraste y operación accesible en condiciones de poca luz.
- El nivel de carga concurrente para certificar rendimiento queda pendiente de acuerdo del equipo; 50 registros de prueba no definen por sí solos una carga concurrente.

#### Edge cases
- Dos dispositivos validan simultáneamente el mismo QR: como máximo uno obtiene confirmación; el otro recibe rechazo de duplicado.
- El dispositivo queda offline antes de recibir respuesta: muestra estado pendiente, no permiso definitivo.
- El QR es ilegible, desconocido o alterado: no concede acceso y presenta un mensaje recuperable.

#### Dependencies and assumptions
- Dependencia de contrato: US-007 genera el QR de entrada que esta historia valida. La dependencia funcional no cambia por sí sola la secuencia de iteración existente.
- Supuesto: cada entrada sintética tiene una referencia única que permite reconocer reintentos.

#### Open questions
- Definir el nivel de carga concurrente que se usará para certificar rendimiento; responsable sugerido: Tech Lead/QA; resolver antes de aceptar la historia como lista para pruebas de carga.


### US-002 Visualizar el aforo según la capacidad configurada
> Como gerente de sala, quiero visualizar un contador dinámico con las personas que hay dentro del local, para asegurar que no superamos la capacidad autorizada configurada para la sesión.
**User story (As a / I want / so that):** As a venue manager, I want to see synchronized occupancy, so that I can keep attendance within the configured capacity.

**Priority:** Must
**Estimate:** 5 h-p
**Estimate source:** `specs/EP-001-Gestion-Aforo/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: permite al responsable actuar sobre el aforo, resultado central de G-03. Riesgo: datos desactualizados o admisiones concurrentes pueden superar el límite configurado. Dependencias: consume validaciones de US-001 y salidas de US-003.
**Uncertainty:** Low
**Predecessors:** US-001 (Depende de los accesos validados)

#### Acceptance criteria
**US-002-AC-01:** El panel principal debe mostrar el número total de asistentes restando automáticamente las salidas registradas de las entradas validadas.
**US-002-AC-02:** Cuando el aforo alcance el 90% de la capacidad aprobada y configurada, el panel debe mostrar una advertencia con texto e icono además del color. La advertencia no parpadeará.
**US-002-AC-03:** Cuando se alcance el 100% de ocupación, el sistema debe bloquear temporalmente nuevos escaneos de entrada (US-001) y emitir una alerta sonora.
**US-002-AC-04:** Si la actualización de aforo no está disponible o está desactualizada, el panel debe indicar que el dato no está confirmado y no presentar el valor como sincronizado.
**US-002-AC-05:** Ante entradas concurrentes próximas al límite, el sistema debe confirmar sólo las que no excedan la capacidad configurada; las restantes reciben rechazo por aforo completo.

#### Verification and constraints
El contador debe actualizarse con una latencia inferior a 1 segundo al recibir el aviso de la base de datos.

#### Need and objective
**Need:** La gerencia necesita una ocupación actual fiable para evitar superar la capacidad configurada.
**Objective:** Contribuir a G-03 mostrando los cambios de entrada y salida de forma sincronizada.

#### Business rules
- Ocupación actual = entradas confirmadas - salidas confirmadas; el valor inicial y la capacidad máxima deben provenir de configuración aprobada.
- El umbral de advertencia es el 90% de la capacidad configurada; al alcanzar el 100%, no se confirma una nueva entrada.
- Una salida repetida o no asociada a una persona dentro no puede reducir el aforo por debajo de cero.

#### Constraints
- No se inventa ni se codifica un límite legal: la capacidad máxima debe ser suministrada por una fuente autorizada del entorno ficticio.
- La solución y las pruebas usan datos sintéticos.

#### Non-functional requirements
- La actualización debe cumplir la latencia inferior a 1 segundo indicada en verificación, medida desde la notificación recibida.
- El valor y el bloqueo deben permanecer consistentes ante actualizaciones concurrentes; una lectura obsoleta debe ser identificable.

#### Edge cases
- Dos escaneos simultáneos intentan ocupar la última plaza: sólo se confirma el que mantiene la ocupación dentro del límite.
- La fuente de datos deja de responder: se conserva el último valor con indicador de desactualización y no se simula sincronización.
- Se registra una salida cuando la ocupación es cero: el contador no pasa a negativo y la acción informa que no se aplicó.

#### Dependencies and assumptions
- Depende funcionalmente de las entradas confirmadas de US-001 y las salidas confirmadas de US-003.
- Supuesto: la capacidad máxima y el aforo inicial están configurados antes de iniciar la sesión.

#### Open questions
- Identificar la fuente autorizada y el rol responsable de configurar la capacidad máxima y el aforo inicial; responsable sugerido: Product Owner/Administración; resolver antes de comprometer la historia.


### US-003 Registrar salida manual de un cliente
> Como personal de puerta (portero), quiero registrar manualmente la salida de un cliente pulsando un botón en la app, para que el sistema reste una persona del aforo actual y libere espacio en el local.
**User story (As a / I want / so that):** As a door staff member, I want to record a confirmed attendee exit, so that the shared occupancy reflects the people still inside.

**Priority:** Must
**Estimate:** 3 h-p
**Estimate source:** `specs/EP-001-Gestion-Aforo/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: mantiene correcto el aforo cuando una persona abandona el local. Riesgo: omitir o duplicar salidas produce discrepancias operativas. Dependencias: actualiza el modelo compartido de ocupación que consulta US-002; no depende de la pantalla de US-002.
**Uncertainty:** Low
**Predecessors:** Ninguna; usa el registro compartido de ocupación

#### Acceptance criteria
**US-003-AC-01:** La pantalla principal del escáner debe incluir un botón de acceso rápido denominado "Registrar Salida".
**US-003-AC-02:** Al confirmar la acción, el sistema debe reducir en 1 el contador global de aforo de forma inmediata.
**US-003-AC-03:** El sistema debe guardar un registro interno (log) con la hora exacta en la que se produjo la salida.

#### Verification and constraints
El botón de salida debe tener una ubicación separada del control de escaneo y una etiqueta/icono explícitos; el color no será el único mecanismo para evitar pulsaciones accidentales.

#### Non-functional requirements
- El registro debe ser idempotente frente a reintentos de la misma solicitud y no puede reducir el aforo por debajo de cero.
- La confirmación de la salida debe indicar explícitamente si se aplicó o no.

#### Edge cases
- Una salida repetida no reduce el contador por segunda vez.
- Si el sistema no puede confirmar el registro, muestra un resultado pendiente/no confirmado.
- Si no hay asistentes dentro, rechaza la salida y conserva el aforo en cero.


### US-004 Cerrar puertas ante una emergencia
> Como gerente de sala, quiero activar un botón de emergencia de "Cierre de puertas" en mi panel de control, para bloquear de inmediato todos los escáneres de los porteros ante una incidencia o inspección.
**User story (As a / I want / so that):** As a venue manager, I want to suspend access during an emergency, so that door staff stop admitting attendees until the incident is resolved.

**Priority:** Should
**Estimate:** 4 h-p
**Estimate source:** `specs/EP-001-Gestion-Aforo/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: aporta una respuesta operativa ante incidentes, pero no sustituye el recorrido normal de validación. Riesgo: un bloqueo accidental interrumpe accesos; por eso requiere confirmación y autorización. Dependencias: coordina el estado de US-001 y el panel de US-002.
**Uncertainty:** Medium
**Predecessors:** US-001, US-002

#### Acceptance criteria
**US-004-AC-01:** El botón de cierre de emergencia debe requerir un cuadro de diálogo de doble confirmación ("¿Seguro que desea bloquear los accesos?") para activarse.
**US-004-AC-02:** Al activarse, todos los dispositivos del personal de puerta deben bloquear la cámara y mostrar una pantalla estática roja con el texto "Accesos Suspendidos".
**US-004-AC-03:** Únicamente un usuario logueado con el rol de Gerente podrá revertir este estado para reanudar la actividad normal.
**US-004-AC-04:** El estado de cierre se identificará mediante texto e icono además de un color; no dependerá de una pantalla roja para comunicar la suspensión.

#### Verification and constraints
El bloqueo debe propagarse y hacerse efectivo en todos los dispositivos conectados a la red del local en un tiempo máximo de 2 segundos tras la confirmación.

#### Non-functional requirements
- La propagación debe cumplir los 2 segundos de la verificación cuando los dispositivos estén conectados; los dispositivos sin conexión deben identificarse como no confirmados.
- Solo la cuenta autorizada de gerente puede iniciar o revertir el cierre.

#### Edge cases
- Una pérdida de conexión durante la activación no debe informar éxito hasta confirmar el estado.
- Un usuario sin rol de gerente no puede activar ni revertir el cierre.
- Una segunda petición del mismo estado no debe producir estados inconsistentes.


### US-005 Consultar historial de accesos por franja horaria
> Como gerente de sala, quiero visualizar una gráfica simple con el número de entradas validadas por cada hora, para analizar los picos de mayor afluencia y planificar mejor los turnos del personal en el futuro.
**User story (As a / I want / so that):** As a venue manager, I want to review validated entries by time interval, so that I can understand attendance patterns for the current session.

**Priority:** Could
**Estimate:** 6 h-p
**Estimate source:** `specs/EP-001-Gestion-Aforo/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: facilita análisis posterior, sin ser necesario para validar entradas o mantener aforo. Riesgo: una consulta costosa podría degradar US-002. Dependencias: necesita datos de US-001; se prioriza después del contador en tiempo real.
**Uncertainty:** High
**Predecessors:** US-001

#### Acceptance criteria
**US-005-AC-01:** El panel de estadísticas debe mostrar un gráfico de barras que agrupe las entradas validadas en intervalos de 60 minutos.
**US-005-AC-02:** Al pasar el cursor (o pulsar) sobre una barra, debe aparecer un recuadro indicando el número exacto de personas que entraron en esa franja.
**US-005-AC-03:** Los datos mostrados deben corresponder únicamente a la sesión de la noche en curso, reiniciándose al cerrar la jornada.
**US-005-AC-04:** Si todavía no hay accesos en la sesión, se mostrará un estado vacío explícito y no un gráfico engañoso.

#### Verification and constraints
La generación del gráfico no debe ralentizar el rendimiento del contador en tiempo real (US-002).

#### Non-functional requirements
- Consultar el historial no debe degradar la actualización de aforo definida en US-002.
- La gráfica debe incluir etiquetas o tabla accesible con los valores, además de la representación visual.

#### Edge cases
- Sin eventos registrados, se muestra el estado vacío.
- Si el historial no está disponible, no se presenta como actualizado y se permite reintentar.
- El inicio y fin de la sesión de noche requieren una zona horaria configurada; si no existe configuración, el intervalo se marca pendiente y no se inventa.
