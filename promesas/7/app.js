function obtenerUbicacion() {
  return new Promise((resolver, rechazar) => {
    if (!navigator.geolocation) {
      rechazar("Geolocalización no soportada por este navegador");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      posicion => resolver(posicion.coords),
      error => rechazar(`Error al obtener ubicación: ${error.message}`)
    );
  });
}

const btnUbicacion = document.getElementById("btnUbicacion");
const resultado = document.getElementById("resultado");

btnUbicacion.addEventListener("click", () => {
  resultado.textContent = "⏳ Obteniendo ubicación...";
  resultado.className = "text-gray-700 text-lg font-medium mt-4";

  obtenerUbicacion()
    .then(coords => {
      resultado.innerHTML = `
        <p>✅ Ubicación obtenida:</p>
        <ul class="mt-2 text-left">
          <li><strong>Latitud:</strong> ${coords.latitude}</li>
          <li><strong>Longitud:</strong> ${coords.longitude}</li>
          <li><strong>Precisión:</strong> ${coords.accuracy} metros</li>
        </ul>
      `;
    })
    .catch(error => {
      resultado.textContent = error;
      resultado.className = "text-red-600 text-lg font-medium mt-4";
    });
});
