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
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    // todo 삭제를 위한 버튼
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);  // span을 child로 가지는 li
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();  // 새로고침 방지
    const newTodo = toDoInput.value;
    toDoInput.value = "";  // 입력값 없애기 
    toDos.push(newTodo);  // todo 저장을 위해 array에 push
    paintToDo(newTodo);
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