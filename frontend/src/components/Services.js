import React from "react";
import PTapp from "./PTApp";
import Urbanization from "./Urbanization";
import PersonalCoaching from "./PersonalCoaching";
import Ebook from "./Ebook";
import TechContent from "./TechContent";

const Services = () => {
  return (
    <section className="services">
      <PTapp />
      <Urbanization />
      <PersonalCoaching />
      <Ebook />
      <TechContent />
    </section>
  );
};

export default Services;
