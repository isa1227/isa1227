let controller;

const btnIniciar = document.getElementById("btnIniciar");
const btnCancelar = document.getElementById("btnCancelar");
const estado = document.getElementById("estado");

btnIniciar.addEventListener("click", () => {
  controller = new AbortController();
  const signal = controller.signal;

  estado.textContent = "⏳ Iniciando solicitud...";

  fetch("https://jsonplaceholder.typicode.com/photos?_limit=5", { signal })
    .then(response => response.json())
    .then(data => {
      estado.textContent = `✅ Datos recibidos: ${data.length} fotos`;
    })
    .catch(error => {
      if (error.name === "AbortError") {
        estado.textContent = "❌ Solicitud cancelada por el usuario.";
      } else {
        estado.textContent = `⚠️ Error: ${error.message}`;
      }
    });
});

btnCancelar.addEventListener("click", () => {
  if (controller) {
    controller.abort();
  }
});
