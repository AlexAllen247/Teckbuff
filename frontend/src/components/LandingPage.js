import React from "react";
import Profile from "./Profile";
import Services from "./Services";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="left-column">
        <Services />
      </div>
      <div className="right-column">
        <Profile />
      </div>
      </section>
  );
};

export default LandingPage;
