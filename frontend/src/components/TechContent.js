import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ServiceContainer from "./ServiceContainer";

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

  const [expanded, setExpanded] = useState({});

  const toggleArticle = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const styles = {
    techContent: {
      margin: "1rem",
      padding: "1rem",
      fontSize: "1.2rem",
      backgroundColor: "#ffffff",
      borderRadius: "5px",
      marginBottom: "1rem",
    },
    cardStyle: {
      boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
      textAlign: "center",
    },
    header: {
      fontSize: "2rem",
      marginBottom: "1rem",
      paddingBottom: "0.5rem",
    },
    iframe: {
      width: "100%",
      height: "350px",
      border: "none",
    },
  };

  return (
    <section className="tech-content" style={styles.techContent}>
      <ServiceContainer role="region" aria-labelledby="tech-content-heading">
        <Card className="my-3" style={styles.cardStyle}>
          <Card.Header>
            <h2 id="tech-content-heading" style={styles.header}>
              Tech Content
            </h2>
          </Card.Header>
          <Card.Body>
            {articles.map((article, index) => (
              <Card key={index} className="article-card">
                <Card.Body>
                  {expanded[index] && (
                    <iframe
                      src={article.embedUrl}
                      height="1310"
                      width="504"
                      allowFullScreen=""
                      title={`Embedded post ${index + 1}`}
                      style={styles.iframe}
                    ></iframe>
                  )}
                  <Button
                    onClick={() => toggleArticle(index)}
                    aria-expanded={expanded[index]}
                  >
                    {expanded[index] ? "Hide" : "Show"}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Card.Body>
        </Card>
      </ServiceContainer>
    </section>
  );
};

export default TechContent;
