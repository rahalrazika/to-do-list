import 'tailwindcss/tailwind.css';
import newProject from './interface/new-project';
import NewItem from './interface/new-item';
import ListProjects from './interface/list-projects';


function newBtn() {
  return document.querySelector('.nav').innerHtml;
}

const showForm = () => {
  const form = document.querySelector('#content');
  const url = new URL(window.location.hash);

  newBtn();
  if (url.hash === '#newProject') {
    form.innerHtml = newProject();
  }
};
const urlListner = () => {
  window.onhashchange = () => showForm();
};

urlListner();

// document.querySelector('#content').innerHTML = newProject();

// document.querySelector('#content').innerHTML = ListProjects();

// let project = JSON.parse(window.localStorage.getItem('projects'));


// document.querySelector('#content').innerHTML = NewItem(project[0]);