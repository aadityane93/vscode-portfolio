import data from './notebooks.json';

export const getnotebooks = () => {
  return data;
};

export default (req, res) => {
  const projects = getnotebooks();
  res.json(projects);
};
