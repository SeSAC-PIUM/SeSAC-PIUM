includeHTML();

window.addEventListener('DOMContentLoaded', () => {
  const dropdown_btn = document.querySelectorAll('.dropdown_btn');
  const dropdown_list_li = document.querySelectorAll('.dropdown_list li');

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown_btn_input')) {
      dropdown_btn.forEach((dropdown_btn_ele) => {
        dropdown_btn_ele.classList.remove('selected');
        dropdown_btn_ele.nextElementSibling.classList.remove('on');
      });
    }
  });

  dropdown_btn.forEach((dropdown_btn_ele_click) => {
    dropdown_btn_ele_click.addEventListener('click', () => {
      dropdown_btn.forEach((dropdown_btn_ele) => {
        dropdown_btn_ele.classList.remove('selected');
        dropdown_btn_ele.nextElementSibling.classList.remove('on');
      });
      dropdown_btn_ele_click.classList.add('selected');
      dropdown_btn_ele_click.nextElementSibling.classList.add('on');
    });
  });

  dropdown_list_li.forEach((dropdown_list_li_ele_click) => {
    dropdown_list_li_ele_click.addEventListener('click', () => {
      dropdown_list_li.forEach((dropdown_list_li_ele) => {
        dropdown_list_li_ele.classList.remove('on');
      });
      dropdown_list_li_ele_click.classList.add('on');
      dropdown_list_li.forEach((dropdown_list_li_ele) => {
        if (dropdown_list_li_ele.classList.contains('on')) {
          dropdown_list_li_ele.parentNode.parentNode.querySelector(
            'input'
          ).value = dropdown_list_li_ele.innerText;
        }
      });
    });
  });

  const chips_list = document.querySelectorAll('.chips_list');
  const chips_list_undecided = document.querySelector('.chips_list .undecided');

  chips_list.forEach((chips_list_ele) => {
    chips_list_ele.childNodes.forEach((chips_list_li_ele_click) => {
      chips_list_li_ele_click.addEventListener('click', () => {
        if (chips_list_li_ele_click.classList.contains('undecided')) {
          Array.from(chips_list_ele.children).forEach((chips_list_li_ele) => {
            // console.log(chips_list_ele)
            // console.log(chips_list_li_ele)
            chips_list_li_ele.classList.remove('on');
          });

          chips_list_li_ele_click.classList.add('on');
        }

        chips_list_undecided.classList.remove('on');
        chips_list_li_ele_click.classList.toggle('on');
      });
    });
  });

  $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    monthNamesShort: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년',
  });

  $(function () {
    $('.date_btn_input').datepicker();
  });

  const mentor_num_value = document.querySelector('.mentor_num');
  const mentee_num_value = document.querySelector('.mentee_num');
  const mentor_btn_minus = document.querySelector('.mentor_btn_minus');
  const mentor_btn_plus = document.querySelector('.mentor_btn_plus');
  const mentee_btn_minus = document.querySelector('.mentee_btn_minus');
  const mentee_btn_plus = document.querySelector('.mentee_btn_plus');
  let mentor_num = 1;
  let mentor_num_sum = 1;
  let mentee_num = 1;
  let mentee_num_sum = 1;

  mentor_btn_minus.addEventListener('click', () => {
    // minusNum(mentor_num, mentor_num_sum, mentor_num_value)
    if (mentor_num_sum <= 1) return;
    mentor_num--;
    mentor_num_sum = +mentor_num;
    mentor_num_value.innerText = mentor_num_sum;
  });
  mentor_btn_plus.addEventListener('click', () => {
    // plusNum(mentor_num, mentor_num_sum, mentor_num_value)
    if (mentor_num_sum >= 9) return;
    mentor_num++;
    mentor_num_sum = +mentor_num;
    mentor_num_value.innerText = mentor_num_sum;
  });
  mentee_btn_minus.addEventListener('click', () => {
    // minusNum(mentee_num, mentee_num_sum, mentee_num_value)
    if (mentee_num_sum <= 1) return;
    mentee_num--;
    mentee_num_sum = +mentee_num;
    mentee_num_value.innerText = mentee_num_sum;
  });
  mentee_btn_plus.addEventListener('click', () => {
    // plusNum(mentee_num, mentee_num_sum, mentee_num_value)
    if (mentee_num_sum >= 9) return;
    mentee_num++;
    mentee_num_sum = +mentee_num;
    mentee_num_value.innerText = mentee_num_sum;
  });

  // function minusNum(num, num_sum, num_value){
  //   if(mentor_num_sum < 1) return
  //   num--
  //   num_sum =+ num
  //   num_value.innerText = num_sum
  //   console.log('dd')
  // }
  // function plusNum(num, num_sum, num_value){
  //   if(mentee_num_sum >= 9) return
  //   num++
  //   num_sum =+ num
  //   num_value.innerText = num_sum
  // }

  const role_input = document.querySelector('.role_input');
  const add_btn = document.querySelector('.add_btn');
  const recruit_position_list = document.querySelector(
    '.recruit_position_list'
  );

  add_btn.addEventListener('click', () => {
    if (role_input.value === '') {
      return;
    }

    const recruit_position_list_li = document.createElement('li');
    const xmark = document.createElement('i');
    recruit_position_list_li.innerText = `${role_input.value} / 멘토 ${mentor_num_value.innerText} / 멘티 ${mentee_num_value.innerText}`;
    recruit_position_list_li.classList.add('box');
    xmark.classList.add('fa-solid');
    xmark.classList.add('fa-xmark');
    recruit_position_list.append(recruit_position_list_li);
    recruit_position_list_li.append(xmark);

    role_input.value = '';
    // mentor_num_sum = 1
    // mentor_num_value.innerText = mentor_num_sum
    // mentee_num_sum = 1
    // mentee_num_value.innerText = mentee_num_sum

    const recruit_position_list_xmark = document.querySelectorAll('.fa-xmark');


    recruit_position_list_xmark.forEach((recruit_position_list_xmark_ele) => {
      recruit_position_list_xmark_ele.addEventListener('click', () => {
        recruit_position_list_xmark_ele.parentNode.style.display = 'none';
      });
    });
  });

  const file_upload_input = document.querySelector('.file_upload_input');

  file_upload_input.addEventListener('change', () => {
    const selected_file = file_upload_input.files[0];
    const file_reader = new FileReader();

    file_reader.readAsDataURL(selected_file);

    file_reader.onload = function () {
      document.querySelector('.preview_img').src = file_reader.result;
    };
  });

  const dropdown_list = document.querySelectorAll('.dropdown_list');
  const dropdown_btn_input = document.querySelectorAll('.dropdown_btn_input');
  const campus_data_list = [];
  const role_data_list = [];
  const auto_complete = document.querySelector('.campus_list');
  let nowIndex = 0;


  dropdown_list.forEach((dropdown_list_ele)=>{
  
    Array.from(dropdown_list_ele.children).forEach((dropdown_list_li_ele)=>{

      if(dropdown_list_ele.classList.contains('campus_list')){
        campus_data_list.push(dropdown_list_li_ele.innerText)
      }else if(dropdown_list_ele.classList.contains('role_list')){
        role_data_list.push(dropdown_list_li_ele.innerText)
      }
      // console.log(dropdown_list_li_ele)
    });
  });

  // console.log(campus_data_list)

  // dropdown_btn_input.forEach((dropdown_btn_input_ele)=>{

  //   dropdown_btn_input_ele.onkeyup = (e)=>{
  //     const value = dropdown_btn_input_ele.value.trim();

  //     // console.log(value)

  //     const matchDataList = value
  //     ? campus_data_list.filter((label) => label.includes(value))
  //     : [];

  //     switch (e.keyCode) {
  //       // UP KEY
  //       case 38:
  //         nowIndex = Math.max(nowIndex - 1, 0);
  //         break;

  //         // DOWN KEY
  //         case 40:
  //           nowIndex = Math.min(nowIndex + 1, matchDataList.length - 1);
  //           break;

  //           // ENTER KEY
  //           case 13:
  //             document.querySelector("#search").value = matchDataList[nowIndex] || "";
  //             // 초기화
  //             nowIndex = 0;
  //             matchDataList.length = 0;
  //             break;

  //             // 그외 다시 초기화
  //             default:
  //               nowIndex = 0;
  //               break;
  //             }

  //             console.log('matchDataLis', matchDataList)
  //             console.log('value', value)
  //             console.log('nowIndex', nowIndex)
  //             showList(matchDataList, value, nowIndex);

  //           }

  //           const showList = (data, value, nowIndex) => {

  //             console.log(data, value, nowIndex)
  //             // 정규식으로 변환
  //             const regex = new RegExp(`(${value})`, "g");

  //             auto_complete.innerHTML = data
  //             .map(
  //               (label, index) => `
  //               <li class='${nowIndex === index ? "active" : ""}'>
  //               ${label.replace(regex, "<mark>$1</mark>")}
  //               </li>
  //               `
  //               )
  //               .join("");
  //             };

  //             dropdown_btn_input_ele.addEventListener('input', ()=>{
  //               console.log(dropdown_btn_input_ele)
  //               if(dropdown_btn_input_ele.value == ''){
  //                 console.log('없음')
  //                 let dropdown_list_li_inner = dropdown_btn_input_ele.parentNode.parentNode.querySelector('.dropdown_list')
  //                 campus_data_list.forEach((campus_data_list_ele)=>{
  //                   console.log(campus_data_list_ele)
  //                   console.log(dropdown_list_li_inner)
  //                   dropdown_list_li_inner.innerText += `<li>${campus_data_list_ele}</li>`

  //                 })

  //               }
  //             })

  //           })
});
