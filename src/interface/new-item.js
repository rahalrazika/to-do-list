import utils from '../classes/utils';
import ListToDo from './list-item';

const NewItem = () => {
  const project = utils.getProjectIdFromUrl();

  const html = `
  <h2 class="text-center text-gray-400 text-5xl mt-14 ">${project.title}<h2>
  <input placeholder="Description" class="focus:ring-indigo-500 border border-gray-500
  focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm my-4 rounded-md h-12"/> 
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