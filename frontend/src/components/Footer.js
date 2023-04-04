import React from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Footer = () => {
  const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(false);

  const handlePrivacyPolicyToggle = () => {
    setIsPrivacyPolicyVisible((prevState) => !prevState);
  };
  const sectionStyle = {
    textAlign: "center",
  };
  const buttonStyle = {
    margin: 10,
  };
  return (
    <section className="footer" style={sectionStyle}>
      <h4>Copyright Alex Allen 2023</h4>
      <Button
        variant="primary"
        onClick={handlePrivacyPolicyToggle}
        style={buttonStyle}
      >
        Privacy Policy
      </Button>
      {isPrivacyPolicyVisible ? <PrivacyPolicy /> : null}
    </section>
  );
};

export default Footer;
