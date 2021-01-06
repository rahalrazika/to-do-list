const Project = (title, description, priority, todos = []) => {
  return { id, title, description, priority, todos };
};

const getFormValues = () => {
  const valuesForm = document.querySelectorAll('input');
  const values = [];
  for (let i = 0; i < valuesForm.length; i++) {
    valuesForm[i].id = i;
    values.push(valuesForm[i].value);
  }

  let b = JSON.parse(window.localStorage.getItem('projects'));
  let p = Project(values[0], values[1], values[2]);
  b.push(p);
  window.localStorage.setItem('projects', [JSON.stringify(b)]);
};



export { Project, getFormValues };