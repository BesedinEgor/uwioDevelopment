import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function initSwiper() {
  const resultSwiper = new Swiper(".result-swiper", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 16,
    navigation: {
      nextEl: ".result-swiper-next",
      prevEl: ".result-swiper-prev",
    },
  });

  const programSwiper = new Swiper(".program-swiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 16,
    pagination: {
      el: ".program-progressbar",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".program-swiper-next",
      prevEl: ".program-swiper-prev",
    },
  });
}

export default initSwiper;
