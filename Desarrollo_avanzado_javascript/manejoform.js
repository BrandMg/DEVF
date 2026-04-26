document.getElementById('registroEvento').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha').value;
  const archivo = document.getElementById('archivo').files[0];

  // Validacion 1: Nombre minimo 3 caracteres
  if (nombre.length < 3) {
    alert('El nombre debe tener al menos 3 caracteres.');
    return;
  }

  // Validacion 2: Al menos un interes
  if (intereses.length === 0) {
    alert('Selecciona al menos un interés.');
    return;
  }

  // Validacion 3: Fecha no puede ser pasada
  const hoy = new Date().toISOString().split("T")[0];
  if (fecha < hoy) {
    alert('La fecha no puede ser anterior a hoy.');
    return;
  }

  // Validacion 4: Archivo (opcional, pero validar tipo y tamaño)
  if (archivo) {
    const tiposPermitidos = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!tiposPermitidos.includes(archivo.type)) {
      alert('El archivo debe ser JPG, PNG o PDF.');
      return;
    }

    if (archivo.size > 2 * 1024 * 1024) {
      alert('El archivo no debe superar los 2MB.');
      return;
    }
  }

  // Validacion 5: Horario obligatorio
  if (!horario) {
    alert('Selecciona un horario.');
    return;
  }

  alert('Registro exitoso. ¡Gracias por registrarte!');
});