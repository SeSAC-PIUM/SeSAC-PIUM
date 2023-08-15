window.addEventListener('DOMContentLoaded', () => {

  const dropdown_btn = document.querySelectorAll('.dropdown_btn');
  const dropdown_list_li = document.querySelectorAll('.dropdown_list li');

  document.addEventListener('click', (e)=>{
    if(
      !e.target.closest('.dropdown_btn_input')
    ){
      dropdown_btn.forEach((dropdown_btn_ele)=>{
        dropdown_btn_ele.classList.remove('selected')
        dropdown_btn_ele.nextElementSibling.classList.remove('on')
      })
    }
  })

  dropdown_btn.forEach((dropdown_btn_ele_click)=>{
    dropdown_btn_ele_click.addEventListener('click', ()=>{
      dropdown_btn.forEach((dropdown_btn_ele)=>{
        dropdown_btn_ele.classList.remove('selected')
        dropdown_btn_ele.nextElementSibling.classList.remove('on')
      })
      dropdown_btn_ele_click.classList.add('selected');
      dropdown_btn_ele_click.nextElementSibling.classList.add('on');
    })
  })

  dropdown_list_li.forEach((dropdown_list_li_ele_click)=>{
    dropdown_list_li_ele_click.addEventListener('click', ()=>{
      dropdown_list_li.forEach((dropdown_list_li_ele)=>{
        dropdown_list_li_ele.classList.remove('on');
      })
      dropdown_list_li_ele_click.classList.add('on')
      dropdown_list_li.forEach((dropdown_list_li_ele)=>{
        if(dropdown_list_li_ele.classList.contains('on')){
          dropdown_list_li_ele.parentNode.previousSibling.previousSibling.querySelector('input').value = dropdown_list_li_ele.innerText
        }
      })
    })
  })

  
  const chips_list = document.querySelectorAll('.chips_list');
  const chips_list_undecided = document.querySelector('.chips_list .undecided');

  chips_list.forEach((chips_list_ele)=>{

    chips_list_ele.childNodes.forEach((chips_list_li_ele_click)=>{
      chips_list_li_ele_click.addEventListener('click', ()=>{
        
        if(chips_list_li_ele_click.classList.contains('undecided')){

          Array.from(chips_list_ele.children).forEach((chips_list_li_ele)=>{
            // console.log(chips_list_ele)
            // console.log(chips_list_li_ele)
            chips_list_li_ele.classList.remove('on')
          })
  
          chips_list_li_ele_click.classList.add('on')
        }

        chips_list_undecided.classList.remove('on')
        chips_list_li_ele_click.classList.toggle('on')

      })

    })
  })


  const mentor_num_value = document.querySelector('.mentor_num');
  const mentee_num_value = document.querySelector('.mentee_num');
  const mentor_btn_minus = document.querySelector('.mentor_btn_minus');
  const mentor_btn_plus = document.querySelector('.mentor_btn_plus');
  const mentee_btn_minus = document.querySelector('.mentee_btn_minus');
  const mentee_btn_plus = document.querySelector('.mentee_btn_plus');
  let mentor_num = 1
  let mentor_num_sum = 1
  let mentee_num = 1
  let mentee_num_sum = 1
  
  
  mentor_btn_minus.addEventListener('click', ()=>{
    // minusNum(mentor_num, mentor_num_sum, mentor_num_value)
    if(mentor_num_sum < 1)
    return
    mentor_num--
    mentor_num_sum =+ mentor_num
    mentor_num_value.innerText = mentor_num_sum
    })
  mentor_btn_plus.addEventListener('click', ()=>{
    // plusNum(mentor_num, mentor_num_sum, mentor_num_value)
    if(mentor_num_sum >= 9)
    return
    mentor_num++
    mentor_num_sum =+ mentor_num
    mentor_num_value.innerText = mentor_num_sum
  })
  mentee_btn_minus.addEventListener('click', ()=>{
    // minusNum(mentee_num, mentee_num_sum, mentee_num_value)
    if(mentee_num_sum < 1)
    return
    mentee_num--
    mentee_num_sum =+ mentee_num
    mentee_num_value.innerText = mentee_num_sum
  })
  mentee_btn_plus.addEventListener('click', ()=>{
    // plusNum(mentee_num, mentee_num_sum, mentee_num_value)
    if(mentee_num_sum >= 9)
    return
    mentee_num++
    mentee_num_sum =+ mentee_num
    mentee_num_value.innerText = mentee_num_sum
  })

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
  const recruit_position_list = document.querySelector('.recruit_position_list')
  
  add_btn.addEventListener('click', ()=>{

    if(role_input.value === ''){
      return
    }

    const recruit_position_list_li = document.createElement('li');
    const xmark = document.createElement('i');
    recruit_position_list_li.innerText = `${role_input.value} / 멘토 ${mentor_num_value.innerText} / 멘티 ${mentee_num_value.innerText}`
    recruit_position_list_li.classList.add('box')
    xmark.classList.add('fa-solid');
    xmark.classList.add('fa-xmark');
    recruit_position_list.append(recruit_position_list_li)
    recruit_position_list_li.append(xmark)

    role_input.value = ''
    mentor_num_sum = 1
    mentor_num_value.innerText = mentor_num_sum
    mentee_num_sum = 1
    mentee_num_value.innerText = mentee_num_sum

    const recruit_position_list_xmark = document.querySelectorAll('.fa-xmark');

    console.log(recruit_position_list_xmark)

    recruit_position_list_xmark.forEach((recruit_position_list_xmark_ele)=>{
      
      recruit_position_list_xmark_ele.addEventListener('click', ()=>{
        recruit_position_list_xmark_ele.parentNode.style.display='none'
      })
    })


  })


  const file_upload_input = document.querySelector('.file_upload_input')

  file_upload_input.addEventListener('change', ()=>{
    const selected_file = file_upload_input.files[0];
    const file_reader = new FileReader();
    
    file_reader.readAsDataURL(selected_file);

    file_reader.onload = function () {
      document.querySelector(".preview_img").src = file_reader.result;
    };
  })
  
  
  
});