import TaskCollection from '../TaskCollection.js';

describe('testing add task', () => {
  test('To add a task with just text', () => {
    document.body.innerHTML = `
     <ul></ul>`;
    const tasks = new TaskCollection();
    tasks.addTask('Task 1');
    expect(tasks.list).toContainEqual({ description: 'Task 1', completed: false, index: 1 });
  });
});