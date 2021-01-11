const localStorage = () => {
  const projects = JSON.parse(window.localStorage.getItem('projects'));
  return projects;
};

const getSingleProject = (projectId) => {
  const project = localStorage();
  return project[projectId];
};

export { localStorage, getSingleProject };