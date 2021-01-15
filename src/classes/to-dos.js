import { format } from 'date-fns';
import ListToDo from '../interface/list-item';
import DB from './localstorage';
import utils from './utils';


const ToDoItem = (itemDescription, completed = false, date = format(new Date(), 'MM/dd/yyyy')) => ({ itemDescription, completed, date });

const Todo = {
  updateTodoList() {
    document.getElementById('todo-list').innerHTML = ListToDo();
    this.todoUtils.addCheckboxListner();
  },
  addItem() {
    const project = utils.getProjectIdFromUrl();
    const text = document.querySelector('input').value;
    const todo = ToDoItem(text, false);
    project.todos.push(todo);
    DB.updateProject(project);
    this.updateTodoList();
    document.querySelector('input').value = '';
  },
  deleteItem(id) {
    const project = utils.getProjectIdFromUrl();
    project.todos.splice(id, 1);
    DB.updateProject(project);
    this.updateTodoList();
  },
  toggleChecked(id) {
    const project = utils.getProjectIdFromUrl();
    project.todos[id].completed = !project.todos[id].completed;
    DB.updateProject(project);
    this.updateTodoList();
  },
  todoUtils: {

    addCreateAddItemLinkListner() {
      const el = document.getElementById('button');
      el.addEventListener('click', () => Todo.addItem());
    },
    addCheckboxListner() {
      const checkbox = document.querySelectorAll('.checkbox');
      const deleteItem = document.querySelectorAll('.delete');
      for (let i = 0; i < checkbox.length; i += 1) {
        checkbox[i].id = i;
        deleteItem[i].id = i;
        checkbox[i].addEventListener('click', () => Todo.toggleChecked(checkbox[i].id));
        deleteItem[i].addEventListener('click', () => Todo.deleteItem(deleteItem[i].id));
      }
    },
  },
};


export default Todo;