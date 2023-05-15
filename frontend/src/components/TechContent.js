import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

const TechContent = () => {
  const [expanded, setExpanded] = useState({});

  const toggleArticle = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const articles = [
    {
      embedUrl:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7056133539909570561",
      description:
        "Ampleforth: the best kept secret in Blockchain? Read on to find out more.",
      thumbnailImageUrl:
        "https://media.licdn.com/dms/image/D5622AQH7w4g-wrvrgQ/feedshare-shrink_1280/0/1682313331220?e=1686787200&v=beta&t=kZmEsy2mthEXomcoLusrp-N8do8pKUNwchLROXPaxCo",
    },
    {
      embedUrl:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7057592243720708096",
      description:
        "Delving Deeper in Ampleforth Part 2, read on to find out more.",
      thumbnailImageUrl:
        "https://media.licdn.com/dms/image/D4E22AQFif-zreG5AZg/feedshare-shrink_800/0/1682661113342?e=1686787200&v=beta&t=Omgb4mrlEwZ-RGzuIVCwSBohPX7duk3GNE-PfQnBiSc",
    },
    {
      embedUrl:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7059457542267027456",
      description:
        "Introducing SPOT, Ampleforth's Solution to Stability in Cryptocurrency - Part 3. Read on to find out more.",
      thumbnailImageUrl:
        "https://media.licdn.com/dms/image/D5622AQEZKplhhfmAWQ/feedshare-shrink_1280/0/1683105835805?e=1686787200&v=beta&t=XsjLbzCN_67hNRVQFDTtmyeC5P0zQ3I-SaMtfTCeML0",
    },
    {
      embedUrl:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7061628496065781760",
      description:
        "Part 4: The AMPL/SPOT ecosystem: Are ‘Flatcoins’ the future? Read on to find out more.",
      thumbnailImageUrl:
        "https://media.licdn.com/dms/image/D4E22AQH4_l7PvgjM_w/feedshare-shrink_800/0/1683623431726?e=1686787200&v=beta&t=c39qmzvHn5Irt6vp8KYTq9bfELCEsWrxR5zCTQRC_T8",
    },
    {
      embedUrl:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7055062573091561472",
      description: "Tech Meet-Up in The Pool Marbella, 20/04/23",
      thumbnailImageUrl:
        "https://media.licdn.com/dms/image/D4E22AQFRS65KSJEcTg/feedshare-shrink_800/0/1682057993618?e=1686787200&v=beta&t=K36EEXaAcyeyPHgE7B-iAgw2LpgHKxkoNpwtjBVuR_k",
    },
    {
      embedUrl:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7062668555741212672",
      description: "British Chamber of Commerce at The Pool Marbella, 11/05.23",
      thumbnailImageUrl:
        "https://media.licdn.com/dms/image/D4E22AQG0-xIauBeEqA/feedshare-shrink_800/0/1683871401256?e=1686787200&v=beta&t=Z-_MccqOR9uNNs1rkPthw1L7OQY1v1DutGhuFRKbY2w",
    },
  ];

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
  };

  return (
    <section className="tech-content">
      <Container role="region" aria-labelledby="tech-content-heading">
        <Card className="my-3" style={styles.cardStyle}>
          <Card.Header>
            <h2 id="tech-content-heading" style={styles.header}>
              Tech News
            </h2>
          </Card.Header>
          <Card.Body>
            {articles.map((article, index) => (
              <Card key={index} className="article-card">
                <Card.Body>
                  <img
                    src={article.thumbnailImageUrl}
                    alt={`Thumbnail ${index + 1}`}
                    style={styles.thumbnail}
                  />
                  <p>{article.description}</p>
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
