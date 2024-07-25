import React from "react";
import Rightarrow from "../Images/rightarrow.svg";
import { Link } from "react-router-dom";

const HeadingPage = (props) => {
  const backgroundStyle = {
    backgroundImage: `url(${props.img})`,
  };

  return (
    <div>
      <div
        className="relative flex items-center justify-center bg-cover bg-center lg:h-[600px] h-[400px] z-8"
        style={backgroundStyle}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="text-center text-white relative z-9 ">
          <h1 className="lg:text-[5vw] text-[2.5rem] uppercase font-bold mb-4 font-Oswald">
            {props.title}
          </h1>

          {/* Breadcrumb Navigation */}
          <p className="lg:text-[1.4vw] lg:font-bold font-semibold text-white uppercase flex space-x-3 justify-center items-center">
            <Link to={"/"}>Home</Link>
            <span>
              <img src={Rightarrow} alt="" />
            </span>
            <span className="text-white">
              {props.ThisPage}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadingPage;
