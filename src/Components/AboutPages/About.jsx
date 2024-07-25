import React from "react";
import HeadingPage from "../SubPages/Headingpage";
import img from "../Images/1.jpg";
import WhatWeDo from "./WhatWeDo";
import CallNow from "./CallNow";
import AboutWork from "./AboutWork";
import WorkProcess from "./WorkProcess";
import Testominial from "./Testominial";
import GetStartProject from "./GetStartProject";
const About = () => {
  return (
    <>
      <HeadingPage title={"About Us"} ThisPage={"About"} img={img} />
      <WhatWeDo />
      <CallNow />
      <AboutWork />
      <WorkProcess />
      <Testominial />
      <GetStartProject />
    </>
  );
};

export default About;
