// eslint-disable-next-line no-unused-vars
import { ListToDo } from '../interface/list-item';

describe('list to do ', () => {
  const project = {
    title: 'Test',
    description: 'Test project',
    dueDate: '02/28/2021',
    priority: 'High',
    createdDate: '02/16/2021',
    todos: [
      test,
      true,
    ],
  };

  const items = project.todos;
  const toDoList = [];
  test('add to do to the list ', () => {
    toDoList.push(items);

    expect(toDoList).toContain(items);
  });

  test('to list of all todos', () => {
    document.body.innerHTML = `

    <div id="todo-list">
    <h2 class="font-black text-2xl my-5  ">These are your toDo</h2>
      ${toDoList.length > 0 ? toDoList.join(' ') : '<div class="text-gray-500">No todos yet.</div>'}
    </div>
  `;

    const todoList = document.querySelectorAll('#todo-list');
    expect(todoList.length).toBe(1);
  });
});
