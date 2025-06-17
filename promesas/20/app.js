function paso1() {
  return new Promise(resolve => {
    setTimeout(() => {
      agregarPaso("✅ Paso 1 completado");
      resolve();
    }, 1000);
  });
}

function paso2() {
  return new Promise(resolve => {
    setTimeout(() => {
      agregarPaso("✅ Paso 2 completado");
      resolve();
    }, 1000);
  });
}

function paso3() {
  return new Promise(resolve => {
    setTimeout(() => {
      agregarPaso("✅ Paso 3 completado");
      resolve();
    }, 1000);
  });
}

function agregarPaso(texto) {
  const li = document.createElement("li");
  li.textContent = texto;
  document.getElementById("listaPasos").appendChild(li);
}

document.getElementById("btnIniciar").addEventListener("click", () => {
  document.getElementById("listaPasos").innerHTML = "🔄 Iniciando...";
  
  // Dar tiempo a que el texto se muestre antes de iniciar
  setTimeout(() => {
    document.getElementById("listaPasos").innerHTML = "";
    paso1()
      .then(() => paso2())
      .then(() => paso3())
      .then(() => agregarPaso("🎉 Todos los pasos completados"));
  }, 300);
});
