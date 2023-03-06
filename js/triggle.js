let mtaMta = gsap.timeline({
  scrollTrigger: {
    trigger: '.container-fluid',
     
  }
})
mtaMta.from('.mtaMta-content', {y: 300, duration: 1});

let guideRight = gsap.timeline({
  scrollTrigger: {
    trigger: '.guide-transform-wrap',
  }
})
guideRight.from('.guide-transform-right-content', {x: -600, duration: 1})

let guideLeft = gsap.timeline({
  scrollTrigger: {
    trigger: '.guide-transform-wrap',
  }
})
guideLeft.from('.guide-transform-left-content', {x: 600, duration: 1});


let storyTilteContainer = gsap.timeline({
  scrollTrigger: {
    trigger: '.story-wrap',
  }
})
storyTilteContainer.from('.story-wrap', {y: -800, duration: 2});

let storyBannerBitle= gsap.timeline({
  scrollTrigger: {
    trigger: '.story-banner-title-content',
  }
})
storyBannerBitle.from('.story-banner-title-content', {y: 1000, duration: 2});

let storyContent = gsap.timeline({
  scrollTrigger: {
    trigger: '.story-centerd-content',
  }
})
storyContent.from('.story-centerd-content', {y: -800, duration: 2});

let storyLogo = gsap.timeline({
  scrollTrigger: {
    trigger: '.our-story-logo',
  }
})
storyLogo.from('.our-story-logo', {y: -800, duration: 3});

let subtruct = gsap.timeline({
  scrollTrigger: {
    trigger: '.subtract',
  }
})
subtruct.from('.subtract', {y: 400, duration: 1});

let sponsorImg = gsap.timeline({
  scrollTrigger: {
    trigger: '.sponsors-wrapper',
  }
})
sponsorImg.from('.sponsors-title-img', {x: -1800, duration: 2});

let guideBanner = gsap.timeline({
  scrollTrigger: {
    trigger: '.guide-banner',
  }
})
guideBanner.from('.guide-banner', {y: -1000, duration: 2});

let gradientLogo = gsap.timeline({
  scrollTrigger: {
    trigger: '.gradient-logo',
  }
})
gradientLogo.from('.gradient-logo', {x: 800, duration: 1});


/*let cardContent = document.getElementsByClassName('card-text-content');
for(let i = 0; i < cardContent.length; i++) {
  let cardText = gsap.timeline({
    scrollTrigger: {
      trigger: cardContent[i],
    }
  })
  cardText.from(cardContent[i], {y: 150, duration: 1});
}*/

let touchTitleContent = gsap.timeline({
  scrollTrigger: {
    trigger: '.touch-title-content',
  }
})
touchTitleContent.from('.touch-title-content', {y: -800, duration: 1.5});




let marathonBanner = document.querySelector('.marathon-banner-wrapper');
let marathonBannerHeight = marathonBanner.getBoundingClientRect().height;
console.log(marathonBannerHeight);
let marathonScrollSpace = document.querySelector('.marathon-below-scroll-space');
marathonScrollSpace.style.marginTop = (marathonBannerHeight)+"px";
console.log(marathonScrollSpace.style.marginTop);


let windowWidth = window.innerWidth;
let titlesWrapper = document.querySelector('.parallax-titles-wrapper');
let titlesWrapperPosition = titlesWrapper.getBoundingClientRect().left;
let effectStart = windowWidth - titlesWrapperPosition;

let bannerParallax = gsap.timeline({
  scrollTrigger: {
    trigger: '.banner-flexible-container',
  }
})

guideBanner.from('.guide-banner', {y: -800, duration: 2});
bannerParallax.from('.parallax-titles-wrapper', {x: effectStart});
bannerParallax.from('.banner-parallax-1', {x: effectStart});
bannerParallax.from('.banner-parallax-2', {x: effectStart});
bannerParallax.from('.banner-parallax-3', {x: effectStart});
bannerParallax.from('.banner-parallax-4', {x: effectStart});























