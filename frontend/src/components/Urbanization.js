import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Urbanization = () => {
  return (
    <section className="urbanization-services">
      <Container>
        <h2>Web Applications for Urbanizations</h2>
        <p>
          Below is a beautifully designed website for the Urbanization of Pueblo
          Del Rio located in Marbella. Check the website out{" "}
          <a
            href="https://pueblodelrio.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here.
          </a>
        </p>
        <div className="website-container">
          <iframe
            src="https://pueblodelrio.es/"
            title="Website for Pueblo Del Rio"
            aria-label="Website for Pueblo Del Rio"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
        <p>
          Like what you see?{" "}
          <Link to="/contactforms" aria-label="Link to Contact page">
            Contact us
          </Link>{" "}
          to learn more about our web development services for urbanizations.
        </p>
      </Container>
    </section>
  );
};

export default Urbanization;
