import React from "react";

const About = () => {
  const styles = {
    h2: {
      marginBottom: "5px",
      marginTop: "20px",
      textDecoration: "underline",
    },
    ul: {
      marginBottom: "10px",
      listStyleType: "none",
      padding: 0,
    },
    p: {
      marginBottom: "10px",
    },
  };
  return (
    <section className="about">
      <p style={styles.p}>
        Hi, I'm Alex, full stack developer, multi award winning Master Trainer
        and Teckbuff.
      </p>
      <p style={styles.p}>
        Why Teckbuff? That's what my friends and family call me.
      </p>
      <p style={styles.p}>
        I am a motivated professional with a unique combination of expertise in
        web development and the health and fitness industry.
      </p>
      <p style={styles.p}>
        I am driven by commitment to create innovative and user-friendly web
        applications tailored to the needs of diverse clients.
      </p>
      <p style={styles.p}>
        I have over a decade of experience in personal training and health
        management, and am passionate about helping individuals achieve their
        fitness goals and improve their overall well-being.
      </p>
      <h3 style={styles.h2}>Key Competencies</h3>
      <ul style={styles.ul}>
        <li>
          <strong>Health and Fitness Expertise:</strong> Over a decade of
          experience in personal training, health management, and wellness
          program development.
        </li>
        <li>
          <strong>Full Stack Web Development:</strong> Proficient in front-end
          and back-end technologies, with a strong foundation in web design,
          coding, and testing.
        </li>
        <li>
          <strong>Problem Solving and Adaptability:</strong> Adept at tackling
          complex challenges and adapting to new situations with creativity and
          resourcefulness.
        </li>
      </ul>
    </section>
  );
};

export default About;
