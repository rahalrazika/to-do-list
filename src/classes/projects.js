import localStorage from "./localstorage";

const Project = ([id, title, description, priority, todos = []]) => ({
  id, title, description, priority, todos,
});

const getFormValues = () => {
  const valuesForm = document.querySelectorAll('input');
  const values = [];
  for (let i = 0; i < valuesForm.length; i += 1) {
    values.push(valuesForm[i].value);
  }

  const b = JSON.parse(window.localStorage.getItem('projects'));
  values.id = b.length + 1;
  const p = Project(values);
  b.push(p);
  window.localStorage.setItem('projects', [JSON.stringify(b)]);
};

const addProjectsLinks = () => {
  const projects = document.querySelectorAll('.project-card');
  for (let i = 0; i < projects.length; i++) {
    const el = projects[i];
    el.addEventListener('click', (event) => { event.preventDefault(); window.location.hash = `#add-item/${i}`; });
  }
};



export { Project, getFormValues, addProjectsLinks };