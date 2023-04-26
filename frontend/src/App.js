import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CookieConsent from "react-cookie-consent";

import ContactForm from "./components/ContactForm";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Profile from "./components/Profile";
import Content from "./components/Content";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";

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
        <Header />
        <div style={{ backgroundColor: "#ffbd59" }}></div>
        <Notification notification={notification} />
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/content" element={<Content />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route
            path="/contactforms"
            element={<ContactForm onCreate={createForm} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="myCookieName"
          style={{ background: "#333" }}
          buttonStyle={{
            color: "#fff",
            background: "#e8505b",
            fontSize: "13px",
          }}
        >
          This website uses cookies to ensure you get the best experience on our
          website. By continuing to use this site, you consent to the use of
          cookies.
        </CookieConsent>
      </div>
    </main>
  );
};

export default App;
