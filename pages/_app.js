import './styles.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener('beforeunload', handleWindowBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleWindowBeforeUnload);
    };
  }, []);

  const handleWindowBeforeUnload = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;