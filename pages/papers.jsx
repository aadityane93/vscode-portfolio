import { getPapers } from './api/papers';
import styles from '../styles/PapersPage.module.css';

const PapersPage = ({ papers }) => {
  return (
    <>
      <h3>Articles | Papers | Reports</h3>
      <br/>
      <hr/>
      <div className={styles.container}>
          <div key="a" className={styles.card}>
            <div className={styles.content}>
              <h3>A Short Report On Predictive Models for Condition Monitoring of Hydraulic Systems</h3>
              <p><strong>Abstract:</strong> About the project</p>
              <div className={styles.cta}>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.underline}
                >
                  Read
                </a>
              </div>
            </div>
          </div>


          <div key="a" className={styles.card}>
            <div className={styles.content}>
              <h3>A Short Report On Predictive Models for Condition Monitoring of Hydraulic Systems</h3>
              <p><strong>Abstract:</strong> About the project</p>
              <div className={styles.cta}>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.underline}
                >
                  Read
                </a>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const papers = getPapers();

  return {
    props: { title: 'Papers', papers },
  };
}

export default PapersPage;
