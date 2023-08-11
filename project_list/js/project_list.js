window.addEventListener("DOMContentLoaded", () => {

  const filter_btn = document.querySelectorAll('.filter_btn');
  const filter_li = document.querySelectorAll('.campus_filter .filter_item_list li');
  const role_filter_li = document.querySelectorAll('.role_filter .filter_item_list li');
  const campus_filter_li = document.querySelectorAll('.campus_filter .filter_item_list li');
  const filter_selection = document.querySelectorAll('.filter_selection');

  document.addEventListener('click', (e)=>{
    console.log(e);
    console.log(e.target);
    
    // filter_li.forEach((filter_li_ele)=>{
    //   if(e.target == filter_li_ele){
    //     console.log('dd')
    //   }
    // })
    // filter_li.forEach((filter_li_ele)=>{
    //   if(e.target === filter_li_ele){
    //     dd = filter_li_ele
    //     console.log(dd)
    //   }
    // })
    // if(!e.target.classList.contains('filter_btn')&&!e.target.classList.contains('filter_item_list')&&!e.target==filter_li){
    //     filter_btn.forEach((filter_btn_ele)=>{
    //       filter_btn_ele.nextElementSibling.classList.remove('on')
    //     })
    // }
    if(!e.target.closest('.filter_btn')&&!e.target.closest('.filter_item_list')){
      console.log(e.target.closest('.filter_item_list'))
        filter_btn.forEach((filter_btn_ele)=>{
          filter_btn_ele.nextElementSibling.classList.remove('on')
        })
    }
    // gnb_li_target = e.target.closest('.gnb>li');
    // if(!gnb_li_target){
    //   gnb_li.forEach((gnb_li_ele)=>{
    //     gnb_li_ele.classList.remove('on');
    //   })
    // }    

  });

  // let sum = []

  filter_btn.forEach((filter_btn_ele_click)=>{
    filter_btn_ele_click.addEventListener('click', ()=>{
      filter_btn.forEach((filter_btn_ele)=>{
        filter_btn_ele.nextElementSibling.classList.remove('on')
      })
      filter_btn_ele_click.nextElementSibling.classList.toggle('on')
    })

  })

  role_filter_li.forEach((role_filter_li_click)=>{
    role_filter_li_click.addEventListener('click', ()=>{
      if(role_filter_li_click.classList.contains('all')){
        role_filter_li.forEach((role_filter_li_ele)=>{
          role_filter_li_ele.classList.remove('on')
        })
        role_filter_li_click.parentElement.classList.remove('on');
        return
      }

      role_filter_li_click.classList.toggle('on');
      
      location.reload()
      // 프로젝트 리스트 나오게 하기
      


      // let role_filter_sum = []
      // role_filter_li.forEach((role_filter_li_ele)=>{
      //   if(role_filter_li_ele.classList.contains('on')){
      //     // role_filter_sum = role_filter_li_ele
      //     role_filter_sum.push(role_filter_li_ele)
      //   }
        
      // })
      // if(role_filter_sum.length >= 1){
      //   alert('새로고침')
      //   return
      //   // role_filter_li_ele.parentElement.classList.remove('on')
      // }

      // role_filter_li_click.classList.toggle('on')




    })
  })




  campus_filter_li.forEach((campus_filter_li_click)=>{
    campus_filter_li_click.addEventListener('click', ()=>{
      if(campus_filter_li_click.classList.contains('all')){
        campus_filter_li.forEach((campus_filter_li_ele)=>{
          campus_filter_li_ele.classList.remove('on')
        })
        campus_filter_li_click.parentElement.classList.remove('on');
        return
      }
      let campus_filter_sum = []
      campus_filter_li.forEach((campus_filter_li_ele)=>{
        if(campus_filter_li_ele.classList.contains('on')){
          // campus_filter_sum = campus_filter_li_ele
          campus_filter_sum.push(campus_filter_li_ele)
          console.log
        }
        
      })
      if(campus_filter_sum.length >= 5){
        alert('캠퍼스는 5개까지만 선택하실 수 있습니다.')
        return
        // campus_filter_li_ele.parentElement.classList.remove('on')
      }

      campus_filter_li_click.classList.toggle('on')
    })
  })



});