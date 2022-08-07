let a = 1;
const b = 2;
function add(_a, _b)
{
    return _a + b;
}
console.log(add(a,b))

const Octopus = document.getElementById("staticOctopus");
Octopus.style.border = "2px solid #ff0000";
function handleOctopusClick()
{
    a++;
    if (a % 2 == 0)
    {
        Octopus.innerText = 'now i\'m not an Octopus'
    }
    else 
    {
        Octopus.innerText = 'maybe i\'m an Octopus..'
    }

}
Octopus.addEventListener("click", handleOctopusClick)

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    const paresedToDos = JSON.parse(savedToDos);
    toDos = paresedToDos;
    paresedToDos.forEach(paintToDo);
}

// const l = []
// for(let i = 1; i < 10; i++)
// {
//     l.push(i)
// }
// console.log(l)