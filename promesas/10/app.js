function leerArchivo(nombreArchivo) {
  return new Promise((resolver, rechazar) => {
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
    }, Math.random() * 1500 + 500);
  });
}

const btnLeerSecuencia = document.getElementById("btnLeerSecuencia");
const resultado = document.getElementById("resultado");

btnLeerSecuencia.addEventListener("click", () => {
  resultado.textContent = "⏳ Leyendo archivos secuencialmente...\n";

  leerArchivo("a.txt")
    .then(contenidoA => {
      resultado.textContent += contenidoA + "\n";
      return leerArchivo("b.txt");
    })
    .then(contenidoB => {
      resultado.textContent += contenidoB + "\n";
      return leerArchivo("c.txt");
    })
    .then(contenidoC => {
      resultado.textContent += contenidoC + "\n";
      resultado.textContent += "\n✅ Lectura secuencial completada.";
    })
    .catch(error => {
      resultado.textContent += `\n❌ ${error}`;
    });
});
