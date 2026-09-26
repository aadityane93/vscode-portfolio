import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'ne.neupane@gmail.com',
    href: 'mailto:ne.neupane@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/aaditya-neupane-944523287',
    mobileLink: 'aaditya-neupane-944523287',
    href: 'https://www.linkedin.com/in/aaditya-neupane-944523287/',
  },
  {
    social: 'GitHub',
    link: 'aadityane93',
    href: 'https://github.com/aadityane93',
  },
  {
    social: 'Kaggle',
    link: 'kaggle.com/neupaneaaditya',
    mobileLink: 'neupaneaaditya',
    href: 'https://kaggle.com/neupaneaaditya/code',
  },
  {
    social: 'Website',
    link: 'aadityaneupane.com',
    href: 'https://aadityaneupane.com',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>production</a>
        </p>
      <p className={styles.line}>
        <span>Aaditya</span>&#58;
      </p>
      <p className={`${styles.line} ${styles.socialsHeader}`}>
        <span className={styles.indent}>&nbsp;&nbsp;&nbsp;</span>&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={`${styles.line} ${styles.socialLine}`} key={index}>
          <span className={styles.indent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            <span className={styles.desktopLink}>{item.link}</span>
            <span className={styles.mobileLink}>{item.mobileLink || item.link}</span>
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={`${styles.line} ${styles.socialLine}`} key={index}>
          <span className={styles.indent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            <span className={styles.desktopLink}>{item.link}</span>
            <span className={styles.mobileLink}>{item.mobileLink || item.link}</span>
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
