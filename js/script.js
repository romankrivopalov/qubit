'use strict';

// slider
let slideIndex = 1,
    offset = 0;

const slides = document.querySelectorAll('.slider__item'),
      prev = document.querySelector('.slider__btn-prev'),
      next = document.querySelector('.slider__btn-next'),
      slidesWrapper = document.querySelector('.slider__wrapper'),
      slidesField = document.querySelector('.slider__items'),
      width = window.getComputedStyle(slidesWrapper).width;

slidesField.style.transition = '0.5s all ease-in-out';

next.addEventListener('click', () => {
  if (offset == +width.slice(0, width.length - 2) * (Math.ceil(slides.length / 3) - 1)) {
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
    offset = +width.slice(0, width.length - 2) * (Math.ceil(slides.length / 3) - 1);
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
