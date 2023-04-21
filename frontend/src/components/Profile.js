import React from "react";
import ProfilePicture from "../images/ProfilePicture.jpg";
import { Container, Card, Button } from "react-bootstrap";
import { useState } from "react";
import About from "./About";

const Profile = () => {
  const [isAboutVisible, setAboutVisible] = useState(false);

  const handleAboutToggle = () => {
    setAboutVisible((prevState) => !prevState);
  };
  const containerStyle = {
    marginBottom: 10,
  };

  const sectionStyle = {
    padding: 30,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const buttonStyle = {
    margin: 10,
  };
  const divStyle = {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <section className="profile" style={sectionStyle}>
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <Container style={containerStyle}>
          <Card
            style={{
              borderRadius: 50,
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)",
            }}
            className="animated-card"
          >
            <Card.Body className="py-5 px-md-5">
              <img
                className="d-block w-100"
                src={ProfilePicture}
                alt="profile"
                aria-label="Profile picture"
              />
            </Card.Body>
          </Card>
        </Container>
      </div>
      <div style={divStyle}>
        <Button
          variant="primary"
          onClick={handleAboutToggle}
          style={buttonStyle}
          aria-label="About section for Alex Allen"
          className="btn-custom"
        >
          About
        </Button>
        {isAboutVisible ? <About /> : null}
      </div>
    </section>
  );
};

export default Profile;
