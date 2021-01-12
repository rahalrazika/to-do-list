
const localStorage = () => {
  const projects = JSON.parse(window.localStorage.getItem('projects'));
  return projects;
};

const getSingleProject = (projectId) => {
  const project = localStorage();
  return project[projectId];
};

const updateProject = (updatedProject) => {
  const projects = localStorage();
  projects[updatedProject.id] = updatedProject;
  window.localStorage.setItem('projects', JSON.stringify(projects));
  window.location.reload();
};

export { localStorage, getSingleProject, updateProject };