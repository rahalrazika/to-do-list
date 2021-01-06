const ToDoItem = (itemDescription, completed = false) => {
  return {itemDescription, completed}
};

const addItem = (project, item) => {
  let todo = ToDoItem(item, false);
  let b = JSON.parse(window.localStorage.getItem('projects'));
  let p = b[0];
  console.log(p)
  p.todos.push(todo);
  window.localStorage.setItem('projects', [JSON.stringify(b)]);
};

export { addItem }