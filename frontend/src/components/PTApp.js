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
      margin: 10,
      padding: 10,
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
            <iframe
              src="https://www.youtube.com/embed/52olNvZ_xWk"
              title="Personal Training Applications for Other Personal Trainers"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              aria-label="Personal Training Applications for Other Personal Trainers"
              aria-describedby="personal-training-applications-description"
              style={styles.iframe}
            ></iframe>
            <p style={styles.paragraph}>
              Are you a health and fitness professional in search of tailored
              web applications? Look no further! I specialize in developing
              customized solutions that cater specifically to your needs. Watch
              the video of the web application designed to streamline your
              operations, engage your clients, and transform the way you manage
              and grow your health and fitness business.
            </p>
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
