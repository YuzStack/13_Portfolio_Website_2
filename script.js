'use strict';

// Navbar Interactivity ‼️‼️

// Scroll Interactivity
const navContainer = document.querySelector('.primary-nav');
const navLinks = document.querySelectorAll('.primary-nav a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navContainer.classList.add('scrolled');

    navLinks.forEach(link => {
      link.classList.add('scrolled-link');
    });
  } else {
    navContainer.classList.remove('scrolled');

    navLinks.forEach(link => {
      link.classList.remove('scrolled-link');
    });
  }
});

// Menu Click Interactivity
const bars = document.querySelector('.bars');
const menu = document.querySelector('#menu');
const closeBtn = document.querySelector('.close-btn i');
const overlay = document.querySelector('.overlay');

bars.addEventListener('click', () => {
  menu.classList.toggle('nav-active');
  overlay.classList.remove('hidden');
});

function closeMenu() {
  menu.classList.remove('nav-active');
  overlay.classList.add('hidden');
}

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Smooth Scrolling ‼️‼️

// Buttons
const homeSecBtn = document.querySelector('.home-sec-btn');
const featuresSecBtn = document.querySelector('.features-sec-btn');
const screenshotsSecBtn = document.querySelector('.screenshots-sec-btn');
const pricingSecBtn = document.querySelector('.pricing-sec-btn');
const teamSecBtn = document.querySelector('.team-sec-btn');
const contactSecBtn = document.querySelector('.contact-sec-btn');

// Sections (to scroll to)
const homeSec = document.querySelector('#home-section');
const featuresSec = document.querySelector('#features-section');
const screenshotsSec = document.querySelector('#screenshots-section');
const pricingSec = document.querySelector('#pricing-section');
const teamSec = document.querySelector('#team-section');
const contactSec = document.querySelector('#contact-section');

homeSecBtn.addEventListener('click', () =>
  homeSec.scrollIntoView({ behavior: 'smooth' })
);

featuresSecBtn.addEventListener('click', () =>
  featuresSec.scrollIntoView({ behavior: 'smooth' })
);

screenshotsSecBtn.addEventListener('click', () =>
  screenshotsSec.scrollIntoView({ behavior: 'smooth' })
);

pricingSecBtn.addEventListener('click', () =>
  pricingSec.scrollIntoView({ behavior: 'smooth' })
);

teamSecBtn.addEventListener('click', () =>
  teamSec.scrollIntoView({ behavior: 'smooth' })
);

contactSecBtn.addEventListener('click', () =>
  contactSec.scrollIntoView({ behavior: 'smooth' })
);
