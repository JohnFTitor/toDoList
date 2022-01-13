import "./styles/main.scss";
import TaskCollection from "./TaskCollection.js";
import { clearCompleted } from "./completed.js";

const tasks = new TaskCollection();

const addForm = document.querySelector("#addForm");
const clearButton = document.querySelector("#clear");

const render = () => {
  tasks.list = tasks.list.sort((a, b) => a.index - b.index);
  tasks.list.forEach((task) => {
    tasks.display(task);
  });
};

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = addForm.querySelector("input");
  const inputValue = input.value;
  if (inputValue) {
    const task = tasks.addTask(inputValue);
    tasks.display(task);
    input.value = "";
  }
});

window.onload = () => {
  if (tasks.loadStorage()) {
    render();
  }
};

clearButton.addEventListener("click", () => {
  const completedList = clearCompleted(tasks.list);
  completedList.forEach((task) => {
    tasks.removeTask(task);
  });
});

const listContainer = document.querySelector('ul');
let dragged;
let currentListItem;

listContainer.addEventListener(
  "dragstart",
  function (event) {
    dragged = event.target.parentNode.parentNode; //Selects the card
    currentListItem = dragged;

    event.target.parentNode.parentNode.style.opacity = 0;
  },
  false
);

listContainer.addEventListener("dragend", (event) => {
  event.target.parentNode.parentNode.style.opacity = 1;
});

listContainer.addEventListener(
  "dragover",
  function (event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

listContainer.addEventListener(
  "dragenter",
  function (event) {
    if (event.target.nodeName === "DIV") {
      currentListItem = event.target;

      let temp = currentListItem.parentNode;
      dragged.parentNode.appendChild(currentListItem);
      dragged.parentNode.removeChild(dragged);
      temp.appendChild(dragged);
    }
  },
  false
);

listContainer.addEventListener(
  "drop",
  function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    event.target.parentNode.parentNode.style.opacity = 1;
    const listItems = listContainer.querySelectorAll('li');
    let index = 1;
    listItems.forEach((item) => {
      const container = item.firstChild;
      container.setAttribute('id', `card-${index}`);
      index += 1;

      const description = container.querySelector('.description');
      tasks.list.forEach((task) => {
        if(task.description === description.value){
          task.index = +container.id.substr(container.id.length - 1);
        } 
      })

    })
    tasks.list = tasks.list.sort((a, b) => a.index - b.index);
    tasks.saveStorage();
  },
  false
);
