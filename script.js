const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;

function showSlide() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function prevSlide() {
  if (slideIndex === 0) {
    slideIndex = slides.childElementCount - 1;
  } else {
    slideIndex--;
  }
  showSlide();
}

function nextSlide() {
  if (slideIndex === slides.childElementCount - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlide();
}
