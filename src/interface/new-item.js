import { getProjectIdFromUrl } from '../classes/to-dos';
import ListToDo from './list-item';

const NewItem = () => {
  const project = getProjectIdFromUrl();

  const html = `
  <h2 class="text-center text-gray-400 text-5xl mt-14 ">${project.title}<h2>
  <input placeholder="Description" class="border form-input mt-2 block w-full"/> 
  <div id="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2  rounded-full">
  Add new item
  </div>
  <div>
    <ul class="text-center text-gray-400 text-5xl mt-50 ">
    <li>${ListToDo()}</li>
   <ul>
  </div>


`;

  return html;
};


export default NewItem;