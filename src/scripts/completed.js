function setStatus(item, element, input) {
  item.completed = element.checked;
  if (item.completed) {
    input.style.textDecoration = 'line-through';
  } else {
    input.style.textDecoration = 'none';
  }
}

function clearCompleted(collection) {
  const newCollection = collection.filter((item) => item.completed);
  return newCollection;
}

export { setStatus, clearCompleted };