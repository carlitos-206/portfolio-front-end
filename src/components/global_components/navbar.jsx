import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import github from "../images/contact/github.png";
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
            <h6 style={{marginLeft: "5px", color: "black", padding: '0 10% 0 10%'}}>🔴 Live | * Only on desktop | <a href="https://github.com/carlitos-206"><img className="gitNavbarLogo" src={github} alt="GitHub Link" /></a></h6>
              <h6 style={{marginLeft: "15px", color: "black"}}>Top Personal Projects:</h6>
              <NavDropdown.Item href="/projects/personal/portfolio">
              🔴 Portfolio Site
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/personal/openai_interface">
              🔴 OpenAI API interface
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/personal/browser_data">
              🔴 Browser Data Collection
              </NavDropdown.Item>
              <NavDropdown.Item href="/resume">
              Technical Article: Context Training Chat GPT
              </NavDropdown.Item>
              
              <h6 style={{marginLeft: "15px", color: "black"}}>University of Wa. Projects</h6>
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
              <h6 style={{marginLeft: "15px", color: "black"}}> Coding Dojo Projects:</h6>
              <NavDropdown.Item href="/projects/school/dojo/group">
                Group Project: Music Groups App
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/school/dojo/solo">
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
