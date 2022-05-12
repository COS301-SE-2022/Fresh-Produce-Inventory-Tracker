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
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
	      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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
