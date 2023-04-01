import React from "react";
import ProfilePicture from "../images/ProfilePicture.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";

const Profile = () => {
  const pStyle = {
    fontSize: 20,
  };
  const menuColClasses = "mb-5 mb-lg-0";

  const containerStyle = {
    marginBottom: 10,
  };

  const sectionStyle = {
    padding: 30,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <section className="profile" style={sectionStyle}>
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <Container style={containerStyle}>
          <Row className="align-items-center">
            <Col lg={6} className={menuColClasses}>
              <h2>Profile</h2>
              <h3>Alex Allen</h3>
              <p style={pStyle}>
                I am a Full Stack Developer and Master Trainer.
              </p>
            </Col>

            <Col lg={6} className={menuColClasses}>
              <Card style={{ borderRadius: 50 }}>
                <Card.Body className="py-5 px-md-5">
                  <img
                    className="d-block w-100"
                    src={ProfilePicture}
                    alt="profile"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Profile;
