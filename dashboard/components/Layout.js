import Head from 'next/head';
import Header from './Header';

const container = {
  padding: '3rem'
};

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Scans - Your repositories alerts for ulnerabilities</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section style={container}>
        {props.children}
      </section>
    </div>
  );
};

export default Layout;