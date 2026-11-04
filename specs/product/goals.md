# Objetivos y Alcance (Goals)

## Objetivos

| ID | Objetivo | Resultado esperado |
| :--- | :--- | :--- |
| **G-01** | Autonomía del asistente | El usuario puede completar la compra de su entrada sin fricciones ni esperas, de manera autónoma. |
| **G-02** | Trazabilidad de los Relaciones Públicas (PR) | El sistema asigna correctamente cada entrada vendida al enlace del promotor correspondiente, calculando sus conversiones (entradas asociadas). |
| **G-03** | Sincronización en Puerta | El personal de validación actualiza el estado de la entrada y el aforo del local de forma instantánea y sincronizada. |
| **G-04** | Incremento revisable | Un tercero puede instalar, ejecutar y evaluar de manera estable el incremento desarrollado del sistema. |

G-04 es un objetivo transversal de entrega y calidad, no una épica funcional independiente: aplica a los incrementos de todas las épicas mediante la DoD y las instrucciones de instalación y ejecución.

## Stakeholders

| Stakeholder | Interés / responsabilidad |
|---|---|
| Grupo Velvet Nights S.L. (cliente) | Valida el valor operativo y el alcance del producto simulado. |
| Asistentes | Consultan eventos y usan el flujo de entrada aprobado. |
| Relaciones públicas (RRPP) | Comparten referencias y consultan conversiones atribuibles. |
| Personal de puerta | Valida referencias de entrada y registra operaciones de acceso. |
| Gerencia de sala | Consulta el aforo y responde a incidencias operativas. |
| Administración del entorno | Mantiene eventos, capacidad autorizada y parámetros de prueba. |
| Equipo NightShift Software | Especifica, desarrolla, prueba y entrega incrementos revisables. |

## Indicadores de éxito

| ID | Objetivo | Meta |
| :--- | :--- | :--- |
| **M-01** | G-01 | Al menos cuatro de cinco usuarios de prueba completan el escenario de reserva con éxito en menos de tres minutos y sin ayuda. |
| **M-02** | G-02 | En las pruebas de integración, el 100% de las inscripciones únicas atribuidas a un enlace de RRPP que se validan en puerta aparecen una sola vez como asistentes validados en el panel de ese RRPP (US-011). |
| **M-03** | G-03 | La validación de una entrada simulada actualiza el contador de aforo global sin mostrar discrepancias. |
| **M-04** | G-04 | El incremento dispone de instrucciones reproducibles de instalación y ejecución, puede iniciarse en el entorno acordado y no tiene defectos bloqueantes abiertos en la revisión final. |

## Alcance incluido

El proyecto incluye:
*   **S-01:** Un recorrido esencial y coherente para la compra individual de una entrada ficticia por parte del asistente.
*   **S-02:** Un conjunto controlado de eventos y entradas completamente ficticios.
*   **S-03:** Funcionalidad para que el PR genere un enlace único y visualice un contador de sus conversiones.
*   **S-04:** Una interfaz para el personal de puerta que simule el escaneo/validación de la entrada y actualice el aforo global de manera concurrente.

Las reservas de zonas VIP, la selección de productos y el pago compartido simulados descritos en EP-004 quedan diferidos y no forman parte de S-01–S-04 hasta que el Product Owner apruebe una ampliación de alcance registrada. La selección del solicitante de diferir EP-004 el 2026-10-14 se registra en `docs/organization/decisions.md`; su ratificación formal por el Product Owner queda pendiente.

## Exclusiones

Quedan expresamente fuera del proyecto:
*   **EX-01:** Integración con sistemas de aerolíneas, aeropuertos o servicios comerciales externos; el producto se limita al contexto sintético de ocio nocturno descrito en esta misión.
*   **EX-02:** Pagos reales, liquidaciones económicas a los PRs, emisión de billetes comerciales y operaciones de reembolso reales.
*   **EX-03:** La integración con dispositivos de hardware físicos (el escáner QR se simulará en la interfaz web).

## Supuestos

El desarrollo del proyecto asume que:
*   **A-01:** Los usuarios objetivo (asistentes, RRPP y personal de puerta) disponen de un dispositivo móvil o navegador web funcional y conexión a internet para interactuar con la plataforma.
*   **A-02:** Las pruebas de usabilidad y rendimiento se realizarán en un entorno controlado y sintético que simula un escenario real de venta y validación.

## Horizonte y presupuesto

| Dato | Estado |
|---|---|
| Horizonte / fecha objetivo del proyecto | Pendiente de confirmación del equipo/cliente; no inferir una fecha a partir de la duración de sprint |
| Presupuesto total aprobado y moneda | Pendiente de confirmación |
| Tarifas horarias por rol o integrante | Pendiente de confirmación; necesarias para calcular el coste monetario |
| Estimación de esfuerzo | Horas-persona (h-p), según cada historia; no equivale a duración de calendario |

## Restricciones

El proyecto debe respetar las siguientes condiciones:
*   Prohibición absoluta de utilizar datos personales, bancarios o de identificación reales en el sistema; todos los datos deben ser ficticios o sintéticos.
*   Uso exclusivo de las tecnologías y convenciones aprobadas en el marco del proyecto académico.

## Trazabilidad y Gestión de Cambios

La cadena de trazabilidad será:
Misión -> objetivos -> épicas -> historias -> tareas -> código y pruebas -> evidencias.

Una épica que no contribuya a ningún objetivo establecido se considera fuera del alcance hasta que se apruebe un cambio en `goals.md`.

Cualquier modificación de un objetivo, una métrica, el alcance, una exclusión, un supuesto o una restricción requiere:
1.  Revisión por parte del equipo.
2.  Decisión explícita del Product Owner.
3.  Registro de la decisión.
4.  Revisión del roadmap, las especificaciones, Jira y la capacidad.
5.  Actualización de todas las referencias afectadas.
