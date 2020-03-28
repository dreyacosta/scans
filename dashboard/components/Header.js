import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Menu, Icon } from 'semantic-ui-react';

const HeaderLayout = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => setActiveItem(router.route), []);

  return (
    <Menu pointing secondary>
      <Menu.Item>
        <Link href="/">
          <a>
            <Icon name='circle outline' />
            <b>GuardRails</b>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item
          name='home'
          active={activeItem === '/'}
        ><Link href="/"><a>Home</a></Link></Menu.Item>
        <Menu.Item
          name='scans'
          active={activeItem === '/scans'}
        ><Link href="/scans"><a>Scans</a></Link></Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default HeaderLayout;