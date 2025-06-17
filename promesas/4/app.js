function login(usuario, clave) {
  return new Promise((resolver, rechazar) => {
    if (usuario === "admin" && clave === "123") {
      resolver("Bienvenido");
    } else {
      rechazar("Error: Usuario o clave incorrectos");
    }
  });
}

const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");
const usuarioInput = document.getElementById("usuario");
const claveInput = document.getElementById("clave");

btnLogin.addEventListener("click", () => {
  const usuario = usuarioInput.value.trim();
  const clave = claveInput.value;

  mensaje.classList.remove("text-green-600", "text-red-600");
  mensaje.textContent = "⏳ Verificando...";
  mensaje.classList.remove("hidden");

  login(usuario, clave)
    .then(saludo => {
      mensaje.textContent = saludo;
      mensaje.classList.add("text-green-600");
    })
    .catch(error => {
      mensaje.textContent = error;
      mensaje.classList.add("text-red-600");
    });
});
