import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Urbanization = () => {
  const styles = {
    urbanizationServices: {
      margin: "1rem",
      padding: "1rem",
      boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
      fontSize: "1.2rem",
      backgroundColor: "#ffffff",
      borderRadius: "5px",
      marginBottom: "1rem",
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
    iframe: {
      width: "100%",
      height: "350px",
      border: "none",
    },
    linkToContact: {
      color: "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <section
      className="urbanization-services"
      style={styles.urbanizationServices}
    >
      <Container>
        <h2 style={styles.header}>Web Applications for Urbanizations</h2>
        <p style={styles.paragraph}>
          Below is a beautifully designed website for the Urbanization of Pueblo
          Del Rio located in Marbella. Check the website out{" "}
          <a
            href="https://pueblodelrio.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>
        </p>
        <div className="website-container">
          <iframe
            src="https://pueblodelrio.es/"
            title="Website for Pueblo Del Rio"
            aria-label="Website for Pueblo Del Rio"
            style={styles.iframe}
          ></iframe>
        </div>
        <p style={styles.paragraph}>
          Like what you see?{" "}
          <Link
            to="/contactforms"
            aria-label="Link to Contact page"
            style={styles.linkToContact}
          >
            Contact me
          </Link>{" "}
          to learn more about our web development services for urbanizations.
        </p>
      </Container>
    </section>
  );
};

export default Urbanization;
