import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Form, Button, Message, Container, Header, List } from 'semantic-ui-react';

import Layout from '../components/Layout';

import { submitScan } from '../src/actions';

const Home = () => {
  const [repositoryName, setRepositoryName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const loading = () => setSubmitting(true);
  const onSuccess = () => {
    setRepositoryName('');
    setSubmitting(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1000);
  };

  const handleChange = (e, { value }) => setRepositoryName(value);

  const handleSubmit = async () => {
    loading();
    await submitScan({ id: v4(), repositoryName });
    onSuccess();
  };

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

        <Form success={success} loading={submitting} onSubmit={handleSubmit}>
          <Form.Input
            label='Repository name'
            value={repositoryName}
            onChange={handleChange}
            placeholder='Enter the repository name'
            required
          />
          <Button>Submit</Button>
          <Message
            success
            header='Scan submitted'
            content="Our services are looking for vulnerabilities in your repository"
          />
        </Form>
      </Container>
    </Layout>
  );
};

export default Home;