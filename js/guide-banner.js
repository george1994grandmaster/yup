let guideTextContent = document.querySelector('.guide-text-content');
let guideBanner = document.querySelector('.guide-banner');
let guideBannerHeight = guideBanner.getBoundingClientRect().height;
let guideSvg = document.querySelector('.guide-vectors-svg');
let guideSvgHeight = guideSvg.getBoundingClientRect().height;
guideTextContent.style.height = guideBannerHeight - guideSvgHeight;

window.addEventListener('resize', function() {
  let guideTextContent = document.querySelector('.guide-text-content');
  let guideBanner = document.querySelector('.guide-banner');
  let guideBannerHeight = guideBanner.getBoundingClientRect().height;
  let guideSvg = document.querySelector('.guide-vectors-svg');
  let guideSvgHeight = guideSvg.getBoundingClientRect().height;
  guideTextContent.style.height = guideBannerHeight - guideSvgHeight;
  if(this.window.innerWidth <= 1200) {
    guideTextContent.style.height = "auto";
  }
})