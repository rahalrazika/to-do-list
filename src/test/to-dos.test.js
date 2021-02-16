// import { Todo } from '../classes/to-dos';
const { Todo, ToDoItem } = require('../classes/to-dos');

describe(' new To do   ', () => {
  const ToDoTest = ToDoItem('itemDescription', false, '02/18/2021');
  it('expect to create a new project', () => {
    expect(Todo).toBeDefined();
  });

  it('expect a To do  description ', () => {
    expect(ToDoTest.itemDescription).toEqual('itemDescription');
  });
  it('expect a To do  situation  ', () => {
    expect(ToDoTest.completed).toEqual(false);
  });
  it('expect a To do  Date  ', () => {
    expect(ToDoTest.date).toEqual('02/18/2021');
  });
});