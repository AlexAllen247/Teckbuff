import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";

import ContactForm from "./components/ContactForm";
import Notification from "./components/Notfication";
import Footer from "./components/Footer";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Videos from "./components/Videos";
import NavBar from "./components/NavBar";

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
    <main>
      <div className="app">
        <Notification notification={notification} />
        <NavBar />
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
    </main>
  );
};

export default App;
