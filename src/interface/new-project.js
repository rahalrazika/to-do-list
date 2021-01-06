/* eslint-disable no-unused-vars */
import Project from '../classes/projects';

const newProject = () => {

  const getFormValues = () => {
    const valuesForm = document.querySelectorAll('inputs');
    const values = [];
    for (let i = 0; i < valuesForm.length; i = +1) {
      values.push(valuesForm[i].value);
    }
    const p = Project(values);
    console.log(p);
    return p;
  };

  


  const html = `
    <form class="block text-sm font-medium text-gray-700 w-8/12">
      <label> Project Title </label>
      <div class="mt-1 relative rounded-md shadow-sm border-gray-800">
        <input type="text" name="project-title" placeholder="Type your project name" class="focus:ring-indigo-500 
        focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12">
      </div>
      <label> Project Description </label>
      <div class="mt-1 relative rounded-md shadow-sm border-gray-800">
        <input type="text" name="project-title" placeholder="Type your project name" class="focus:ring-indigo-500 
        focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12">
      </div>
      <label> Project Priority </label>
      <div class="mt-1 relative rounded-md shadow-sm border-gray-800">
        <input type="text" name="project-title" placeholder="Type your project name" class="focus:ring-indigo-500 
        focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12">
      </div>
      <div id="createProject" >Create project</div>
    </form>
  `;

  
  return html;
};

export default newProject;