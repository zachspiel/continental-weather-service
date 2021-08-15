import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Visibility, Segment, Menu, Container } from 'semantic-ui-react';
import HomepageHeading from '../components/HomepageHeading';
import MenuLinks from '../components/MenuLinks';
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: '102vh', padding: '1em 0em', marginTop: '-1rem' }}
            className='parallax-section landing-page-image'
            vertical
          >
            <Container style={{ backgroundColor: 'white' }} fluid>
              <Menu secondary size='large'>
                {MenuLinks()}
              </Menu>
            </Container>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export default DesktopContainer;
