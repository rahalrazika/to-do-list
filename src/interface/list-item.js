import { getProjectIdFromUrl } from '../classes/to-dos';

const ListToDo = () => {
  const project = getProjectIdFromUrl();
  const items = project.todos;
  const toDoList = [];
  for (let i = 0; i < items.length; i += 1) {
    const toDoHtml = `
          <div class="text-gray-800 text-xl w-full p-5 shadow my-2 flex justify-between">
            <div>
            ${items[i].itemDescription}
            </div>
            <div>
            ${items[i].completed ? '<input class="checkbox" type="checkbox" checked>' : `<input id=${i} class="checkbox" type="checkbox">`} 
            </div>
            <div class="delete">
              Delete
            </div>
          </div>  
    `;
    toDoList.push(toDoHtml);
  }

  const html = `
      <h2 class="font-black text-2xl my-5">These are your toDo</h2>
      <div class="">
        ${toDoList.join(' ')}
      </div>
    `;

  return html;
};

export default ListToDo;