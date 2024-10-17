import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const containerPercent = document.querySelector(".arrow-inner");
const percent = containerPercent.querySelector("#percent");
const slider = document.querySelector(".program-swiper");
const slides = slider.querySelectorAll(".swiper-slide");

function initSwiper() {
  const resultSwiper = new Swiper(".result-swiper", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      1185: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    },
  });

  // Инициализация programSwiper
  const programSwiper = new Swiper(".program-swiper", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 20,
    pagination: {
      el: ".program-progressbar",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".program-swiper-next",
      prevEl: ".program-swiper-prev",
    },
    on: {
      slideChange: function() {
        updateProgress(this.realIndex);
      },
    },
  });

  // Функция для обновления прогресса в процентах
  function updateProgress(activeIndex) {
    const totalSlides = slides.length; // Общее количество слайдов
    const percentage = Math.round(((activeIndex + 1) / totalSlides) * 100);

    // Обновляем текст с процентами
    percent.textContent = percentage + "%";
  }

  // Инициализация прогресса при загрузке
  updateProgress(programSwiper.realIndex);
}

export default initSwiper;
