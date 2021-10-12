import React from "react";
import "./Footer.css";
import FooterBox from "./FooterBox";

function Footer() {
  return (
    <div className="footer-outer-wrapper">
      <section className="footer-wrapper">
        <FooterBox
          title="Product category"
          link1="Consumer"
          link2="Professional"
          link3="DrEnterpriseones"
          link4="Components"
        />
        <FooterBox
          title="Where to buy"
          link1="Amazon"
          link2="Flagship stores"
          link3="Retail stores"
          link4="Pro retailers"
          link5="Enterprise retailers"
        />
        <FooterBox
          title="Support"
          link1="Product support"
          link2="Repair services"
          link3="Help center"
          link4="After-sale service policies"
          link5="Security and privacy"
        />
        <FooterBox
          title="Explore"
          link1="Newsroom"
          link2="Events"
          link3="Mini drones"
          link4="Drone guides"
          link5="New products"
        />
      </section>

      <div className="copyright">
        <h1> Copyright © 2021 Drones All Rights Reserved. </h1>
      </div>
    </div>
  );
}

export default Footer;
