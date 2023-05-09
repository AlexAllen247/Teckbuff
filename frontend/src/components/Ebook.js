import React from "react";
import { Container } from "react-bootstrap";

const Ebook = () => {
  const styles = {
    eBook: {
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
  };

  return (
    <section className="e-book" style={styles.eBook}>
      <Container>
        <h4 style={styles.header}>Coming soon E-book</h4>
      </Container>
    </section>
  );
};

export default Ebook;
