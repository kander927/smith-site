// app/_app.tsx
import type { AppProps } from 'next/app';
import usePageTitle from './hooks/use-page-title';
import '../globals.css'; // Import global styles

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageTitle('soapreal_');

  return <Component {...pageProps} />;
};

export default MyApp;
