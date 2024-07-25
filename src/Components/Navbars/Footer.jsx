import React from "react";
import { Link, useLocation } from "react-router-dom";
import bgimg from "../Images/1.jpg";

const Footer = () => {
  const location = useLocation();

  const getLinkClasses = (path) => {
    return location.pathname === path
      ? " text-customYellow duration-300"
      : "hover:text-customYellow duration-300";
  };

  return (
    <div
      className="w-full flex-col lg:h-[100vh] h-auto pt-10 flex justify-center items-center relative "
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative flex lg:flex-row flex-col justify-center items-center gap-6 z-9 w-11/12 mx-auto h-auto">
        <div className="lg:w-7/12 w-full space-y-6 lg:h-[600px] h-auto flex flex-col justify-evenly">
          <div className="w-full uppercase grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 lg:space-x-6 py-6 border-b-[5px] border-gray-500 border-opacity-40 text-white lg:text-[1vw] text-[0.9rem] font-bold border-2">
            <Link to="/about" className={getLinkClasses("/about")}>
              About
            </Link>
            <Link to="/services" className={getLinkClasses("/services")}>
              Service
            </Link>
            <Link to="/projects" className={getLinkClasses("/projects")}>
              Projects
            </Link>
            <Link to="/contact" className={getLinkClasses("/contact")}>
              Contacts
            </Link>
            <Link to="/" className={getLinkClasses("/")}>
              Home
            </Link>
          </div>
          <div className="grid w-full border-2 py-10 lg:h-[220px] h-auto lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="flex flex-col justify-evenly lg:w-8/12 w-6/12">
              <h1 className="text-white text-xl font-bold border-b-[5px] border-gray-500 border-opacity-40 pb-3">
                Wills Point
              </h1>
              <p className="text-xl font-normal text-gray-500">
                8619 S Wolcott Avenue Floor 202 Chicago, IL 60620 (773) 238 -
                7162
              </p>
            </div>
            <div className="flex flex-col justify-evenly lg:w-8/12 w-6/12">
              <h1 className="text-white text-xl font-bold border-b-[5px] border-gray-500 border-opacity-40 pb-3">
                Wills Point
              </h1>
              <p className="text-xl font-semibold text-gray-400">
                8619 S Wolcott Avenue Floor 202 Chicago, IL 60620 (773) 238 -
                7162
              </p>
            </div>
            <div className="flex flex-col justify-evenly lg:w-8/12 w-6/12">
              <h1 className="text-white text-xl font-bold border-b-[5px] border-gray-500 border-opacity-40 pb-3">
                Wills Point
              </h1>
              <p className="text-xl font-semibold text-gray-400">
                8619 S Wolcott Avenue Floor 202 Chicago, IL 60620 (773) 238 -
                7162
              </p>
            </div>
            <div className="flex flex-col justify-evenly lg:w-8/12 w-6/12">
              <h1 className="text-white text-xl font-bold border-b-[5px] border-gray-500 border-opacity-40 pb-3">
                Wills Point
              </h1>
              <p className="text-xl font-semibold text-gray-400">
                8619 S Wolcott Avenue Floor 202 Chicago, IL 60620 (773) 238 -
                7162
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-3/12 w-11/12 lg:h-[300px] h-auto flex lg:justify-end items-end justify-start text-2xl text-white py-10">
          <h1>RUIZARCH</h1>
        </div>
      </div>
      <div className="w-full mx-auto lg:h-20 h-auto bg-transparent border-t-[1px] border-opacity-90 border-gray-400 bottom-0 left-0 flex flex-wrap items-center px-2 justify-between text-xl font-bold text-gray-300 text-opacity-70 py-5">
        <h1>© 2023. All rights reserved.</h1>
        <div className="flex space-x-4 flex-wrap">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
        </div>
        <div className="flex space-x-4">
          <h1>Our App</h1>
          <h1>SiteMap</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
