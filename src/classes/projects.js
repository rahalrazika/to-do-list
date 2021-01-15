import { format } from 'date-fns';
import DB from './localstorage';
import utils from './utils';


const Project = ([title, description, dueDate, priority, todos = [], createdDate = format(new Date(), 'MM/dd/yyyy')]) => ({
  title,
  description,
  priority,
  dueDate,
  createdDate,
  todos,
});

const createProject = () => {
  const values = utils.getFormValues();
  if (utils.validateForms(values)) {
    const p = Project(values);
    DB.saveProject(p);
    window.location.hash = '#complete';
  }
};

const addSelectProjectLink = () => {
  const projects = document.querySelectorAll('.project-card');
  for (let i = 0; i < projects.length; i += 1) {
    const el = projects[i];
    el.addEventListener('click', (event) => { event.preventDefault(); window.location.hash = `#add-item/${i}`; });
  }
};

const addCreateProjectLink = () => {
  const el = document.getElementById('button');
  el.addEventListener('click', () => createProject());
};

export {
  Project, createProject, addCreateProjectLink, addSelectProjectLink,
};