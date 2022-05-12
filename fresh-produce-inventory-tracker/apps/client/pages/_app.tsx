import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../src/components/layout/layout';
import Navigation from '../src/components/navigation';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to the client!</title>
      </Head>
      <main className="h-screen min-h-full">
        <Layout>
          <Navigation />
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default CustomApp;
