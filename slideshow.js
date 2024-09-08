let slideIndex = 1;
let slideshowTimeout;

function showSlides(n) {
  clearTimeout(slideshowTimeout);

  if (n !== undefined) {
    slideIndex = n;
  } else {
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
  }

  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove('active'));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add('active');

  slideshowTimeout = setTimeout(() => showSlides(), 5000);
}

function plusSlides(n) {
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  showSlides(n);
}

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');
  
  const slideshowContainer = document.querySelector('.slideshow-container');
  slideshowContainer.addEventListener('mouseover', () => {
    clearTimeout(slideshowTimeout);
  });

  slideshowContainer.addEventListener('mouseout', () => {
    slideshowTimeout = setTimeout(() => showSlides(), 5000);
  });

  showSlides(slideIndex);
});