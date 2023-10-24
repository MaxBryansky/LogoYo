import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 1000,
  slidesPerView: 2,
  spaceBetween: 40,
  keyboard: {
    enabled: true
  },

  navigation: {
    prevEl: '#swiper-prev',
    nextEl: '#swiper-next',
  },
});