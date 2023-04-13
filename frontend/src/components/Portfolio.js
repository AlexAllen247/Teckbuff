import React from "react";
import { Card, Button } from "react-bootstrap";
import Image1 from "../images/hqdefault_17866.webp";
import Image2 from "../images/PuebloDelRio3.png";

const sectionStyle = {
  marginBottom: 20,
};

const headerStyle = {
  marginBottom: 40,
  textAlign: "center",
  textDecoration: "underline",
};

const ProjectCard = ({ title, thumbnail, description, link, github }) => {
  return (
    <Card
      style={{ width: "18rem", boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)" }}
    >
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button href={link} variant="primary" target="_blank">
          View Site
        </Button>{" "}
        <Button href={github} variant="secondary" target="_blank">
          View Code
        </Button>
      </Card.Body>
    </Card>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Pueblo Del Rio",
      thumbnail: Image2,
      description:
        "This is a website built with the MERN stack for an urbanization in Marbella. It is a user authentcated website that allows the residents to keep up to date with all that is going on in the urbanization.",
      link: "https://pueblodelrio.es/",
      github: "https://github.com/example",
    },
    {
      title: "Cs50W Capstone",
      thumbnail: Image1,
      description:
        "This is a Personal Training Application. The site is not live, however you can view a youtube video of the site and see the code on github below. ",
      link: "https://www.youtube.com/watch?v=52olNvZ_xWk&t=3s",
      github: "https://github.com/AlexAllen247/Cs50W-Capstone",
    },
    {
      title: "Cs50x Final Project",
      thumbnail: "https://via.placeholder.com/150",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "https://example.com",
      github: "https://github.com/example",
    },
  ];

  return (
    <section className="portfolio" style={sectionStyle}>
      <div className="container">
        <h2 style={headerStyle}>Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
