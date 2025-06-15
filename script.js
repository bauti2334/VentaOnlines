let total = 0;

function agregarAlCarrito(nombre, precio) {
  const lista = document.getElementById('lista-carrito');
  const item = document.createElement('li');
  item.textContent = `${nombre} - $${precio}`;
  lista.appendChild(item);
  total += precio;
  document.getElementById('total').textContent = total;
}

function pagar() {
  alert("Gracias por tu compra de $" + total);
  total = 0;
  document.getElementById('lista-carrito').innerHTML = '';
  document.getElementById('total').textContent = 0;
}