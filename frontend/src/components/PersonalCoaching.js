import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PersonalCoaching = () => {
  const styles = {
    personalTraining: {
      margin: "1rem",
      padding: "1rem",
      boxShadow: "10px 10px 10px rgba(0, 71, 171, 0.15)",
      fontSize: "1.2rem",
      backgroundColor: "#ffffff",
      borderRadius: "5px",
    },
    header: {
      fontSize: "2rem",
      marginBottom: "1rem",
      borderBottom: "2px solid #333333",
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
    <section className="personal-training" style={styles.personalTraining}>
      <Container role="region" aria-labelledby="personal-training-heading">
        <h2 style={styles.header}>Online Personal Training Services</h2>
        <p style={styles.paragraph}>
          Interested in achieving long lasting physical changes get in contact.
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
      </Container>
    </section>
  );
};

export default PersonalCoaching;
