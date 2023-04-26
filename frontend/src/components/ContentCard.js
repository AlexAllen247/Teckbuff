import React from "react";
import { Card, Button, Image, Col, Row } from "react-bootstrap";

const ContentCard = ({ post }) => {
  return (
    <Card>
      <Card.Body>
        <Row className="justify-content-center">
          <Col xs={2}>
            <Image src={post.image} alt={post.title} thumbnail fluid />
          </Col>
          <Col xs={2}>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.description}</Card.Text>
            <Button
              variant="primary"
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-custom"
            >
              View Source
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContentCard;
