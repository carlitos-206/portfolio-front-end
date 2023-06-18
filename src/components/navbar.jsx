import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function TopMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Carlos R. Cáceres Martínez</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <h6 style={{marginLeft: "15px"}}> 🔴 Live Demo:</h6>
              <NavDropdown.Item href="#action/3.4">
                Open Ai: Dall-e Image Generator
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="#deets">Resume</Nav.Link>
            <Nav.Link href="#deets">Community</Nav.Link>
            <Nav.Link href="#memes"> Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
