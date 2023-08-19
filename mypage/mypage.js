includeHTML();

//localstorage userName이 undefined일 때 예외처리 하면 좋을 듯
const userName = window.localStorage.getItem('userName');
const name = document.querySelector('.user_name');
name.innerText = userName;
console.log(userName);

const userSex = window.localStorage.getItem('userSex');
const sex = document.querySelector('.user_sex');
sex.innerText = userSex;
console.log(userSex);

const userCampus = window.localStorage.getItem('userCampus');
const campus = document.querySelector('.user_campus');
campus.innerText = userCampus;
console.log(userCampus);

const userClass = window.localStorage.getItem('userClass');
const user_class = document.querySelector('.user_class');
user_class.innerText = userClass;
console.log(userClass);

const userJob = window.localStorage.getItem('userJob');
const user_job = document.querySelector('.user_job');
user_job.innerText = userJob;
console.log(userJob);

const userPosition = window.localStorage.getItem('userPosition');
const user_position = document.querySelector('.user_position');
user_position.innerText = userPosition;
console.log(userPosition);
