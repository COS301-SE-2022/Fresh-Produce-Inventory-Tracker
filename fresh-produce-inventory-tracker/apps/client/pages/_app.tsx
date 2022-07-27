import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../src/components/layout/layout';
import { SessionProvider } from 'next-auth/react';
import './styles.css';

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to the client!</title>
      </Head>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default CustomApp;