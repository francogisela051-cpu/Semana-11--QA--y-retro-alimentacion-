
# Correcciones aplicadas

Registra las correcciones realizadas en el proyecto.

| ID bug relacionado | Archivo modificado | Descripción de la corrección | Fragmento o explicación técnica | Prueba realizada | Resultado |
|---|---|---|---|---|---|
| **BUG-001** | `app.js` | Arreglé el ID del formulario que estaba mal conectado con el HTML. | Cambié el selector que decía `form-participante` por el ID real: `document.getElementById('form-registro')`. | Mandar datos desde el formulario en la página. | El botón ya reacciona bien y no saca errores de elemento nulo en la consola. |
| **BUG-002** | `app.js` | Corregí el operador para que la validación de edad sí funcione. | Cambié el operador `&&` por un `||` y me aseguré de convertir el dato a número con `Number()`. | Intentar registrar a alguien con 5 años y con 90 años. | El sistema frena el registro y muestra la alerta de error como debe ser. |
| **BUG-003** | `app.js` | Cambié la forma en que se valida la longitud del teléfono. | Quité el `.includes(10)` que venía por defecto y puse la propiedad de longitud real: `.length !== 10`. | Escribir un número de celular normal de 10 dígitos. | Deja pasar el registro sin poner problemas ni trabarse. |
| **BUG-004** | `app.js` | Ajusté la condición para los participantes en seguimiento. | Reemplacé el operador `||` por un `&&` para que obligatoriamente se tengan que cumplir las dos condiciones juntas. | Correr la página de pruebas automáticas (`tests.html`). | El test de "En seguimiento" pasó de una a verde. |
| **BUG-005** | `app.js` | Puse los breaks que hacían falta en el Switch de los talleres. | Añadí la sentencia `break;` al final de cada caso para que el código no se ruede derecho hasta la opción por defecto. | Seleccionar diferentes talleres en el menú y registrar. | La tabla ya muestra el cupo sugerido real que le toca a cada taller (ej. 20 para Huerta). |

## Resumen técnico

Explica en un párrafo qué mejoró en el sistema después de aplicar las correcciones.

**Respuesta:** Después de meterle mano al código y arreglar todos estos detalles, el cambio fue total. La página pasó de estar completamente congelada y rota por el error del ID del formulario, a ser súper interactiva y estable. Al corregir los operadores lógicos y asegurar que los campos traten los datos como números reales, logré que el sistema valide todo a la perfección. Lo mejor de todo es que la suite de pruebas automatizadas (`tests.html`) pasó de fallar a marcar un **10/10 en verde**, y ahora la tabla de abajo actualiza los indicadores y suma los registros en tiempo real sin recargar la página.

## Riesgos que quedaron pendientes

Menciona los errores, limitaciones o mejoras que no alcanzaste a corregir.

**Respuesta:** Aunque el sistema ya funciona al 100% con lo que pedía la guía, quedaron un par de cosas pendientes que se podrían mejorar después: 1. **Falta de control estricto en el teléfono:** El código solo revisa que tenga 10 caracteres, pero si escribo 10 letras iguales las deja pasar; faltaría meterle una expresión regular para obligar a que sean solo números. 2. **Datos volátiles:** Todo se guarda en la memoria del momento del navegador, así que si uno llega a recargar la página de forma manual por fuera del botón, todos los participantes guardados se borran. Sería ideal meterle un `localStorage` más adelante para que los datos no se pierdan.