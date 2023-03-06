let sidebarBtn = document.querySelector('.sidebar-btn');
let mobileHeader = document.querySelector('.mobile-header');
sidebarBtn.addEventListener('click', function() {
  mobileHeader.classList.toggle('show-mobile-header');
})