import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  const router = useRouter();
  const hideMobileScrollbar = ['/', '/resume'].includes(router.pathname);
  const isResumePage = router.pathname === '/resume';

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main className={`${styles.content} ${hideMobileScrollbar ? styles.mobileScrollbarHidden : ''} ${isResumePage ? styles.resumeContent : ''}`}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
