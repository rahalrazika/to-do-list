import DB from './localstorage';

const Project = ([title, description, priority, todos = []]) => ({
  title, description, priority, todos,
});

const getFormValues = () => {
  const valuesForm = document.querySelectorAll('input');
  const values = [];
  for (let i = 0; i < valuesForm.length; i += 1) {
    values.push(valuesForm[i].value);
  }
  const p = Project(values);
  DB.saveProject(p);
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
  el.addEventListener('click', () => getFormValues());
};


export { Project, getFormValues, addCreateProjectLink, addSelectProjectLink };