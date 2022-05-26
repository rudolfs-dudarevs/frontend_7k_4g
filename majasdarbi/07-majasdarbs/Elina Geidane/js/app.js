let taskAdder;
let myTasksContainer;
let taskList;
let addBtn;

window.onload = () => {
    taskInput = document.getElementById("taskInput");
    addBtn = document.getElementById('addBtn');
    myTasksContainer = document.getElementById('myTasks');
    taskList = JSON.parse(localStorage.getItem('taskList'));

    if(!taskList) {
        
    } else{

        taskList = [];
    }

    addBtn.addEventListener('click', addTask);
    renderTasks();
}

const addTask = () => {
    let task-{
        taskText:taksInput.value,
        done: false

    }

}

const removeTask = (event) => {

}

const toggleDone = (event) => {

}

const saveToLocalStorage = () => {

}

const renderTasks = () => {

}