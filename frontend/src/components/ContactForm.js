import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = ({ onCreate }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    onCreate({ email, message });
    setEmail("");
    setMessage("");
  };

  const divStyle = {
    textAlign: "center",
  };

  const formControlStyle = {
    width: "50%",
    display: "block",
    margin: "0 auto",
  };

  const headerStyle = {
    textDecoration: "underline",
    marginTop: 25,
    marginBottom: 35,
  };

  const formLabelStyle = {
    fontSize: 28,
    marginBottom: 35,
  };

  const buttonStyle = {
    padding: 15,
    marginTop: 35,
    marginBottom: 35,
  };

  const pStyle = {
    fontSize: 20,
    maxWidth: 500,
    margin: "auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  };

  return (
    <section style={divStyle} className="contact form">
      <h2 style={headerStyle}>Contact Form</h2>
      <p style={pStyle}>
        If you have any questions or inquiries, please don't hesitate to reach
        out using the contact form below. I'll get back to you as soon as
        possible.
      </p>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label style={formLabelStyle}>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            id="email"
            placeholder="Place your email here"
            style={formControlStyle}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label style={formLabelStyle}>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={message}
            onChange={({ target }) => setMessage(target.value)}
            id="message"
            placeholder="Place your message here"
            style={formControlStyle}
          />
        </Form.Group>
        <Button
          id="create-button"
          type="submit"
          variant="primary"
          style={buttonStyle}
        >
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default ContactForm;
