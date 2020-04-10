'use strict';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

const setIcon = () => {
  if (document.body.classList.contains('nav-open')) {
    navToggle.innerHTML = `<i class='fas fa-times menu'></i>`;
  } else {
    navToggle.innerHTML = `<i class="fas fa-bars menu"></i>`;
  }
};

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  setIcon();
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    setIcon();
  });
});
