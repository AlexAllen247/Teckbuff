import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "../images/WebApplicationPic.png";

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
    image: {
      width: "80%",
      height: "80%",
      border: "none",
      marginBottom: 20,
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
            <div>
              <img
                src={Image}
                title="Web Applications"
                aria-label="Web Applications"
                alt="Web Applications"
                style={styles.image}
              ></img>
            </div>
            <p style={styles.paragraph}>
              Websites and innovative web applications tailored specifically for
              your business needs. Whether you're looking to improve the design,
              functionality, or overall website performance, TeckBuff offers
              one-on-one guidance to enhance your web presence.
            </p>
            <p style={styles.paragraph}>
              {" "}
              <Link
                to="/contactforms"
                aria-label="Link to Contact page"
                style={styles.linkToContact}
              >
                Contact TeckBuff
              </Link>{" "}
              to learn more about our web development services.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default WebApplications;
