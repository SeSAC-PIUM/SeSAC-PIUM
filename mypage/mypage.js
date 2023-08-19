includeHTML();

//localstorage userName이 undefined일 때 예외처리 하면 좋을 듯
const userName = window.localStorage.getItem('userName');
console.log(userName);

const name = document.querySelector('.real_name'); //이름 란에 요런 클래스 부여 후에 선택
name.innerText = userName;
