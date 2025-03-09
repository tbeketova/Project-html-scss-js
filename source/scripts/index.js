const navList = document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  navList.classList.toggle('navigation--closed');
  navList.classList.toggle('navigation--opened');
});
