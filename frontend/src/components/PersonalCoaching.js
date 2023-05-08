import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PersonalCoaching = () => {
  return (
    <section className="personal-training">
      <Container role="region" aria-labelledby="personal-training-heading">
        <h2>Online Personal Training Services</h2>
        <p>
          Interested in achieving long lasting physical changes get in contact.
        </p>
        <p>
          <Link to="/contactforms" aria-label="Link to Contact page">
            Contact me
          </Link>{" "}
          to learn more about how I can help you.
        </p>
      </Container>
    </section>
  );
};

export default PersonalCoaching;
