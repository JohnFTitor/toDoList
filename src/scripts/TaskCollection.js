import Task from './Task.js';
import Dots from './icons/dots.svg';
import Del from './icons/delete.svg';
import { setStatus } from './completed.js';

const listContainer = document.querySelector('ul');
export default class TaskCollection {
  constructor() {
    this.list = [];
  }

  saveStorage() {
    localStorage.setItem('collection', JSON.stringify(this.list));
  }

  addTask(description, status = false) {
    const task = new Task(description, this.list.length + 1, status);
    this.list.push(task);
    this.saveStorage();
    return task;
  }

  loadStorage() {
    const collection = JSON.parse(localStorage.getItem('collection'));
    if (collection) {
      collection.forEach((task) => {
        this.addTask(task.description, task.completed);
      });
      return true;
    }
    return false;
  }

  removeTask(currentTask) {
    this.list.splice(currentTask.index - 1, 1);
    const element = listContainer.querySelector(`#card-${currentTask.index}`);
    listContainer.removeChild(element.parentNode);
    let index = 1;
    this.list.forEach((task) => {
      if (task.index - index > 0) {
        const nextTask = listContainer.querySelector(`#card-${task.index}`);
        task.index -= 1;
        nextTask.setAttribute('id', `card-${task.index}`);
      }
      index += 1;
    });
    this.saveStorage();
  }

  display(task) {
    const listDropZone = document.createElement('li');
    listDropZone.classList.add('task', 'card', 'dropparent');

    const listItem = document.createElement('div');
    listItem.classList.add('task', 'dropzone');
    listItem.setAttribute('id', `card-${task.index}`);

    const listAttributes = document.createElement('div');

    const description = document.createElement('input');
    description.value = task.description;
    description.setAttribute('type', 'text');
    description.classList.add('description');
    listAttributes.appendChild(description);

    description.insertAdjacentHTML('beforebegin', `<label class="box">
      <input class="check"  type="checkbox">
      <span class="checkmark"></span>
    </label>`);

    listItem.appendChild(listAttributes);

    const dots = new Image();
    dots.src = Dots;
    dots.alt = '';

    const dragButton = document.createElement('button');
    dragButton.appendChild(dots);
    dragButton.setAttribute('draggable', true);
    listItem.appendChild(dragButton);

    const checkBox = listItem.querySelector('.check');
    checkBox.checked = task.completed;
    setStatus(task, checkBox, description);

    listDropZone.appendChild(listItem);
    listContainer.appendChild(listDropZone);

    description.addEventListener('change', (event) => {
      task.description = event.target.value;
      this.saveStorage();
    });

    description.addEventListener('click', () => {
      listItem.style.backgroundColor = '#f1f0cc';
      dots.src = Del;
    });

    dragButton.addEventListener('mouseup', () => {
      this.removeTask(task);
    });

    description.addEventListener('focusout', () => {
      listItem.style.backgroundColor = 'white';
      dots.src = Dots;
    });

    checkBox.addEventListener('change', () => {
      setStatus(task, checkBox, description);
      this.saveStorage();
    });
  }
}