# EP-004 Reservas de Zonas VIP y Pagos Compartidos

**Scope status:** Deferred pending Product Owner ratification of DEC-001. This epic is not part of the current approved baseline; its stories are draft and not Ready for iteration commitment.
**Scope decision:** The requester selected deferral on 2026-10-14; formal PO authority/ratification remains pending.

**Candidate goal relationship:** G-01 only if a future scope expansion is approved; current S-02 does not include VIP reservations or shared payment.
**Iteration assignments:** If this epic is later approved, its iteration allocation belongs only in the planning workbook.
**Baseline:** requirements-v1-reviewed
**Boundary:** Todo el proceso de reserva, selección de productos y pagos será estrictamente simulado con datos ficticios. Queda expresamente excluida la integración con pasarelas de pago reales o TPVs del local.

## Epic outcome
El cliente puede explorar visualmente la disponibilidad de los reservados VIP, configurar su reserva añadiendo productos anticipados y simular un pago fraccionado con su grupo de amigos.

## Stories

### US-014 Visualizar mapa interactivo de mesas
> Como cliente, quiero ver un plano del local con las zonas VIP disponibles y ocupadas, para elegir dónde quiero mi reservado según la ubicación de la pista o la cabina.
**User story (As a / I want / so that):** As an attendee, I want to view synthetic VIP table availability, so that I can choose a reservation option autonomously.

**Priority:** Should
**Estimate:** 6 h-p
**Estimate source:** Draft estimate in `specs/EP-004-Reservas-Zonas-VIP/spec.md`; not approved for the current scope; estimator/date pending.
**Priority rationale:** Valor: facilita la exploración autónoma de reservas ficticias contempladas en S-02/G-01. Riesgo: disponibilidad desactualizada puede prometer la misma mesa a varias personas. Dependencias: US-015 y US-016 consumen la mesa seleccionada; el catálogo inicial no requiere otra historia.
**Uncertainty:** Medium
**Predecessors:** Ninguna

#### Acceptance criteria
**US-014-AC-01:** La interfaz debe mostrar un mapa del local donde los estados libre y ocupado se distingan mediante texto o icono además de sus colores.
**US-014-AC-02:** Al pulsar sobre una mesa libre, se desplegará una tarjeta indicando el precio mínimo y la capacidad máxima de personas.
**US-014-AC-03:** El estado de las mesas debe actualizarse para evitar reservas simultáneas de la misma zona.
**US-014-AC-04:** Si otra reserva confirma la mesa antes que el cliente, el sistema informará que ya no está disponible, actualizará el estado y permitirá elegir otra mesa.
**US-014-AC-05:** Si no se puede confirmar el estado actual, el sistema indicará que la disponibilidad no está confirmada y no mostrará la mesa como reservada por el cliente.

#### Verification and constraints
El mapa puede ser un esquema simplificado (por ejemplo, una cuadrícula o matriz), no es obligatorio que sea un renderizado en 3D o complejo.

#### Need and objective
**Need:** El asistente necesita conocer qué opciones de reservado ficticio están disponibles antes de seleccionar una.
**Objective:** Contribuir a G-01 y al alcance S-02 mediante una consulta autónoma de reservas sintéticas. Esta relación no amplía el alcance a reservas comerciales reales.

#### Business rules
- Una mesa sólo puede confirmarse para una reserva a la vez.
- La selección visual no garantiza la reserva; la disponibilidad debe confirmarse al completar la acción de reserva.
- Si dos clientes compiten por una mesa, sólo una confirmación puede tener éxito; el otro recibe el resultado de AC-04.
- Precio mínimo y capacidad se muestran asociados a la misma mesa seleccionada.

#### Constraints
- Se muestran únicamente mesas y reservas sintéticas; no se conecta a inventario comercial del local.
- El plano puede ser una cuadrícula o matriz y no requiere representación 3D.
- El alcance de esta historia es consultar/seleccionar disponibilidad; no define duración de retención ni caducidad de una reserva provisional.

#### Non-functional requirements
- La disponibilidad confirmada debe ser consistente ante selecciones concurrentes; no se presenta un estado obsoleto como confirmado.
- Estados libre/ocupada deben distinguirse con texto o símbolo además del color para accesibilidad.
- Los controles del mapa deben tener etiquetas accesibles y ser operables sin interacción exclusiva de puntero.

#### Edge cases
- La mesa cambia a ocupada tras cargar el mapa: informar, actualizar y permitir elegir otra.
- Se pierde la conexión al confirmar: mostrar resultado no confirmado y permitir consultar/reintentar sin duplicar la reserva.
- El catálogo no contiene mesas disponibles: mostrar un estado vacío, sin habilitar selección.
- Dos solicitudes concurrentes compiten por la misma mesa: confirmar sólo una y rechazar la otra de forma explicable.

#### Dependencies and assumptions
- US-015 y US-016 dependen de la mesa seleccionada por esta historia.
- Supuesto: el entorno de prueba proporciona identificadores, ubicación, capacidad, precio mínimo y estado sintéticos.
- El mecanismo y momento exacto que convierte la selección en reserva confirmada debe acordarse antes de implementar retenciones/caducidad.


### US-015 Pre-seleccionar botellas (Simulación)
> Como cliente VIP, quiero elegir las botellas y complementos de mi mesa durante el proceso de reserva, para que estén preparadas cuando mi grupo llegue al local.

**Priority:** Could
**Estimate:** 4 h-p
**Estimate source:** Draft estimate in `specs/EP-004-Reservas-Zonas-VIP/spec.md`; not approved for the current scope; estimator/date pending.
**Priority rationale:** Valor: añade personalización opcional a una reserva VIP. Riesgo: precios o mínimos inconsistentes confunden el total simulado. Dependencias: necesita una mesa seleccionada en US-014 y no bloquea el flujo básico de reserva.
**Uncertainty:** Low
**Predecessors:** US-014

#### Acceptance criteria
**US-015-AC-01:** Tras seleccionar una mesa (US-014), el sistema mostrará un catálogo simulado de bebidas y precios.
**US-015-AC-02:** El cliente podrá añadir o quitar productos ajustándose al gasto mínimo exigido por la mesa elegida.
**US-015-AC-03:** El sistema calculará el precio total en tiempo real sumando los productos seleccionados.

#### Verification and constraints
El catálogo se cargará desde una lista estática de productos ficticios.


### US-016 Pagar reserva compartida (Simulación)
> Como cliente, quiero generar un enlace de pago fraccionado para mi grupo, para que cada amigo pague su parte de la mesa VIP antes de llegar al local de forma independiente.

**Priority:** Could
**Estimate:** 7 h-p
**Estimate source:** Draft estimate in `specs/EP-004-Reservas-Zonas-VIP/spec.md`; not approved for the current scope; estimator/date pending.
**Priority rationale:** Valor: permite una simulación grupal avanzada, no necesaria para explorar o reservar la mesa. Riesgo: pagos parciales, reintentos y expiración elevan la complejidad. Dependencias: requiere mesa de US-014 y total de US-015.
**Uncertainty:** High
**Predecessors:** US-014, US-015

#### Acceptance criteria
**US-016-AC-01:** El cliente organizador podrá introducir el número de amigos para dividir el importe total a partes iguales.
**US-016-AC-02:** El sistema generará un enlace único que el organizador podrá compartir.
**US-016-AC-03:** Al entrar al enlace, cada usuario podrá pulsar "Simular Pago", lo que rellenará una barra de progreso del pago total.
**US-016-AC-04:** La reserva solo se marcará como "Confirmada" cuando la barra de progreso alcance el 100%.

#### Verification and constraints
La lógica debe controlar escenarios de errores, como que alguien intente pagar más de su parte o que el pago expire tras 24 horas sin completarse.
