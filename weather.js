function onGeok(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}


// getCurrentPosition 함수는 argument를 2개 받는다
// 1번째 꺼는 위치 받는 것에 성공했을때 실현될 function 두 번째꺼는 실패했을 때 실현될 function
navigator.geolocation.getCurrentPosition(onGeok, onGeoError);
