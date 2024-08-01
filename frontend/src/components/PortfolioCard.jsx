import React, { useState, useEffect, useRef } from "react";
import { Card, Ratio, Button, Container } from "react-bootstrap";

const PortfolioItemCard = ({ portfolioItem }) => {
  const [isInView, setIsInView] = useState(false);
  const iframeRef = useRef(null);

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
    iframe: {
      width: "100%",
      height: "50vh",
      border: "none",
      marginBottom: 20,
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container>
      <Card className="my-3" style={styles.cardStyle}>
        <Card.Header>
          <h2 style={styles.header}>{portfolioItem.title}</h2>
        </Card.Header>
        <Card.Body>
          <Ratio aspectRatio="1x1">
            <iframe
              ref={iframeRef}
              title={portfolioItem.title}
              src={isInView ? portfolioItem.iframeUrl : ""}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              allowFullScreen
              loading="lazy"
              style={styles.iframe}
            />
          </Ratio>
          <p style={styles.paragraph}>{portfolioItem.description}</p>
          <div>
            {portfolioItem.githubUrl && (
              <Button
                variant="outline-secondary"
                href={portfolioItem.githubUrl}
                target="_blank"
                className="mr-2"
              >
                GitHub
              </Button>
            )}
            <Button
              variant="primary"
              href={portfolioItem.liveSiteUrl}
              target="_blank"
            >
              Visit the Live Site
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PortfolioItemCard;
