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
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// heart-button
const likeButton = document.querySelector('.like_button');
const heartImage = document.querySelector('.heart_image');
const cardFooter = document.querySelector('.card_footer_like');
const recruitingContainer = document.querySelector('.Recruiting_container');

// project modal hover
const modal = document.querySelector('.modal');

recruitingContainer.addEventListener('mouseenter', () => {
  modal.style.display = 'block';
});
recruitingContainer.addEventListener('mouseleave', () => {
  modal.style.display = 'none';
});

let isClicked = false;
let clickCount = 0;

// 페이지 로드 시 로컬 스토리지에서 클릭 상태를 가져와서 복원
//   document.addEventListener('DOMContentLoaded', () => {
//     const storedClickCount = localStorage.getItem('clickCount');
//     if (storedClickCount) {
//       clickCount = parseInt(storedClickCount);
//       isClicked = clickCount > 0;
//       updateCardFooter();
//     }
//   });

likeButton.addEventListener('click', () => {
  if (!isClicked) {
    likeButton.classList.add('clicked');
    clickCount++;
    isClicked = true;
  } else {
    likeButton.classList.remove('clicked');
    clickCount--;
    isClicked = false;
  }

  // 클릭 상태를 로컬 스토리지에 저장
  localStorage.setItem('clickCount', clickCount.toString());

  updateCardFooter();
});

function updateCardFooter() {
  cardFooter.textContent = `❤ ${clickCount}`;
  //   function updateCardFooter() {
  //     if (isClicked) {
  //       heartImage.src = '../src/img/Heart_02.png';
  //     } else {
  //       heartImage.src = '../src/img/empty_Heart_02.png';
  //     }

  //     cardFooter.textContent = `${clickCount}`;
}

// card2
const likeButton2 = document.querySelector('.like_button2');
const cardFooter2 = document.querySelector('.card_footer_like2');
const recruitingContainer2 = document.querySelector('.Recruiting_container2');

const modal2 = document.querySelector('.modal2');

recruitingContainer2.addEventListener('mouseenter', () => {
  modal2.style.display = 'block';
});
recruitingContainer2.addEventListener('mouseleave', () => {
  modal2.style.display = 'none';
});

let isClicked2 = false;
let clickCount2 = 0;

likeButton2.addEventListener('click', () => {
  if (!isClicked2) {
    likeButton2.classList.add('clicked');
    clickCount2++;
    isClicked2 = true;
  } else {
    likeButton2.classList.remove('clicked');
    clickCount2--;
    isClicked2 = false;
  }

  // 클릭 상태를 로컬 스토리지에 저장
  localStorage.setItem('clickCount2', clickCount2.toString());

  updateCardFooter2();
});

function updateCardFooter2() {
  cardFooter2.textContent = `❤ ${clickCount2}`;
}

//card3
const likeButton3 = document.querySelector('.like_button3');
const cardFooter3 = document.querySelector('.card_footer_like3');
const recruitingContainer3 = document.querySelector('.Recruiting_container3');

const modal3 = document.querySelector('.modal3');

recruitingContainer3.addEventListener('mouseenter', () => {
  modal3.style.display = 'block';
});
recruitingContainer3.addEventListener('mouseleave', () => {
  modal3.style.display = 'none';
});

let isClicked3 = false;
let clickCount3 = 0;

likeButton3.addEventListener('click', () => {
  if (!isClicked3) {
    likeButton3.classList.add('clicked');
    clickCount3++;
    isClicked3 = true;
  } else {
    likeButton3.classList.remove('clicked');
    clickCount3--;
    isClicked3 = false;
  }

  // 클릭 상태를 로컬 스토리지에 저장
  localStorage.setItem('clickCount3', clickCount3.toString());

  updateCardFooter3();
});

function updateCardFooter3() {
  cardFooter3.textContent = `❤ ${clickCount3}`;
}

//card4
const likeButton4 = document.querySelector('.like_button4');
const cardFooter4 = document.querySelector('.card_footer_like4');
const recruitingContainer4 = document.querySelector('.Recruiting_container4');

const modal4 = document.querySelector('.modal4');

recruitingContainer4.addEventListener('mouseenter', () => {
  modal4.style.display = 'block';
});
recruitingContainer4.addEventListener('mouseleave', () => {
  modal4.style.display = 'none';
});

let isClicked4 = false;
let clickCount4 = 0;

likeButton4.addEventListener('click', () => {
  if (!isClicked4) {
    likeButton4.classList.add('clicked');
    clickCount4++;
    isClicked4 = true;
  } else {
    likeButton4.classList.remove('clicked');
    clickCount4--;
    isClicked4 = false;
  }

  // 클릭 상태를 로컬 스토리지에 저장
  localStorage.setItem('clickCount4', clickCount4.toString());

  updateCardFooter4();
});

function updateCardFooter4() {
  cardFooter4.textContent = `❤ ${clickCount4}`;
}

//card5
const likeButton5 = document.querySelector('.like_button5');
const cardFooter5 = document.querySelector('.card_footer_like5');
const recruitingContainer5 = document.querySelector('.Recruiting_container5');

const modal5 = document.querySelector('.modal5');

recruitingContainer5.addEventListener('mouseenter', () => {
  modal5.style.display = 'block';
});
recruitingContainer5.addEventListener('mouseleave', () => {
  modal5.style.display = 'none';
});

let isClicked5 = false;
let clickCount5 = 0;

likeButton5.addEventListener('click', () => {
  if (!isClicked5) {
    likeButton5.classList.add('clicked');
    clickCount5++;
    isClicked5 = true;
  } else {
    likeButton5.classList.remove('clicked');
    clickCount5--;
    isClicked5 = false;
  }

  // 클릭 상태를 로컬 스토리지에 저장
  localStorage.setItem('clickCount5', clickCount5.toString());

  updateCardFooter5();
});

function updateCardFooter5() {
  cardFooter5.textContent = `❤ ${clickCount5}`;
}
//card6
const likeButton6 = document.querySelector('.like_button6');
const cardFooter6 = document.querySelector('.card_footer_like6');
const recruitingContainer6 = document.querySelector('.Recruiting_container6');

const modal6 = document.querySelector('.modal6');

recruitingContainer6.addEventListener('mouseenter', () => {
  modal6.style.display = 'block';
});
recruitingContainer6.addEventListener('mouseleave', () => {
  modal6.style.display = 'none';
});

let isClicked6 = false;
let clickCount6 = 0;

likeButton6.addEventListener('click', () => {
  if (!isClicked6) {
    likeButton6.classList.add('clicked');
    clickCount6++;
    isClicked6 = true;
  } else {
    likeButton6.classList.remove('clicked');
    clickCount6--;
    isClicked6 = false;
  }

  // 클릭 상태를 로컬 스토리지에 저장
  localStorage.setItem('clickCount6', clickCount6.toString());

  updateCardFooter6();
});

function updateCardFooter6() {
  cardFooter6.textContent = `❤ ${clickCount6}`;
}
//card7
const likeButton7 = document.querySelector('.like_button7');
const cardFooter7 = document.querySelector('.card_footer_like7');
const recruitingContainer7 = document.querySelector('.Recruiting_container7');

const modal7 = document.querySelector('.modal7');

recruitingContainer7.addEventListener('mouseenter', () => {
  modal7.style.display = 'block';
});
recruitingContainer7.addEventListener('mouseleave', () => {
  modal7.style.display = 'none';
});

let isClicked7 = false;
let clickCount7 = 0;

likeButton7.addEventListener('click', () => {
  if (!isClicked7) {
    likeButton7.classList.add('clicked');
    clickCount7++;
    isClicked7 = true;
  } else {
    likeButton7.classList.remove('clicked');
    clickCount7--;
    isClicked7 = false;
  }
  7;
  // 클릭 상태를 로컬 스토리지에 저장
  localStorage.setItem('clickCount7', clickCount7.toString());

  updateCardFooter7();
});

function updateCardFooter7() {
  cardFooter7.textContent = `❤ ${clickCount7}`;
}
//card8
const likeButton8 = document.querySelector('.like_button8');
const cardFooter8 = document.querySelector('.card_footer_like8');
const recruitingContainer8 = document.querySelector('.Recruiting_container8');

const modal8 = document.querySelector('.modal8');

recruitingContainer8.addEventListener('mouseenter', () => {
  modal8.style.display = 'block';
});
recruitingContainer8.addEventListener('mouseleave', () => {
  modal8.style.display = 'none';
});

let isClicked8 = false;
let clickCount8 = 0;

likeButton8.addEventListener('click', () => {
  if (!isClicked8) {
    likeButton8.classList.add('clicked');
    clickCount8++;
    isClicked8 = true;
  } else {
    likeButton8.classList.remove('clicked');
    clickCount8--;
    isClicked8 = false;
  }

  // 클릭 상태를 로컬 스토리지에 저장
  localStorage.setItem('clickCount8', clickCount8.toString());

  updateCardFooter8();
});

function updateCardFooter8() {
  cardFooter8.textContent = `❤ ${clickCount8}`;
}
