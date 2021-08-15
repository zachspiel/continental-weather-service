import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

const SegmentDivider = (props) => {
  const className = 'parallax-section ' + props.className;
  return (
    <Segment
      inverted
      textAlign='center'
      className={className}
      vertical
      id={props.containerId ?? ''}
    >
      <Container text>
        <Header
          as='h1'
          content={props.headerText}
          className={'section-divider-header'}
          inverted
        />
      </Container>
    </Segment>
  );
};

export default SegmentDivider;
