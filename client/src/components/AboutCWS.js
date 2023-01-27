import React, { useState } from 'react';
import {
  Button,
  Header,
  Icon,
  Image,
  Grid,
  Segment,
  Transition,
} from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';

const AboutCWS = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fade>
      <Segment style={{ padding: '8em 0em' }} vertical id='about'>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' className='about-section-header'>
                About Continental Weather Service
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Continental Weather Service can make your life a lot easier this winter
                season by providing you with accurate weather forecasts and timely
                updates. We also notify your after hours on call person of lead times of
                snow and ice so that your crews are and equipment are ready to roll when
                the first flakes arrive. No longer will you need to have someone looking
                out the window all night long waiting for the snow or ice to commence.
              </p>
              <Transition animation='scale' duration={500} visible={open}>
                <p style={{ fontSize: '1.33em' }}>
                  A key feature why our clientele subscribe to our service is because they
                  are able to call us and converse directly with a meteorologist who can
                  answer all of their questions anytime of the day or night. You can call
                  us from your office, home or vehicle to get the latest storm progress
                  reports. One does not have this valuable tool at their disposal if they
                  depend on radio and television forecasts or use of a satellite
                  computerized weather system. You will no longer have to rely on often
                  outdated and inaccurate weather forecasts. Continental Weather Service
                  tailors its forecasts to meet the exact needs of municipalities and snow
                  removal services. We have over twenty years of experience forecasting
                  Chicagoland's winters. We use the latest up-to-date equipment featuring
                  DOPPLER RADAR and satellite which covers your specific plowing area.
                </p>
              </Transition>
              <Button primary onClick={() => setOpen(!open)}>
                {open ? 'Close' : 'More Information'}
                <Icon
                  name={`${open ? 'arrow up' : 'arrow down'}`}
                  style={{ marginLeft: '0.5rem' }}
                />
              </Button>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image src='/images/favicon.jpg' size='medium' circular />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fade>
  );
};

export default AboutCWS;
