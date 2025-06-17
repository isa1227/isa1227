function esperar(ms) {
  return new Promise((_, rechazar) => {
    setTimeout(() => {
      rechazar("⚠️ Tiempo de espera excedido");
    }, ms);
  });
}

document.getElementById("btnFetch").addEventListener("click", () => {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "⏳ Solicitando datos...";

  const url = "https://jsonplaceholder.typicode.com/posts?_delay=3000";

  Promise.race([
    fetch(url).then(res => res.json()),
    esperar(5000)
  ])
    .then(data => {
      mensaje.textContent = `✅ Datos recibidos: ${data.length || 0} elementos`;
      mensaje.classList.remove("text-red-600");
      mensaje.classList.add("text-green-600");
    })
    .catch(error => {
      mensaje.textContent = error;
      mensaje.classList.remove("text-green-600");
      mensaje.classList.add("text-red-600");
    });
});
