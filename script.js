'use strict';

// ELEMENTS
const navContainer = document.querySelector('.primary-nav');
const navLinks = document.querySelectorAll('.primary-nav a');

const bars = document.querySelector('.bars');
const menu = document.querySelector('#menu');
const closeBtn = document.querySelector('.close-btn i');
const overlay = document.querySelector('.overlay');

// Navbar Interactivity ‼️‼️

// Scroll Interactivity
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

// Menu Interactivity (for mobile responsiveness)
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

document.querySelector('#menu').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
