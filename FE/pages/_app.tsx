import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import { SessionProvider } from 'next-auth/react';
import './styles.css';

function CustomApp({
  Component,
  pageProps: {...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to the client!</title>
      </Head>
      <SessionProvider refetchInterval={5}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default CustomApp;