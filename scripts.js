let cart = document.getElementById('cart');

cart.addEventListener ('click', function(){
// Muda o texto
  cart.innerHTML = 'Added';

  // Adiciona a classe 'active'
  cart.classList.add('active');
});
