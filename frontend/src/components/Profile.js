import React, { useState } from "react";
import ProfilePicture from "../images/ProfilePicture.JPG";
import { Container, Button, Card } from "react-bootstrap";
import About from "./About";

const Profile = () => {
  const [isAboutVisible, setAboutVisible] = useState(false);

  const handleAboutToggle = () => {
    setAboutVisible((prevState) => !prevState);
  };

  const styles = {
    cardStyle: {
      boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
      textAlign: "center",
    },
    button: {
      margin: 10,
    },
    header: {
      fontSize: "2rem",
      marginBottom: "1rem",
      paddingBottom: "0.5rem",
    },
    image: {
      width: "40%",
      height: "40%",
      objectFit: "contain",
      border: "2px solid #0047ab",
      marginBottom: 20,
    },
    paragraph: {
      marginBottom: "1rem",
      fontSize: 20,
    },
  };

  return (
    <section className="profile">
      <Container>
        <Card className="my-3" style={styles.cardStyle}>
          <Card.Header>
            <h2 style={styles.header}>Alex Allen</h2>
          </Card.Header>
          <Card.Body>
            <div>
              <img
                src={ProfilePicture}
                alt="profile"
                aria-label="Profile picture"
                style={styles.image}
              />
            </div>
            <div>
              <p style={styles.paragraph}>
                Hi, I'm Alex, full stack developer, multi award winning Master
                Trainer and TeckBuff.
              </p>
              <p style={styles.paragraph}>
                Why TeckBuff? That's what my friends and family call me.
              </p>
              <p style={styles.paragraph}>
                I am a motivated professional with a unique combination of
                expertise in web development and the health and fitness
                industry.
              </p>
              <p style={styles.paragraph}>
                I am driven by commitment to create innovative and user-friendly
                web applications tailored to the needs of diverse clients.
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
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Profile;
