import TaskCollection from '../TaskCollection.js';

describe('Testing add task', () => {
  test('To add a task with just text', () => {
    global.document.body.innerHTML = `
     <ul></ul>`;
    const tasks = new TaskCollection();

    tasks.addTask('Task 1');

    expect(tasks.list).toContainEqual({ description: 'Task 1', completed: false, index: 1 });
  });

  test('To add a task with text and completed', () => {
    document.body.innerHTML = '<ul></ul>';
    const tasks = new TaskCollection();

    tasks.addTask('Task 1', true);

    expect(tasks.list).toContainEqual({ description: 'Task 1', completed: true, index: 1 });
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
  test('Remove one task', () => {
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
	});
	const tasks = new TaskCollection();

	tasks.list = [
		{ description: 'Task 1', completed: true, index: 1 },
		{ description: 'Task 2', completed: false, index: 1 },
		{ description: 'Task 3', completed: false, index: 3 },
	];

	const taskToRemove = tasks.list[1];

	tasks.removeTask(taskToRemove);

	const listItems = document.querySelectorAll('li');
	
	expect(listItems).toContainEqual(`
		<li>
		<div id='card-2'></div>
	</li>
	`);
});
