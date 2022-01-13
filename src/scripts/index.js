import './styles/main.scss';
import TaskCollection from './TaskCollection.js';
import {clearCompleted} from './completed';

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
  })
})