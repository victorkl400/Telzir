import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

export default class FloatFooter extends Component {
  render() {
    return (
      <Navbar bg="light" expand="md">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button>App Store</Button>
            <Button>Google Play</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
