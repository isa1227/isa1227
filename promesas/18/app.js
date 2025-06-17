document.getElementById("btnCargar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "⏳ Cargando archivo...";

  fetch("datos.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo");
      }
      return response.json();
    })
    .then(data => {
      resultado.textContent = `✅ Datos cargados: ${JSON.stringify(data)}`;
      resultado.classList.add("text-green-600");
    })
    .catch(error => {
      resultado.textContent = `❌ Error: ${error.message}`;
      resultado.classList.add("text-red-600");
    });
});
