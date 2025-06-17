// Simulación de una "base de datos"
const baseDeDatos = {
  1: { nombre: "val", rol: "Admin" },
  2: { nombre: "Luis", rol: "Usuario" },
  3: { nombre: "cloe", rol: "Editor" }
};

function buscarUsuario(id) {
  return new Promise((resolver, rechazar) => {
    setTimeout(() => {
      if (baseDeDatos[id]) {
        resolver(baseDeDatos[id]);
      } else {
        rechazar("❌ Usuario no encontrado");
      }
    }, 1000); 
  });
}

document.getElementById("btnBuscar").addEventListener("click", () => {
  const id = document.getElementById("inputID").value;
  const mensaje = document.getElementById("mensaje");

  mensaje.textContent = "🔍 Buscando...";
  mensaje.classList.remove("text-red-600", "text-green-600");

  buscarUsuario(id)
    .then(usuario => {
      mensaje.textContent = `✅ Usuario: ${usuario.nombre} (${usuario.rol})`;
      mensaje.classList.add("text-green-600");
    })
    .catch(error => {
      mensaje.textContent = error;
      mensaje.classList.add("text-red-600");
    });
});
