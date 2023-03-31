import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import ContactForm from "./components/ContactForm";
import Notification from "./components/Notfication";
import Footer from "./components/Footer";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Videos from "./components/Videos";

import contactFormService from "./services/contactForms";

const App = () => {
  const [notification, setNotification] = useState(null);

  const notify = (message, type = "info") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const createForm = async (contactForm) => {
    contactFormService
      .create(contactForm)
      .then(() => {
        notify(`A new message by has been sent.`);
      })
      .catch((error) => {
        notify(
          "Creating a message failed: " + error.response.data.error,
          "alert"
        );
      });
  };
  return (
    <div>
      <Notification notification={notification} />
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
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/videos" element={<Videos />} />
        <Route
          path="/contactforms"
          element={<ContactForm onCreate={createForm} />}
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
