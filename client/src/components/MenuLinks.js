import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuLinks = () => (
  <>
    <Menu.Item as='h3' className='header-blue' href='#about'>
      <b>CONTINENTAL WEATHER SERVICE</b>
    </Menu.Item>
    <Menu.Item as='a' href='#about' position='right'>
      ABOUT
    </Menu.Item>
    <Menu.Item as='a' href='#services-offered'>
      SERVICES OFFERED
    </Menu.Item>
    <Menu.Item as='a' href='#referrals'>
      REFERRALS
    </Menu.Item>
    <Menu.Item as='a' href='#contact-us' style={{ marginRight: '15%' }}>
      CONTACT US
    </Menu.Item>
  </>
);

export default MenuLinks;
