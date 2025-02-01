// const containerVideo = document.querySelector('.videofragment__image-desc');
// const slides = containerVideo.querySelectorAll(".slide");
// let currentSlide = 0;

// function showSlide() {
//   slides[currentSlide].classList.remove("active");
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].classList.add("active");
// }

// setInterval(showSlide, 5000);


// Функция для отслеживания пересечения элемента с областью просмотра
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const containerVideo = document.querySelector('.videofragment__image-desc');
const slides = containerVideo.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
  if (!isElementInViewport(containerVideo)) return; // Если элемент вне видимости, прерываем выполнение функции

  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Устанавливаем интервал
const intervalId = setInterval(showSlide, 5000);

// Остановка интервала при уходе со страницы
window.onbeforeunload = function () {
  clearInterval(intervalId);
};
