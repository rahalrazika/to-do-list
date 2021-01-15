const DB = {
  initialize() {
    const defaultProjct = [{
      title: 'Restaurant js app ',
      description: 'an app use js vanilla ',
      priority: 'High',
      dueDate: '2021-01-28',
      createdDate: '15-01-2021',
      todos: [{
        itemDescription: 'setup webpack ',
        completed: false,
        date: '01/13/2021',
      }],
    }];
    if (window.localStorage.getItem('projects') == null) {
      window.localStorage.setItem('projects', JSON.stringify(defaultProjct));
    }
  },


  getProjects() {
    const projects = JSON.parse(window.localStorage.getItem('projects'));
    return projects;
  },
  saveProject(project) {
    const b = this.getProjects();
    project.id = b.length + 1;
    b.push(project);
    window.localStorage.setItem('projects', [JSON.stringify(b)]);
  },
  getSingleProject(projectId) {
    const project = this.getProjects();
    return project[projectId];
  },
  updateProject(updatedProject) {
    const projects = this.getProjects();
    projects[updatedProject.id] = updatedProject;
    window.localStorage.setItem('projects', JSON.stringify(projects));
  },
};


export default DB;