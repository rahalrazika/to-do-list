import 'tailwindcss/tailwind.css';
import newProject from './interface/new-project';
import NewItem from './interface/new-item';
import ListProjects from './interface/list-projects';
import localStorage from './classes/localstorage';
import { addProjectsLinks } from './classes/projects';


const routes = () => {
  const url = new URL(window.location.hash);
<<<<<<< HEAD
  let project = JSON.parse(window.localStorage.getItem('projects'));
  switch (true) {
    case /#new-project/.test(url.hash):
=======
  const project = JSON.parse(window.localStorage.getItem('projects'));
  switch (url.hash) {
    case '#new-project':
>>>>>>> ce3f505abea630fbed5f7a72cadf69bf2bf36936
      document.querySelector('#content').innerHTML = newProject();
      break;
    case /.*?add-item(.*?)/g.test(url.hash):
      document.querySelector('#content').innerHTML = NewItem(project[0]);
      break;
    default:
      window.location.hash = '#index';
      document.querySelector('#content').innerHTML = ListProjects(localStorage());
      addProjectsLinks();
      break;
  }
};


const urlListner = () => {
  window.onhashchange = () => routes();
};

const addEventListener = (id, url) => {
  const createProjectButton = document.getElementById(id);
  createProjectButton.addEventListener('click', () => { window.location.hash = url; });
};


document.addEventListener('DOMContentLoaded', () => {
  addEventListener('#createNewProjectButton', '#new-project');
  addEventListener('#logo', '#index');
  routes();
  urlListner();
});

//

// document.querySelector('#content').innerHTML = ListProjects();

// let project = JSON.parse(window.localStorage.getItem('projects'));


// document.querySelector('#content').innerHTML = NewItem(project[0]);

