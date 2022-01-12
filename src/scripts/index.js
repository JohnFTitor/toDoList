import './styles/main.scss';
import TaskCollection from './TaskCollection.js';

const tasks = new TaskCollection();

const addForm = document.querySelector('#addForm');

const render = () => {
  tasks.list = tasks.list.sort((a, b) => a.index - b.index);
  tasks.list.forEach((task) => {
    TaskCollection.display(task);
  });
};

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = addForm.querySelector('input');
  const inputValue = input.value;
  if (inputValue){
    const task = tasks.addTask(inputValue);
    TaskCollection.display(task);
    input.value = '';
  }
})

window.onload = () => {
  render();
};