import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Continental Weather Service'
      inverted
      className={`homepage-heading ${mobile ? 'mobile' : 'desktop'}`}
    />
    <a href='#about'>
      <Icon
        name='arrow circle down'
        size='big'
        className={`down-arrow ${mobile ? 'mobile' : 'desktop'}`}
      />
    </a>
  </Container>
);

export default HomepageHeading;
