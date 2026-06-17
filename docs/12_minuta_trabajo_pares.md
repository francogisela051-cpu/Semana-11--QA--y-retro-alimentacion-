# Minuta de trabajo en pares o equipo

## Datos

- **Integrantes:** Everaldy Ayala Usuga (Colaboradores de revisión: Alejandra Valencia y Alejandro Velazquez)
- **Fecha:** 23 de mayo de 2026
- **Proyecto revisado:** Verificador de participación comunitaria (Depurado Individual)
- **Modalidad:** Individual (con sesiones de coevaluación y revisión cruzada en equipo)

## Acuerdos de trabajo

| Acuerdo | Responsable | Estado |
|---|---|---|
| Revisar consola inicial | Yo misma | **Completado** |
| Ejecutar pruebas funcionales | Yo misma | **Completado** |
| Registrar bugs | Yo misma | **Completado** |
| Priorizar bugs | Yo misma | **Completado** |
| Aplicar correcciones | Yo misma | **Completado** |
| Completar plan de mejora | Yo misma | **Completado** |
| Preparar entrega | Yo misma | **Completado** |

## Decisiones tomadas

1. **Trabajar la depuración de forma individual pero cruzando ideas:** Decidimos hacer la exploración de bugs por nuestra cuenta para entrenar el ojo clínico en QA, pero armamos mini sesiones por Teams/WhatsApp para comparar si a todos nos daban los mismos errores lógicos.
2. **Priorizar el error del DOM por encima de todo:** La primera decisión técnica fuerte fue meterle mano al BUG-001 (el ID del formulario), porque entendimos que si la consola estaba rota y congelada, no valía la pena perder tiempo revisando las otras funciones hasta que el JS reaccionara.
3. **Dejar claras las limitaciones en el plan de mejora:** Decidimos ser sinceros en la entrega y documentar que, aunque la app quedó pasando al 100% en los tests, todavía tiene el riesgo de aceptar letras en el teléfono y que los datos son volátiles, dejándolo como meta para la próxima versión.

## Dificultades encontradas

1. **El enredo con el operador de la Edad:** Al principio me dio un dolor de cabeza entender por qué el formulario dejaba registrar niños de 5 años. Me costó un momento pillar que el error era que el código original usaba un `&&` en vez de un `||`, haciendo que la condición fuera lógicamente imposible de cumplir.
2. **La caída en cascada de los cupos:** No entendía por qué, sin importar el taller que eligiera, la tabla siempre pintaba un cupo de 10. Tuve que revisar con lupa la estructura del Switch hasta notar que se les había olvidado poner los `break;` al final de cada caso.
3. **El desconfigurado de las tablas en Markdown:** Al pasar la información a los archivos `.md`, el texto largo hacía que las tablas se rompieran y se duplicaran visualmente en VS Code. Tuve que aprender a organizar todo en una sola línea limpia por fila para que se renderizara bien.

## Aprendizajes del equipo

1. **La consola es nuestra mejor amiga:** Aprendí que lo primero que se hace al revisar un proyecto es abrir la pestaña de Desarrollador (`F12`). La traza del error en rojo te dice exactamente en qué línea y por qué se está quejando el sistema, lo que ahorra horas de adivinanzas.
2. **QA es tan importante como programar:** Me di cuenta de que un código puede verse muy bonito y ordenado, pero si no se le hacen pruebas de regresión con datos inválidos o casos extremos (como textos vacíos o números fuera de rango), el sistema se va a romper apenas lo use una persona real.
3. **El valor de la revisión cruzada:** Aunque programé sola, revisar el resultado final con Alejandra y Alejandro me ayudó a pulir detalles clave (como meter el `trim()` para limpiar espacios vacíos y mejorar el contraste de las etiquetas). Dos cabezas piensan mejor que una, incluso en proyectos individuales.