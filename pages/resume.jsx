import { useEffect, useRef, useState } from 'react';
import styles from '../styles/ResumePage.module.css';
import { pdfjs, Document, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './Resume.pdf';

const ResumePage = () => {
  const [numPages, setNumPages] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [pdfWidth, setPdfWidth] = useState(null);
  const pdfContainerRef = useRef(null);

  useEffect(() => {
    const updatePdfWidth = () => {
      setIsMobile(window.innerWidth <= 600);
      setPdfWidth(pdfContainerRef.current?.clientWidth || null);
    };

    updatePdfWidth();
    window.addEventListener('resize', updatePdfWidth);
    return () => window.removeEventListener('resize', updatePdfWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <center>
      <h3 className={styles.heading}>Resume (<a href={myResume} className={styles.underline} download="Resume-AadityaNeupane.pdf">Download</a>)</h3>
      <br />
      <div className={styles.pdfContainer} ref={pdfContainerRef}>
        <Document 
          file={myResume} 
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page 
              key={`page_${index + 1}`} 
              pageIndex={index} 
              {...(isMobile && pdfWidth ? { width: pdfWidth } : { scale: 1.5 })}
              renderMode="svg" 
            />
          ))}
        </Document>
      </div>
    </center>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Resume' },
  };
}

export default ResumePage;
