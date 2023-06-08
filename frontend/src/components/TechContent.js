import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import techContentService from "../services/techContents";

const TechContent = () => {
  const [expanded, setExpanded] = useState({});
  const [articles, setArticles] = useState([]);

  const toggleArticle = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const fetchArticles = async () => {
    const fetchedArticles = await techContentService.getAll();
    setArticles(fetchedArticles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

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
    iframe: {
      width: "100%",
      height: "350px",
      border: "none",
    },
    thumbnail: {
      width: "100px",
      height: "auto",
      display: "block",
      margin: "0 auto",
      marginBottom: "1rem",
    },
    paragraph: {
      marginBottom: "1rem",
      fontSize: 20,
    },
  };

  return (
    <section className="tech-content">
      <Container role="region" aria-labelledby="tech-content-heading">
        <Card className="my-3" style={styles.cardStyle}>
          <Card.Header>
            <h2 id="tech-content-heading" style={styles.header}>
              Articles
            </h2>
          </Card.Header>
          <Card.Body>
            {[...articles].reverse().map((article, index) => (
              <Card key={index} className="article-card">
                <Card.Body>
                  <img
                    src={article.thumbnailImageUrl}
                    alt={`Thumbnail ${index + 1}`}
                    style={styles.thumbnail}
                  />
                  <p style={styles.paragraph}>{article.description}</p>
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
                    className="btn-custom btn-block btn-lg"
                  >
                    {expanded[index] ? "Hide" : "Show"}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default TechContent;
