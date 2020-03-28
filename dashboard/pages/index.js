import { Container, Header, List } from 'semantic-ui-react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Container textAlign='center'>
        <Header as='h1'>
          Scans
        </Header>

        <Header as='h2'>
          Scans your repositories to alert you of any vulnerabilities and security issues.
        </Header>

        <List bulleted>
          <List.Item>Submit a new repository: Scan vulnerabilities in a new repository</List.Item>
          <List.Item>See list scans: Check the list of repository scans and click on each scan to see the findings</List.Item>
        </List>
      </Container>
    </Layout>
  );
};

export default Home;