import addItem from '../classes/to-dos';

const NewItem = (project) => {
  document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('#button');
    el.addEventListener('click', () => addItem(project, 'Test ToDo'));
  });


  const html = `
  <h2>${project.title}<h2>
  <input placeholder="Description" class="border"/> 
  <div id="#button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Add new item
  </div>
`;

  return html;
};

export default NewItem;