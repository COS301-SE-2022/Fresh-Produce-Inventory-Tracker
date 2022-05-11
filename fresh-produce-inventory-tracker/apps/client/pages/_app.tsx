import { AppProps } from 'next/app';

import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to the client!</title>
      </Head>
      <main className="h-screen min-h-full">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
