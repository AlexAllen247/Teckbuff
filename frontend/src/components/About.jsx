import React from "react";

const About = () => {
  const styles = {
    h2: {
      marginBottom: 10,
      marginTop: 20,
    },
    ul: {
      marginBottom: 15,
      listStyleType: "none",
      padding: 10,
      fontSize: 20,
    },
    li: {
      marginBottom: 10,
    },
  };
  return (
    <section className="about">
      <h3 style={styles.h2}>Key Competencies</h3>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <strong>Full Stack Web Development:</strong> Proficient in front-end
          and back-end technologies, with a strong foundation in web design,
          coding, and testing.
        </li>
        <li style={styles.li}>
          <strong>Problem Solving and Adaptability:</strong> Adept at tackling
          complex challenges and adapting to new situations with creativity and
          resourcefulness.
        </li>
      </ul>
    </section>
  );
};

export default About;
