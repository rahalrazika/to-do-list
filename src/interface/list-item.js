import utils from '../classes/utils';

const ListToDo = () => {
  const project = utils.getProjectIdFromUrl();
  const items = project.todos;
  const toDoList = [];
  for (let i = 0; i < items.length; i += 1) {
    const toDoHtml = `
          <div  class="text-gray-800 text-xl w-full p-5 shadow my-2 flex justify-between">
            <div>
            ${items[i].itemDescription}
            </div>
            <div>
            ${items[i].completed ? '<input class="checkbox" type="checkbox" checked>' : `<input id=${i} class="checkbox" type="checkbox">`} 
            </div>
            <div class="delete cursor-pointer">
              Delete
            </div>
          </div>  
    `;
    toDoList.push(toDoHtml);
  }

  const html = `
      
      <div id="todo-list">
      <h2 class="font-black text-2xl my-5  ">These are your toDo</h2>
        ${toDoList.length > 0 ? toDoList.join(' ') : '<div class="text-gray-500">No todos yet.</div>'}
      </div>
    `;

  return html;
};

export default ListToDo;