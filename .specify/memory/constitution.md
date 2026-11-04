# Constitución del Proyecto — NightShift Software

**Cliente:** Grupo Velvet Nights S.L.
**Versión:** 0.0.2
**Fecha de ratificación:** 2026-09-30
**Última modificación:** 2026-10-14
**Estado de 0.0.2:** Pendiente de ratificación del equipo; hasta entonces la última versión ratificada es 0.0.1.

Esta constitución es la norma superior y estable del proyecto. Define los principios no negociables que deben respetarse en todas las especificaciones, planes, tareas e implementaciones. No describe qué funcionalidades se construyen ni cómo se implementan: establece los principios de gobierno y las directrices de desarrollo de NightShift Software.

---

## 1. Core Principles

### 1.1 Especificación y trazabilidad

Toda funcionalidad debe estar especificada antes de implementarse. Debe poder seguirse la relación:

**Necesidad → requisito → plan → tareas → código → pruebas**

- No se implementarán funcionalidades que no estén justificadas por una especificación aprobada.
- Cada artefacto (historia, tarea, commit, prueba) debe referenciar el requisito u objetivo que lo origina.

### 1.2 Disciplina de alcance del MVP

El equipo se centra en las funcionalidades necesarias para un producto mínimo viable que conecte a los tres actores clave: asistente, relaciones públicas (RRPP) y personal de puerta.

Toda ampliación de alcance deberá:

- Estar justificada.
- Ser priorizada.
- Evaluar su impacto en plazo, coste y capacidad del equipo.
- Quedar documentada como decisión humana.

### 1.3 Calidad, comportamiento verificable y alta concurrencia

Los requisitos deben ser claros, medibles y comprobables. El sistema debe mantener su corrección en los picos de máxima demanda propios de las puertas de los locales nocturnos. Cada funcionalidad debe incluir:

- Criterios de aceptación y tratamiento de errores.
- Pruebas automatizadas (unitarias, de integración y carga) y cumplimiento de la Definition of Done.
- Sincronización y consistencia: El aforo debe ser consistente en tiempo real, una entrada no puede validarse dos veces ni contarse de forma errónea.
- Tolerancia a fallos: Las operaciones críticas (compra, validación, atribución de comisión) deben ser idempotentes, deterministas y tolerantes a reintentos.

Una funcionalidad no se considera terminada únicamente porque el código funcione en condiciones ideales.

### 1.4 Seguridad, privacidad y datos sintéticos

El proyecto utilizará exclusivamente datos ficticios o sintéticos. La solución deberá:

- Evitar el uso de datos personales, bancarios o de pago reales.
- Validar todas las entradas.
- Proteger la información y las operaciones, incluyendo la autenticidad de los códigos QR y de los enlaces de RRPP frente a falsificación o reutilización.
- Aplicar control de acceso por rol (asistente, RRPP, personal de puerta, administración).
- Considerar la seguridad desde la especificación hasta las pruebas.

### 1.5 Usabilidad y accesibilidad

Las funcionalidades deben ser comprensibles, consistentes y fáciles de utilizar en su contexto real de uso.

- El flujo de compra debe ser autónomo y sin esperas para el asistente.
- La interfaz de puerta debe ser rápida, legible en condiciones de poca luz y utilizable con una sola mano.
- Los mensajes de error deben ser claros y ofrecer una forma de continuar.
- Los flujos principales deberán diseñarse teniendo en cuenta la accesibilidad y la diversidad de usuarios.

### 1.6 Uso responsable de asistentes de IA

- Las propuestas de asistentes de IA son material de apoyo, no decisiones ni evidencia de aprobación.
- Una persona del equipo debe comprobar la evidencia, exactitud, alcance y consecuencias de cada propuesta antes de incorporarla a un artefacto o al producto.
- El uso relevante de IA y la disposición humana de sus propuestas se registra en el log de trazabilidad del proyecto, incluyendo agente/ID, entrada, propuesta, justificación, decisión, modelo y herramienta cuando esos datos estén disponibles.
- No se acepta ni se presenta una propuesta como decisión aprobada sin validación humana explícita; si el modelo o la herramienta no pueden identificarse, se registra como no disponible, no se inventa.

---

## 2. Development and Documentation Standards

### 2.1 Responsabilidad de cada artefacto

| Artefacto | Responsabilidad |
|---|---|
| `mission.md` | Explica por qué existe el producto, para quién y qué valor aporta. |
| `goals.md` | Define objetivos, métricas, alcance, exclusiones, supuestos y restricciones. |
| `spec.md` | Explica **qué** se necesita y **por qué**. |
| `plan.md` | Explica **cómo** se abordará técnicamente. |
| `tasks.md` | Descompone el plan en trabajo concreto y ejecutable. |
| `docs/organization/capacity.md` | Registra disponibilidad y capacidad por integrante e iteración, su fuente, deducciones y comparación con el esfuerzo. |
| `specs/definition-of-ready.md` / `specs/definition-of-done.md` | Definen criterios compartidos para iniciar y cerrar historias. |
| `docs/organization/Planificacion_NightShift_Sprint1.xlsx` | Artefacto de planificación del equipo; fórmulas, tarifas y resultados requieren datos acordados y comprobación. |
| Wiki del repositorio | Registra decisiones humanas y justificaciones; el log de IA conserva la trazabilidad de propuestas y disposiciones. |

Se mantiene una separación estricta entre el qué/por qué (especificación) y el cómo (plan). Las especificaciones no prescriben tecnología; los planes no introducen requisitos nuevos.

### 2.2 Documentación de decisiones

- Las decisiones importantes se documentan en la Wiki del repositorio, con su justificación y alternativas descartadas.
- Los artefactos deben mantener la trazabilidad entre ellos y actualizarse cuando cambien sus referencias.

### 2.3 Control de versiones

- Todo el trabajo se realiza en el repositorio Git del proyecto mediante ramas y *pull requests* revisadas por al menos un compañero.
- Los mensajes de commit deben ser descriptivos y referenciar la historia o tarea asociada.

### 2.4 Marco de trabajo ágil

- Se trabaja con Scrum en iteraciones de **una semana**, con entregas incrementales revisables.
- Se limita el trabajo en curso (WIP) para favorecer la finalización sobre el inicio de tareas.
- Cada iteración debe producir un incremento estable y ejecutable.

---

## 3. Quality Gates and Delivery Workflow

Antes de aprobar una especificación, un plan o una implementación, debe comprobarse que:

- Cumple los principios de esta constitución.
- Respeta el alcance acordado en `goals.md`.
- Mantiene la trazabilidad.
- Define criterios verificables.
- Considera calidad, pruebas, seguridad y accesibilidad.
- No contiene decisiones importantes sin justificar.

Comprobaciones adicionales antes de aceptar una implementación:

- Las pruebas automatizadas pasan y cubren los criterios de aceptación.
- Los escenarios críticos de concurrencia (compra simultánea, doble escaneo de QR, sincronización de aforo, atribución de comisiones) han sido verificados.
- No existen defectos bloqueantes abiertos.
- La documentación necesaria para instalar y ejecutar el incremento está actualizada.
- Se ha realizado revisión por pares del código.

---

## 4. Governance

- La constitución tiene prioridad sobre el resto de los documentos del proyecto.
- Cualquier modificación deberá:
  - Estar justificada.
  - Ser aprobada explícitamente por el equipo.
  - Registrar la fecha y la nueva versión.
  - Indicar qué documentos o decisiones resultan afectados.
- El versionado sigue el esquema semántico: **MAJOR** para cambios o eliminación de principios, **MINOR** para nuevos principios o secciones, **PATCH** para aclaraciones.
- Las excepciones deberán ser explícitas, justificadas, aprobadas y, cuando sea posible, temporales, registrándose en la Wiki.
- La constitución se revisará al cierre de cada hito del proyecto.

---

## Historial de versiones

| Versión | Fecha | Cambio |
|---|---|---|
| 0.0.1 | 2026-09-30 | Versión inicial. |
| 0.0.2 | 2026-10-14 | Añade revisión y trazabilidad de propuestas de IA y reconoce los artefactos compartidos de capacidad, calidad y planificación. |
