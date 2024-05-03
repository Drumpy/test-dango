import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
