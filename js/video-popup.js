
let main = document.querySelector('main');
let videoVisibleBtn = document.querySelectorAll('.video-visible-btn');
let popupWrapper = document.querySelector('.popup-wrapper-center');

for(let videoBtn = 0; videoBtn < videoVisibleBtn.length; videoBtn ++ ) {
  videoVisibleBtn[videoBtn].addEventListener('click', function() {
    popupWrapper.classList.add('show');
    main.classList.add('shadow');
  })
}

let closeVideoBtn = document.querySelector('.close-video-popup');
closeVideoBtn.addEventListener('click', function() {
  popupWrapper.classList.remove('show');
  location.reload();
  main.classList.remove('shadow');
})