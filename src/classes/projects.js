
const Project = ([title, description, priority, todos = []]) => ({
  title, description, priority, todos,
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


export { Project, getFormValues };