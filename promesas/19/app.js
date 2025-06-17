function esperar(ms, id) {
  return new Promise(resolve => {
    setTimeout(() => {
      const elem = document.getElementById(id);
      elem.textContent = `✅ Esperado ${ms}ms`;
      resolve();
    }, ms);
  });
}

document.getElementById("btnEsperar").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "";
  
  // Mostrar estados iniciales
  resultado.innerHTML = `
    <p id="espera1" class="mb-2">⌛ Esperando 1000ms...</p>
    <p id="espera2" class="mb-2">⌛ Esperando 2000ms...</p>
  `;

  Promise.all([esperar(1000, "espera1"), esperar(2000, "espera2")])
    .then(() => {
      const final = document.createElement("p");
      final.textContent = "🎉 ¡Ambas esperas completadas!";
      final.classList.add("text-green-600", "mt-4", "font-semibold");
      resultado.appendChild(final);
    });
});
