import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PTapp = () => {
  const styles = {
    personalTrainingApplication: {
      margin: '1rem',
      padding: '1rem',
      boxShadow: '10px 10px 10px rgba(0, 71, 171, 0.15)',
      fontSize: '1.2rem',
      backgroundColor: '#ffffff',
      borderRadius: '5px',
    },
    header: {
      fontSize: '2rem',
      marginBottom: '1rem',
      borderBottom: '2px solid #333333',
      paddingBottom: '0.5rem',
    },
    paragraph: {
      marginBottom: '1rem',
    },
    iframe: {
      width: '100%',
      height: '350px',
      border: 'none',
    },
    linkToContact: {
      color: '#007bff',
      textDecoration: 'none',
    },
  };

  return (
    <section className="personal-training-application" style={styles.personalTrainingApplication}>
      <Container>
        <h2 style={styles.header}>Personal Training Applications for Other Personal Trainers</h2>
        <p style={styles.paragraph}>
          Watch this video to see how I can build Personal Training Applications
          for other Personal Trainers.
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
        <p id="personal-training-applications-description">
          Like what you see? Get in contact{" "}
          <Link to="/contactforms" aria-label="Link to Contact page" style={styles.linkToContact}>
            here.
          </Link>
        </p>
      </Container>
    </section>
  );
};

export default PTapp;
