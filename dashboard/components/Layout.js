import Head from 'next/head';
import Header from './Header';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;