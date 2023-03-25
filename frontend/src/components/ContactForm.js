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
    backgroundColor: "#f6f0d9",
    color: "#035cd4",
    fontFamily: "Niconne",
    fontStyle: "italic",
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

  return (
    <div style={divStyle}>
      <h2 style={headerStyle}>Contact Form/Formulario de contacto</h2>

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
    </div>
  );
};

export default ContactForm;
