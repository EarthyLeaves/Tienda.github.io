// // Variables globales
//         let carrito = [];
//         let totalPagar = subtotal;

//         /// Función para agregar el producto al carrito y redirigir a otra página
//         function agregarAlCarrito(boton) {
//             const nombreProducto = boton.getAttribute("data-nombre");
//            const cantidad = parseInt(document.getElementById("cantidad").value, 10);

//             // Puedes establecer el precio directamente aquí o asignarlo según el nombre del producto
//             let precioProducto;
//             if (nombreProducto === "Semilla") {
//                 precioProducto = 15;
//             } else if (nombreProducto === "Producto 2") {
//                 precioProducto = 20;
//             } else if (nombreProducto === "Producto 3") {
//                 precioProducto = 25;
//             } else {
//                 // Precio predeterminado si el nombre no coincide con ninguno de los productos específicos
//                 precioProducto = 10;
//             }

//             if (!isNaN(cantidad) && cantidad > 0 && !isNaN(precioProducto) && precioProducto > 0) {
//              subtotal = cantidad * precioProducto;
//                 carrito.push(subtotal);
//                 actualizarTotalPagar();
//             }
//         }

//         // Función para actualizar el total a pagar en la página
//         function actualizarTotalPagar() {
//             totalPagar = carrito.reduce((total, subtotal) => total + subtotal, 0);
//             document.getElementById("totalPagar").textContent = totalPagar;
//         }

//         // Función para calcular el total a pagar y redirigir a otra página
        
//             totalPagar = carrito.reduce((total, subtotal) => total + subtotal, 0);
//             // Redirigir a la página de total a pagar

        function calcularTotalPagar() {
            //  window.location.href = "tarjeta.html";
			window.open("https://earthyleaves.github.io/Agradecimiento/");
        }

		function calcularTotalPagartarjeta() {
            //  window.location.href = "tarjeta.html";
			window.open("https://earthyleaves.github.io/Pago/");
        }

		function Inicio(){
			window.open("file:///C:/Users/salis/OneDrive/Documentos/Earthy%20Leaves/Earthy%20Leaves.html");
		}
        // function regresaratras() {
        //    window.location.href = "file:///C:/Users/salis/OneDrive/Documentos/Earthy%20Leaves/Tienda.html";
        // }

// const btnCart = document.querySelector('.container-cart-icon');
// const containerCartProducts = document.querySelector(
// 	'.container-cart-products'
// );

// btnCart.addEventListener('click', () => {
// 	containerCartProducts.classList.toggle('hidden-cart');
// });

// /* ========================= */
// const cartInfo = document.querySelector('.cart-product');
// const rowProduct = document.querySelector('.row-product');

// // Lista de todos los contenedores de productos
// const productsList = document.querySelector('.container-items');

// // Variable de arreglos de Productos
// let allProducts = [];

// const valorTotal = document.querySelector('.total-pagar');

// const countProducts = document.querySelector('#contador-productos');

// const cartEmpty = document.querySelector('.cart-empty');
// const cartTotal = document.querySelector('.cart-total');

// productsList.addEventListener('click', e => {
// 	if (e.target.classList.contains('btn-add-cart')) {
// 		const product = e.target.parentElement;

// 		const infoProduct = {
// 			quantity: 1,
// 			title: product.querySelector('h2').textContent,
// 			price: product.querySelector('p').textContent,
// 		};

// 		const exits = allProducts.some(
// 			product => product.title === infoProduct.title
// 		);

// 		if (exits) {
// 			const products = allProducts.map(product => {
// 				if (product.title === infoProduct.title) {
// 					product.quantity++;
// 					return product;
// 				} else {
// 					return product;
// 				}
// 			});
// 			allProducts = [...products];
// 		} else {
// 			allProducts = [...allProducts, infoProduct];
// 		}

// 		showHTML();
// 	}
// });

// rowProduct.addEventListener('click', e => {
// 	if (e.target.classList.contains('icon-close')) {
// 		const product = e.target.parentElement;
// 		const title = product.querySelector('p').textContent;

// 		allProducts = allProducts.filter(
// 			product => product.title !== title
// 		);

// 		console.log(allProducts);

// 		showHTML();
// 	}
// });

// // Funcion para mostrar  HTML
// const showHTML = () => {
// 	if (!allProducts.length) {
// 		cartEmpty.classList.remove('hidden');
// 		rowProduct.classList.add('hidden');
// 		cartTotal.classList.add('hidden');
// 	} else {
// 		cartEmpty.classList.add('hidden');
// 		rowProduct.classList.remove('hidden');
// 		cartTotal.classList.remove('hidden');
// 	}

// 	// Limpiar HTML
// 	rowProduct.innerHTML = '';

// 	let total = 0;
// 	let totalOfProducts = 0;

// 	allProducts.forEach(product => {
// 		const containerProduct = document.createElement('div');
// 		containerProduct.classList.add('cart-product');

// 		containerProduct.innerHTML = `
//             <div class="info-cart-product">
//                 <span class="cantidad-producto-carrito">${product.quantity}</span>
//                 <p class="titulo-producto-carrito">${product.title}</p>
//                 <span class="precio-producto-carrito">${product.price}</span>
//             </div>
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//                 class="icon-close"
//             >
//                 <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                 />
//             </svg>
//         `;

// 		rowProduct.append(containerProduct);

// 		total =
// 			total + parseInt(product.quantity * product.price.slice(1));
// 		totalOfProducts = totalOfProducts + product.quantity;
// 	});

// 	valorTotal.innerText = `$${total}`;
// 	countProducts.innerText = totalOfProducts;
// };



const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};