import React from "react";

const NotFound = () => {
  const sectionStyle = {
    textAlign: "center",
  };
  return (
    <section className="not-found" style={sectionStyle}>
      <h2>Oops page not found, please try a different URL.</h2>
    </section>
  );
};

export default NotFound;
