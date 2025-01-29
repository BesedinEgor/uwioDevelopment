const containerVideo = document.querySelector('.videofragment__image-desc')
const slides = containerVideo.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}
setInterval(showSlide, 5000);
