import Task from './Task.js';
import Dots from './icons/dots.svg';
import Del from './icons/delete.svg';

const listContainer = document.querySelector('ul');
export default class TaskCollection {
  constructor() {
    this.list = [];
  }

  saveStorage() {
    localStorage.setItem('collection', JSON.stringify(this.list));
  }

  addTask(description) {
    const task = new Task(description, this.list.length + 1);
    this.list.push(task);
    this.saveStorage();
    return task;
  }

  loadStorage() {
    const collection = JSON.parse(localStorage.getItem('collection'));
    if (collection) {
      collection.forEach((task) => {
        this.addTask(task.description);
      });
      return true;
    }
    return false;
  }

  removeTask(currentTask, pointer) {
    this.list.splice(currentTask.index - 1, 1);
    let index = 1;
    this.list.forEach((task) => {
      if (task.index - index > 0) {
        task.index -= 1;
      }
      index += 1;
    });
    this.saveStorage();
    listContainer.removeChild(pointer);
  }

  display(task) {
    const listItem = document.createElement('li');
    listItem.classList.add('task', 'card');

    const listAttributes = document.createElement('div');

    const description = document.createElement('input');
    description.value = task.description;
    description.setAttribute('type', 'text');
    description.classList.add('description');
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

    description.addEventListener('change', (event) => {
      task.description = event.target.value;
      this.saveStorage();
    });

    description.addEventListener('click', () => {
      listItem.style.backgroundColor = '#f1f0cc';
      dots.src = Del;
    });

    description.addEventListener('click', () => {
      const removeTask = this.removeTask.bind(this, task, listItem);
      task.listener = removeTask;
      dragButton.addEventListener('mouseup', removeTask);
    }, { once: true });

    description.addEventListener('focusout', () => {
      listItem.style.backgroundColor = 'white';
      dots.src = Dots;
    });
  }
}