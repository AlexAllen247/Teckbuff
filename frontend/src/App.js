import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import ContactForm from "./components/ContactForm";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Profile from "./components/Profile";
import Content from "./components/Content";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";

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
          <Route path="/" element={<Profile />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/content" element={<Content />} />
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
