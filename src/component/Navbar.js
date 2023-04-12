import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Ferdi Ep
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/jsonxample">
            Json
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/ferdiansyahep">
              <i className="fab fa-github"></i> GitHub
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/ferdiansyah-eka-putra-a9109725a/">
              <i className="fab fa-linkedin"></i> LinkedIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
