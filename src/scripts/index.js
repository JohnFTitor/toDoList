import './styles/main.scss';
import Dots from './icons/dots.svg';

const listContainer = document.querySelector('ul');

let tasks = [
  {
    description: 'Task 4',
    completed: false,
    index: 3,
  },
  {
    description: 'Task 5',
    completed: false,
    index: 4,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 2,
  },
  {
    description: 'Task 2',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 1',
    completed: false,
    index: 0,
  },
];

const render = () => {
  tasks = tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('task', 'card');

    const listAttributes = document.createElement('div');

    const description = document.createElement('p');
    description.textContent = task.description;
    listAttributes.appendChild(description);

    description.insertAdjacentHTML('beforebegin', '<input type="checkbox" class="box">');

    listItem.appendChild(listAttributes);
    const dots = new Image();
    dots.src = Dots;
    dots.alt = '';
    listItem.appendChild(dots);

    listContainer.appendChild(listItem);
  });
};

window.onload = () => {
  render();
};