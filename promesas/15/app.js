function tareaInestable() {
  return new Promise((resolver, rechazar) => {
    const exito = Math.random() > 0.6; // 40% de éxito
    setTimeout(() => {
      if (exito) {
        resolver("✅ ¡Tarea completada!");
      } else {
        rechazar("❌ Falló la tarea");
      }
    }, 1000);
  });
}

function reintentar(fn, intentos) {
  return fn().catch(error => {
    if (intentos > 1) {
      return reintentar(fn, intentos - 1);
    } else {
      return Promise.reject("🚫 No se logró después de varios intentos");
    }
  });
}

const btn = document.getElementById("btnReintentar");
const mensaje = document.getElementById("mensaje");

btn.addEventListener("click", () => {
  mensaje.textContent = "⏳ Intentando...";
  reintentar(tareaInestable, 3)
    .then(resultado => {
      mensaje.textContent = resultado;
      mensaje.classList.remove("text-red-600");
      mensaje.classList.add("text-green-600");
    })
    .catch(error => {
      mensaje.textContent = error;
      mensaje.classList.remove("text-green-600");
      mensaje.classList.add("text-red-600");
    });
});
