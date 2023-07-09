import React from "react";
import WebApplications from "./WebApplications";
import Consultation from "./Consultation";
import AiServices from "./AiServices";

const Services = () => {
  const styles = {
    services: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
  };

  return (
    <section style={styles.services} className="services">
      <WebApplications />
      <AiServices />
      <Consultation />
    </section>
  );
};

export default Services;
