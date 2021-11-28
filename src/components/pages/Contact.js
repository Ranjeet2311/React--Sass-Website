import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Contact = () => {
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

  return (
    <div className="container" ref={boxRef}>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
