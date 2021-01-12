import { getSingleProject } from '../classes/localstorage';
import addItem from '../classes/to-dos';
import ListToDo from './list-item';
//import ListToDo from './list-item';

const NewItem = () => {
  const projects = window.location.hash.split('/');
  const projectId = projects[1];
  const project = getSingleProject(projectId);

  window.onload = () => {
    const el = document.getElementById('button');
    el.addEventListener('click', () => addItem(projectId, 'toDo'));
  };

  const valuesToDo = document.querySelectorAll('input');
  const values = [];
  for (let i = 0; i < valuesToDo.length; i += 1) {
    values.push(valuesToDo[i]);
    return valuesToDo;
  }

  const html = `
  <h2 class="text-center text-gray-400 text-5xl mt-14 ">${project.title}<h2>
  <input  placeholder="Description" class="border form-input mt-2 block w-full"/> 
  <div  id="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2  rounded-full">
  Add new item
  </div>
  <div>
    <ul class="text-center text-gray-400 text-5xl mt-50 ">
    <li>${ListToDo(valuesToDo)}</li>
   <ul>
  </div>


`;

  return html;
};


export default NewItem;