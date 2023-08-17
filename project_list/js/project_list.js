window.addEventListener('DOMContentLoaded', () => {
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

  const role_filter_li = document.querySelectorAll('.role_filter .filter_item_list li');

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
  
  const campus_filter_li = document.querySelectorAll('.campus_filter .filter_item_list li');
  const filter_selection_alert = document.querySelector('.filter_selection_alert');
  const filter_selection = document.querySelector('.filter_selection');
  let filter_selection_li
  
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


      filter_selection_li = document.querySelectorAll('.filter_selection li')
      filter_selection_li.forEach((filter_selection_li_ele)=>{
    
        filter_selection_li_ele.addEventListener('click', ()=>{

          campus_filter_li.forEach((campus_filter_li_ele)=>{
            if(filter_selection_li_ele.innerText == campus_filter_li_ele.innerText){
              campus_filter_li_ele.classList.remove('on')
            }
          })
          filter_selection_li_ele.style.display = 'none'
        })
      })

    });
  });



  const recruit_complete_checkbox_i = document.querySelector('.recruit_complete_checkbox i')

  recruit_complete_checkbox_i.addEventListener('click', ()=>{
    recruit_complete_checkbox_i.classList.toggle('on')
  });




});
