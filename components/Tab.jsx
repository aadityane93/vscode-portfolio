import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Tab.module.css';

const Tab = ({ icon, filename, mobileFilename, path }) => {
  const router = useRouter();

  return (
    <Link href={path}>
      <div
        className={`${styles.tab} ${router.pathname === path && styles.active}`}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p className={styles.filename}>{filename}</p>
        <p className={styles.mobileFilename}>{mobileFilename || filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
