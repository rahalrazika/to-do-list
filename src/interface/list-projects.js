const ListProjects = () => {
  let projects = JSON.parse(window.localStorage.getItem('projects'));

  let projectsList = [];
  for(let i = 0; i < projects.length; i++) {
    projectsList.push(`<li>${projects[i].title}</li>`);
  }

  let html = `
    <ul>
      ${projectsList.join(' ')}
    </ul>
  `;
  
  return html
}

export default ListProjects;