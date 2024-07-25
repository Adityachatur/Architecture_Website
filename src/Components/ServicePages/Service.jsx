import React from "react";
import img from "../Images/1.jpg";
import HeadingPage from "../SubPages/Headingpage";
import MordernConcept from "./MordernConcept";
import ExclusiveServices from "./ExclusiveServices";
import OurSoul from "./OurSoul";
import IntrestedWork from "./IntrestedWork";
const Service = () => {
  return (
    <>
      <HeadingPage title={"our Service"} ThisPage={"ServicePage"} img={img} />
      <MordernConcept />
      <ExclusiveServices />
      <OurSoul />
      <IntrestedWork />
    </>
  );
};

export default Service;
