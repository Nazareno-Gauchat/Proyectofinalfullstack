document.addEventListener("DOMContentLoaded", function() {
    const productosContainer = document.getElementById("productos-container");
  
    // Array de ejemplo con productos
    const productos = [
      {
        nombre: "Producto 1",
        precio: 10.99,
        descripcion: "Descripción del producto 1",
        imagen: "imagen1.jpg" // Reemplaza "imagen1.jpg" con la ruta de la imagen del producto 1
      },
      {
        nombre: "Producto 2",
        precio: 19.99,
        descripcion: "Descripción del producto 2",
        imagen: "imagen2.jpg" // Reemplaza "imagen2.jpg" con la ruta de la imagen del producto 2
      },
      {
        nombre: "Producto 3",
        precio: 5.99,
        descripcion: "Descripción del producto 3",
        imagen: "imagen3.jpg" // Reemplaza "imagen3.jpg" con la ruta de la imagen del producto 3
      }
    ];
  
    // Generar el contenido HTML de los productos
    productos.forEach(function(producto) {
      const productoElement = document.createElement("div");
      productoElement.classList.add("producto");
  
      const imagenElement = document.createElement("img");
      imagenElement.classList.add("producto-imagen");
      imagenElement.src = producto.imagen;
  
      const detalleElement = document.createElement("div");
      detalleElement.classList.add("producto-detalle");
  
      const nombreElement = document.createElement("h2");
      nombreElement.textContent = producto.nombre;
  
      const precioElement = document.createElement("p");
      precioElement.textContent = "Precio: $" + producto.precio;
  
      const descripcionElement = document.createElement("p");
      descripcionElement.textContent = producto.descripcion;
  
      const botonElement = document.createElement("button");
      botonElement.classList.add("boton");
      botonElement.textContent =
  
