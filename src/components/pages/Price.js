import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// const divStyle = {
//   color: "green",
//   height: "100vh",
// };

const Price = () => {
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

  return (
    // <div style={divStyle}>
    <div className="container" ref={boxRef}>
      <h1>Pricing</h1>
    </div>
  );
};

export default Price;
