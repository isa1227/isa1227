function obtenerDatos(url) {
  return fetch(url)
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error(`Error en la solicitud: ${respuesta.status}`);
      }
      return respuesta.json();
    });
}

const btnFetch = document.getElementById("btnFetch");
const urlInput = document.getElementById("urlInput");
const resultado = document.getElementById("resultado");

btnFetch.addEventListener("click", () => {
  const url = urlInput.value.trim();
  if (!url) {
    resultado.textContent = "⛔ Por favor ingresa una URL válida.";
    resultado.classList.remove("hidden");
    return;
  }

  resultado.textContent = "🔄 Cargando...";
  resultado.classList.remove("hidden");

  obtenerDatos(url)
    .then(data => {
      resultado.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      resultado.textContent = `❌ Error: ${error.message}`;
    });
});
