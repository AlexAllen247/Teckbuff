import React from "react";
import { Card } from "react-bootstrap";
import ServiceContainer from "./ServiceContainer";

const Ebook = () => {
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
  };

  return (
    <section className="e-book">
      <ServiceContainer>
        <Card className="my-3" style={styles.cardStyle}>
          <Card.Header>
            <h4 style={styles.header}>Coming soon E-book</h4>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </ServiceContainer>
    </section>
  );
};

export default Ebook;
