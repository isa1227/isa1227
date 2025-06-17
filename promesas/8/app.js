function login(usuario, clave) {
  return new Promise((resolver, rechazar) => {
    if (usuario === "admin" && clave === "123") {
      resolver("Login exitoso");
    } else {
      rechazar("Error: Usuario o clave incorrectos");
    }
  });
}

function obtenerPerfil(usuario) {
  return new Promise((resolver) => {
    // Simulamos obtener perfil con retraso
    setTimeout(() => {
      const perfil = {
        usuario: usuario,
        nombre: "Administrador",
        email: "admin@example.com",
        rol: "Administrador",
      };
      resolver(perfil);
    }, 1000);
  });
}

const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");
const usuarioInput = document.getElementById("usuario");
const claveInput = document.getElementById("clave");

btnLogin.addEventListener("click", () => {
  const usuario = usuarioInput.value.trim();
  const clave = claveInput.value;

  mensaje.textContent = "⏳ Verificando...";
  mensaje.classList.remove("hidden", "text-red-600", "text-green-600");

  login(usuario, clave)
    .then(() => obtenerPerfil(usuario))
    .then(perfil => {
      mensaje.innerHTML = `
        <p class="text-green-600 font-semibold">✔️ Bienvenido, ${perfil.nombre}!</p>
        <p><strong>Usuario:</strong> ${perfil.usuario}</p>
        <p><strong>Email:</strong> ${perfil.email}</p>
        <p><strong>Rol:</strong> ${perfil.rol}</p>
      `;
    })
    .catch(error => {
      mensaje.textContent = error;
      mensaje.classList.add("text-red-600");
    });
});
