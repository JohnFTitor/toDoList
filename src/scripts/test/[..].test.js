import TaskCollection from '../TaskCollection.js';
import triggerEvent from '../triggerEvent.js';

describe('Testing add task', () => {
  test('To add a task with just text', () => {
    global.document.body.innerHTML = `
     <ul></ul>`;
    const tasks = new TaskCollection();

    tasks.addTask('Task 1');

    expect(tasks.list).toContainEqual({
      description: 'Task 1',
      completed: false,
      index: 1,
    });
  });

  test('To add a task with text and completed', () => {
    document.body.innerHTML = '<ul></ul>';
    const tasks = new TaskCollection();

    tasks.addTask('Task 1', true);

    expect(tasks.list).toContainEqual({
      description: 'Task 1',
      completed: true,
      index: 1,
    });
  });

  test('To add multiple tasks', () => {
    document.body.innerHTML = '<ul></ul>';
    const tasks = new TaskCollection();

    tasks.addTask('Task 1', true);
    tasks.addTask('Task 2', false);
    tasks.addTask('Task 3');

    expect(tasks.list).toEqual([
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ]);
  });

  test('To add multiple tasks incorrect behaviour', () => {
    document.body.innerHTML = `
     <ul></ul>`;
    const tasks = new TaskCollection();

    tasks.addTask('Task 1', true);
    tasks.addTask('Task 2', false);
    tasks.addTask('Task 3');

    expect(tasks.list).not.toEqual([
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 1 },
      { description: 'Task 3', completed: false, index: 3 },
    ]);
  });
});

describe('Testing Remove Task', () => {
  test('Remove one task from list', () => {
    document.body.innerHTML = `
      <ul>
        <li>
        <div id='card-1'></div>
        </li>
        <li>
          <div id='card-2'></div>
        </li>
        <li>
          <div id='card-3'></div>
        </li>
      </ul>
          `;
    const tasks = new TaskCollection();

    tasks.list = [
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
    ];

    const taskToRemove = tasks.list[1];

    tasks.removeTask(taskToRemove);

    expect(tasks.list).not.toContainEqual(taskToRemove);
  });

  test('Indexes are updated', () => {
    document.body.innerHTML = `
    <ul>
      <li>
        <div id='card-1'></div>
      </li>
      <li>
        <div id='card-2'></div>
      </li>
      <li>
        <div id='card-3'></div>
      </li>
      <li>
        <div id='card-4'></div>
      </li>
      <li>
        <div id='card-5'></div>
      </li>    
    </ul>
        `;
    const tasks = new TaskCollection();

    tasks.list = [
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
      { description: 'Task 4', completed: false, index: 4 },
      { description: 'Task 5', completed: false, index: 5 },
    ];

    tasks.removeTask(tasks.list[3]);
    tasks.removeTask(tasks.list[2]);

    expect(tasks.list).toEqual([
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 5', completed: false, index: 3 },
    ]);
  });

  test('Remove multiple tasks DOM', () => {
    document.body.innerHTML = `
    <ul>
      <li>
        <div id='card-1'></div>
      </li>
      <li>
        <div id='card-2'></div>
      </li>
      <li>
        <div id='card-3'></div>
      </li>
      <li>
        <div id='card-4'></div>
      </li>
      <li>
        <div id='card-5'></div>
      </li>    
    </ul>
    `;
    const tasks = new TaskCollection();

    tasks.list = [
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
      { description: 'Task 4', completed: false, index: 4 },
      { description: 'Task 5', completed: false, index: 5 },
    ];

    tasks.removeTask(tasks.list[3]);
    tasks.removeTask(tasks.list[2]);

    const listDOM = [...document.querySelectorAll('li')];

    expect(listDOM).toHaveLength(3);
  });

  test('Indexes are updated DOM', () => {
    document.body.innerHTML = `
    <ul>
      <li>
        <div id='card-1'></div>
      </li>
      <li>
        <div id='card-2'></div>
      </li>
      <li>
        <div id='card-3'></div>
      </li>
      <li>
        <div id='card-4'></div>
      </li>
      <li>
        <div id='card-5'></div>
      </li>    
    </ul>
    `;
    const tasks = new TaskCollection();

    tasks.list = [
      { description: 'Task 1', completed: true, index: 1 },
      { description: 'Task 2', completed: false, index: 2 },
      { description: 'Task 3', completed: false, index: 3 },
      { description: 'Task 4', completed: false, index: 4 },
      { description: 'Task 5', completed: false, index: 5 },
    ];

    tasks.removeTask(tasks.list[3]);
    tasks.removeTask(tasks.list[2]);

    const listDOM = [...document.querySelectorAll('li')];

    expect(listDOM[2].innerHTML.trim()).toBe('<div id="card-3"></div>');
  });
});

describe('Testing Edit Event', () => {
  test(('Edit one Task inside list'), () => {
    document.body.innerHTML = '<ul></ul>';
    const tasks = new TaskCollection();

    const task = tasks.addTask('Task 1');
    tasks.display(task);

    const descriptionElement = document.querySelector('.description');
    descriptionElement.value = 'Task 2';

    triggerEvent(descriptionElement, 'change');

    expect(tasks.list[0].description).toBe('Task 2');
  });
});

describe('Testing checkBox', () => {
  test(('Toggle status from false to true'), () => {
    document.body.innerHTML = '<ul></ul>';
    const tasks = new TaskCollection();

    const task = tasks.addTask('Task 1');
    tasks.display(task);

    const checkBox = document.querySelector('.check');
    checkBox.checked = true;

    triggerEvent(checkBox, 'change');

    expect(tasks.list[0].completed).toBe(true);
  });
  test(('Toggle status from true to false'), () => {
    document.body.innerHTML = '<ul></ul>';
    const tasks = new TaskCollection();

    const task = tasks.addTask('Task 1', true);
    tasks.display(task);

    const checkBox = document.querySelector('.check');
    checkBox.checked = false;

    triggerEvent(checkBox, 'change');

    expect(tasks.list[0].completed).toBe(false);
  });
});
