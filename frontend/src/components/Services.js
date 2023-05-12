import React from "react";
import PTapp from "./PTApp";
import Urbanization from "./Urbanization";
import TechContent from "./TechContent";

const Services = () => {
  const styles = {
    services: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
  };

  return (
    <section style={styles.services} className="services">
      <Urbanization />
      <PTapp />
      <TechContent />
    </section>
  );
};

export default Services;
