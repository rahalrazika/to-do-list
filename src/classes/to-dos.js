const ToDoItem = (itemDescription, completed = false) => ({ itemDescription, completed });

const addItem = (projectId, item) => {
  const todo = ToDoItem(item, false);
  const b = JSON.parse(window.localStorage.getItem('projects'));
  const p = b[projectId];
  p.todos.push(todo);
  window.localStorage.setItem('projects', [JSON.stringify(b)]);
};

export default addItem;