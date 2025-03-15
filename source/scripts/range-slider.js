const priceSlider = document.getElementById('slider');

if (priceSlider) {
  noUiSlider.create(priceSlider, {
    start: [0, 900],
    connect: true,
    range: {
      'min': 0,
      'max': 900
    }
  });
}
