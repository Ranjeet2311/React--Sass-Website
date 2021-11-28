import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

  return (
    <div className="container" ref={boxRef}>
      <h1>About Us</h1>
    </div>
  );
};

export default About;
