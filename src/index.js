import 'tailwindcss/tailwind.css';
import newProject from './interface/new-project';
import NewItem from './interface/new-item';
import ListProjects from './interface/list-projects';
import DB from './classes/localstorage';
import { addCreateProjectLink, addSelectProjectLink } from './classes/projects';
import { addCheckboxListner, addCreateAddItemLink } from './classes/to-dos';


const routes = () => {
  const url = new URL(window.location.hash);
  switch (true) {
    case /#new-project/.test(url.hash):
      document.querySelector('#content').innerHTML = newProject();
      addCreateProjectLink();
      break;
    case /.*?add-item(.*?)/g.test(url.hash):
      document.querySelector('#content').innerHTML = NewItem();
      addCreateAddItemLink();
      addCheckboxListner();
      break;
    default:
      window.location.hash = '#index';
      document.querySelector('#content').innerHTML = ListProjects(DB.getProjects());
      addSelectProjectLink();
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
