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
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
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

const select_wrap_li = document.querySelectorAll('.select_wrap li');

select_wrap_li.forEach((select_wrap_li_ele) => {
  select_wrap_li_ele.addEventListener('click', () => {
    let select_wrap_li_text = select_wrap_li_ele.innerText.trim();

    location.href = `/project_list/project_list.html?${select_wrap_li_text}`;
  });
});

// heart-button
const likeButton = document.querySelectorAll('.like_button');
const heartImage = document.querySelector('.heart_image');
const like_count = document.querySelectorAll('.like_count');
const recruiting_wrap = document.querySelectorAll('.recruiting_wrap');

// project modal hover
const modal = document.querySelectorAll('.modal');

recruiting_wrap.forEach((recruiting_wrap_ele) => {
  recruiting_wrap_ele.addEventListener('mouseenter', () => {
    recruiting_wrap_ele.nextElementSibling.style.display = 'flex';
  });
});
recruiting_wrap.forEach((recruiting_wrap_ele) => {
  recruiting_wrap_ele.addEventListener('mouseleave', () => {
    recruiting_wrap_ele.nextElementSibling.style.display = 'none';
  });
});

likeButton.forEach((likeButton_ele) => {
  let isClicked = false;
  let clickCount = 0;
  likeButton_ele.addEventListener('click', () => {
    if (!isClicked) {
      likeButton_ele.classList.add('clicked');
      clickCount++;
      isClicked = true;
    } else {
      likeButton_ele.classList.remove('clicked');
      clickCount--;
      isClicked = false;
    }

    localStorage.setItem('clickCount', clickCount.toString());

    likeButton_ele.parentNode.querySelector('.like_count').textContent =
      clickCount;
  });
});
