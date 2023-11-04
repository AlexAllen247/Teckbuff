import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const styles = {
    navStyle: {
      fontSize: 26,
      color: "#0047ab",
      margin: 15,
    },
    navbar: {
      marginBottom: 60,
      marginTop: 15,
    },
  };
  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      collapseOnSelect
      expand="lg"
      className="text-center"
      style={styles.navbar}
    >
      <div className="container-fluid">
        <Navbar.Toggle
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#0047ab"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75zM1.75 12a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75z"
            />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav justify-content-center"
          onClick={() => setExpanded(false)}
        >
          <div className="mx-auto">
            <Nav className="me-auto mt-2 justify-content-center mx-auto">
              <NavLink
                to="/"
                style={styles.navStyle}
                aria-label="Link to Homepage"
              >
                Home
              </NavLink>
              <NavLink
                to="/articles"
                style={styles.navStyle}
                aria-label="Link to Articles and Tech Content page"
              >
                Articles
              </NavLink>
              <NavLink
                to="/portfolio"
                style={styles.navStyle}
                aria-label="Link to Portfolio page"
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/profile"
                style={styles.navStyle}
                aria-label="Link to Profile page"
              >
                Profile
              </NavLink>
              <NavLink
                to="/certifications"
                style={styles.navStyle}
                aria-label="Link to Certifications page"
              >
                Certifications
              </NavLink>
              <NavLink
                to="/contactforms"
                style={styles.navStyle}
                aria-label="Link to Contact page"
              >
                Contact
              </NavLink>
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
