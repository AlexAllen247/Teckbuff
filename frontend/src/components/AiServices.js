import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "../images/AIServices.png";

const AiServices = () => {
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
    <section className="ai-services">
      <Container>
        <Card className="my-3" style={styles.cardStyle}>
          <Card.Header>
            <h2 style={styles.header}>AI Integrations</h2>
          </Card.Header>
          <Card.Body>
            <div>
              <img
                src={Image}
                title="AI Services"
                aria-label="AI Services"
                alt="AI Services"
                style={styles.image}
              ></img>
            </div>
            <h4 style={styles.header}>Integrate AI into your website</h4>
            <p style={styles.paragraph}>
              We specialize in integrating AI technologies into digital
              platforms and web applications. With our AI integration services,
              your applications will actively drive your success.
            </p>
            <h4 style={styles.header}>AI for Productivity</h4>
            <p style={styles.paragraph}>
              Leverage AI to supercharge your data analytics and information
              retrieval processes. Our tailored AI solutions will empower your
              digital platforms to harness data effectively, aligning them with
              your strategic goals. Through AI-powered analytics and intelligent
              retrieval, we'll transform your raw data into meaningful insights.
              Our AI integration services turn your platforms into powerhouses
              of productivity, reducing costs, driving growth and enhancing
              decision-making.
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
              to learn more about our AI Integration services.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default AiServices;
