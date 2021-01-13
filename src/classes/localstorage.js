
const DB = {
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