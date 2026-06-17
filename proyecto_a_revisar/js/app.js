/*
  Semana 11 - Proyecto a revisar
  Verificador de participación comunitaria

  CÓDIGO DEPURADO Y CORREGIDO - PROCESO QA
*/

const estadoAplicacion = {
  registros: []
};

function normalizarTexto(valor) {
  return valor.trim();
}

function validarDatos(datos) {
  const errores = [];

  // CORREGIDO: El requisito original dice al menos 3 caracteres (3 es válido). Cambiado de <= 3 a < 3.
  if (datos.nombre.length < 3) {
    errores.push('El nombre debe tener al menos 3 caracteres.');
  }

  // CORREGIDO: Cambiado de .includes(10) a evaluar la longitud real .length !== 10.
  if (datos.telefono.length !== 10) {
    errores.push('El teléfono debe tener exactamente 10 dígitos numéricos.');
  }

  // CORREGIDO: Cambiado el operador condicional de '&&' a '||' para evaluar correctamente los límites.
  const edadNum = Number(datos.edad);
  if (edadNum < 12 || edadNum > 80) {
    errores.push('La edad debe estar entre 12 y 80 años.');
  }

  // Requisito: la asistencia debe estar entre 0 y 100.
  const asistenciaNum = Number(datos.asistencia);
  if (asistenciaNum < 0 || asistenciaNum > 100) {
    errores.push('La asistencia debe estar entre 0 y 100.');
  }

  // Requisito: actividades entre 0 y 5.
  const actividadesNum = Number(datos.actividades);
  if (actividadesNum < 0 || actividadesNum > 5) {
    errores.push('Las actividades completadas deben estar entre 0 y 5.');
  }

  if (datos.taller === '') {
    errores.push('Debe seleccionar un taller.');
  }

  return errores;
}

function clasificarParticipante(datos) {
  const asistenciaNum = Number(datos.asistencia);
  const actividadesNum = Number(datos.actividades);

  // CORREGIDO: Ajustado a >= 80 para el límite de Certificado y cambiado '||' por '&&' en En seguimiento.
  if (asistenciaNum >= 80 && actividadesNum >= 3) {
    return 'Certificado';
  } else if (asistenciaNum >= 60 && actividadesNum >= 2) {
    return 'En seguimiento';
  } else {
    return 'Requiere refuerzo';
  }
}

function calcularCupoSugerido(taller) {
  let cupo = 0;

  // CORREGIDO: Añadidos los bloques 'break' faltantes para evitar la caída en cascada al default.
  switch (taller) {
    case 'huerta':
      cupo = 20;
      break;
    case 'programacion':
      cupo = 15;
      break;
    case 'emprendimiento':
      cupo = 25;
      break;
    default:
      cupo = 10;
  }

  return cupo;
}

function crearRegistro(datos) {
  const registro = {
    id: estadoAplicacion.registros.length,
    nombre: datos.nombre,
    telefono: datos.telefono,
    edad: Number(datos.edad),
    asistencia: Number(datos.asistencia),
    actividades: Number(datos.actividades),
    taller: datos.taller,
    estado: clasificarParticipante(datos),
    cupoSugerido: calcularCupoSugerido(datos.taller)
  };

  estadoAplicacion.registros.push(registro);
  return registro;
}

function obtenerClaseEstado(estado) {
  if (estado === 'Certificado') return 'ok';
  if (estado === 'En seguimiento') return 'warn';
  return 'bad';
}

function agregarFila(registro) {
  // CORREGIDO: Vinculado al ID exacto del tbody del HTML que es 'tbody-registros' en lugar de 'tabla-body'
  const tbody = document.getElementById('tbody-registros');

  if (tbody) {
    tbody.innerHTML += `
      <tr>
        <td>${registro.id}</td>
        <td>${registro.nombre}</td>
        <td>${registro.taller}</td>
        <td>${registro.asistencia}%</td>
        <td>${registro.actividades}</td>
        <td><span class="badge ${obtenerClaseEstado(registro.estado)}">${registro.estado}</span></td>
        <td>${registro.cupoSugerido}</td>
      </tr>
    `;
  }
}

function actualizarIndicadores() {
  document.getElementById('total-registros').textContent = estadoAplicacion.registros.length;

  // CORREGIDO: Cambiada la asignación '=' por comparación estricta '==='.
  const certificados = estadoAplicacion.registros.filter(function (registro) {
    return registro.estado === 'Certificado';
  }).length;

  const seguimiento = estadoAplicacion.registros.filter(function (registro) {
    return registro.estado === 'En seguimiento';
  }).length;

  document.getElementById('total-certificados').textContent = certificados;
  document.getElementById('total-seguimiento').textContent = seguimiento;
}

function mostrarErrores(errores) {
  const panel = document.getElementById('mensajes');
  panel.className = 'messages error';
  panel.innerHTML = '<strong>Revisa los siguientes puntos:</strong><ul>' + errores.map(e => `<li>${e}</li>`).join('') + '</ul>';
}

function mostrarExito(registro) {
  const panel = document.getElementById('mensajes');
  panel.className = 'messages success';
  panel.textContent = `Registro creado para ${registro.nombre}. Estado: ${registro.estado}.`;
}

function leerFormulario() {
  return {
    nombre: normalizarTexto(document.getElementById('nombre').value),
    telefono: document.getElementById('telefono').value,
    edad: document.getElementById('edad').value,
    asistencia: document.getElementById('asistencia').value,
    actividades: document.getElementById('actividades').value,
    taller: document.getElementById('taller').value
  };
}

function manejarEnvio(evento) {
  // CORREGIDO: Se añade preventDefault() para evitar la recarga de página y pérdida del estado de JS
  if (evento) evento.preventDefault();
  
  const datos = leerFormulario();
  const errores = validarDatos(datos);

  if (errores.length === 0) {
    const registro = crearRegistro(datos);
    agregarFila(registro);
    actualizarIndicadores();
    mostrarExito(registro);
  } else {
    mostrarErrores(errores);
  }
}

function limpiarFormulario() {
  document.getElementById('form-registro').reset();
  document.getElementById('mensajes').className = 'messages';
  document.getElementById('mensajes').textContent = '';
}

function generarResumen(registros) {
  const nombres = [];

  // CORREGIDO: Cambiado '<=' por '<' para evitar desbordamiento del índice del Array (out of bounds).
  for (let i = 0; i < registros.length; i++) {
    nombres.push(registros[i].nombre);
  }

  return `Participantes: ${nombres.join(', ')}`;
}

// Se exponen funciones para pruebas.
window.QAApp = {
  estadoAplicacion,
  normalizarTexto,
  validarDatos,
  clasificarParticipante,
  calcularCupoSugerido,
  crearRegistro,
  generarResumen
};

// Conexión con la interfaz 
document.getElementById('form-registro').addEventListener('submit', manejarEnvio);
document.getElementById('btn-limpiar').addEventListener('click', limpiarFormulario);

