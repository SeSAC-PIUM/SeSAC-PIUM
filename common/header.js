let mobileNavIcon, navList, closeBtn;

setTimeout(() => {
  mobileNavIcon = document.querySelector('.hamburger');
  navList = document.querySelector('.nav_list');
  closeBtn = document.querySelector('.btn_close');

  // 햄버거 아이콘 클릭 시 네비게이션 목록 토글
  mobileNavIcon.addEventListener('click', function () {
    navList.classList.toggle('active');
  });

  // 문서 전체에 대한 클릭 이벤트 리스너 추가
  document.addEventListener('click', function (event) {
    const target = event.target;

    // 클릭한 영역이 네비게이션 목록과 햄버거 아이콘 모두 아닐 경우 네비게이션 목록 닫기
    if (
      (!navList.contains(target) && !mobileNavIcon.contains(target)) ||
      closeBtn.contains(target)
    ) {
      navList.classList.remove('active');
    }
  });
}, 1000);
