// app/hooks/usePageTitle.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const usePageTitle = (defaultTitle: string) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      switch (url) {
        case '/':
          document.title = 'soapreal_ | Home';
          break;
        case '/about':
          document.title = 'soapreal_ | About';
          break;
        case '/bazinga':
          document.title = 'soapreal_ | Bazinga';
          break;
        case '/contact':
          document.title = 'soapreal_ | Contact';
          break;
        case '/fart':
          document.title = 'soapreal_ | Fart';
          break;
        case '/portfolio':
          document.title = 'soapreal_ | Portfolio';
          break;
        default:
          document.title = defaultTitle;
          break;
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Set the initial title
    handleRouteChange(router.pathname);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router, defaultTitle]);
};

export default usePageTitle;
