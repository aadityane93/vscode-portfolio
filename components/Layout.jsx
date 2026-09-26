import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main className={`${styles.content} ${router.pathname === '/' ? styles.homeContent : ''}`}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
