import customAlert from '../components/alert-component';
import DB from './localstorage';

const utils = {
  getProjectIdFromUrl() {
    const projects = window.location.hash.split('/');
    const projectId = projects[1];
    const project = DB.getSingleProject(projectId);
    project.id = projectId;
    return project;
  },
  getFormValues() {
    const valuesForm = document.querySelectorAll('input');
    const values = [];
    for (let i = 0; i < valuesForm.length; i += 1) {
      values.push(valuesForm[i].value);
    }
    values.push(document.querySelector('select').value);
    return values;
  },
  validateForms([...args]) {
    for (let i = 0; i < args.length; i += 1) {
      if (args[i] === '') {
        document.querySelector('body').innerHTML += customAlert('Please fill all fields.');
        return false;
      }
    }
    return true;
  },
  checkForHashInUrl() {
    let url;
    if (window.location.hash) {
      url = new URL(window.location.hash);
    } else {
      url = '#index';
    }

    return url;
  },
};

export default utils;