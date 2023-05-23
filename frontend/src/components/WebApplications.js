import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const WebApplications = () => {
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
      height: "350px",
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
    <section className="urbanization-services">
      <Container>
        <Card className="my-3" style={styles.cardStyle}>
          <Card.Header>
            <h2 style={styles.header}>Custom Built Web Applications</h2>
          </Card.Header>
          <Card.Body>
            <div className="website-container">
              <iframe
                src="https://pueblodelrio.es/"
                title="Website for Pueblo Del Rio"
                aria-label="Website for Pueblo Del Rio"
                style={styles.iframe}
              ></iframe>
            </div>
            <p style={styles.paragraph}>
              Specializing in creating beautifully designed websites and
              innovative web applications tailored specifically for your
              Business needs.
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
              to learn more about my web development services.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default WebApplications;
