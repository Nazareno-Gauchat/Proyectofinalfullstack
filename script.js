document.addEventListener("DOMContentLoaded", function() {
  const productosContainer = document.getElementById("productos-container");

  // Array de ejemplo con productos
  const productos = [
    {
      nombre: "Olla Ezenn",
      precio: 15000,
      descripcion: "Olla antiaderente",
      imagen: "imagen1.jpg"
    },
    {
      nombre: "nneze",
      precio: 20000,
      descripcion: "Olla de acero inoxidable",
      imagen: "imagen2.jpg"
    },

  ];

  // Generar el contenido HTML de los productos
  productos.forEach(function(producto) {
    const productoElement = document.createElement("div");
    productoElement.classList.add("producto");

    const imagenElement = document.createElement("img");
    imagenElement.classList.add("producto-imagen");
    imagenElement.src = producto.imagen;

    const contenidoElement = document.createElement("div");
    contenidoElement.classList.add("producto-contenido");

    const nombreElement = document.createElement("h2");
    nombreElement.textContent = producto.nombre;

    const precioElement = document.createElement("p");
    precioElement.textContent = "Precio: ARS $ " + producto.precio;

    const descripcionElement = document.createElement("p");
    descripcionElement.textContent = producto.descripcion;

    const botonElement = document.createElement("button");
    botonElement.classList.add("boton");
    botonElement.textContent = "Agregar al carrito";

    botonElement.addEventListener("click", function() {
      // Aquí puedes implementar la lógica para agregar el producto al carrito
      console.log("Agregado al carrito:", producto.nombre);
    });

    contenidoElement.appendChild(nombreElement);
    contenidoElement.appendChild(precioElement);
    contenidoElement.appendChild(descripcionElement);
    contenidoElement.appendChild(botonElement);

    productoElement.appendChild(imagenElement);
    productoElement.appendChild(contenidoElement);

    productosContainer.appendChild(productoElement);
  });
});
