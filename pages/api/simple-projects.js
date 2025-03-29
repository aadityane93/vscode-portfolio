import data from './simple-projects.json';

export const simpleProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = simpleProjects();
  res.json(projects);
};
