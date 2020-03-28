import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Header, List, Menu, Icon } from 'semantic-ui-react';

const Home = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (event, { name }) => setActiveItem(name);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu pointing secondary>
        <Menu.Item>
          <Icon name='circle outline' />
          <b>GuardRails</b>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='submit'
            active={activeItem === 'submit'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='scans'
            active={activeItem === 'scans'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>

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
    </div>
  );
};

const ScanSerializer = {
  toJSON: (scan) => {
    return {
      id: scan.id,
      repositoryName: scan.repositoryName,
    };
  }
};

export default Home;
