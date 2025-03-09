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
    href: 'https://www.linkedin.com/in/aaditya-neupane-944523287/',
  },
  {
    social: 'GitHub',
    link: 'github.com/aadityane93',
    href: 'https://github.com/aadityane93',
  },
  {
    social: 'Kaggle',
    link: 'kaggle.com/neupaneaaditya',
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
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
