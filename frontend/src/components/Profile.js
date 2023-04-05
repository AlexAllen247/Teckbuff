import React from "react";
import ProfilePicture from "../images/ProfilePicture.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  const pStyle = {
    fontSize: 20,
    marginTop: 10,
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
  const languageDivStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gridGap: "10px",
  };

  const headerStyle = {
    marginTop: 10,
    textDecoration: "underline"
  }

  return (
    <section className="profile" style={sectionStyle}>
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <Container style={containerStyle}>
          <Row className="align-items-center">
            <Col lg={6} className={menuColClasses}>
              <h3 style={headerStyle}>Profile</h3>
              <h2 style={headerStyle}>Alex Allen</h2>
              <h3 style={headerStyle}>Full Stack Developer</h3>
              <p style={pStyle}>
                 Proficient in these technologies:
              </p>
              <div style={languageDivStyle}>
                <img
                  src="https://user-images.githubusercontent.com/66707636/177418858-237ac6e5-9511-4bd4-9355-df59d18f2f81.svg"
                  alt="javascript"
                  width="45px"
                />
                <img
                  src="https://user-images.githubusercontent.com/66707636/177418998-d543d406-11ef-4c03-8c18-317ff7f467b7.svg"
                  alt="python"
                  width="45px"
                />
                <img
                  src="https://user-images.githubusercontent.com/66707636/177419055-26ba5165-81fe-44c4-9362-34358d0bc7c2.svg"
                  alt="html"
                  width="45px"
                />
                <img
                  src="https://user-images.githubusercontent.com/66707636/177419068-409bc96f-3591-4dc9-805b-fb6ad567f982.svg"
                  alt="css"
                  width="45px"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="nodejs"
                  width="45px"
                />
                <img
                  src="https://user-images.githubusercontent.com/66707636/177420913-45f3bb5c-5977-4aae-860c-37b4e98d5d5f.svg"
                  alt="django"
                  width="35px"
                />
                <img
                  src="https://user-images.githubusercontent.com/66707636/177421957-562cd30d-4b8b-4ca0-b672-5062abdb10f4.svg"
                  alt="sql"
                  width="35px"
                />
                <img
                  src="https://user-images.githubusercontent.com/66707636/177422016-2758da9c-9482-421d-a438-7fc96f4c550a.svg"
                  alt="mongodb"
                  width="45px"
                />
                <img
                  src="https://user-images.githubusercontent.com/66707636/177422094-23c9e1f6-5953-45ad-9df2-a171d2fcfb42.svg"
                  alt="react"
                  width="45px"
                />
                <img
                  src="https://user-images.githubusercontent.com/66707636/177422209-8223d64b-b119-4153-99b1-31bd67365ebe.svg"
                  alt="bootstrap"
                  width="45px"
                />
                <img
                  src="https://user-images.githubusercontent.com/66707636/177422269-5848c9f4-60eb-4b7a-b040-345c9fbb210f.svg"
                  alt="vscode"
                  width="45px"
                />
                <img
                  src="https://user-images.githubusercontent.com/66707636/177422401-44f7f8aa-13dc-4966-b9c5-87673f0fafd3.svg"
                  alt="git"
                  width="45px"
                />
              </div>
              <h3 style={headerStyle}>Master Trainer</h3>
              <p style={pStyle}>
                Specialising in body composition, muscular
                development, weight management and biomechanics. For more
                information find my certifications{" "}
                <Link to="/certifications">here.</Link>
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
