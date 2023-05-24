import React, { useState, useEffect } from "react";
import Banner from "../images/TeckbuffBanner.png";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setShowImage(true);
  }, []);

  const styles = {
    section: {
      textAlign: "center",
    },
    image: {
      maxWidth: "100%",
      width: width <= 767 ? "100%" : "initial",
      height: width <= 767 ? "auto" : "initial",
    },
  };

  return (
    <section style={styles.section} className="header">
      <div className="container">
        {showImage && (
          <img
            src={Banner}
            alt="My Banner"
            style={styles.image}
            className="animated-image"
            aria-label="Banner for TeckBuff.com"
          />
        )}
      </div>
      <div className="animated-line"></div>
    </section>
  );
};

export default Header;
