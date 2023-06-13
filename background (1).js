const images = ["0.jpeg", "1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

// 이미지를 실제로 html에 반영해보자
// javascript에서 html 요소를 생성시켜보자

// createElement img를 해준다 
// < img src="img/0.jpeg">가 되도록 bgImage.src를 해준다
// 아직 bgImage.src가 html body에 존재하지 않으므로 반영할 수 있도록 해보자
const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;

// 아직 bgImage.src가 html body에 존재하지 않으므로 반영할 수 있도록 해보자 (appendChild()를 사용한다)
document.body.appendChild(bgImage);