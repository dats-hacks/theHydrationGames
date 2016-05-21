import React, { Component } from 'react';
import { Navbar, 
          NavItem, 
          Nav } from 'react-bootstrap';

export default class NavigationBar extends Component {

  render () {
    return (
      <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Water Save</a>
            </Navbar.Brand>
          </Navbar.Header>

        <Nav>
          <NavItem eventKey={1} href="#">Why?</NavItem>
          <NavItem eventKey={2} href="#">Water Saving Tips</NavItem>
        </Nav>
        
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Sign Up Your School!</NavItem>
          <NavItem eventkey={2} href="#">Login</NavItem>
        </Nav>
      </Navbar>
    );
  }

}
