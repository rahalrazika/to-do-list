import { format } from 'date-fns';
import DB from '../classes/localstorage';

const ListProjects = (projects) => {
  const projectsList = [];
  for (let i = 0; i < projects.length; i += 1) {
    const projectCardHtml = `
    <div class="h-48 shadow-lg rounded flex flex-col justify-around p-5 col-span-1 project-card cursor-pointer hover:shadow-none hover:bg-gray-100 transition-opacity"  >
      <div class="h-1/2 flex justify-between align-baseline items-baseline">
        <div class="h-4 w-4 rounded-full shadow bg-indigo-700 mt-5 "></div>
        <div class=" h-4 text-mono"> ${format(new Date(projects[i].dueDate), 'dd/MM')}</div>
      </div>  
      <div class="flex flex-col justify-end h-1/2">
        <div class="text-gray-800 text-xl">
          ${projects[i].title}
        </div>  
        <div class="text-gray-400"> 
          ${projects[i].todos.length > 0 ? `${projects[i].todos.length} todos` : 'No todos'}
        </div>
        <div class="text-gray-400"> 
          ${projects[i].priority} 
        </div>
      </div>
    </div>
  `;

    projectsList.push(projectCardHtml);
  }


  const html = `
    <h2 class="font-black text-2xl my-5">These are your projects</h2>
    <div class="grid grid-cols-2 gap-5 md:grid-cols-4">
      
    ${projectsList.length > 0 ? projectsList.join(' ') : DB.defaultProjct()}
    </div>
  `;

  return html;
};

export default ListProjects;