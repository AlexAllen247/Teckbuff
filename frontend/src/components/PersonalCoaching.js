import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceContainer from "./ServiceContainer";

const PersonalCoaching = () => {
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
    },
    linkToContact: {
      color: "#007bff",
      textDecoration: "none",
    },
  };
  return (
    <section className="personal-training">
      <ServiceContainer
        role="region"
        aria-labelledby="personal-training-heading"
      >
        <Card className="my-3" style={styles.cardStyle}>
          <Card.Header>
            <h2 style={styles.header}>Online Personal Training Services</h2>
          </Card.Header>
          <Card.Body>
            <p style={styles.paragraph}>
              Interested in achieving long lasting physical changes get in
              contact.
            </p>
            <p style={styles.paragraph}>
              <Link
                to="/contactforms"
                aria-label="Link to Contact page"
                style={styles.linkToContact}
              >
                Contact me
              </Link>{" "}
              to learn more about how I can help you.
            </p>
          </Card.Body>
        </Card>
      </ServiceContainer>
    </section>
  );
};

export default PersonalCoaching;
