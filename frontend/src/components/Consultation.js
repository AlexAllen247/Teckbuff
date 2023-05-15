import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "../images/ConsultationPhoto.png";

const Consultation = () => {
  const styles = {
    cardStyle: {
      boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
      textAlign: "center",
    },
    header: {
      fontSize: "2rem",
      marginBottom: "1rem",
      paddingBottom: "0.5rem",
    },
    paragraph: {
      marginBottom: "1rem",
      fontSize: 20,
    },
    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
      margin: 10,
      padding: 10,
    },
    linkToContact: {
      color: "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <section className="consultation">
      <Container>
        <Card className="my-3" style={styles.cardStyle}>
          <Card.Header>
            <h2 style={styles.header}>Consultation Services</h2>
          </Card.Header>
          <Card.Body>
          <div>
              <img
                src={Image}
                title="Consultation Image"
                aria-label="Consultation Image"
                style={styles.iframe}
              ></img>
            </div>
            <p style={styles.paragraph}>
              Whether you're looking to improve the design, functionality, or
              overall website performance, I offer one-on-one guidance to
              enhance your web presence. My sophisticated diagnostics can
              quickly identify possible issues if you sign up for a website
              'Health Check'. Together we can ensure your digital platform
              reflects your vision and engages your audience effectively.
            </p>
            <p style={styles.paragraph}>
              {" "}
              <Link
                to="/contactforms"
                aria-label="Link to Contact page"
                style={styles.linkToContact}
              >
                Contact me
              </Link>{" "}
              to learn more, arrange a consultation or sign up for a website 'Health Check'!
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Consultation;
