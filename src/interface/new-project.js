/* eslint-disable no-unused-vars */
import { Project, getFormValues } from '../classes/projects';

const newProject = () => {

  document.addEventListener('DOMContentLoaded', (event) => {
    const el = document.getElementById('#button');
    el.addEventListener('click', () => getFormValues());
  });

  const html = `
    <form class="block text-sm font-medium text-gray-700 w-8/12">
      <label> Project Title </label>
      <div class="mt-1 relative rounded-md shadow-sm border-gray-800">
        <input type="text" name="project-title" placeholder="Type your project name" class="focus:ring-indigo-500 
        focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12">
      </div>
      <label> Project Description </label>
      <div class="mt-1 relative rounded-md shadow-sm border-gray-800">
        <input type="text" name="project-description" placeholder="Type your project name" class="focus:ring-indigo-500 
        focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12">
      </div>
      <label> Project Priority </label>
      <div class="mt-1 relative rounded-md shadow-sm border-gray-800">
        <input type="text" name="project-priority" placeholder="Type your project name" class="focus:ring-indigo-500 
        focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12">
      </div>
      <div id="#button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Create project
      </div>
    </form>
  `;


  return html;
};

export default newProject;