const Project = (id, title, description, priority, todos = []) => ({
  id, title, description, priority, todos,
});

const getFormValues = () => {
  const valuesForm = document.querySelectorAll('input');
  const values = [];
  for (let i = 0; i < valuesForm.length; i += 1) {
    valuesForm[i].id = i;
    values.push(valuesForm[i].value);
  }

  const b = JSON.parse(window.localStorage.getItem('projects'));
  const p = Project(values[0], values[1], values[2]);
  b.push(p);
  window.localStorage.setItem('projects', [JSON.stringify(b)]);
};


export { Project, getFormValues };