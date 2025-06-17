function enviarFormulario(datos) {
  return new Promise((resolver, rechazar) => {
    // Validar que nombre y email no estén vacíos y email tenga formato básico
    const { nombre, email, mensaje } = datos;
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (nombre.trim() && emailValido && mensaje.trim()) {
      resolver("✅ Formulario enviado con éxito");
    } else {
      rechazar("❌ Error de validación: Completa todos los campos correctamente");
    }
  });
}

const btnEnviar = document.getElementById("btnEnviar");
const resultado = document.getElementById("resultado");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const mensajeInput = document.getElementById("mensaje");

btnEnviar.addEventListener("click", () => {
  resultado.textContent = "⏳ Validando...";
  resultado.classList.remove("hidden", "text-red-600", "text-green-600");

  const datos = {
    nombre: nombreInput.value,
    email: emailInput.value,
    mensaje: mensajeInput.value,
  };

  enviarFormulario(datos)
    .then(mensaje => {
      resultado.textContent = mensaje;
      resultado.classList.add("text-green-600");
    })
    .catch(error => {
      resultado.textContent = error;
      resultado.classList.add("text-red-600");
    });
});
