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
              <p><strong>Abstract:</strong> Report on machine learning models for Predictive Maintainance of Hydraulic Systems</p>
              <div className={styles.cta}>
                <a
                  href="/short_report.pdf"
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
              <h3>A paper on Rainwater Harvesting System on Urban Areas for
              Sustainability (Uni Assignment)</h3>
              <p><strong>Abstract:</strong> This study assesses the
                  suitability of Rainwater Harvesting with the focus on Roof Top
                  Rainwater Harvesting model in urban areas. This paper gives an
                  overview of RWHS that can be harvested during monsoon and
                  gives the analyzed and interpreted framework of calculation of
                  catchment area, discharge, and tank design.</p>
              <div className={styles.cta}>
                <a
                  href="/scientific_paper.pdf"
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
