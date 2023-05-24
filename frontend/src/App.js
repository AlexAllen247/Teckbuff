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
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import Services from "./components/Services";
import TechContent from "./components/TechContent";

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

  const styles = {
    app: {
      fontFamily: "Arial Unicode MS",
    },
    cookie: {
      background: "#333",
    },
    button: {
      color: "#fff",
      background: "#0047ab",
      fontSize: "13px",
    },
  };

  return (
    <main>
      <div className="app">
        <Header />
        <Notification notification={notification} />
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/articles" element={<TechContent />} />
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
          style={styles.cookie}
          buttonStyle={styles.button}
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
