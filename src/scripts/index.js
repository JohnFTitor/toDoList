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

const listContainer = document.querySelector('ul');
let dragged;
let currentListItem;

listContainer.addEventListener(
  'dragstart',
  (event) => {
    dragged = event.target.parentNode.parentNode; // Selects the card
    currentListItem = dragged;

    event.target.parentNode.parentNode.style.opacity = 0;
  },
  false,
);

listContainer.addEventListener('dragend', (event) => {
  event.target.parentNode.parentNode.style.opacity = 1;
});

listContainer.addEventListener(
  'dragover',
  (event) => {
    // prevent default to allow drop
    event.preventDefault();
  },
  false,
);

listContainer.addEventListener(
  'dragenter',
  (event) => {
    if (event.target.className === 'task dropzone') {
      currentListItem = event.target;

      const temp = currentListItem.parentNode;
      dragged.parentNode.appendChild(currentListItem);
      dragged.parentNode.removeChild(dragged);
      temp.appendChild(dragged);
    }
  },
  false,
);

listContainer.addEventListener(
  'drop',
  (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    event.target.parentNode.parentNode.style.opacity = 1;
    const listItems = listContainer.querySelectorAll('li');
    let index = 1;
    const checked = [];

    listItems.forEach((item) => {
      const container = item.firstChild;
      container.setAttribute('id', `card-${index}`);
      index += 1;
      const description = container.querySelector('.description');
      for (let i = 0; i < tasks.list.length; i += 1) {
        const task = tasks.list[i];
        if (task.description === description.value) {
          task.index = +container.id.substr(container.id.length - 1);
          checked.push(tasks.list.splice(i, 1)[0]);
          break;
        }
      }
    });
    tasks.list = [...checked];
    tasks.list = tasks.list.sort((a, b) => a.index - b.index);
    tasks.saveStorage();
  },
  false,
);
