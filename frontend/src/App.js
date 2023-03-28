import { useState } from "react";
import React from "react";

import ContactForm from "./components/ContactForm";
import Notification from "./components/Notfication";
import Footer from "./components/Footer";
import About from "./components/About";
import Certifications from "./components/Certifications";


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
        notify(
          `A new message by has been sent./Se ha enviado un nuevo mensaje.`
        );
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
      <About />
      <Certifications />
      <ContactForm onCreate={createForm} />
      <Footer />
    </div>
  );
};

export default App;
