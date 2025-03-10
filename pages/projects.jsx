import ProjectCard from '../components/ProjectCard';
import { getMLProjects } from './api/ml-projects';
import { getBotsProjects } from './api/bots-projects';
import { getPyPiProjects } from './api/pypi-projects';
import { getMiscProjects } from './api/misc-projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ ml_projects, bots_projects, pypi_projects, misc_projects }) => {
  return (
    <>
      <h3>My Open Source Works</h3>
      <br/>
      <center><h4>Projects</h4></center>
      <hr/>
      <div className={styles.container}>
        {ml_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
      <center><h4>Machine Learning Notebooks</h4></center>
      <hr/>
      <div className={styles.container}>
        {bots_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
      <center><h4>Simple Programs</h4></center>
      <hr/>
      <div className={styles.container}>
        {pypi_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
      
    </>
  );
};

export async function getStaticProps() {
  const ml_projects = getMLProjects();
  const bots_projects = getBotsProjects();
  const pypi_projects = getPyPiProjects();
  const misc_projects = getMiscProjects();

  return {
    props: { title: 'Projects', ml_projects, bots_projects, pypi_projects, misc_projects },
  };
}

export default ProjectsPage;
