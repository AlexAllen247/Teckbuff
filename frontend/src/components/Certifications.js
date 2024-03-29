import React from "react";
import { Card, Container } from "react-bootstrap";

const Certifications = () => {
  const certificationsByIssuer = [
    {
      issuer: "Freecodecamp",
      certifications: [
        {
          name: "Responsive Web Design",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/responsive-web-design",
        },
        {
          name: "JavaScript Algorithms and Data Structures",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/javascript-algorithms-and-data-structures",
        },
        {
          name: "Front End Development Libraries",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/front-end-development-libraries",
        },
        {
          name: "Data Visualization",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/data-visualization",
        },
        {
          name: "Relational Database",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/relational-database-v8",
        },
        {
          name: "Back End Development and APIs",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/back-end-development-and-apis",
        },
        {
          name: "Quality Assurance",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/quality-assurance-v7",
        },
        {
          name: "Scientific Computing with Python",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/scientific-computing-with-python-v7",
        },
        {
          name: "Data Analysis with Python",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/data-analysis-with-python-v7",
        },
        {
          name: "Information Security",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/information-security-v7",
        },
        {
          name: "Machine Learning with Python",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/machine-learning-with-python-v7",
        },
        {
          name: "Legacy Full Stack",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/full-stack",
        },
        {
          name: "Legacy Information Security and Quality Assurance",
          url: "https://www.freecodecamp.org/certification/AlexAllen247/information-security-and-quality-assurance",
        },
      ],
    },
    {
      issuer: "HarvardX",
      certifications: [
        {
          name: "Cs50x Introduction to Computer Science",
          url: "https://courses.edx.org/certificates/619e43f8e6df4978b8f52423b9f144a0",
        },
        {
          name: "Cs50P Introduction to Programming with Python",
          url: "https://courses.edx.org/certificates/e8ea109e268648baa7fa99fa1c4fd7e7",
        },
        {
          name: "Cs50W Web Programming with Python and JavaScript",
          url: "https://courses.edx.org/certificates/0ebcda0353794a08bb8f49c1a192be34",
        },
        {
          name: "Computer Science for Python Programming",
          url: "https://credentials.edx.org/credentials/eb84f62efb374619945ffe2fceab7e5e",
        },
        {
          name: "Computer Science for Web Programming",
          url: "https://credentials.edx.org/credentials/900878f45abd4e97812b692cc5de066f/",
        },
      ],
    },
    {
      issuer: "Full Stack Open",
      certifications: [
        {
          name: "Full Stack Open",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/97a5fd22a95471e08c2833a2fa3c62de",
        },
        {
          name: "GraphQL",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/43e314e8e88157295071c2882d2c3023",
        },
        {
          name: "TypeScript",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/e8a9b525e19dccfc12ab7d6dd72015f7",
        },
        {
          name: "React Native",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-react-native-2020/en/52bdef6e9e622e635253170a579021e8",
        },
        {
          name: "CI/CD",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-cicd/en/e12fc99e45e0529480a8d2e4fdda93a5",
        },
        {
          name: "Containers",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-containers/en/6a593987ea59dc4dee04921c7aa3acfb",
        },
        {
          name: "Relational Databases",
          url: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-psql/en/65f9cceed7dde2f5ed4d43298636468e",
        },
      ],
    },
  ];

  const styles = {
    cardStyle: {
      boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
      textAlign: "center",
    },
    containerStyle: { marginBottom: 30 },
    ulStyle: { listStyleType: "none", padding: 0 },
  };

  return (
    <section className="certifications">
      <Container style={styles.containerStyle}>
        <div className="tech-certifications">
          {certificationsByIssuer.map((issuer) => (
            <Card key={issuer.issuer} className="my-3" style={styles.cardStyle}>
              <Card.Header>
                <h3>{issuer.issuer}</h3>
              </Card.Header>
              <Card.Body>
                <ul style={styles.ulStyle}>
                  {issuer.certifications.map((certification) => (
                    <li key={certification.url}>
                      <a
                        href={certification.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${certification.name} certification`}
                      >
                        {certification.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
