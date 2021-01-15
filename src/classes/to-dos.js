import { format } from 'date-fns';
import DB from './localstorage';
import utils from './utils';


const ToDoItem = (itemDescription, completed = false, date = format(new Date(), 'MM/dd/yyyy')) => ({ itemDescription, completed, date });


const addItem = () => {
  const project = utils.getProjectIdFromUrl();
  const text = document.querySelector('input').value;
  const todo = ToDoItem(text, false);
  const b = DB.getProjects();
  const p = b[project.id];
  p.todos.push(todo);
  window.localStorage.setItem('projects', [JSON.stringify(b)]);
  document.querySelector('input').value = '';
  window.location.reload();
};

const toggleCheckboxes = (id) => {
  const project = utils.getProjectIdFromUrl();
  project.todos[id].completed = !project.todos[id].completed;
  DB.updateProject(project);
};

const handleDeleteItem = (id) => {
  const project = utils.getProjectIdFromUrl();
  project.todos.splice(id, 1);
  DB.updateProject(project);
};


const addCreateAddItemLink = () => {
  const el = document.getElementById('button');
  el.addEventListener('click', () => addItem());
};

const addCheckboxListner = () => {
  const checkbox = document.querySelectorAll('.checkbox');
  const deleteItem = document.querySelectorAll('.delete');
  for (let i = 0; i < checkbox.length; i += 1) {
    checkbox[i].id = i;
    deleteItem[i].id = i;
    checkbox[i].addEventListener('click', () => toggleCheckboxes(checkbox[i].id));
    deleteItem[i].addEventListener('click', () => handleDeleteItem(deleteItem[i].id));
  }
};

export {
  addItem, addCreateAddItemLink, addCheckboxListner,
};