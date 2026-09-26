import { useEffect, useRef } from 'react';
import styles from '../styles/GithubPage.module.css';

const GithubPage = () => {
  const chartContainerRef = useRef(null);

  const showLatestContributions = () => {
    if (typeof window === 'undefined' || !window.matchMedia('(max-width: 600px)').matches) {
      return;
    }

    const chartContainer = chartContainerRef.current;
    if (chartContainer) {
      chartContainer.scrollLeft = chartContainer.scrollWidth;
    }
  };

  useEffect(() => {
    if (window.matchMedia('(max-width: 600px)').matches && chartContainerRef.current) {
      chartContainerRef.current.scrollLeft = chartContainerRef.current.scrollWidth;
    }
  }, []);

  return (
    <>
      <div className={styles.page}>
        <div>
          <a href="https://github.com/aadityane93" target="_blank" rel="noopener noreferrer">
            <img 
              className={styles.avatar}
              style={{ height: 'auto' }} 
              alt="" 
              src="https://avatars.githubusercontent.com/u/29502306?v=4" 
              width="260" 
              height="260" 
            />
            <br />
            <u>Github.com/aadityane93</u>
          </a>
        </div>
        <div style={{ padding: '20px' }}></div>
        <h1 style={{ marginBottom: '2rem' }}>GitHub Contributions</h1>
        <div ref={chartContainerRef} className={styles.chartContainer}>
          
        <iframe 
          className={styles.chart}
          src="https://ghchart.rshah.org/aadityane93" 
          title="GitHub contributions chart"
          onLoad={showLatestContributions}
        ></iframe>
        <img
          className={styles.mobileChart}
          src="https://ghchart.rshah.org/aadityane93"
          alt="GitHub contributions chart"
          onLoad={showLatestContributions}
        />
        
      </div>
      
      </div>

    </>
  );
};

export default GithubPage;
