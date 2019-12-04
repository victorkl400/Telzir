import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img src={logo} className="d-inline-block align-top" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Pagina Inicial</Nav.Link>
              <Nav.Link href="#link" active>
                Simulador
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
