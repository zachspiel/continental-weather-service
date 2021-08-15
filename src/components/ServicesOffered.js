import React from 'react';
import { Container, Divider, List, Segment } from 'semantic-ui-react';
import SegmentDivider from '../views/SegmentDivider';
import Fade from 'react-reveal/Fade';

const ServicesOffered = () => (
  <>
    <SegmentDivider
      headerText={'Services Offered'}
      className={'services-offered-section'}
      containerId={'services-offered'}
    />
    <Fade>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <p style={{ fontSize: '1.33em' }}>
            Forcasts are faxed or e-mailed to your office twice daily. Timely updates are
            faxed or given verbally. Pinpoint precipitation times, duration, intensity and
            amounts for your specific area or job sites. Accurate temperature forecasts
            forewarn you of freezing and thawing times. Immediate access to local Doppler
            Radar allows us to provide your office or field crews with timely updates. We
            specialize in polite and friendly service. Your superintendents can make
            unlimited calls to CWS.
          </p>
          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <p className='header-blue'>Forecasts will assist you in:</p>
          </Divider>

          <List bulleted style={{ fontSize: '1.33em' }}>
            <List.Item>
              Knowing in advance when the snow or ice will arrive wnd when the heaviest
              precipitation will occur.
            </List.Item>
            <List.Item>Knowing how best to schedule crews during major storms.</List.Item>
            <List.Item>
              Knowing when blowing and drifting snow will begin and end.
            </List.Item>
          </List>
        </Container>
      </Segment>
    </Fade>
  </>
);

export default ServicesOffered;
