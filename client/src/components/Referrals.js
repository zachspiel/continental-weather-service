import React from 'react';
import { Segment, Grid, Header, Icon } from 'semantic-ui-react';
import SegmentDivider from '../views/SegmentDivider';
import Fade from 'react-reveal/Fade';

const Referrals = () => (
  <>
    <SegmentDivider
      headerText={'Referrals'}
      className={'referrals-section'}
      containerId='referrals'
    />
    <Fade>
      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h4' className='referral-header'>
                "We have been very pleased with all aspects of our dealings with
                Continental Weather Service and plan to continue using Mike as our key
                forecaster for future years. "
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <b>Kenneth R. Neal</b> Street Superintendent
                <br />
                <Icon name='map pin' /> City of Elmhurst, IL (630) 530-3014
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h4' className='referral-header'>
                "My worst nightmare would be to wake up in the morning to snow on the
                ground. The last six years, with your service, this has never happened
                because of your friendly 3am phone calls."
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <b>Roy Hervas</b> Tri-Star Plowing and Landscaping
                <br />
                <Icon name='map pin' /> Shaumburg, IL (847) 584-5070
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fade>
  </>
);

export default Referrals;
