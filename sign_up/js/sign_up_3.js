includeHTML();

// drop down
input.onfocus = function () {
  browsers.value = '';
  browsers.style.display = 'block';
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

function addActive(x) {
  if (!x) return false;
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = x.length - 1;
  x[currentFocus].classList.add('active');
}
function removeActive(x) {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove('active');
  }
}

// box btn 클릭
let selectedBtnId = null;

function openAnswer(btnIndex) {
  if (selectedBtnId !== null) {
    document.getElementById(selectedBtnId).classList.remove('selected');
  }

  selectedBtnId = `btn${btnIndex}`;
  document.getElementById(selectedBtnId).classList.add('selected');
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
