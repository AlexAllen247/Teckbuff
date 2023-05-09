import React from "react";
import { Container, Card } from "react-bootstrap";

const TechContent = () => {
  const articles = [
    {
      embedUrl:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7056133539909570561",
    },
    {
      embedUrl:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7057592243720708096",
    },
    {
      embedUrl:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7059457542267027456",
    },
  ];

  const styles = {
    techContent: {
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
    iframe: {
      width: '100%',
      height: '350px',
      border: 'none',
    },
  };

  return (
    <section className="tech-content" style={styles.techContent}>
      <Container role="region" aria-labelledby="tech-content-heading">
        <h2 id="tech-content-heading" style={styles.header}>Tech Content</h2>
        {articles.map((article, index) => (
          <Card key={index} className="article-card">
            <Card.Body>
              <iframe
                src={article.embedUrl}
                height="1310"
                width="504"
                allowFullScreen=""
                title={`Embedded post ${index + 1}`}
                style={styles.iframe}
              ></iframe>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </section>
  );
};

export default TechContent;
