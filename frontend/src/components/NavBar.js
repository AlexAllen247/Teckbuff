import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <section className="navbar">
      <Navbar bg="light" expand="lg">
        <div className="container-fluid">
          <Navbar.Brand href="/">TeckBuff.com</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mt-2">
              <Nav.Link href="/">Profile</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/certifications">Certifications</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/videos">Videos</Nav.Link>
              <Nav.Link href="/contactforms">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </section>
  );
};

export default NavBar