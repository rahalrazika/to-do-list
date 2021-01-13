/* eslint-disable no-unused-vars */
import { Project, getFormValues } from '../classes/projects';

const newProject = () => {
  const html = `
    <form class="block text-sm font-medium text-gray-700 w-8/12 mt-10 p-28 bg-gray-50  ">
      <label class="font-black"> Project Title </label>
      <div class="mt-1 relative rounded-md shadow-sm border-gray-800">
        <input type="text" name="project-title" placeholder="Type your project name" class="focus:ring-indigo-500 
        focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12">
      </div>
      <label class="font-black"> Project Description </label>
      <div class="mt-1 relative rounded-md shadow-sm border-gray-800">
        <input type="text" name="project-description" placeholder="Type your project name" class="focus:ring-indigo-500 
        focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12">
      </div>
      <label class="font-black"> Project Priority </label>
      <div class="mt-1 relative rounded-md shadow-sm border-gray-800">
        <input type="text" name="project-priority" placeholder="Type your project name" class="focus:ring-indigo-500 
        focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12">
      </div>
      <label class="font-black"> due date</label>
      <div class="mt-1 relative rounded-md shadow-sm border-gray-800 mb-2">
      <input type="date" id="start" name="trip-start"
      value="2018-07-22"
      min="2018-01-01" max="2018-12-31">
      </div>
      <div id="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
          Create project
      </div>
    </form>
  `;


  return html;
};

export default newProject;