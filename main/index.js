console.log('hi');
console.log('hi');
console.log('bye');

includeHTML();
// swiper
const swiper = new Swiper('.swiper', {
  // 자동 슬레이브
  autoplay: {
    delay: 4000,
  },
  // Optional parameters
  direction: 'horizontal',

  loop: true,
  speed: 500,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// heart-button
const heart = document.querySelector('.heart');
const animationHeart = document.querySelector('.animation_heart');
heart.addEventListener('click', () => {
  animationHeart.classList.add('animation');
  heart.classList.add('fill-color');
});

animationHeart.addEventListener('click', () => {
  animationHeart.classList.remove('animation');
  heart.classList.remove('fill-color');
});

// heart-button2
const heart2 = document.querySelector('.heart2');
const animationHeart2 = document.querySelector('.animation_heart2');
heart2.addEventListener('click', () => {
  animationHeart2.classList.add('animation2');
  heart2.classList.add('fill-color2');
});

animationHeart2.addEventListener('click', () => {
  animationHeart2.classList.remove('animation2');
  heart2.classList.remove('fill-color2');
});
// heart-button3
const heart3 = document.querySelector('.heart3');
const animationHeart3 = document.querySelector('.animation_heart3');
heart3.addEventListener('click', () => {
  animationHeart3.classList.add('animation3');
  heart3.classList.add('fill-color3');
});

animationHeart3.addEventListener('click', () => {
  animationHeart3.classList.remove('animation3');
  heart3.classList.remove('fill-color3');
});

// heart-button4
const heart4 = document.querySelector('.heart4');
const animationHeart4 = document.querySelector('.animation_heart4');
heart4.addEventListener('click', () => {
  animationHeart4.classList.add('animation4');
  heart4.classList.add('fill-color4');
});

animationHeart4.addEventListener('click', () => {
  animationHeart4.classList.remove('animation4');
  heart4.classList.remove('fill-color4');
});

// heart-button5
const heart5 = document.querySelector('.heart5');
const animationHeart5 = document.querySelector('.animation_heart5');
heart5.addEventListener('click', () => {
  animationHeart5.classList.add('animation5');
  heart5.classList.add('fill-color5');
});

animationHeart5.addEventListener('click', () => {
  animationHeart5.classList.remove('animation5');
  heart5.classList.remove('fill-color5');
});

// heart-button6
const heart6 = document.querySelector('.heart6');
const animationHeart6 = document.querySelector('.animation_heart6');
heart6.addEventListener('click', () => {
  animationHeart6.classList.add('animation6');
  heart6.classList.add('fill-color6');
});

animationHeart6.addEventListener('click', () => {
  animationHeart6.classList.remove('animation6');
  heart6.classList.remove('fill-color6');
});
// heart-button7
const heart7 = document.querySelector('.heart7');
const animationHeart7 = document.querySelector('.animation_heart7');
heart7.addEventListener('click', () => {
  animationHeart7.classList.add('animation7');
  heart7.classList.add('fill-color7');
});

animationHeart7.addEventListener('click', () => {
  animationHeart7.classList.remove('animation7');
  heart7.classList.remove('fill-color7');
});
// heart-button8
const heart8 = document.querySelector('.heart8');
const animationHeart8 = document.querySelector('.animation_heart8');
heart8.addEventListener('click', () => {
  animationHeart8.classList.add('animation8');
  heart8.classList.add('fill-color8');
});

animationHeart8.addEventListener('click', () => {
  animationHeart8.classList.remove('animation8');
  heart8.classList.remove('fill-color8');
});
