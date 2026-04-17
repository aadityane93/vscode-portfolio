import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/vscode-portfolio/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/vscode-portfolio/html_icon.svg" filename="resume.html" path="/resume" />
      <Tab icon="/vscode-portfolio/yml_icon.svg" filename="contact.yml" path="/contact" />
      <Tab icon="/vscode-portfolio/py_icon.svg" filename="projects.py" path="/projects" />
      <Tab icon="/vscode-portfolio/json_icon.svg" filename="articles.json" path="/papers" />
      <Tab icon="/vscode-portfolio/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;