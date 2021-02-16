let menu = document.getElementById('enlaces');
let hamburguer = document.getElementsByClassName('menu-header')[0];

hamburguer.addEventListener('click', function() {
  menu.classList.toggle('extra-clase');
})