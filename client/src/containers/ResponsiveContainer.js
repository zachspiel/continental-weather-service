import React from 'react';
import { createMedia } from '@artsy/fresnel';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import { Sidebar } from 'semantic-ui-react';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const ResponsiveContainer = (props) => {
  return (
    <MediaContextProvider>
      <Media greaterThan='mobile'>
        <DesktopContainer>{props.children}</DesktopContainer>
      </Media>
      <Media as={Sidebar.Pushable} at='mobile'>
        <MobileContainer>{props.children}</MobileContainer>
      </Media>
    </MediaContextProvider>
  );
};

export default ResponsiveContainer;
