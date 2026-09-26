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

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main className={`${styles.content} ${hideMobileScrollbar ? styles.mobileScrollbarHidden : ''}`}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
