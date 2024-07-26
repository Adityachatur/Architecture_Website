import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30); // Toggle the background blur based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "text-black bg-customYellow py-1 px-3 duration-300"
      : "hover:text-customYellow duration-300";
  };

  return (
    <>
      <nav
        className={`flex justify-between lg:p-6 p-5 items-center fixed top-0 w-full z-10 ${
          scrolled ? "navbar-bg-blur" : "bg-transparent"
        } text-white`}
      >
        <div className="company-name lg:text-3xl text-2xl font-semibold uppercase font-sora">
          Ruizarch
        </div>
        <div className="hidden lg:flex items-center lg:space-x-14 space-x-4 lg:text-[0.5vw] font-semibold uppercase font-sora ">
          <Link to="/" onClick={toggleMenu} className={isActive("/")}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className={isActive("/about")}>
            About
          </Link>
          <Link
            to="/services"
            onClick={toggleMenu}
            className={isActive("/services")}
          >
            Service
          </Link>
          <Link
            to="/projects"
            onClick={toggleMenu}
            className={isActive("/projects")}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className={isActive("/contact")}
          >
            Contact Us
          </Link>
        </div>
        <Link to={"/contact"}>
          <button className="hidden lg:block py-2 sm:py-5 px-4 sm:px-5 text-lg sm:text-xl bg-customYellow text-black font-semibold uppercase font-sora">
            Start a Project
          </button>
        </Link>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu lg:hidden flex flex-col items-center bg-black text-white fixed top-0 left-0 w-full h-[450px] z-20 transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between w-full p-6">
          <div className="company-name text-2xl font-bold uppercase">
            Ruizarch
          </div>
          <button onClick={toggleMenu} className="text-3xl">
            ✖
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 text-lg font-semibold uppercase mt-2 font-sora">
          <Link to="/" onClick={toggleMenu} className={isActive("/")}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className={isActive("/about")}>
            About
          </Link>
          <Link
            to="/services"
            onClick={toggleMenu}
            className={isActive("/services")}
          >
            Service
          </Link>
          <Link
            to="/projects"
            onClick={toggleMenu}
            className={isActive("/projects")}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className={isActive("/contact")}
          >
            Contact Us
          </Link>
          <Link to={"/contact"}>
            <button
              onClick={toggleMenu}
              className="py-2 px-4 text-lg bg-customYellow text-black font-semibold uppercase"
            >
              Start a Project
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
