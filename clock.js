//  interval 이란 매번 일어나야하는 무언가 ex> 매 2초마다 무엇을 발생시킬 때, 2초마다 주식시장 확인할 떄
const clock = document.querySelector("h2#clock")

function sayHello(){
    console.log("hello");
}

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    // padStart가 string에만 적용되므로 date.getHours를 string으로 바꾸고 padStart를 적용한다.
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // new Date object는 현재 시간에 대한 정보를 가지고 있다
    clock.innerText=`${hours}:${minutes}`;
}

// website가 실행되자마자 계속 시계가 돌아가도록 함
// 이 돌아가는 시계를매초마다 (1000) index.html의 00:00 text에 반영되도록 (innertext 이용) 해주면 끝
setInterval(getClock,1000);


// setInterval(sayHello,5000);
// 2개의 argument를 받는다 첫번쨰는 실행코자하는 function 두번째는 호출되는 간격을 몇 ms로 할건가
// 5000ms == 5second , 5초가 지나면 sayHello를 콘솔로 받을 수 있다.

// 1.padStart(20,"0")
// 1을 20자리 수로 변환하고 앞자리수는 0으로 채운다