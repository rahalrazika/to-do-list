const { Project } = require('../classes/projects');

describe(' new project  ', () => {
  const newProject = Project([
    'Test',
    'Test project',
    '02/28/2021',
    'High',
    '02/16/2021',

  ]);

  it('expect to create a new project', () => {
    expect(Project).toBeDefined();
  });

  it('expect a project title ', () => {
    expect(newProject.title).toEqual('Test');
  });

  it('expect a project description ', () => {
    expect(newProject.description).toEqual('Test project');
  });

  it('expect a project priority ', () => {
    expect(newProject.priority).toEqual('High');
  });

  it('expect a project dueDate ', () => {
    expect(newProject.dueDate).toEqual('02/28/2021');
  });

  it('expect a project createdDate ', () => {
    expect(newProject.createdDate).toEqual('02/16/2021');
  });
  it('expect a project createdDate to qual  the same date as creation date    ', () => {
    expect(newProject.createdDate).not.toEqual('02/29/2021');
  });
});