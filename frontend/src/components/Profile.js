import React from "react";
import ProfilePicture from "../images/ProfilePicture.JPG";
import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import About from "./About";

const Profile = () => {
  const [isAboutVisible, setAboutVisible] = useState(false);

  const handleAboutToggle = () => {
    setAboutVisible((prevState) => !prevState);
  };

  const styles = {
    container: {
      marginBottom: 10,
    },
    section: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "1rem",
      padding: "1rem",
      boxShadow: "10px 10px 10px rgba(0, 71, 171, 0.15)",
      fontSize: "1.2rem",
      backgroundColor: "#ffffff",
      borderRadius: "5px",
    },
    button: {
      margin: 10,
    },
    div: {
      maxWidth: 600,
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    imageDiv: {
      boxShadow: "10px 10px 10px rgba(0, 71, 171, 0.15)",
      height: "500px",
      maxWidth: "100%",
      width: "auto",
    },
    image: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
    },
    paragraph: {
      marginBottom: "1rem",
    },
  };

  return (
    <section className="profile" style={styles.section}>
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <Container style={styles.container}>
          <div style={styles.imageDiv}>
            <img
              src={ProfilePicture}
              alt="profile"
              aria-label="Profile picture"
              style={styles.image}
            />
          </div>
        </Container>
      </div>
      <div style={styles.div}>
        <p style={styles.paragraph}>
          Hi, I'm Alex, full stack developer, multi award winning Master Trainer
          and Teckbuff.
        </p>
        <p style={styles.paragraph}>
          Why Teckbuff? That's what my friends and family call me.
        </p>
        <p style={styles.paragraph}>
          I am a motivated professional with a unique combination of expertise
          in web development and the health and fitness industry.
        </p>
        <p style={styles.paragraph}>
          I am driven by commitment to create innovative and user-friendly web
          applications tailored to the needs of diverse clients.
        </p>
        <p style={styles.paragraph}>
          I have over a decade of experience in personal training and health
          management, and am passionate about helping individuals achieve their
          fitness goals and improve their overall well-being.
        </p>
        <Button
          variant="primary"
          onClick={handleAboutToggle}
          style={styles.button}
          aria-label="About section for Alex Allen"
          className="btn-custom"
        >
          More
        </Button>
        {isAboutVisible ? <About /> : null}
      </div>
    </section>
  );
};

export default Profile;
