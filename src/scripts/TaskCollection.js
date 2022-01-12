import Task from './Task.js';
import Dots from './icons/dots.svg';

const listContainer = document.querySelector('ul');
export default class TaskCollection {
  
  constructor() {
    this.list = [];
  }

  addTask(description){
    const task = new Task(description, this.list.length + 1);
    this.list.push(task);
    return task;
  }

  static display(task) {
    const listItem = document.createElement('li');
    listItem.classList.add('task', 'card');

    const listAttributes = document.createElement('div');

    const description = document.createElement('p');
    description.textContent = task.description;
    listAttributes.appendChild(description);

    description.insertAdjacentHTML('beforebegin', `<label class="box">
      <input type="checkbox">
      <span class="checkmark"></span>
    </label>`);

    listItem.appendChild(listAttributes);
    const dots = new Image();
    dots.src = Dots;
    dots.alt = '';

    const dragButton = document.createElement('button');
    dragButton.appendChild(dots);
    listItem.appendChild(dragButton);

    listContainer.appendChild(listItem);
  }
}