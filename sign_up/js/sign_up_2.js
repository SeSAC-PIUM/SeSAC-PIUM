includeHTML();

// modal hover
const profileModal = document.querySelector('.profile_modal');
const titleBox = document.querySelector('.title_box');
titleBox.addEventListener('mouseenter', () => {
  profileModal.style.display = 'block';
});
titleBox.addEventListener('mouseleave', () => {
  profileModal.style.display = 'none';
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

//file upload
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const btnUpload = document.querySelector('.btn_add_file');

btnUpload.addEventListener('click', () => {
  fileInput.click();
});

// 기존에 저장된 파일 정보 불러오기
const storedFiles = JSON.parse(localStorage.getItem('files')) || [];

storedFiles.forEach((fileName) => {
  const listItem = createListItem(fileName);
  fileList.appendChild(listItem);
});

fileInput.addEventListener('change', (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    const listItem = createListItem(selectedFile.name);
    fileList.appendChild(listItem);

    // 파일 정보 저장
    storedFiles.push(selectedFile.name);
    localStorage.setItem('files', JSON.stringify(storedFiles));
  }
});

function createListItem(fileName) {
  const listItem = document.createElement('li');
  listItem.textContent = fileName;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';
  deleteButton.classList.add('btn_delete');
  deleteButton.addEventListener('click', () => {
    listItem.remove();

    // 파일 정보 업데이트 및 저장
    storedFiles.splice(storedFiles.indexOf(fileName), 1);
    localStorage.setItem('files', JSON.stringify(storedFiles));
  });

  listItem.appendChild(deleteButton);
  return listItem;
}
//input창 클릭 시 radio버튼 선택
function handleRadioClick(targetRadioClass) {
  const radioButtons = document.querySelectorAll(`.${targetRadioClass}`);

  for (const radio of radioButtons) {
    if (radio.type === 'radio') {
      radio.checked = true;
    }
  }
}

//항목을 다 채워야 다음페이지로 넘어갈 수 있게 설정
function validateInputs() {
  const employmentInput = document.querySelector(
    '.profile_content_wrap.one_1 input:checked'
  );
  const foundedInput = document.querySelector(
    '.profile_content_wrap.two_1 input:checked'
  );

  const majorInput = document.querySelector(
    '.profile_content_wrap.three_1 input'
  );

  const addressInput = document.querySelector(
    '.profile_content_wrap.four_1 input'
  );

  const fileInput = document.querySelector(
    '.profile_content_wrap.five_1 .btn.selected'
  );

  const portfolioInput = document.querySelector(
    '.profile_content_wrap.six_1 input'
  );

  if (!employmentInput) {
    alert('취업경험을 입력해 주세요');
  } else if (!foundedInput) {
    alert('창업경험을 선택해주세요.');
  } else if (!majorInput.value) {
    alert('전공을 입력해주세요.');
  } else if (!addressInput.value) {
    alert("github 주소를 입력해주세요. 없다면 '없음'이라고 작성해주세요");
  } else if (!portfolioInput.value) {
    alert("포트폴리오 링크를 입력해주세요. 없다면 '없음'이라고 작성해주세요");
  } else {
    // 모든 항목이 유효하다면 true 반환
    return true;
  }
}

function goToNextPage() {
  if (validateInputs()) {
    // 모든 항목이 유효하다면 다음 페이지로 이동
    window.location.href = '../sign_up/sign_up_3.html';
  }
}

// 가입완료 버튼 클릭 시 함수 호출
const btnSave = document.querySelector('.btn_save');
btnSave.addEventListener('click', goToNextPage);
