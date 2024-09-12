document.addEventListener('DOMContentLoaded', function() {
    // Variables para almacenar el carrito y el total
    let cart = [];
    let total = 0;
  
    // Seleccionamos los botones de agregar al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
  
    // Función para actualizar el carrito
    function updateCart() {
      // Limpiar la lista del carrito
      cartItemsList.innerHTML = '';
  
      // Agregar cada producto al carrito
      cart.forEach(function(product) {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        cartItemsList.appendChild(li);
      });
  
      // Actualizar el total en la página
      totalPriceElement.textContent = total.toFixed(2);
    }
  
    // Añadir evento a cada botón de agregar al carrito
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = parseFloat(this.getAttribute('data-price'));
  
        // Añadir producto al carrito
        cart.push({
          name: productName,
          price: productPrice
        });
  
        // Actualizar el total
        total += productPrice;
  
        // Actualizar el carrito en la interfaz
        updateCart();
      });
    });
  });
  