// [참고] https://www.w3schools.com/howto/howto_html_include.asp

function includeHTML(callback) {
  var z, i, elmnt, file, xhr;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName('*');
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute('include-html');
    // console.log(file);
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = 'Page not found.';
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute('include-html');
          includeHTML(callback);
        }
      };
      xhr.open('GET', file, true);
      xhr.send();
      /*exit the function:*/
      return;
    }
  }
  // setTimeout(function () {
  //   callback();
  // }, 0);

  
  //header hamburger click
  const mobileNavIcon = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav_list');
  const closeBtn = document.querySelector('.btn_close');
  console.log(closeBtn);

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


  const login_wrap_search_form = document.querySelector('.login_wrap .search_form');
  const login_wrap_search_form_input = document.querySelector('.login_wrap .search_form input');

  login_wrap_search_form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let search_value = login_wrap_search_form_input.value
    location.href = `/project_list/project_list.html?${search_value}`;
  })


  const nav_list_search_form = document.querySelector('.nav_list .search_form');
  const nav_list_search_form_input = document.querySelector('.nav_list .search_form input');

  nav_list_search_form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let search_value = nav_list_search_form_input.value
    location.href = `/project_list/project_list.html?${search_value}`;
  })

}
