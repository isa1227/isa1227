function validarStock(producto) {
  return new Promise((resolver, rechazar) => {
    const stockDisponible = ["camisa", "pantalon", "zapatos"];
    setTimeout(() => {
      if (stockDisponible.includes(producto.toLowerCase())) {
        resolver("Stock disponible");
      } else {
        rechazar("Producto fuera de stock");
      }
    }, 1000);
  });
}

function procesarPago(tarjeta) {
  return new Promise((resolver, rechazar) => {
    setTimeout(() => {
      // Simulamos pago válido si tarjeta tiene 16 dígitos numéricos
      const tarjetaValida = /^\d{16}$/.test(tarjeta);
      if (tarjetaValida) {
        resolver("Pago aprobado");
      } else {
        rechazar("Pago rechazado: Tarjeta inválida");
      }
    }, 1500);
  });
}

const btnComprar = document.getElementById("btnComprar");
const resultado = document.getElementById("resultado");
const productoInput = document.getElementById("producto");
const tarjetaInput = document.getElementById("tarjeta");

btnComprar.addEventListener("click", () => {
  resultado.classList.add("hidden");
  resultado.textContent = "";
  resultado.classList.remove("text-red-600", "text-green-600");

  const producto = productoInput.value.trim();
  const tarjeta = tarjetaInput.value.trim();

  if (!producto || !tarjeta) {
    resultado.textContent = "Por favor, complete todos los campos.";
    resultado.classList.remove("hidden");
    resultado.classList.add("text-red-600");
    return;
  }

  resultado.textContent = "⏳ Validando stock...";
  resultado.classList.remove("hidden");
  resultado.classList.remove("text-red-600");
  resultado.classList.remove("text-green-600");

  validarStock(producto)
    .then(msgStock => {
      resultado.textContent = msgStock + " ⏳ Procesando pago...";
      return procesarPago(tarjeta);
    })
    .then(msgPago => {
      resultado.textContent = `✅ Compra exitosa: ${msgPago}`;
      resultado.classList.add("text-green-600");
    })
    .catch(error => {
      resultado.textContent = `❌ ${error}`;
      resultado.classList.add("text-red-600");
    });
});
