import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PTapp = () => {
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
    },
    linkToContact: {
      color: "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <section className="personal-training-application">
      <Container>
        <Card className="my-3" style={styles.cardStyle}>
          <Card.Header>
            <h3 style={styles.header}>
              Web Applications for Health Professionals and Fitness Experts
            </h3>
          </Card.Header>
          <Card.Body>
            <p style={styles.paragraph}>
              Watch this video to see how I can build Web Applications for
              Health Professionals.
            </p>
            <iframe
              src="https://www.youtube.com/embed/52olNvZ_xWk"
              title="Personal Training Applications for Other Personal Trainers"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              aria-label="Personal Training Applications for Other Personal Trainers"
              aria-describedby="personal-training-applications-description"
              style={styles.iframe}
            ></iframe>
            <p
              id="personal-training-applications-description"
              style={styles.paragraph}
            >
              Like what you see? Get in contact{" "}
              <Link
                to="/contactforms"
                aria-label="Link to Contact page"
                style={styles.linkToContact}
              >
                here.
              </Link>
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default PTapp;
