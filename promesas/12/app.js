function verificarSesion(token) {
  return new Promise((resolver, rechazar) => {
    const tokensValidos = ["abc123", "token_valido", "sesion2025"];

    setTimeout(() => {
      if (tokensValidos.includes(token.trim())) {
        resolver("🔓 Sesión activa");
      } else {
        rechazar("🔒 Sesión caducada o token inválido");
      }
    }, 1000);
  });
}

const btn = document.getElementById("btnVerificar");
const input = document.getElementById("token");
const mensaje = document.getElementById("mensaje");

btn.addEventListener("click", () => {
  const token = input.value.trim();
  mensaje.textContent = "⏳ Verificando...";
  mensaje.classList.remove("hidden", "text-red-600", "text-green-600");

  verificarSesion(token)
    .then(msg => {
      mensaje.textContent = msg;
      mensaje.classList.add("text-green-600");
    })
    .catch(err => {
      mensaje.textContent = err;
      mensaje.classList.add("text-red-600");
    });
});
