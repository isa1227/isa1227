function leerArchivo(path, file) {
  return new Promise((resolve, reject) => {
    // Validar ruta (nombre archivo)
    if (!path || path.trim() === "") {
      reject("Error: Ruta inválida");
      return;
    }

    // Leer archivo con FileReader
    const lector = new FileReader();

    lector.onload = () => {
      resolve(lector.result); // contenido del archivo
    };

    lector.onerror = () => {
      reject("Error al leer el archivo");
    };

    lector.readAsText(file);
  });
}

const inputArchivo = document.getElementById("archivoInput");
const resultado = document.getElementById("resultado");

inputArchivo.addEventListener("change", function() {
  const archivo = this.files[0];
  if (!archivo) return;

  resultado.textContent = " Leyendo archivo...";
  resultado.classList.remove("hidden");

  leerArchivo(archivo.name, archivo)
    .then(contenido => {
      resultado.textContent = contenido;
    })
    .catch(error => {
      resultado.textContent = "❌ " + error;
    });
});
