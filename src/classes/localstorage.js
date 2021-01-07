const localStorage = () => {
  const projects = JSON.parse(window.localStorage.getItem('projects'));
  return projects;
};

export default localStorage;