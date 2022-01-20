function setStatus(item, element, input) {
  item.completed = element.checked;
  if (item.completed) {
    input.style.textDecoration = 'line-through';
  } else {
    input.style.textDecoration = 'none';
  }
}

function clearCompleted(collection) {
  const newCollection = collection.list.filter((item) => item.completed);
  newCollection.forEach((task) => {
    collection.removeTask(task);
  });
}

export { setStatus, clearCompleted };