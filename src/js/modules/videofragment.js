const containerVideo = document.querySelector('.videofragment__image-desc');
const slides = containerVideo.querySelectorAll(".slide");
let currentSlide = 0;
let intervalId = null;

function showSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

function startSlideshow() {
  if (!intervalId) {
    intervalId = setInterval(showSlide, 5000);
  }
}

function stopSlideshow() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

const observerOptions = {
  root: null, // Использовать viewport
  threshold: 0.1 // Срабатывает, когда хотя бы 10% элемента в поле зрения
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startSlideshow();
    } else {
      stopSlideshow();
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(containerVideo);
