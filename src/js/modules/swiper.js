import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const resultSwiper = new Swiper(".result-swiper", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 16,
    navigation: {
      nextEl: '.result-swiper-next',
      prevEl: '.result-swiper-prev',
    },
  });

  export default resultSwiper;