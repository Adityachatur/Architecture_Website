import React from "react";
import img from "../Images/1.jpg";
import HeadingPage from "../SubPages/Headingpage";
import InfoContact from "./InfoContact";
import AddressInfo from "./AddressInfo";
import GoogleMap from "./GoogleMap";
import Form from "./Form";
const Contact = () => {
  return (
    <>
      <HeadingPage title={"Contact Us"} ThisPage={"Contact"} img={img} />
      <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col">
        <InfoContact />
        <AddressInfo />
        <GoogleMap />
        <Form />
      </div>
    </>
  );
};

export default Contact;
