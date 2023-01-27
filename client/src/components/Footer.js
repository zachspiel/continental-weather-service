import React from 'react';
import { Container, Segment, Grid, Header, List, Icon } from 'semantic-ui-react';

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();
  const FACEBOOK_URL =
    'https://www.facebook.com/pages/category/Local-Business/Continental-Weather-Service-181087438621069/';

  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Site Links' />
              <List link inverted>
                <List.Item as='a' href='#about'>
                  About Continental Weather Service
                </List.Item>
                <List.Item as='a' href='#services-offered'>
                  Services Offered
                </List.Item>
                <List.Item as='a' href='#referrals'>
                  Referrals
                </List.Item>
                <List.Item as='a' href='#contact-us'>
                  Contact Us
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Social Media' />
              <List link inverted horizontal>
                <List.Item as='a' href={FACEBOOK_URL} target='_blank'>
                  <Icon name='facebook official' />
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Continental Weather Service
              </Header>
              <p>
                &copy; {getCurrentYear()} Continental Weather Service. All rights
                reserved.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
