
// input과 button을 html에서 가져오기 1
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// input과 button을 html에서 가져오기 2
// const logininput = document.querySelector("#login-form input")
// const loginbutton = document.querySelector("#login-form button")

//  click event가 login button에 연결되어야 한다
// function onLoginBtnClick(){
// console.log("hello",loginInput.value);}


// // 이름이 15글자보다 길거나 공백일 경우 경고문을 뜨게 만들어본다 (input의 유효성을 알아보는 것)
// function onLoginBtnClick(){
//     const username = loginInput.value;
//     if(username===""){
//         alert("Please write your name");
//     } else if(username.length > 15 ){
//         alert("Your name is too long.");
//     }
// }

// loginButton.addEventListener("click", onLoginBtnClick)


//  이제는 click을 감지하는 것이 아닌 form(입력값)그 자체를 제출하여 click에 신경쓰지 않도록 하는 것이 목표
//  웹브라우저가 새로고침하지 않고 결괏값을 받도록 해보자
// const logininput = document.querySelector("#login-form input")
// const loginbutton = document.querySelector("#login-form button")

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

// 아래 코드는 onLoginSubmit이라는 function을 만들고
// 이 function이 하나의 argument(event)를 받도록 하고 JS에 넘겨줌
// argument(event) 는 event에 대한 정보를 JS에 제공함
// preventDefault는 어떤 event의 기본 행동이 발생되지 않도록 함
// 웹사이트가 새로고침 되는 것이 기본 행동 -> 웹 새로고침 X
// hidden class를 로그인 형식에 추가함으로써 form이 숨겨졌다
// username이라는 input을 h1에 반영시킨다
// form만 hidden 되게 하기 위해 HIDDEN CLASSNAME을 remove 한다
// localStorage - 사용자 이름을 저장하기 위한 api
// console 라인에서 application -> local storage
// local stroage에 user 정보가 있으면 h1을 보여주고 없으면 form을 보여줌
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = "HELLO " + username;
  // = `Hello ${username}`; , 무조건 ``로 시작해야함 (tab 위))
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// clicked를 누르면 브라우저 기본동작인 웹페이지로 가는 것이 중단됨 (기본동작 중단)
// 사용자가 웹페이지 어느 부분을 클릭했는지에 대한 정보를 console.log(event)를 통해 알 수 있다.
// console.dir은 해당 행동에 대해 세부 내용을 object로 제공한다  ex 클릭 - (x좌표 y좌표) 등
// function handleLinkClick(event) {
//   event.preventDefault();
//   console.dir(event);
// }
// "submit"는 login을 누르거나 enter를 누르면 반응한다.

//  2번 greeting.innerText가 사용됬으므로 함수로 정의한다.
// input(argument)인 username을 첫 줄 ()안에 넣어준다
function paintGreetings(username) {
  greeting.innerText = "HELLO " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // USERNAME이 없다면 form의 hidden을 지워서 form 표시
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // user 명이 있을 경우 greeting의 hidden 을 없애서 h1을 표시
  greeting.innerText = "HELLO " + savedUsername;
}


// class="hidden"을 통해 form이 submit되는 display을 감춘다


// 2번 이상 반복되는 문장 -> function 2번 이상 반복되는 단어 -> const

