const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TOODS_KEY = "todos";

let toDos = [];

function saveTodos(){
    localStorage.setItem(TOODS_KEY, JSON.stringify(toDos));  // localStorage에 array 저장  // JSON.stringify takes an JS object and turns it into string.
}

function deleteToDo(event) {
    li = event.target.parentElement;  // parentElemet: 클릭된 element의 부모
    li.remove();
    // localStorage에서 element 삭제하기
    // filter: true를 return하면 array에 유지되고 false를 return 하면 array에서 제거됨(array의 item을 유지하고 싶으면 true를 return 해야 함)
    // 이때, array는 기존의 array가 아니라 새로 만들어진 array이다.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  // array item의 id가 클릭된 요소의 id와 같은 경우에는 array에 요소를 포함x  // toDo의 id 타입은 number이고 li의 id 타입은 string이기 때문에 타입을 맞춰줌
    saveTodos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newTodo.id;  // li에 id 부여
    // todo 삭제를 위한 버튼
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);  // span을 child로 가지는 li
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();  // 새로고침 방지
    const newTodo = toDoInput.value;
    toDoInput.value = "";  // 입력값 없애기 
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),  // 랜덤한 아이디(array의 item에 id를 부여해서 고유의 정체성을 갖게한다)
    };
    toDos.push(newToDoObj);  // todo 저장을 위해 array에 push
    paintToDo(newToDoObj);
    saveTodos();  
} 

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item){  
    console.log("This is turn of", item);
}
*/

// 새로고침을 해도 localStorage에 저장된 todos를 불러옴
const savedToDos = localStorage.getItem(TOODS_KEY);

if(savedToDos !== null){  // localStorage에 저장된 todos가 존재할 경우
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;  // 빈 배열을 저장된 배열로 교체
    parsedToDos.forEach(paintToDo);  // parsedToDos가 가지고 있는 각각의 item에 대해 함수를 실행  // 함수의 argument로 각각의 item을 넘겨줌
}