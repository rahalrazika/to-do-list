import newProject from '../interface/new-project';

test('create a new project form', () => {
  document.body.innerHTML = `
  <form class="block text-sm font-medium text-gray-700 w-full mt-10 p-28 bg-gray-50  ">
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
  <label class="font-black"> Due date</label>
  <div class="mt-1 relative rounded-md shadow-sm border-gray-800 mb-2">
  <input type="date" id="start" name="trip-start" class="focus:ring-indigo-500 
  focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12"/>
  </div>
  <div class="mt-1 relative rounded-md shadow-sm border-gray-800">
  <label class="font-black" for="priorities"> Project Priority </label>

  <select name="Priorities" class="focus:ring-indigo-500 
  focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm  rounded-md h-12">
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>
</div>
  <div id="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
      Create project
  </div>
</form>
    `;
  newProject();
  const projectCard = document.querySelectorAll('.project-card');
  expect(projectCard.length).toBe(0);
});
test('test Create project button', () => {
  document.body.innerHTML = '<div id="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">Create project</div>';
  const createProject = document.getElementById('button');
  expect(createProject.innerHTML).toBe('Create project');
});