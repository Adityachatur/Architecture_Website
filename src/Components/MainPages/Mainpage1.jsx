import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import img from "../Images/1.jpg";
import rightarrow from "../Images/rightarrow.svg";
import { Link } from "react-router-dom";

gsap.registerPlugin(TextPlugin);

const Mainpage1 = () => {
  const statRefs = useRef([]);

  useEffect(() => {
    // GSAP animations for statistics
    statRefs.current.forEach((ref) => {
      if (ref) {
        const statValue = ref.querySelector(".stat-value");
        if (statValue) {
          const finalValue = parseInt(
            ref.dataset.finalValue.replace(/\D/g, ""),
            10
          );

          gsap.fromTo(
            statValue,
            { innerText: 0 },
            {
              innerText: finalValue,
              duration: 3,
              ease: "power1.out",
              snap: { innerText: 1 },
              // Using TextPlugin for smooth text animation
              onUpdate: () => {
                statValue.innerText = Math.ceil(statValue.innerText);
              },
            }
          );
        }
      }
    });
  }, []);

  const statistics = [
    { label: "Succeeded Projects", value: "346+" },
    { label: "Working Hours", value: "9k+" },
    { label: "Years Experience", value: "10+" },
    { label: "Billion Invested", value: "99+" },
  ];

  return (
    <div className="main-page lg:h-screen h-auto w-full relative overflow-hidden">
      <div className="absolute inset-0 min-w-full">
        <img
          src={img}
          alt="Background"
          className="background-image h-full w-full object-cover"
        />
        <div className="absolute w-full inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative z-9 h-full lg:w-10/12 w-11/12 mx-auto flex lg:flex-row flex-col items-center justify-center lg:justify-between py-20">
        <div className="lg:h-[70%] h-auto lg:w-5/12 w-11/12 flex flex-col justify-center space-y-10 p-4 lg:p-0 font-sora">
          <p className="text-[16px] font-bold text-white">The Future</p>
          <p className="text-[8vw] md:text-[5vw] lg:text-[4.6vw] font-bold leading-tight text-white">
            MODERN <br />
            <span className="text-customYellow">ARCHITECTURAL</span> <br />
            DESIGN
          </p>
          <p className="text-[16px] text-white font-bold flex items-center cursor-pointer">
            View Project{" "}
            <Link to={"/projects"}>
              {" "}
              <img
                src={rightarrow}
                alt="Right Arrow"
                className="bg-customYellow p-2 lg:p-3 text-black ml-2 lg:ml-3 hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </p>
        </div>

        <div className="lg:h-[70%] h-auto lg:w-5/12 w-11/12 flex justify-center items-end mt-4 lg:mt-0">
          <div className="container grid grid-cols-2 gap-4 font-sora">
            {statistics.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (statRefs.current[index] = el)}
                data-final-value={stat.value}
                className="w-full h-36 border-[5px] border-gray-300 border-opacity-40 flex flex-col justify-center p-4 text-customYellow text-center lg:text-left"
              >
                <span className="stat-value lg:text-[2vw] text-[2.1rem] font-bold">
                  0
                </span>
                <span className="text-white lg:text-[1.2vw] text-[14px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage1;
