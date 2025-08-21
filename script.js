'use strict';

// Navbar Scroll Interactivity
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

// Navbar Click Interactivity
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
};

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
