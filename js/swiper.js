
var swiper1 = new Swiper(".videoSlider", {
  grabCursor: true,
  loop: true,
  speed: 1400,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


if(window.innerWidth >= 1200) {
  var swiper2 = new Swiper(".story-over-slider", {
    grabCursor: true,
    speed: 1400,
    slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}else {
  var swiper2 = new Swiper(".story-over-slider", {
    grabCursor: true,
    speed: 1400,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}



var swiper3 = new Swiper(".course-form-slider", {
  parallax: true,
  grabCursor: true,
  speed: 1200,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  simulateTouch: false,
  creativeEffect: {
    prev: {
      //shadow: true,
      translate: ["-100%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

var swiper4 = new Swiper(".lower-slider", {
  grabCursor: true,
  speed: 1400,
  parallax: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


let swpArr = document.querySelectorAll('.pagination');
var swiper = new Swiper(".structureSlider", {
  grabCursor: true,
  loop: true,
  speed: 1200,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<p class="' + className + '">' + (swpArr[index].text) + '</p>';
    },
  },
});

let swiperWrapper = document.querySelectorAll('.swiper');
for(let i = 0; i < swiperWrapper.length; i++) {
  let prev = swiperWrapper[i].querySelector('.swiper-button-prev');
  prev.style.width = 'auto';
  prev.style.transition = "all 0.5s";
  
let next = swiperWrapper[i].querySelector('.swiper-button-next');
  next.style.width = 'auto';
  next.style.transition = "all 0.5s";
}

swiper3[0].slideTo(0);
swiper3[1].slideTo(1);
swiper3[2].slideTo(0);
swiper3[3].slideTo(1);
swiper3[4].slideTo(0);
swiper3[5].slideTo(1);
swiper3[6].slideTo(0);
swiper3[7].slideTo(1);
















