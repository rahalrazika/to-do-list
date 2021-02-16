const { Todo, ToDoItem } = require('../classes/to-dos');

describe(' new To do   ', () => {
  const ToDoTest = ToDoItem('itemDescription', true, '02/18/2021');
  it('expect to create a new todo', () => {
    expect(Todo).toBeDefined();
  });

  it('expect  To do  description ', () => {
    expect(ToDoTest.itemDescription).toEqual('itemDescription');
  });
  it('expect  To do  completed  ', () => {
    expect(ToDoTest.completed).toEqual(true);
  });
  it('expect  To do  not completed  ', () => {
    expect(ToDoTest.completed).not.toEqual(false);
  });
  it('expect  To do  Date  ', () => {
    expect(ToDoTest.date).toEqual('02/18/2021');
  });
  it('expect to add new to do ', () => {
    const project = {
      title: 'Test',
      description: 'Test project',
      dueDate: '02/28/2021',
      priority: 'High',
      createdDate: '02/16/2021',
      todos: [],
    };
    project.todos.push(ToDoTest);

    expect(project.todos).toContain(ToDoTest);
  });
});