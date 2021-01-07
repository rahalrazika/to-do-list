const ToDoItem = (itemDescription, completed = false) => ({ itemDescription, completed });

const addItem = (project, item) => {
  const todo = ToDoItem(item, false);
  const b = JSON.parse(window.localStorage.getItem('projects'));
  const p = b[0];
  p.todos.push(todo);
  window.localStorage.setItem('projects', [JSON.stringify(b)]);
};

export default addItem;