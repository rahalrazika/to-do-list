import 'tailwindcss/tailwind.css';
import newProject from './interface/new-project';
import NewItem from './interface/new-item';
import ListProjects from './interface/list-projects'

// document.querySelector('#content').innerHTML = newProject();

document.querySelector('#content').innerHTML = ListProjects();

// let project = JSON.parse(window.localStorage.getItem('projects'));

// document.querySelector('#content').innerHTML = NewItem(project[0]);