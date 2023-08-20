includeHTML();
window.addEventListener('DOMContentLoaded', () => {


  const search_wrap_input = document.querySelector('.search_wrap input')
  let search_text_data = decodeURI(location.href);
  search_text_data = search_text_data.split("?")[1];

  if(search_text_data){
    search_wrap_input.value = search_text_data
  }


  const search_form = document.querySelector('.search_form');
  const search_form_input = document.querySelector('.search_form input');

  search_form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let search_value = search_form_input.value
    location.href = `/project_list/project_list.html?${search_value}`;
  })

  
  const filter_btn = document.querySelectorAll('.filter_btn');

  document.addEventListener('click', (e) => {
    if (
      !e.target.closest('.filter_btn') &&
      !e.target.closest('.filter_item_list')
    ) {
      filter_btn.forEach((filter_btn_ele) => {
        filter_btn_ele.nextElementSibling.classList.remove('on');
      });
    }
  });

  filter_btn.forEach((filter_btn_ele_click) => {
    filter_btn_ele_click.addEventListener('click', () => {
      filter_btn.forEach((filter_btn_ele) => {
        filter_btn_ele.nextElementSibling.classList.remove('on');
      });
      filter_btn_ele_click.nextElementSibling.classList.toggle('on');
    });
  });

  const role_filter_li = document.querySelectorAll(
    '.role_filter .filter_item_list li'
  );

  role_filter_li.forEach((role_filter_li_click) => {
    role_filter_li_click.addEventListener('click', () => {
      if (role_filter_li_click.classList.contains('all')) {
        role_filter_li.forEach((role_filter_li_ele) => {
          role_filter_li_ele.classList.remove('on');
        });
        role_filter_li_click.parentElement.classList.remove('on');
        return;
      }

      role_filter_li_click.classList.toggle('on');

      location.reload();
      // 프로젝트 리스트 나오게 하기
    });
  });

  const campus_filter_li = document.querySelectorAll(
    '.campus_filter .filter_item_list li'
  );
  const filter_selection_alert = document.querySelector(
    '.filter_selection_alert'
  );
  const filter_selection = document.querySelector('.filter_selection');
  let filter_selection_li;

  campus_filter_li.forEach((campus_filter_li_click) => {
    campus_filter_li_click.addEventListener('click', () => {
      if (campus_filter_li_click.classList.contains('all')) {
        campus_filter_li.forEach((campus_filter_li_ele) => {
          campus_filter_li_ele.classList.remove('on');
          filter_selection.innerText = '';
        });
        campus_filter_li_click.parentElement.classList.remove('on');
        return;
      }

      let campus_filter_sum = [];

      campus_filter_li.forEach((campus_filter_li_ele) => {
        if (campus_filter_li_ele.classList.contains('on')) {
          campus_filter_sum.push(campus_filter_li_ele);
        }
      });
      if (campus_filter_sum.length >= 5) {
        filter_selection_alert.classList.add('on');
        setTimeout(() => {
          filter_selection_alert.classList.remove('on');
        }, 3000);

        return;
      }

      campus_filter_li_click.classList.toggle('on');
      filter_selection.innerText = '';
      campus_filter_li.forEach((campus_filter_li_ele) => {
        if (campus_filter_li_ele.classList.contains('on')) {
          const li = document.createElement('li');
          li.innerText = campus_filter_li_ele.innerText;
          filter_selection.append(li);
          // console.log(campus_filter_li_ele)
        }
      });

      filter_selection_li = document.querySelectorAll('.filter_selection li');
      filter_selection_li.forEach((filter_selection_li_ele) => {
        filter_selection_li_ele.addEventListener('click', () => {
          campus_filter_li.forEach((campus_filter_li_ele) => {
            if (
              filter_selection_li_ele.innerText ==
              campus_filter_li_ele.innerText
            ) {
              campus_filter_li_ele.classList.remove('on');
            }
          });
          filter_selection_li_ele.style.display = 'none';
        });
      });
    });
  });

  const recruit_complete_checkbox_i = document.querySelector(
    '.recruit_complete_checkbox i'
  );

  recruit_complete_checkbox_i.addEventListener('click', () => {
    recruit_complete_checkbox_i.classList.toggle('on');
  });

  const project_list_wrap = document.querySelector('.project_list_wrap');
  let num = 8;

  projectListAdd();

  function projectListAdd() {
    for (let a = 1; a <= num; a++) {
      const project_list_wrap_li = document.createElement('li');
      const project_list_row_4 = document.createElement('ul');
      project_list_row_4.classList.add('project_list_row_4');
      project_list_wrap.append(project_list_wrap_li);
      project_list_wrap_li.append(project_list_row_4);

      for (let i = 1; i <= 4; i++) {
        const card = document.createElement('li');
        card.classList.add('card');
        card.innerHTML = `
              <span class="like_button"></span>
              <a href="/project_detail/project_detail.html">
                <div class="thumb">
                  <p class="thumb_text">PIUM</p>
                  <img src="/src/img/thumbnail.png" alt="모집중 프로젝트 사진">
                </div>
              </a>
              <a href="/project_detail/project_detail.html">
                <div class="card_body">
                  <p class="card_title">
                    [캠퍼스명] 프로젝트 타이틀
                  </p>
                  <p class="card_desc">
                    푸시알림 관심제품 추천 및 핫딜 공유 서비스
                  </p>
                </div>
              </a>
              <div class="card_footer">
                <div class="recruiting_wrap flex_box_row">
                  <span class="card_footer_text">모집중</span>
                  <span class="card_footer_text">4/5</span>
                  <img src="/src/img/Group 629971.png" />
                </div>
                <ul class="modal">
                  <li>
                    <div class="group_position modal_text_L">기획</div>
                    <div class="modal_text_S flex_box_column">
                      <div class="mentor">멘토 1명</div>
                      <div class="mentee">멘티 1명</div>
                    </div>
                  </li>
                  <li>
                    <div class="group_position modal_text_L">UX/UI디자인</div>
                    <div class="modal_text_S flex_box_column">
                      <div class="mentor">멘토 1명</div>
                      <div class="mentee">멘티 1명</div>
                    </div>
                  </li>
                  <li>
                    <div class="group_position modal_text_L">퍼블리싱</div>
                    <div class="modal_text_S flex_box_column">
                      <div class="mentor">멘토 1명</div>
                      <div class="mentee">멘티 1명</div>
                    </div>
                  </li>
                  <li>
                    <div class="group_position modal_text_L">프론트엔드</div>
                    <div class="modal_text_S flex_box_column">
                      <div class="mentor">멘토 1명</div>
                      <div class="mentee">멘티 1명</div>
                    </div>
                  </li>
                  <li style="border-bottom: none">
                    <div class="group_position modal_text_L">백엔드</div>
                    <div class="modal_text_S flex_box_column">
                      <div class="mentor">멘토 1명</div>
                      <div class="mentee">멘티 1명</div>
                    </div>
                  </li>
                </ul>
                <div class="card_footer_like">
                  <span>❤</span>
                  <span class="like_count">0</span>
                </div>
              </div>
      `;

        project_list_row_4.append(card);
      }
    }

    modalDisplay();
    likeBtnClickCount();
  }

  function modalDisplay() {
    // project modal hover
    const recruiting_wrap = document.querySelectorAll('.recruiting_wrap');

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
  }

  function likeBtnClickCount() {
    // heart-button
    const likeButton = document.querySelectorAll('.like_button');

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

        likeButton_ele.parentNode.querySelector(
          '.like_count'
        ).textContent = clickCount;
      });
    });
  }

  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      num = 1;
      projectListAdd();
    }
  });
});
