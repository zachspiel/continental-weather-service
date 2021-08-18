import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomepageHeading from '../components/HomepageHeading';
import { Menu, Segment, Container, Icon, Sidebar } from 'semantic-ui-react';
import MenuLinks from '../components/MenuLinks';
class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation='overlay'
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          {MenuLinks()}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            textAlign='center'
            className='parallax-section landing-page-image'
            vertical
          >
            <Container>
              <Menu inverted secondary size='massive'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

export default MobileContainer;
