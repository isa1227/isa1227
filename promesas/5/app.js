function cargarImagen(url) {
  return new Promise((resolver, rechazar) => {
    const imagen = new Image();

    imagen.onload = () => resolver(imagen);
    imagen.onerror = () => rechazar("Error al cargar la imagen");

    imagen.src = url;
  });
}

const btnCargar = document.getElementById("btnCargar");
const urlInput = document.getElementById("urlImagen");
const mensaje = document.getElementById("mensaje");
const contenedorImagen = document.getElementById("contenedorImagen");

btnCargar.addEventListener("click", () => {
  const url = urlInput.value.trim();
  mensaje.textContent = "";
  contenedorImagen.innerHTML = "";

  if (!url) {
    mensaje.textContent = "⛔ Por favor ingresa una URL válida.";
    mensaje.className = "text-red-600 font-semibold mb-4";
    return;
  }

  mensaje.textContent = "🔄 Cargando imagen...";
  mensaje.className = "text-purple-700 font-semibold mb-4";

  cargarImagen(url)
    .then(imagen => {
      mensaje.textContent = "✅ Imagen cargada con éxito";
      mensaje.className = "text-green-600 font-semibold mb-4";

      imagen.classList.add("max-w-full", "h-auto", "rounded-lg", "shadow-lg");
      contenedorImagen.appendChild(imagen);
    })
    .catch(error => {
      mensaje.textContent = error;
      mensaje.className = "text-red-600 font-semibold mb-4";
    });
});
