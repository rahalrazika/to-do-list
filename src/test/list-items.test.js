/* eslint-disable no-unused-vars */
import ListToDo from '../interface/list-item';

describe('list to do ', () => {
  const project = {
    title: 'Test',
    description: 'Test project',
    dueDate: '02/28/2021',
    priority: 'High',
    createdDate: '02/16/2021',
    todos: {
      itemDescription: 'test',
      completed: true,
    },
  };

  const items = project.todos;
  const toDoList = [];
  test('add to do to the list ', () => {
    toDoList.push(items);

    expect(toDoList).toContain(items);
  });

  test('to test the completed case equal to true  ', () => {
    const checkboxInput = items.completed;
    expect(checkboxInput).toEqual(true);
  });
  test('to test the completed case not equal to true  ', () => {
    const checkboxInput = items.completed;
    expect(checkboxInput).not.toEqual(false);
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
    expect(todoList.length > 1).toBe(false);
  });
});
