# Plan de mejora

El plan de mejora permite transformar los hallazgos de QA en acciones concretas para fortalecer el proyecto.

## Objetivo del plan

Describe qué se busca mejorar en la siguiente versión del proyecto.

**Objetivo:** Lo que busco con este plan es que en la próxima versión la aplicación sea mucho más segura con la información que recibe, que no se borre todo si el usuario recarga la página por accidente, y dejar el código bien organizado por si más adelante queremos meterle más talleres o funciones.

## Acciones de mejora

| ID | Mejora propuesta | Relación con bug o necesidad | Prioridad | Responsable | Criterio de aceptación | Evidencia esperada |
|---|---|---|---|---|---|---|
| **PM-001** | Validar el teléfono usando una expresión regular (Regex). | BUG-003. Para que no deje pasar letras o texto en vez de números de verdad. | Alta | Yo misma | El campo debe rebotar cualquier letra y aceptar solo números del 0 al 9. | Código en `app.js` con el Regex `/^\d{10}$/` funcionando bien. |
| **PM-002** | Guardar los datos en el navegador usando `localStorage`. | Necesidad general. Que no se pierda la info si se refresca la página. | Alta | Yo misma | Al recargar la página, los participantes que ya registré deben seguir apareciendo en la tabla. | Funciones de guardar y cargar añadidas en el script de JS. |
| **PM-003** | Hacer alertas visuales más bonitas con CSS (tipo burbujas flotantes). | Estética. Los mensajes de error actuales mueven todo el diseño hacia abajo. | Media | Yo misma | Las alertas deben salir flotando de forma elegante sin dañar la estructura del formulario. | Captura de pantalla de la interfaz con el nuevo diseño de las alertas. |
| **PM-004** | Separar las validaciones en otro archivo independiente (`validaciones.js`). | Orden. Para que el código no quede tan largo y sea fácil de entender. | Media | Yo misma | El archivo principal `app.js` solo maneja los eventos de la página, y la lógica va aparte. | Estructura de archivos limpia y ordenada en las carpetas del proyecto. |

## Mejoras sugeridas por pares

| Compañero/equipo que sugirió | Recomendación recibida | ¿Se aplicó? | Justificación |
|---|---|---|---|
| Alejandra Valencia | Me dijo que era mejor usar `trim()` en los campos de texto por si la gente ponía espacios en blanco al principio o al final sin querer. | Sí | Tenía toda la razón. Así evitamos que pasen nombres falsos que solo tengan espacios vacíos. |
| Alejandro Velazquez | Me recomendó cambiar los colores de las etiquetas de estado para que contrastaran más y se viera más profesional la tabla. | Sí | Ayuda muchísimo a la vista para que uno note rápido quién está Certificado o En seguimiento. |

## Reflexión final

Responde:

1. ¿Cuál fue el error más importante encontrado?
2. ¿Qué aprendiste sobre depuración sistemática?
3. ¿Cómo ayudó la retroalimentación de pares a mejorar el proyecto?
4. ¿Qué harías diferente en una próxima entrega?

**Respuesta:**

1. **El error más importante:** Definitivamente el enredo con los IDs del formulario al principio (BUG-001). Era un error bloqueante que congelaba la página completa y no dejaba hacer nada. Me enseñó que por más que la lógica de las funciones esté perfecta, si la conexión con el HTML (el DOM) está mal hecha, el sistema simplemente se muere.
2. **Lo que aprendí sobre depuración:** Que no sirve de nada cambiar líneas de código a la loca para ver si de milagro funciona. Depurar es un proceso ordenado: primero abres la consola, entiendes qué te está diciendo el error en rojo, buscas la línea exacta, pruebas con casos extremos (como las edades o teléfonos inválidos) y ahí sí corriges. Así se ahorra un montón de tiempo.
3. **Ayuda de la retroalimentación de pares:** Aunque resolví los bugs y saqué el taller adelante yo sola, sentarme a revisar y charlar el proyecto con Alejandra y Alejandro me sirvió para ver cosas que uno pasa por alto cuando se cicla con su propio código. Ideas como limpiar los textos con `trim()` o cuadrar bien los colores de la tabla hicieron que el resultado final quedara muchísimo mejor.
4. **Qué haría diferente en el futuro:** En la próxima entrega, lo primero que haría sería revisar que el HTML y el JavaScript estén bien conectados antes de ponerme a programar funciones complejas. También armaría la suite de pruebas desde el día uno en vez de dejarla para el final, para ir probando cada cosita que programe sobre seguro.