includeHTML();

// modal hover
const profileModal = document.querySelectorAll('.profile_modal');
const titleBox = document.querySelectorAll('.has_modal');

for (let i = 0; i < titleBox.length; i++) {
  titleBox[i].addEventListener('mouseenter', () => {
    profileModal[i].style.display = 'block';
  });
  titleBox[i].addEventListener('mouseleave', () => {
    profileModal[i].style.display = 'none';
  });
}

// drop down
const campusClasses = [
  {
    name: '강동캠퍼스',
    classes: [
      '모든 직무에서 활용 가능한 웹 퍼블리싱 과정',
      '디지털 트레이드 엑스퍼트',
      'NAVER Cloud 클라우드 실무교육과정',
      '언리얼 엔진을 활용한 XR콘텐츠 개발자 양성 과정',
      'GoogleCloud 기반 인공지능 개발자 과정    ',
      '블록체인 플랫폼 융합 게임서버 개발자 양성 과정',
    ],
  },
  {
    name: '강서캠퍼스',
    classes: [
      '데이터기반 디지털 마케팅 실전 취업 원패스',
      '이커머스 특화 전Z전능 콘텐츠 마케터 양성과정',
    ],
  },
  {
    name: '광진캠퍼스',
    classes: [
      '데이터 드리븐 패션 MD 실전',
      '데이터 드리븐 퍼포먼스 마케팅 체인저스 1기',
    ],
  },
  {
    name: '금천캠퍼스',
    classes: [
      'ChatGPT를 활용한 생성형/대화형 인공지능 개발자',
      'AI융합 서비스 개발자 양성과정',
      '언리얼엔진을 활용한 인터렉티브 XR 실감콘텐츠 개발자 과정',
    ],
  },
  {
    name: '동작캠퍼스',
    classes: [
      '데이터 드리븐 서비스 기획 체인저스',
      '유니콘 기업 현직자에게 배우는 IT 서비스 기획자 취업캠프',
    ],
  },
  {
    name: '마포캠퍼스',
    classes: ['데이터 드리븐 퍼포먼스 마케팅 체인저스 2기'],
  },
  {
    name: '서대문캠퍼스',
    classes: [
      '프로젝트와 포트폴리오를 한 번에! 3D 모션그래픽 취업 클래스',
      '파이썬 기반의 풀스택 웹서비스 개발 과정',
      '유니티와 로블록스를 활용한 메타버스 게임 제작 과정',
      ' Python 기반의 탄탄한 데이터 분석 기초부터 인공지능&딥러닝 과정',
    ],
  },

  {
    name: '용산캠퍼스',
    classes: [
      '사풀스택 웹 융합 개발자 양성 과정',
      '사물인터넷과 메타버스를 연계한 SW 개발자 과정',
      '핀테크 특화 데이터/AI 엔지니어 <핀테커스>',
      '하이브리드 클라우드 데이터옵스 엔지니어 양성과정',
    ],
  },
  {
    name: '종로캠퍼스',
    classes: [
      '실무요건 기반 핀테크 데이터 분석가 과정',
      '주얼리 데이터 드리븐(Date-driven) MD 데뷔과정',
      '브랜디 패션 플랫폼 콘텐츠 프로바이더 과정',
    ],
  },
  {
    name: '중구캠퍼스',
    classes: [
      '3D 디지털 융합 패션 전문가 양성과정-여성복',
      '3D 디지털 융합 패션 전문가 양성과정-남성복',
      '핀테크 특화 데이터 드리븐 UI/UX 디자이너 <핀테커스',
    ],
  },
];

// drop down
// 캠퍼스 선택
input.onfocus = function () {
  browsers.value = '';
  browsers.style.display = 'block';
  browsers.style.position = 'relative';
  input.style.borderRadius = '4px';
};
for (let option of browsers.options) {
  option.onclick = function () {
    input.value = option.value;
    browsers.style.display = 'none';
    input.style.borderRadius = '4px';
  };
}

input.oninput = function () {
  currentFocus = -1;
  var text = input.value;
  for (let option of browsers.options) {
    if (option.value.toUpperCase().indexOf(text) > -1) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  }
};

let currentFocus = -1;
input.onkeydown = function (e) {
  if (e.keyCode == 40) {
    currentFocus++;
    addActive(browsers.options);
  } else if (e.keyCode == 38) {
    currentFocus--;
    addActive(browsers.options);
  } else if (e.keyCode == 13) {
    e.preventDefault();
    if (currentFocus > -1) {
      if (browsers.options) browsers.options[currentFocus].click();
    }
  }
};

// 클래스 선택
const classSelect = document.querySelector('#class_select');

classSelect.onfocus = function () {
  browsers2.innerHTML = '';
  // class_select.value = '';
  for (let i = 0; i < campusClasses.length; i++) {
    if (input.value == campusClasses[i].name) {
      for (let el of campusClasses[i].classes) {
        const option = document.createElement('option');
        // console.log(el);
        option.append(el);
        option.setAttribute('value', el);
        browsers2.append(option);
      }
    }
  }
  // browsers2.value = '';
  browsers2.style.display = 'block';
  classSelect.style.borderRadius = '4px';
  for (let option of browsers2.options) {
    // console.log(option);
    option.onclick = function () {
      classSelect.value = option.value;
      browsers2.style.display = 'none';
      classSelect.style.borderRadius = '4px';
      console.log(option.value);
      // console.log('얍');
    };
  }
};

classSelect.oninput = function () {
  currentFocus2 = -1;
  var text = classSelect.value;
  for (let option of browsers2.options) {
    if (option.value.toUpperCase().indexOf(text) > -1) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  }
};

let currentFocus2 = -1;
classSelect.onkeydown = function (e) {
  if (e.key == 'ArrowUp') {
    // console.log(e.key);
    currentFocus2--;
    addActive2(browsers2.options);
  } else if (e.key == 'ArrowDown') {
    // console.log(e.key);
    currentFocus2++;
    addActive2(browsers2.options);
    // console.log(browsers2.options);
    // console.log(currentFocus2);
  } else if (e.keyCode == 13) {
    e.preventDefault();
    if (currentFocus2 > -1) {
      if (browsers2.options) browsers2.options[currentFocus2].click();
      // console.log(browsers2.options[currentFocus2]);
    }
  }
};

function addActive(x) {
  if (!x) return false;
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = x.length - 1;
  x[currentFocus].classList.add('active');
}

function addActive2(x) {
  if (!x) return false;
  removeActive(x);
  if (currentFocus2 >= x.length) currentFocus2 = 0;
  if (currentFocus2 < 0) currentFocus2 = x.length - 1;
  x[currentFocus2].classList.add('active');
}
function removeActive(x) {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove('active');
  }
}

// input 바깥 영역을 클릭하면 선택창이 닫히게 하는 코드.
document.addEventListener('click', function (event) {
  if (event.target !== input && event.target !== classSelect) {
    browsers.style.display = 'none';
    browsers2.style.display = 'none';
    input.style.borderRadius = '4px';
    classSelect.style.borderRadius = '4px';
  }
});

// box btn 클릭

let selectedBtnId = null;

function openAnswer(btnIndex) {
  if (selectedBtnId !== null) {
    document.getElementById(selectedBtnId).classList.remove('selected');
  }

  selectedBtnId = `btn${btnIndex}`;
  document.getElementById(selectedBtnId).classList.add('selected');
}

const nameInput = document.querySelector('.profile_content_wrap.one input');
const selectedCampus = document.querySelector(
  '.profile_content_wrap.two #input'
);
const selectedClassInput = document.querySelector(
  '.profile_content_wrap.two #class_select'
);

//항목을 다 채워야 다음페이지로 넘어갈 수 있게 설정
function validateInputs() {
  // console.log(selectedJob);
  const selectedJob = document.querySelector(
    '.profile_content_wrap.four .btn.selected'
  );
  const selectedPosition = document.querySelector(
    '.profile_content_wrap.five input:checked'
  );

  const selectedSex = document.querySelector(
    '.profile_content_wrap.three input:checked'
  );

  if (!nameInput.value) {
    alert('이름을 입력해 주세요');
  } else if (!selectedCampus.value) {
    alert('캠퍼스를 선택해주세요.');
  } else if (!selectedClassInput.value) {
    alert('클래스를 선택해주세요.');
  } else if (!selectedSex) {
    alert('성별을 선택해주세요.');
  } else if (!selectedJob) {
    alert('희망직무를 선택해주세요');
  } else if (!selectedPosition) {
    alert('멘토/멘티를 선택해주세요');
  } else {
    // 모든 항목이 유효하다면 true 반환
    return true;
  }
}

function goToNextPage() {
  if (validateInputs()) {
    saveDataInLocalStorage();

    // 모든 항목이 유효하다면 다음 페이지로 이동
    window.location.href = '../sign_up/sign_up_2.html';
  }
}

// 가입완료 버튼 클릭 시 함수 호출
const btnSave = document.querySelector('.btn_save');
btnSave.addEventListener('click', goToNextPage);

// Local Storage
function saveDataInLocalStorage() {
  const selectedSex = document.querySelector(
    '.profile_content_wrap.three input:checked'
  );

  const selectedJob = document.querySelector(
    '.profile_content_wrap.four .btn.selected'
  );

  const selectedPosition = document.querySelector(
    '.profile_content_wrap.five input:checked'
  );

  console.log(selectedJob.innerText);

  window.localStorage.setItem('userName', nameInput.value);
  window.localStorage.setItem('userSex', selectedSex.value);
  window.localStorage.setItem('userCampus', selectedCampus.value);
  window.localStorage.setItem('userClass', selectedClassInput.value);
  window.localStorage.setItem('userJob', selectedJob.innerText);
  window.localStorage.setItem('userPosition', selectedPosition.value);
}
