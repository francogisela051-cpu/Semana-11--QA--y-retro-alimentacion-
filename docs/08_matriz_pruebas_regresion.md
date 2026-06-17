# Matriz de pruebas de regresión

Después de corregir bugs, ejecuta nuevamente estos casos para verificar que el sistema siga funcionando.

| ID prueba | Caso | Datos de entrada | Resultado esperado | Resultado obtenido | Estado | Evidencia |
|---|---|---|---|---|---|---|
| **PR-001** | Carga inicial | Abrir `index.html` | La página carga sin errores críticos en consola | Cargó perfecto, el formulario está activo y la consola quedó en limpio. | **Exitosa** | `03_correccion_aplicada.png` |
| **PR-002** | Nombre inválido | Nombre: `Al` | El sistema muestra error de nombre | Saca la alerta diciendo que debe tener al menos 3 caracteres. | **Exitosa** | `04_tests_verdes.png` |
| **PR-003** | Teléfono inválido | Teléfono: `123` | El sistema muestra error de teléfono | Rebota el registro porque no tiene los 10 dígitos exactos. | **Exitosa** | `04_tests_verdes.png` |
| **PR-004** | Edad menor | Edad: `10` | El sistema muestra error de edad | Lanza el error avisando que la edad permitida es de 12 años en adelante. | **Exitosa** | `04_tests_verdes.png` |
| **PR-005** | Edad mayor | Edad: `81` | El sistema muestra error de edad | Frena el registro porque se pasa del límite máximo de 80 años. | **Exitosa** | `04_tests_verdes.png` |
| **PR-006** | Asistencia inválida | Asistencia: `120` | El sistema muestra error de asistencia | Muestra el mensaje de que la asistencia no puede pasar de 100%. | **Exitosa** | `04_tests_verdes.png` |
| **PR-007** | Registro válido certificado | Asistencia 80, actividades 3 | Estado `Certificado` | Registra de una, saca el recuadro verde y lo marca como "Certificado". | **Exitosa** | `05_formulario_exitoso.png` |
| **PR-008** | Registro válido seguimiento | Asistencia 60, actividades 2 | Estado `En seguimiento` | Lo procesa bien y lo añade a la tabla con la etiqueta amarilla. | **Exitosa** | `04_tests_verdes.png` |
| **PR-009** | Registro que requiere refuerzo | Asistencia 40, actividades 1 | Estado `Requiere refuerzo` | Lo agrega de forma correcta con la etiqueta roja de alerta. | **Exitosa** | `04_tests_verdes.png` |
| **PR-010** | Pruebas automatizadas | Abrir `tests.html` | Mejoran o aprueban las pruebas | Corrieron todos los scripts de prueba y pasaron el 100%. | **Exitosa** | `04_tests_verdes.png` |

## Resultado general

- **Total pruebas ejecutadas:** 10
- **Total aprobadas:** 10
- **Total fallidas:** 0
- **Observaciones:** Tras aplicar todas las refactorizaciones en `app.js`, volví a correr cada uno de los escenarios límite de forma manual y automatizada. El sistema quedó completamente estable, respondiendo bien tanto a los datos correctos como a los inválidos. Las pruebas pasaron con un éxito rotundo de 10/10.