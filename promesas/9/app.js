function leerArchivo(nombreArchivo) {
  return new Promise((resolver, rechazar) => {
    // Simular lectura con retraso aleatorio
    const archivosSimulados = {
      "a.txt": "Contenido del archivo A",
      "b.txt": "Contenido del archivo B",
      "c.txt": "Contenido del archivo C",
    };

    setTimeout(() => {
      if (archivosSimulados[nombreArchivo]) {
        resolver(`Archivo ${nombreArchivo}: ${archivosSimulados[nombreArchivo]}`);
      } else {
        rechazar(`Error: Archivo ${nombreArchivo} no encontrado`);
      }
    }, Math.random() * 2000 + 500); // 0.5s a 2.5s
  });
}

const btnLeer = document.getElementById("btnLeer");
const resultado = document.getElementById("resultado");

btnLeer.addEventListener("click", () => {
  resultado.textContent = "⏳ Leyendo archivos...";

  Promise.all([leerArchivo("a.txt"), leerArchivo("b.txt"), leerArchivo("c.txt")])
    .then(contenidos => {
      resultado.textContent = contenidos.join("\n");
    })
    .catch(error => {
      resultado.textContent = error;
      resultado.classList.add("text-red-600");
    });
});
