import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PTapp = () => {
  return (
    <section className="personal-training-application">
      <Container>
        <h2>Personal Training Applications for Other Personal Trainers</h2>
        <p>
          Watch this video to see how I can build Personal Training Applications
          for other Personal Trainers.
        </p>
        <iframe
          src="https://www.youtube.com/embed/52olNvZ_xWk"
          title="Personal Training Applications for Other Personal Trainers"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          webkitallowfullscreen
          aria-label="Personal Training Applications for Other Personal Trainers"
          aria-describedby="personal-training-applications-description"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
        <p id="personal-training-applications-description">
          Like what you see? Get in contact{" "}
          <Link to="/contactforms" aria-label="Link to Contact page">
            here.
          </Link>
        </p>
      </Container>
    </section>
  );
};

export default PTapp;
