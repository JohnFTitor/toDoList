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
  console.log(tasks);
};

window.onload = () => {
  render();
};