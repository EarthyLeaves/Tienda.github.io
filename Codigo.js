// Variables globales
let carrito = [];
let totalPagar = 0;

/// Función para agregar el producto al carrito y redirigir a otra página
function agregarAlCarrito(boton) {
    const nombreProducto = boton.getAttribute("data-nombre");
    const cantidad = parseInt(document.getElementById("cantidad").value, 10);

    // Puedes establecer el precio directamente aquí o asignarlo según el nombre del producto
    let precioProducto;
    if (nombreProducto === "Semilla") {
        precioProducto = 15;
    } else if (nombreProducto === "Producto 2") {
        precioProducto = 20;
    } else if (nombreProducto === "Producto 3") {
        precioProducto = 25;
    } else {
        // Precio predeterminado si el nombre no coincide con ninguno de los productos específicos
        precioProducto = 10;
    }

    if (!isNaN(cantidad) && cantidad > 0 && !isNaN(precioProducto) && precioProducto > 0) {
        const subtotal = cantidad * precioProducto;
        carrito.push(subtotal);
        actualizarTotalPagar();
    }
}

// Función para actualizar el total a pagar en la página
function actualizarTotalPagar() {
    totalPagar = carrito.reduce((total, subtotal) => total + subtotal, 0);
    document.getElementById("totalPagar").textContent = totalPagar;
}

// Función para calcular el total a pagar y redirigir a otra página
function calcularTotalPagar() {
    totalPagar = producto;
    for (const producto of carrito) {
        totalPagar += producto.subtotal;
    }
    // Redirigir a la página de total a pagar
    window.location.href = "total.html";
}

// Función para actualizar el total a pagar en la página (se puede omitir esta función)
function actualizarTotalPagar() {
    document.getElementById("totalPagar").textContent = totalPagar;
}



function regresaratras() {
    window.location.href ="file:///C:/Users/salis/OneDrive/Documentos/Earthy%20Leaves/Tienda.html"
}
