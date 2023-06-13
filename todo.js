const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// todo-form 에서 input을 찾기위해 getElementById가 아닌 querySelector을 사용한다
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
// html id 섹션을 가져오기 위함

// todo리스트를 저장시켜보자, 매번 newtodo가 생성될 때 마다 toDos(리스트)에 저장시켜보자
// localStorage를 이용해 저장할 수 있는데 localStorage는 array는 안되고 text만 반영가능
let toDos = [];

// toDos array를 localstorage에 넣는 역할만 하는 saveToDos이다.
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    // localstorage 안의 문자들을 JSON.Stringfy를 통해 text가 아닌 string으로 변환시킴
    // 이 string을 JSON.parse를 통해 string을 array로 만듬
}


// todo리스트에서 제거할 수 있는 기능을 추가해보자
// 하지만 어떤 button이 클릭되었는지 첫번째 버튼인지 두번째 버튼인지 모르므로 event를 불러온다
// event가 발생한 버튼을 확인하고 그 event의 parentElement를 보면 어떤 button이 클릭되었는지 알 수 있다.
function deleteTodo(event){
    const li = event.target.parentElement;
    // target은 클릭된 HTML Element(==button)고 그 element에는 필수로 parentElement(==li), 가 있다
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    // 클릭한 li의 id를 갖고 있는 toDO를 지우기 위한 코드이다 
}


// to do를 그리는 역할인 paintTodo
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="  X";
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    // 중요!! 우린 <li></li>를 html이 아닌 JS에서 만들었다
    // <li></li> 내부에 span을 만들고(createElement) 넣었다 (appendchild)
    // span 내부에는 우리가 받을 변수인 newTodo를 넣어주었다.
    // 마지막으로 이 새로운 li를 toDolist(==ul)에 넣어주면 마무리된다.
    
}


function handleToDoSumbit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value = "";
    // newToDoObj는 각 item을 구분하기 위해 todo를 object로 변환시켜 전달받는다 id는 index로 구분자이다.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    // 매번 newtodo가 생성될 때 마다 toDos(리스트)에 저장시켜보자
    // toDoInput의 변수를 newTodo에 저장하고 toDoInput 변수를 없앤다
    // 그 이유는 우리가 login을 하고 로그인 상자에 남아있는 아이디를 없애기 위해
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSumbit)
// 새로고침할 떄 마다 todo리스트가 사라진다 이를 해결해보자

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
    // forEach 함수는 각각의 item(['as','as','a'])에 대해 function(=sayHello)을 수행할 수 있게 해준다
}

