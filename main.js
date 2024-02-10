//Función para actualizar el contador de elementos en el carrito
/* function actualizarCarrito(contador) {
  const cuentaCarrito = document.getElementById('cuentaCarrito');
  cuentaCarrito.textContent = contador;
} */

// Ejemplo: Actualiza el contador de elementos a 5
//cartItemCount = cuentaCarrito
//updateCartItemCount = actualizarCarrito
//count = contador
//updateCart = CargaCarrito
//cartItems = itemsCarrito
//cartItemsList = listaItemsCarrito
// Puedes llamar a esta función cuando el usuario agregue elementos al carrito
//actualizarCarrito(5); // Cambiar este número según el número real de elementos en el carrito

// Array para almacenar los elementos del carrito
let itemsCarrito = [];

// Función para agregar un elemento al carrito
function agregarAlCarrito(nombreItem) {
  itemsCarrito.push(nombreItem);
  cargaCarrito();
}

// Función para actualizar el contador y la lista de elementos en el carrito
function cargaCarrito() {
  const cuentaCarrito = document.getElementById('cuentaCarrito');
  const listaItemsCarrito = document.getElementById('listaItemsCarrito');

  // Actualiza el contador de elementos en el carrito
  cuentaCarrito.textContent = itemsCarrito.length;

  // Borra los elementos antiguos del menú desplegable del carrito
  listaItemsCarrito.innerHTML = '';

  // Agrega cada elemento del carrito al menú desplegable
  itemsCarrito.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<a class="dropdown-item" href="#">${item}</a>`;
    listaItemsCarrito.appendChild(li);
  });
}

// Ejemplo de uso: agregar elementos al carrito mientras el cliente navega por la página
//agregarAlCarrito('Producto 1');
//agregarAlCarrito('Producto 2');
// Puedes llamar a agregarAlCarrito(nombreItem) con el nombre del producto cada vez que el usuario agregue algo al carrito