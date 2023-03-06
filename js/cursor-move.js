const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('a');
const $text = document.querySelectorAll('.text');


document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}
for (let i = 0; i < $text.length; i++) {
  $text[i].addEventListener('mouseenter', onMouseHover);
  $text[i].addEventListener('mouseleave', onMouseHoverOut);
}


function onMouseMove(e) {
  TweenMax.to($bigBall, .6, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 2.8
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}

