import ProjectCard from '../components/ProjectCard';
import { getMLProjects } from './api/ml-projects';
import { getnotebooks } from './api/notebooks';
import { simpleProjects } from './api/simple-projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ ml_projects, notebooks, simple_projects}) => {
  return (
    <>
      <h3>My Open Source Works</h3>
      <br/>
      <center><h4>Major Projects</h4></center>
      <hr/>
      <div className={styles.container}>
        {ml_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        
      </div>
      <br/>
      <center><h4>Machine Learning - Jupyter/Colab/Kaggle Notebooks</h4></center>
      <hr/>
      <div className={styles.container}>
        {notebooks.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
      <center><h4>Simple Projects / Programs</h4></center>
      <hr/>
      <div className={styles.container}>
        {simple_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
      
    </>
  );
};

export async function getStaticProps() {
  const ml_projects = getMLProjects();
  const notebooks = getnotebooks();
  const simple_projects = simpleProjects();

  return {
    props: { title: 'Projects', ml_projects, notebooks, simple_projects },
  };
}

export default ProjectsPage;
