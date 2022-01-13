import './styles/main.scss';
import TaskCollection from './TaskCollection.js';
import { clearCompleted } from './completed.js';

const tasks = new TaskCollection();

const addForm = document.querySelector('#addForm');
const clearButton = document.querySelector('#clear');

const render = () => {
  tasks.list = tasks.list.sort((a, b) => a.index - b.index);
  tasks.list.forEach((task) => {
    tasks.display(task);
  });
};

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = addForm.querySelector('input');
  const inputValue = input.value;
  if (inputValue) {
    const task = tasks.addTask(inputValue);
    tasks.display(task);
    input.value = '';
  }
});

window.onload = () => {
  if (tasks.loadStorage()) {
    render();
  }
};

clearButton.addEventListener('click', () => {
  const completedList = clearCompleted(tasks.list);
  completedList.forEach((task) => {
    tasks.removeTask(task);
  });
});

var dragged;
var currentListItem;

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem

  dragged = event.target;
  currentListItem = dragged;

  event.target.style.opacity = 0;
}, false);


document.addEventListener("dragend", (event) => {
  event.target.style.opacity = 1;
})

document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  if (event.target.draggable) {
    currentListItem = event.target;

    let temp = currentListItem.parentNode;
    dragged.parentNode.appendChild(currentListItem);
    dragged.parentNode.removeChild(dragged);
    temp.appendChild(dragged);

    const currentId = currentListItem.id.substr(currentListItem.id.length - 1);
    const draggedId = dragged.id.substr(dragged.id.length - 1);

    if (draggedId - currentId > 0) {
      dragged.setAttribute("id", `card-${+draggedId - 1}`);
      currentListItem.setAttribute('id', `card-${+currentId + 1}`);
    } else if (draggedId - currentId < 0) {
      dragged.setAttribute('id', `card-${+draggedId + 1}`);
      currentListItem.setAttribute('id', `card-${+currentId - 1}`);      
    }
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  event.target.style.opacity = 1;
}, false);