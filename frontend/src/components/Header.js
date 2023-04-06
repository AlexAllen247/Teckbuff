import React from "react";
import { useState, useEffect } from "react";
import Banner from "../images/teckbuffbanner.png";

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

  const style = {
    maxWidth: "100%",
    width: width <= 767 ? "100%" : "initial",
  };
  return (
    <section style={{ textAlign: "center" }} className="header">
      <div className="container">
        {showImage && (
          <img
            src={Banner}
            alt="My Banner"
            style={style}
            className="animated-image"
          />
        )}
      </div>
    </section>
  );
};

export default Header;
