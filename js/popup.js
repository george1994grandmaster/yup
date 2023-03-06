let closePopup = document.querySelector('.close-popup-btn');
let main = document.querySelector('main');
let popupWrapper = document.querySelector('.popup-wrapper-center');
let popupContainer = document.querySelector('.popup-container');
let moreInfoBtn = document.querySelectorAll('.more-info-btn');
for(let i = 0; i < moreInfoBtn.length; i++) {
  moreInfoBtn[i].addEventListener('click', function() {
    popupWrapper.classList.add('show');
    popupContainer.classList.add('large');
    main.classList.add('shadow');
  })
}

closePopup.addEventListener('click', function() {
  popupWrapper.classList.remove('show');
  popupContainer.classList.remove('large');
  main.classList.remove('shadow');
})
