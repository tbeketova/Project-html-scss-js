const buttonBack = document.querySelector('.slider__button-back');
const buttonNext = document.querySelector('.slider__button-next');
const slides = Array.from(document.querySelectorAll('.slider__item'));
const sliderPaginationButtons = Array.from(document.querySelectorAll('.slider__pagination-button'));
const heroBackgrounds = ["hero--white", "hero--lavender", "hero--espresso"];
const heroSection = document.querySelector(".hero");

let currentIndex = 0;

function showSlide () {
  slides.forEach(slide => slide.classList.remove('slider__item--active'));
  slides[currentIndex].classList.add('slider__item--active');

  sliderPaginationButtons.forEach(slide => slide.classList.remove('slider__pagination-button--active'));
  sliderPaginationButtons[currentIndex].classList.add('slider__pagination-button--active');

  heroBackgrounds.forEach(bg => heroSection.classList.remove(bg));
  heroSection.classList.add(heroBackgrounds[currentIndex]);
}

sliderPaginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentIndex = index;
    showSlide();
  });
});

buttonBack.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide();
  }
});

buttonNext.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide();
  }
});

showSlide();