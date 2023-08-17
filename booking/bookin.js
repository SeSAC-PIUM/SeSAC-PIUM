includeHTML();

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 6,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 2000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
