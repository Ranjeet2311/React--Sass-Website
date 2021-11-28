import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Home.css";
import background2 from "../videos/background-react2.mp4";
import drone from "../images/n-drone.png";
import FlyingDrone from "../images/fly-quad.png";
import SectionBoxWithAnimation from "../elements/SectionBoxWithAnimation";
import CaptionBoxCenter from "../elements/CaptionBoxCenter";
import Button from "../elements/Button";
import Header from "../elements/Header";
import Card from "../elements/Card";
import cardImg1 from "../images/drone parts.png";
import cardImg2 from "../images/Fly-quad-zoom.png";
import cardImg3 from "../images/QuadCop.png";
import Footer from "../elements/Footer";

const Home = () => {
  const heroContent = useRef();
  const btnBox = useRef();
  const Section = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.from(heroContent.current, { x: "-1000", duration: 2 });
    gsap.from(btnBox.current, { x: "1000", duration: 2 });
    gsap.from(Section.current, { x: "-1000", duration: 2 });
  });
  return (
    <div className="wrapper-home">
      <section className="Hero-section">
        <video
          className="background-video"
          src={background2}
          loop
          autoPlay
          muted
        ></video>
        <div className="home-content " ref={heroContent}>
          <CaptionBoxCenter
            title="Make most of your travels with our best"
            para=" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will ."
          />
        </div>
        <div className="home-btn" ref={btnBox}>
          <Button text="Take a tour" />
          <Button text="Connect with us" />
        </div>
      </section>
      <section className="section-drone" ref={Section}>
        <SectionBoxWithAnimation
          title="Customized drones for your business and personal needs"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        praesentium deleniti ipsum veniam doloremque expedita repudiandae.
        Esse eligendi rerum placeat suscipit ipsa nam, omnis earum possimus
        odio debitis sequi at, quasi laborum culpa labore itaque
        exercitationem magni, perspiciatis quaerat quo."
          img={drone}
        />
      </section>
      <section className="section-drone-flying">
        <img className="FlyingDrone" src={FlyingDrone} alt="flying-drone" />
        <div className="text-caption">
          <Header title=" FEEL THE FLYING EMOTIONS" />
          <Button text="Get demo test" />
        </div>
      </section>

      <section className="section-card">
        <Header
          title="Explore DJI Products in Different Fields"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        praesentium deleniti ipsum veniam doloremque expedita repudiandae."
        />
        <hr />
        <div className="cards">
          <Card
            img={cardImg1}
            title="Drone spare parts"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        praesentium deleniti ipsum veniam doloremque expedita repudiandae. "
          />
          <Card
            img={cardImg2}
            title="Movie maker drones"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        praesentium deleniti ipsum veniam doloremque expedita repudiandae. "
          />
          <Card
            img={cardImg3}
            title="Day-to-day drones"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        praesentium deleniti ipsum veniam doloremque expedita repudiandae. "
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
