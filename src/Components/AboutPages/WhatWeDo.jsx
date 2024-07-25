import React, { useRef, useEffect } from "react";
import rightarrow from "../Images/rightarrow.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    // GSAP context for animations
    const ctx = gsap.context(() => {
      // Scroll-triggered animation for each item
      itemsRef.current.forEach((item) => {
        gsap.from(item, {
          y: 80,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            scroller: "body",
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });
      });
    });

    // Cleanup function to remove animations and ScrollTrigger instances
    return () => ctx.revert();
  }, []);

  const data = [
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
        <div className="uppercase text-left py-10 space-y-4">
          <h1 className="lg:text-[3vw] font-bold text-[2rem]">WHAT WE DO</h1>
          <p className="lg:text-xl text-lg font-semibold text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
            fuga.
          </p>
        </div>

        <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full lg:h-[280px] md:h-[180px] h-[250px] flex flex-col justify-center lg:space-y-6 md:space-y-5 space-y-1 pr-10"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <h1 className="lg:text-3xl text-xl font-bold">{item.title}</h1>
              <p className="text-gray-600 text-xl pr-4">{item.Description}</p>
              <div className="flex items-center space-x-2">
                <p className="cursor-pointer text-xl font-bold">Know More</p>
                <img
                  src={rightarrow}
                  alt="Right Arrow"
                  className="bg-customYellow p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
