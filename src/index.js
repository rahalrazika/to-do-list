import 'tailwindcss/tailwind.css';
import newProject from './interface/new-project';
import NewItem from './interface/new-item';
import ListProjects from './interface/list-projects';
import localStorage from './classes/localstorage';


const routes = () => {
  const url = new URL(window.location.hash);
  const project = JSON.parse(window.localStorage.getItem('projects'));
  switch (url.hash) {
    case '#new-project':
      document.querySelector('#content').innerHTML = newProject();
      break;
    case /add-item/.test(url.hash):
      document.querySelector('#content').innerHTML = NewItem(project[0]);
      break;
    default:
      window.location.hash = '#index';
      document.querySelector('#content').innerHTML = ListProjects(localStorage());
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

