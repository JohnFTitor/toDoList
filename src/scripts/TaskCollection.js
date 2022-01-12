import Task from './Task.js';
import Dots from './icons/dots.svg';
import Del from './icons/delete.svg';

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

  static removeTask(event) {
    listContainer.removeChild(event.currentTarget.parentNode);
  }

  static display(task) {
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
    })
    
    description.addEventListener('click', () => {
      listItem.style.backgroundColor = '#f1f0cc';
      dots.src = Del;
      dragButton.addEventListener('click', TaskCollection.removeTask);
    })

    description.addEventListener('focusout', () => { 
      listItem.style.backgroundColor = 'white';    
      dots.src = Dots;
    })
  }
}