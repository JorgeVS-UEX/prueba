# Candidata de alcance: identidad y configuración operativa

**Estado:** Propuesta para decisión del Product Owner; no es una épica aprobada, baseline ni compromiso.
**ID:** Sin ID EP asignado hasta que se apruebe.

## Motivación

La constitución exige control de acceso por rol (asistente, RRPP, personal de puerta y administración). Las historias US-004, US-010 y US-013 hacen referencia a roles o autorización, y US-002 requiere capacidad/aforo configurado. US-006 y US-007 dependen de eventos disponibles. No se encontró una historia aprobada que cubra de extremo a extremo la autenticación, la administración de roles, la configuración de esos datos o un entorno ejecutable.

## Posibles resultados a definir

- Identidad sintética de prueba y autenticación/autorización por los roles de producto exigidos.
- Administración autorizada de eventos ficticios, capacidad inicial/máxima y zona horaria.
- Fuente y edición controlada de condiciones, tarifas de lista y valor de comisión cuando se aprueben.
- Instrucciones y mecanismo verificables para instalar y ejecutar el incremento.

## Decisiones pendientes

- ¿Se incorpora esta capacidad al alcance, se cubre con capacidades ya existentes o se excluye del incremento?
- ¿Quién puede administrar usuarios/roles, eventos, aforo y tarifas?
- ¿Qué configuración es obligatoria y cuál es su fuente autorizada?
- ¿Qué entorno/comandos y pruebas constituyen un incremento ejecutable?

**Responsable sugerido:** Product Owner con el equipo técnico.
**Impacto:** Hasta resolverlo, los flujos con rol y los valores configurables referenciados por las especificaciones no tienen su fuente de configuración completamente trazada; las historias afectadas no deben declararse Ready si la decisión bloquea su implementación o prueba.
