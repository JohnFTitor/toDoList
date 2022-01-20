import TaskCollection from '../TaskCollection.js';

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
});
