import React from "react";
import { Card, Button, Image, Col } from "react-bootstrap";

const ContentCard = ({ post }) => {
  return (
    <Card>
      <Col md={4}>
        <Image src={post.image} alt={post.title} thumbnail fluid />
      </Col>
      <Col md={8}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Button variant="primary" href={post.url} target="_blank" rel="noopener noreferrer">
            View Source
          </Button>
        </Card.Body>
      </Col>
    </Card>
  );
};

export default ContentCard;
