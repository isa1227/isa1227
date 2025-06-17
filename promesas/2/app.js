function esperar(ms) {
  return new Promise((resolver) => {
    setTimeout(() => {
      resolver("Listo");
    }, ms);
  });
}

const btn = document.getElementById("btnEsperar");
const resultado = document.getElementById("resultado");
const tiempoInput = document.getElementById("tiempo");

btn.addEventListener("click", () => {
  const ms = parseInt(tiempoInput.value);
  if (isNaN(ms) || ms < 0) {
    resultado.textContent = " Por favor ingresa un número válido.";
    resultado.classList.remove("hidden");
    return;
  }

  resultado.textContent = " Esperando...";
  resultado.classList.remove("hidden");

  esperar(ms).then(mensaje => {
    resultado.textContent = mensaje;
  });
});
