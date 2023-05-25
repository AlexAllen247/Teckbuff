import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "../images/ConsultationTeckbuff.png";

const Consultation = () => {
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
    <section className="consultation">
      <Container>
        <Card className="my-3" style={styles.cardStyle}>
          <Card.Header>
            <h2 style={styles.header}>Consultation and Writing Services</h2>
          </Card.Header>
          <Card.Body>
            <div>
              <img
                src={Image}
                title="Consultation Image"
                aria-label="Consultation Image"
                style={styles.image}
                loading="lazy"
              ></img>
            </div>
            <h4 style={styles.header}>Website update</h4>
            <p style={styles.paragraph}>
              If you are considering updating your website TeckBuff can offer
              assistance to ensure your digital platform reflects your vision
              and engages your audience effectively.
            </p>
            <h4 style={styles.header}>Website performance</h4>
            <p style={styles.paragraph}>
              Concerned about the performance of your website or web
              applications? Sign up for a TeckBuff Web Check. Our sophisticated
              diagnostics can quickly identify potentially troublesome issues
              compromising performance and security.
            </p>
            <h4 style={styles.header}>Reports, seminars and articles</h4>
            <p style={styles.paragraph}>
              TeckBuff specializes in bridging the gap between business and IT.
              Whether it be written reports, seminar briefings or{" "}
              <Link
                to="/articles"
                style={styles.linkToContact}
                aria-label="Link to Articles and Tech Content page"
              >
                articles
              </Link>{" "}
              for publication, TeckBuff can provide insightful, well written
              briefs and presentations for a general business audience.
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
              to arrange a consultation or other services.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Consultation;
