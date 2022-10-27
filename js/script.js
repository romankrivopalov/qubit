'use strict';

// slider
let slideIndex = 1,
    offset = 0;

const slides = document.querySelectorAll('.slider__item'),
      prev = document.getAttribute('prev'),
      next = document.getAttribute('next'),
      total = document.querySelector('#total'),
      slidesWrapper = document.querySelector('.header__slider-wrapper'),
      slidesField = document.querySelector('.header__slider-items'),
      width = window.getComputedStyle(slidesWrapper).width;

console.log(prev);

slidesField.style.width = 100 * slides.length + '%';
slidesField.style.transition = '0.5s all ease-in-out';

slides.forEach(slide => {
  slide.style.width = width;
});

next.addEventListener('click', () => {
  if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2);
  }

  slidesField.style.transform = `translateX(-${offset}px)`

  if (slideIndex == slides.length) {
    slideIndex = 1;
  } else {
    slideIndex++;
  }
});

prev.addEventListener('click', () => {
  if (offset == 0) {
    offset = +width.slice(0, width.length - 2) * (slides.length - 1);
  } else {
    offset -= +width.slice(0, width.length - 2);
  }

  slidesField.style.transform = `translateX(-${offset}px)`;

  if (slideIndex == 1) {
    slideIndex = slides.length;
  } else {
    slideIndex--;
  }
});
