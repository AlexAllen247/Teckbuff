import React from "react";
import { useState, useEffect } from "react";
import Banner from "../images/PuebloDelRio.png";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const style = {
    maxWidth: "100%",
    width: width <= 767 ? "100%" : "initial",
  };
  return (
    <div style={{ textAlign: "center", backgroundColor: "#f6f0d9" }}>
      <img src={Banner} alt="My Banner" style={style} />
    </div>
  );
};

export default Header;
