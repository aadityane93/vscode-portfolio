import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Artificial</h1>
          <h1>Intelligence</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Aaditya Neupane</h1>
            <h6 className={styles.bio}>AI Student | Research Assistant</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Sets</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      Research
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      Computer-Vision
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Tensorflow
                    </span>
                    <span key='SQL' className='SQL'>
                      SQL
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Software-Engineering
                    </span>
                    <span key='Bots' className='Bots'>
                      Machine-Learning
                    </span>
                    <span key='SQL' className='SQL'>
                      LaTeX
                    </span>
                    <span key='Bots' className='Bots'>
                      Web-Development
                    </span>
                  </div>

                  <h4 style={{padding: 10}}> </h4>

                  <h4>Interests</h4>

                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      Physical-AI
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      Medical-AI
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Industrial-AI
                    </span>

                  </div>                  

                </div>
              </div>
            </div>
            <Link href="/resume">
              <button className={styles.button}>Resume</button>
            </Link>

            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.jpeg"
                width={300}
                height={300}
                alt="Bird Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
