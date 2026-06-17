# Registro de bugs priorizado

Completa esta tabla con los errores encontrados durante la revisión del proyecto.

## Escala sugerida

**Severidad:** Crítica, Alta, Media, Baja.  
**Prioridad:** P1, P2, P3, P4.  
**Estado:** Abierto, En corrección, Corregido, Pendiente, No reproducible.

| ID | Título del bug | Tipo de error | Archivo / línea aproximada | Pasos para reproducir | Resultado esperado | Resultado obtenido | Evidencia | Severidad | Prioridad | Estado |
|---|---|---|---|---|---|---|---|---|---|---|
| **BUG-001** | Desajuste de IDs en el formulario del DOM | Error de referencia (`TypeError`) | `app.js` / Línea 203 | 1. Abrir `index.html`. 2. Abrir la consola (`F12`). 3. Intentar interactuar con la interfaz. | El script debe enlazar el evento `submit` al formulario dinámicamente. | Lanza excepción de elemento `null` interrumpiendo el hilo de JS. | `01_consola_inicial.png` | Crítica | P1 | Corregido |
| **BUG-002** | Operador condicional invertido en campo Edad | Bug de lógica de control | `app.js` / Línea 31 | 1. Ingresar una edad inválida (ej. `5` o `90`). 2. Intentar registrar participante. | El sistema debe rechazar el registro lanzando un mensaje de error. | Aprueba el registro debido al uso de un operador `&&` en vez de `||`. | `04_tests_verdes.png` | Alta | P2 | Corregido |
| **BUG-003** | Validación defectuosa por método en Teléfono | Bug de lógica funcional | `app.js` / Línea 26 | 1. Ingresar un número celular válido de 10 dígitos. 2. Enviar el formulario. | Permitir el avance del flujo si la cadena contiene 10 caracteres numéricos. | Rechaza números válidos porque evalúa `.includes(10)` en vez de la longitud. | `04_tests_verdes.png` | Alta | P2 | Corregido |
| **BUG-004** | Operador condicional erróneo en Clasificación | Bug de lógica funcional | `app.js` / Línea 53 | 1. Registrar un usuario con asistencia de 60 y 2 actividades. | Clasificar de manera estricta al participante en el estado "En seguimiento". | Aplica una lógica flexible de tipo `||` otorgando estados erróneos. | `04_tests_verdes.png` | Media | P2 | Corregido |
| **BUG-005** | Caída en cascada por falta de sentencias Break | Error de estructura de control | `app.js` / Línea 65 | 1. Seleccionar el taller de "Huerta" o "Programación". 2. Enviar registro. | Asignar los cupos sugeridos parametrizados para cada taller independiente. | El flujo cae de largo hasta el `default`, asignando siempre un cupo de 10. | `04_tests_verdes.png` | Media | P3 | Corregido |
| **BUG-006** | Asignación en vez de comparación en Filtro | Bug de sintaxis lógica | `app.js` / Línea 111 | 1. Observar el panel dinámico de indicadores en la zona inferior. | Filtrar y contar los elementos que cumplan estrictamente con una condición. | Sobreescribe el estado de todos los registros al usar un solo operador `=`. | `05_formulario_exitoso.png` | Media | P3 | Corregido |
| **BUG-007** | Desbordamiento de índice en ciclo de Resumen | Desbordamiento (`Out of bounds`) | `app.js` / Línea 146 | 1. Invocar la función encargada de consolidar la cadena del resumen. | Iterar de forma segura dentro de los límites reales de almacenamiento del array. | Lanza una excepción al evaluar con un rango `<= registros.length`. | `04_tests_verdes.png` | Media | P3 | Corregido |
| **BUG-008** | Inconsistencia de ID en la inserción de filas | Error de referencia del DOM | `app.js` / Línea 94 | 1. Diligenciar el formulario con parámetros válidos y enviar. | Renderizar e insertar una nueva fila dinámica en el elemento contenedor. | Falla al buscar un ID inexistente (`tabla-body` en vez de `tbody-registros`). | `05_formulario_exitoso.png` | Alta | P2 | Corregido |
## Priorización final

Indica los tres bugs que corregirás primero y justifica la decisión.

| Orden | ID del bug | Justificación técnica | Riesgo si no se corrige |
|---|---|---|---|
| **1** | BUG-001 | Es un error de tipo bloqueante que frena por completo el hilo principal de ejecución de JavaScript en el navegador, impidiendo el mapeo del DOM y la escucha de cualquier evento en la interfaz. | La aplicación queda totalmente obsoleta, inerte y el usuario no puede usar ningún botón ni formulario. |
| **2** | BUG-008 | Aunque el enlazado del formulario funcione, este bug rompe la lógica de presentación visual en el frontend al intentar inyectar código dinámico en un nodo contenedor (`tbody`) que posee un ID incorrecto. | Los datos procesados se pierden en la memoria volátil y jamás se renderizan en la interfaz de usuario, rompiendo la experiencia visual. |
| **3** | BUG-002 | Afecta directamente las reglas de consistencia de la base de datos simulada y la lógica del negocio, permitiendo que se filtren registros corruptos con edades que violan los límites institucionales. | Pérdida total de la integridad de los datos recogidos, alterando las estadísticas del programa y los indicadores del panel. |