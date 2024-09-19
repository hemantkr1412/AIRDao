import { useEffect } from 'react';
const GoogleTagManager = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-Z9KMK1MSXW`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config',"G-Z9KMK1MSXW");
    return () => {
      // Clean up the script if necessary
      document.head.removeChild(script);
    };
  }, []);
  return null;
};
export default GoogleTagManager;
