const listContainer = document.querySelector('ul');
let dragged;
let currentListItem;

export default (tasks) => {
  listContainer.addEventListener(
    'dragstart',
    (event) => {
      dragged = event.target.parentNode.parentNode; // Selects the task card
      currentListItem = dragged;

      event.target.parentNode.parentNode.style.opacity = 0;
    },
    false,
  );

  listContainer.addEventListener('dragend', (event) => {
    event.target.parentNode.parentNode.style.opacity = 1;
  });

  listContainer.addEventListener(
    'dragover',
    (event) => {
      // prevent default to allow drop
      event.preventDefault();
    },
    false,
  );

  listContainer.addEventListener(
    'dragenter',
    (event) => {
      if (event.target.className === 'task dropzone') {
        currentListItem = event.target;

        const temp = currentListItem.parentNode;
        dragged.parentNode.appendChild(currentListItem);
        dragged.parentNode.removeChild(dragged);
        temp.appendChild(dragged);
      }
    },
    false,
  );

  listContainer.addEventListener(
    'drop',
    (event) => {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      event.target.parentNode.parentNode.style.opacity = 1;
      const listParents = listContainer.querySelectorAll('li');
      let index = 1;
      const checked = [];

      listParents.forEach((listParent) => {
        const listItem = listParent.firstChild;
        listItem.setAttribute('id', `card-${index}`);
        index += 1;
        const description = listItem.querySelector('.description');
        for (let i = 0; i < tasks.list.length; i += 1) {
          const task = tasks.list[i];
          if (task.description === description.value) {
            task.index = +listItem.id.substr(listItem.id.length - 1);
            checked.push(tasks.list.splice(i, 1)[0]);
            break;
          }
        }
      });
      tasks.list = [...checked];
      tasks.list = tasks.list.sort((a, b) => a.index - b.index);
      tasks.saveStorage();
    },
    false,
  );
};