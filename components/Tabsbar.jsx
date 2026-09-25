import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/vscode-portfolio/react_icon.svg" filename="home.jsx" mobileFilename="Home" path="/" />
      <Tab icon="/vscode-portfolio/html_icon.svg" filename="resume.html" mobileFilename="Resume" path="/resume" />
      <Tab icon="/vscode-portfolio/yml_icon.svg" filename="contact.yml" mobileFilename="Contact" path="/contact" />
      <Tab icon="/vscode-portfolio/py_icon.svg" filename="projects.py" mobileFilename="Projects" path="/projects" />
      <Tab icon="/vscode-portfolio/json_icon.svg" filename="articles.json" mobileFilename="Articles" path="/papers" />
      <Tab icon="/vscode-portfolio/markdown_icon.svg" filename="github.md" mobileFilename="GitHub" path="/github" />
    </div>
  );
};

export default Tabsbar;
