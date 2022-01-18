import './styles/main.scss';
import TaskCollection from './TaskCollection.js';
import { clearCompleted } from './completed.js';
import dragAndDrop from './dragAndDrop.js';

const tasks = new TaskCollection();

const addTaskForm = document.querySelector('#addForm');
const clearButton = document.querySelector('#clear');

// Creates HTML for each task saved in the array
const render = () => {
  tasks.list = tasks.list.sort((a, b) => a.index - b.index);
  tasks.list.forEach((task) => {
    tasks.display(task);
  });
};

addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = addTaskForm.querySelector('input');

  // If the form is not empty, add a Task
  if (input.value) {
    const task = tasks.addTask(input.value);
    tasks.display(task);
    input.value = '';
  }
});

// Action on window load. Renders the localStoraged array.
window.onload = () => {
  if (tasks.loadStorage()) {
    render();
  }
};

// Removes all completed tasks
clearButton.addEventListener('click', () => {
  const completedList = clearCompleted(tasks.list);
  completedList.forEach((task) => {
    tasks.removeTask(task);
  });
});

// Define Drag And Drop Event listeners

dragAndDrop(tasks);