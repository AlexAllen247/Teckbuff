import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

const ServiceContainer = ({ children }) => {
  const animatedCardRef = useRef(null);

  useEffect(() => {
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;
      return (
        rect.top >= 0 &&
        rect.top <= windowHeight &&
        rect.left >= 0 &&
        rect.right <= windowWidth
      );
    };

    const checkScroll = () => {
      if (isInViewport(animatedCardRef.current)) {
        animatedCardRef.current.classList.add("scroll-animate");
      }
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <Container className="animated-card" ref={animatedCardRef}>
      {children}
    </Container>
  );
};
export default ServiceContainer;
