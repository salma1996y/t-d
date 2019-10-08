//1 when mouse on container
//1. move box left to the left and box right move to the right
//when moue out of bpx move left and rihgt back

var card = document.querySelector('.container');
card.addEventListener( 'mouseover', function() {
  document.querySelector('#right').classList.add('moveLeft');
  document.querySelector('#left').classList.add('moveRight')
});
card.addEventListener( 'mouseout', function() {
  document.querySelector('#right').classList.remove('moveLeft');
  document.querySelector('#left').classList.remove('moveRight')
});
