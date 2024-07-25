import React, { useRef, useEffect } from "react";
import rightarrow from "../Images/rightarrow.svg";
import righttick from "../Images/RIghttick.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkProcess = () => {
  const itemsRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP context for animations
    const ctx = gsap.context(() => {
      // Staggered scroll-triggered animation for each item
      gsap.from(itemsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.3, // Stagger delay between each item
        scrollTrigger: {
          trigger: itemsRef.current, // Adjust this as needed
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      gsap.from(textRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    });

    // Cleanup function to remove animations and ScrollTrigger instances
    return () => ctx.revert();
  }, []);

  const DisplayData = [
    {
      title: "ARCHITECTURE",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices gravida.",
    },
    {
      title: "INTERIOR DESIGN",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices gravida.",
    },
    {
      title: "PLANNING",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices gravida.",
    },
    {
      title: "ARCHITECTURE",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices gravida.",
    },
    {
      title: "INTERIOR DESIGN",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices gravida.",
    },
    {
      title: "PLANNING",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ultrices gravida.",
    },
  ];

  return (
    <div className="w-full">
      <div className="lg:w-10/12 w-11/12 mx-auto my-5">
        <div className="uppercase text-left py-10 space-y-4" ref={textRef}>
          <p className="lg:text-xl text-lg font-semibold">OUR PROCESS</p>
          <h1 className="lg:text-[3vw] font-bold text-[2rem]">HOW IT WORKS</h1>
        </div>

        <div className="my-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
            {DisplayData.map((item, index) => (
              <div
                key={index}
                className="group w-full flex flex-col justify-center lg:space-y-6 md:space-y-5 space-y-1 transition-colors duration-300 cursor-pointer overflow-hidden"
                ref={(el) => (itemsRef.current[index] = el)}
              >
                <div className="flex justify-center items-center">
                  <div className="w-[100px] justify-center flex items-center h-[80px] bg-white border-[5px] group-hover:border-customYellow transition-colors duration-300 m-1">
                    <img src={righttick} alt="" className="p-1 h-12" />
                  </div>
                  <div className="w-full h-1 border-t-[5px] group-hover:border-customYellow transition-colors duration-300"></div>
                </div>
                <h1 className="lg:text-3xl text-xl font-bold pt-5 lg:p-5">
                  {item.title}
                </h1>
                <p className="text-gray-600 text-xl pr-4 lg:p-5">
                  {item.Description}
                </p>
                <div className="flex items-center space-x-2 lg:p-5">
                  <p className="cursor-pointer text-xl font-bold">Know More</p>
                  <img
                    src={rightarrow}
                    alt="Right Arrow"
                    className="bg-customYellow p-2 hover:translate-x-3 duration-300 ease-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
