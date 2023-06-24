import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import github from "./images/contact/github.png";
export default function TopMenu() {
  return (
    <Navbar style={{
      position: "fixed",
      width: "100%",
      top: "0",
      zIndex: "6"
    }} collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Carlos R. Cáceres Martínez</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown style={{
              height: "max-content",
              // overflowY: "scroll",
            }}title="Projects" id="navbarScrollingDropdown" className="dropdownNav">
            {/* <NavDropdown.Divider /> */}
            <h6 style={{marginLeft: "15px"}}>🔴 Live | * Only on desktop | <img className="gitNavbarLogo" src={github} alt="GitHub Link" /></h6>
            <NavDropdown.Divider />
              <h6 style={{marginLeft: "15px",}}>Top Personal Projects:</h6>
              <NavDropdown.Item href="#action/3.4">
              🔴 Portfolio Site
              </NavDropdown.Item>
              <NavDropdown.Item href="#action">
              🔴 Open Ai API interface
              </NavDropdown.Item>
              <NavDropdown.Item href="#action">
                Whisper Ai Translator App
              </NavDropdown.Item>
              <NavDropdown.Item href="#action">
              🔴 Browser Data Collection
              </NavDropdown.Item>
              <NavDropdown.Item href="/resume">
              🔴 Open Ai: ChatGPT Resume QA
              </NavDropdown.Item>
            <NavDropdown.Divider />
              <h6 style={{marginLeft: "15px"}}>University of Wa. Projects</h6>
              <NavDropdown.Item href="#action/3.4">
              🔴 Group Project: Washington Wildfires Community
              </NavDropdown.Item>
              <NavDropdown.Item href="#action">
                Solo Project: E-Commerce Site
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/">
              *🔴 Solo Project: JS Portfolio
              </NavDropdown.Item>
            <NavDropdown.Divider />
              <h6 style={{marginLeft: "15px"}}> Coding Dojo Projects:</h6>
              <NavDropdown.Item href="#action/3.4">
                Group Project: Music Groups App
              </NavDropdown.Item>
              <NavDropdown.Item href="/resume">
                Solo Project: Party Connection App
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/community">Community</Nav.Link>
            <Nav.Link href="/contact"> Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
