# EP-002 Venta Anticipada al Cliente

**Goals:** G-01 (Autonomía del asistente), G-03 (Sincronización en Puerta)
**Baseline:** requirements-v1-reviewed
**Boundary:** Quedan expresamente excluidos los pagos reales, integraciones bancarias y facturación real. Solo se simulará el flujo de reserva con datos ficticios.
**Iteration assignments:** The planning workbook is the sole source for iteration allocation; this specification defines requirements, estimates and dependencies only.

## Epic outcome
El cliente puede explorar los eventos disponibles de la discoteca, seleccionar su entrada y completar una simulación de compra para obtener un código QR válido que le permita el acceso.

## Stories

### US-006 Consultar cartelera de eventos
> Como cliente, quiero ver una lista de las próximas fiestas programadas, para decidir a qué evento quiero asistir.
**User story (As a / I want / so that):** As an attendee, I want to browse upcoming synthetic events, so that I can choose an event before starting a reservation.

**Priority:** Must
**Estimate:** 4 h-p
**Estimate source:** `specs/EP-002-Venta-Entradas/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: permite iniciar el recorrido de compra autónoma de G-01. Riesgo: sin catálogo comprensible no se puede seleccionar una entrada. Dependencias: alimenta US-007; usa el catálogo ficticio ya previsto.
**Uncertainty:** Low
**Predecessors:** Ninguna

#### Acceptance criteria
**US-006-AC-01:** El sistema mostrará un listado de eventos ordenados cronológicamente por fecha más próxima.
**US-006-AC-02:** Cada tarjeta de evento mostrará su nombre, fecha, hora de apertura, precio de entrada general y una imagen de cartel.
**US-006-AC-03:** Si no hay eventos futuros, el sistema mostrará un estado vacío informativo y no permitirá iniciar una reserva para un evento inexistente.
**US-006-AC-04:** Si el catálogo no está disponible, el sistema mostrará un error comprensible y una acción para reintentar, sin mostrar datos como actuales.

#### Verification and constraints
Los eventos mostrados deben cargarse desde un catálogo de datos ficticios.

#### Need and objective
**Need:** El asistente necesita comparar eventos disponibles antes de decidir si inicia una compra.
**Objective:** Contribuir a G-01 ofreciendo el primer paso del recorrido autónomo de reserva.

#### Business rules
- Se muestran sólo eventos futuros y se ordenan por fecha ascendente.
- El precio y la hora mostrados corresponden al mismo evento seleccionado; no se presenta un evento no disponible como reservable.
- El catálogo es ficticio y controlado para el entorno del proyecto.

#### Constraints
- No se integra con catálogos o servicios comerciales externos.
- Imágenes, nombres, fechas y precios deben ser sintéticos o estar autorizados para el entorno de prueba.

#### Non-functional requirements
- La lista y sus controles deben poder recorrerse con teclado y lector de pantalla; las imágenes informativas tienen texto alternativo.
- La fecha, hora y precio deben presentarse con etiquetas inequívocas y mantener consistencia con el evento seleccionado.

#### Edge cases
- Catálogo vacío: mostrar estado vacío, no una lista en blanco.
- Catálogo inaccesible: indicar que no se pudo cargar y permitir reintento.
- Evento que deja de estar disponible entre consulta y selección: US-007 debe rechazar la reserva y conservar una explicación.

#### Dependencies and assumptions
- US-007 depende de que el usuario elija un evento publicado por US-006.
- Supuesto: el catálogo de prueba contiene fecha, hora, precio e imagen ficticios para cada evento.


### US-007 Comprar entrada anticipada (Simulación)
> Como cliente, quiero completar un formulario de reserva de entrada, para asegurar mi plaza antes de ir a la discoteca y evitar las colas en taquilla.
**User story (As a / I want / so that):** As an attendee, I want to reserve a synthetic event ticket, so that I can receive a test QR for the simulated door flow.

**Priority:** Must
**Estimate:** 7 h-p
**Estimate source:** `specs/EP-002-Venta-Entradas/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: es el resultado esencial de compra autónoma de G-01 y produce la entrada que valida la puerta. Riesgo: errores de duplicación o emisión de QR inválidos bloquean el recorrido. Dependencias: requiere evento de US-006 y contrato QR consumido por US-001.
**Uncertainty:** Medium
**Predecessors:** US-006

#### Acceptance criteria
**US-007-AC-01:** El sistema permitirá elegir una identidad sintética del entorno de prueba y solicitará el tipo de entrada (General o VIP); no pedirá nombre, correo ni datos personales reales.
**US-007-AC-02:** Al pulsar "Confirmar", el sistema simulará una transacción exitosa sin solicitar datos bancarios reales.
**US-007-AC-03:** El sistema generará y mostrará por pantalla un código QR único asociado a esa entrada que posteriormente podrá ser leído por la puerta (US-001).
**US-007-AC-04:** El formulario sólo aceptará una identidad sintética de prueba; no solicitará ni almacenará nombre, correo u otros datos personales reales.
**US-007-AC-05:** Si la simulación falla, el sistema no emitirá un QR válido y mostrará un error con opción de reintento.
**US-007-AC-06:** Repetir la confirmación de la misma solicitud no creará entradas ni QRs adicionales.
**US-007-AC-07:** Si el evento deja de estar disponible antes de confirmar, el sistema no creará la entrada y explicará que debe elegirse otro evento.
**US-007-AC-08:** Si la compra se inicia desde un enlace RRPP válido de US-010, la entrada confirmada conservará esa atribución y podrá contabilizarse en US-011; una compra directa no se atribuirá a ningún RRPP. Si el enlace es inválido, la compra continúa como directa y no se atribuye.
**US-007-AC-09:** Cada reserva confirmada mostrará un localizador único sintético, asociado a la misma entrada y QR, para permitir su consulta en US-009 sin incluir datos personales.

#### Verification and constraints
Existe una restricción estricta de no utilizar pasarelas de pago reales ni recoger datos financieros o personales reales del usuario.

#### Need and objective
**Need:** El asistente necesita completar una reserva ficticia y conservar una entrada que pueda presentar en la puerta.
**Objective:** Contribuir a G-01 mediante un recorrido autónomo; el QR conecta la reserva con la validación sincronizada de G-03.

#### Business rules
- Sólo se confirma una reserva para un evento disponible y un tipo de entrada admitido (General o VIP).
- Cada entrada confirmada tiene una referencia/QR único; una simulación fallida no produce una entrada válida.
- La operación de confirmación es idempotente ante reintentos.
- La atribución RRPP solo se conserva cuando la referencia de origen se valida; no se deduce de datos personales.
- El localizador permite consultar la misma entrada, no crear ni validar otra entrada.

#### Constraints
- La transacción es simulada; no se solicita información financiera ni se conecta con pagos reales.
- Sólo se usa identidad y catálogo sintéticos; no se aceptan ni guardan datos personales reales.
- El QR debe poder validarse por US-001 y no revelar datos personales.
- El localizador tampoco debe contener información personal y no reemplaza el control de acceso de US-001.

#### Non-functional requirements
- Emisión y confirmación deben resistir reintentos sin crear entradas duplicadas.
- La autenticidad del QR debe poder verificarse en puerta y una entrada usada no puede reutilizarse.
- El formulario debe identificar errores de entrada y ser operable con teclado y lector de pantalla.

#### Edge cases
- El evento deja de estar disponible antes de confirmar: no se crea entrada y se informa al usuario.
- Doble pulsación o respuesta perdida: el reintento devuelve el mismo resultado lógico, sin otro QR.
- Falla la generación del QR tras la simulación: la reserva no se presenta como completada; se permite reintento seguro o se comunica el fallo.
- La compra se inicia con una referencia RRPP desconocida o manipulada: puede completarse como compra directa, sin atribución.

#### Dependencies and assumptions
- Depende de US-006 para evento y precio disponibles.
- Comparte con US-001 el contrato funcional de QR de entrada; la validación de puerta sigue siendo responsabilidad de esa historia.
- La atribución desde US-010 y el localizador son requisitos de esta historia; el formato/contrato técnico se define en el plan, no en la especificación.
- Supuesto: el entorno de pruebas proporciona identidades sintéticas y catálogo ficticio.


### US-008 Recibir entrada por correo electrónico
> Como cliente, quiero recibir mi entrada con el código QR por correo electrónico, para poder enseñarla en la puerta aunque cierre la página web.

**Priority:** Should
**Estimate:** 5 h-p
**Estimate source:** `specs/EP-002-Venta-Entradas/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: mejora la recuperación de la entrada, pero US-007 ya la muestra en pantalla. Riesgo: enviar a destinatarios reales infringiría la política de datos sintéticos. Dependencias: necesita una reserva confirmada de US-007 y un buzón de prueba controlado.
**Uncertainty:** Medium
**Predecessors:** US-007

#### Acceptance criteria
**US-008-AC-01:** Tras confirmar la reserva (US-007), el sistema enviará el mensaje únicamente al buzón sintético de prueba configurado; no enviará correos a direcciones reales.
**US-008-AC-02:** El correo incluirá los detalles del evento (fecha, hora, nombre) y la imagen escaneable del código QR.
**US-008-AC-03:** Si el servicio de correo de prueba no está disponible, la reserva y el QR ya confirmados seguirán consultables en pantalla y el sistema comunicará que el envío está pendiente o ha fallado.

#### Verification and constraints
Se utilizará un servidor de correo en modo de prueba o datos sintéticos para evitar enviar spam a direcciones reales.

#### User story
**User story (As a / I want / so that):** As an attendee, I want my confirmed synthetic ticket delivered to the configured test mailbox, so that I can retrieve it after leaving the confirmation page.

#### Non-functional requirements
- El envío solo puede dirigirse al buzón sintético de prueba configurado; no se aceptan direcciones reales proporcionadas por el usuario.
- Los reintentos de envío no crean reservas ni QRs adicionales.

#### Edge cases
- Si el servicio de prueba falla, no se presenta el mensaje como enviado.
- Una repetición del envío debe reutilizar la entrada confirmada.


### US-009 Consultar estado de la entrada (Validez)
> Como cliente, quiero poder consultar si mi entrada sigue siendo válida o si ya ha sido utilizada, para tener seguridad de que podré acceder al local sin problemas.

**Priority:** Could
**Estimate:** 3 h-p
**Estimate source:** `specs/EP-002-Venta-Entradas/spec.md`, baseline declarada `requirements-v1-reviewed`; estimador y fecha de acuerdo pendientes.
**Priority rationale:** Valor: aporta autoservicio para consultar el estado, pero la compra y validación base pueden funcionar sin esta pantalla. Riesgo: una lectura atrasada podría mostrar validez incorrecta. Dependencias: necesita la entrada de US-007 y el estado sincronizado por US-001.
**Uncertainty:** Low
**Predecessors:** US-007

#### Acceptance criteria
**US-009-AC-01:** El cliente podrá introducir el localizador de su entrada en una sección de "Mis Entradas".
**US-009-AC-02:** El sistema indicará si el estado de la entrada es "Válida" o "Ya Utilizada".
**US-009-AC-03:** Si el localizador no existe o no puede verificarse, el sistema indicará que no hay un estado confirmado y no mostrará la entrada como válida.
**US-009-AC-04:** Si el servicio refleja un estado desactualizado, lo identificará como no confirmado y permitirá volver a consultar.

#### Verification and constraints
El estado debe actualizarse automáticamente si la entrada es escaneada en puerta (US-001).

#### User story
**User story (As a / I want / so that):** As an attendee, I want to look up my synthetic ticket using its locator, so that I can see whether it remains valid or has been used at the door.

#### Non-functional requirements
- El localizador debe corresponder a una entrada sintética y no revelar datos personales.
- Los estados se expresan con texto/icono; el color no es la única señal.

#### Edge cases
- Un localizador desconocido no revela información de otras entradas.
- Si el QR se valida mientras se consulta el estado, la siguiente consulta devuelve el estado actualizado o informa que sigue pendiente de sincronización.
