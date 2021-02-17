let slider = document.querySelector('.slider');
let cajaTestimonio = document.querySelectorAll('.cont-slide');
let contador = 1;

// let tamañoWidth = cajaTestimonio[0].clientWidth;
let tamañoWidth = 100;
let intervalo = 3000;

/* window.addEventListener('resize', function() {
  tamañoWidth = cajaTestimonio[0].clientWidth;
});
 */
function slide() {
  slider.style.transition = 'transform 1s';
  slider.style.transform = 'translateX('+ (-tamañoWidth * contador) + '%)';
  contador++;

  if (contador === cajaTestimonio.length) {
    contador = 0;
    setTimeout(function() {
      slider.style.transform = 'translateX(0)';
      slider.style.transition = 'transform 0s';
    }, intervalo);
  }
}

setInterval(function() {
  slide();
}, intervalo);


