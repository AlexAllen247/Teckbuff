import React from "react";
import Profile from "./Profile";
import Services from "./Services";
import { Container, Row, Col, Card } from "react-bootstrap";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <Container>
        <Row>
          <Col md={6}>
            <h2>TeckBuff Services</h2>
            <Card>
              <Card.Body>
                <Services />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
          <h2>TeckBuff Profile</h2>
            <Card>
              <Card.Body>
                <Profile />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingPage;
