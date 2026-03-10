const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.mobile-nav');
const navOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.mobile-nav-links a');

function openMenu() {
    mobileNav.classList.add('active');
    navOverlay.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileNav.classList.remove('active');
    navOverlay.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
navOverlay.addEventListener('click', closeMenu);

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Carousel functionality
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});