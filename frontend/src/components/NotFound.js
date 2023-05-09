import React from "react";
import {Link} from "react-router-dom"

const NotFound = () => {
  const sectionStyle = {
    textAlign: "center",
    padding: 50,
    margin: 50,
  };
  return (
    <section className="not-found" style={sectionStyle}>
      <h2>Oops page not found, please try a different URL.</h2>
      <Link to="/" aria-label="Link to Homepage"><h3>Return to Homepage</h3></Link>
    </section>
  );
};

export default NotFound;
