function cargarImagen(url) {
  return new Promise((resolver, rechazar) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolver(img);
    img.onerror = () => rechazar(`❌ Error al cargar: ${url}`);
  });
}

const btnCargar = document.getElementById("btnCargar");
const estado = document.getElementById("estado");
const contenedor = document.getElementById("contenedorImagenes");

btnCargar.addEventListener("click", () => {
  estado.textContent = "⏳ Cargando imágenes...";
  contenedor.innerHTML = "";

  const urls = [
    "https://i.pinimg.com/736x/92/42/b8/9242b82d89da9299e7bbfea82f843da0.jpg",
    "https://i.pinimg.com/736x/1c/d3/7c/1cd37c6fbdfb4731b79e6a2217fecaae.jpg",
    "https://i.pinimg.com/736x/61/71/28/617128020e61e7025819a1d8c5027d4e.jpg",
    "https://i.pinimg.com/736x/76/5e/91/765e91593b8368a7c86a3ce6d2546bf6.jpg",
    "https://i.pinimg.com/736x/1c/9d/ab/1c9dab1dbc21ead6f60b7e0733b458ee.jpg",
    "https://i.pinimg.com/736x/81/43/df/8143df77e797712a3bdec7047e3e5ec9.jpg"
  ];

  Promise.all(urls.map(url => cargarImagen(url)))
    .then(imagenes => {
      estado.textContent = "✅ Imágenes cargadas exitosamente.";
      imagenes.forEach(img => {
        img.classList.add("rounded-xl", "shadow", "w-full");
        contenedor.appendChild(img);
      });
    })
    .catch(error => {
      estado.textContent = error;
      estado.classList.add("text-red-600");
    });
});
