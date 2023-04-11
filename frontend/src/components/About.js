import React from "react";

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    lineHeight: "1.6",
    padding: "10px",
  },
  h1: {
    marginBottom: "10px",
    textAlign: "center",
    textDecoration: "underline",
  },
  h2: {
    marginBottom: "5px",
    marginTop: "20px",
    textDecoration: "underline",
  },
  ul: {
    marginBottom: "10px",
  },
  p: {
    marginBottom: "10px",
  },
};

const About = () => {
  return (
    <section className="about">
      <div style={styles.container}>
        <h2 style={styles.h1}>About Me</h2>
        <p style={styles.p}>
          As a versatile and highly motivated professional, I have a unique
          combination of expertise in full stack web development and the health
          and fitness industry. With over a decade of experience in personal
          training and health management, I am passionate about helping
          individuals achieve their fitness goals and improve their overall
          well-being. My background includes a successful tenure as a Master
          Trainer with Virgin Active, over 10 years as a Personal Trainer, and
          serving as a Director at a Health and Wellness Startup called No
          Targets Just Routine.
        </p>
        <p style={styles.p}>
          Driven by my curiosity and commitment to continuous learning, I
          embarked on a new journey to acquire skills in full stack web
          development during the pandemic. Since then, I have become proficient
          in a wide range of technologies, including HTML, CSS, JavaScript,
          React, Node.js, Express.js, Python, Django, MongoDB, and SQL. This
          technical skill set allows me to create innovative and user-friendly
          web applications tailored to the needs of diverse clients.
        </p>

        <h3 style={styles.h2}>Key Competencies</h3>
        <ul style={styles.ul}>
          <li>
            <strong>Full Stack Web Development:</strong> Proficient in front-end
            and back-end technologies, with a strong foundation in web design,
            coding, and testing.
          </li>
          <li>
            <strong>Health and Fitness Expertise:</strong> Over a decade of
            experience in personal training, health management, and wellness
            program development.
          </li>
          <li>
            <strong>Problem Solving and Adaptability:</strong> Adept at tackling
            complex challenges and adapting to new situations with creativity
            and resourcefulness.
          </li>
        </ul>
        <h3 style={styles.h2}>Notable Professional Achievements</h3>
        <ul style={styles.ul}>
          <li>
            <strong>Master Trainer at Virgin Active:</strong> Designed and
            implemented custom fitness programs, contributing to the success and
            growth of the company.
          </li>
          <li>
            <strong>Director of No Targets Just Routine:</strong> Played a
            pivotal role in developing and launching a health and wellness
            startup focused on helping individuals establish healthy habits.
          </li>
          <li>
            <strong>Full Stack Web Development Projects:</strong> Successfully
            completed various web development projects, showcasing my technical
            expertise and ability to deliver results.
          </li>
        </ul>
        <p style={styles.p}>
          Currently, I am seeking opportunities to apply my diverse skill set in
          full stack web development or physical fitness. I am excited to
          connect with like-minded professionals, share insights, and explore
          potential collaborations. Please feel free to reach out if you would
          like to discuss how my background and expertise can benefit your
          organization, or if you simply want to connect and expand your
          professional network.
        </p>
        <p styles={styles.p}>
          Thank you for taking the time to review my profile. I look forward to
          connecting with you!
        </p>
      </div>
    </section>
  );
};
export default About;
