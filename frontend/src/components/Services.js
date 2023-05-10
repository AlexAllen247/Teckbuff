import React from "react";
import PTapp from "./PTApp";
import Urbanization from "./Urbanization";
import PersonalCoaching from "./PersonalCoaching";
import Ebook from "./Ebook";
import TechContent from "./TechContent";

const Services = () => {
  const styles = {
    services: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      margin: "1rem",
      padding: "1rem",
    },
  };

  return (
    <section style={styles.services} className="services">
      <PTapp />
      <Urbanization />
      <PersonalCoaching />
      <TechContent />
      <Ebook />
    </section>
  );
};

export default Services;
