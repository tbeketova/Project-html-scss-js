/* import noUiSlider from "nouislider"; */

//Burger-menu
const navList = document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    navList.classList.toggle('navigation--closed');
    navList.classList.toggle('navigation--opened');
});

//Range-filter
/* document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");

  if (!slider) {
      console.error("Ошибка: не найден #price-slider");
      return;
  }

  noUiSlider.create(slider, {
      start: [0, 900],
      connect: true,
      step: 10,
      range: {
          min: 0,
          max: 1000
      }
  });

  const minInput = document.getElementById("min-price");
  const maxInput = document.getElementById("max-price");

  slider.noUiSlider.on("update", function(values) {
      minInput.value = Math.round(values[0]);
      maxInput.value = Math.round(values[1]);
  });

  minInput.addEventListener("change", function() {
      slider.noUiSlider.set([this.value, null]);
  });

  maxInput.addEventListener("change", function() {
      slider.noUiSlider.set([null, this.value]);
  });

  console.log("Слайдер успешно создан!");
}); */