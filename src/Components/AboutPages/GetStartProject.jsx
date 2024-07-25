import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import img from "../Images/Gallery1.jpg";

const GetStartProject = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // GSAP context for animations
    const ctx = gsap.context(() => {
      // Staggered scroll-triggered animation for each item
      gsap.from(
        [
          headingRef.current,
          subheadingRef.current,
          buttonRef.current,
          contactRef.current,
        ],
        {
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.5, // Stagger delay between each item
          scrollTrigger: {
            trigger: headingRef.current, // Adjust trigger as needed
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    });

    // Cleanup function to remove animations and ScrollTrigger instances
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 min-w-full">
          <img
            src={img}
            alt="Background"
            className="background-image h-full w-full object-cover"
          />
          <div className="absolute w-full inset-0 bg-black opacity-70"></div>
        </div>
        <div className="relative z-9 justify-center items-center flex flex-col lg:w-6/12 w-11/12 mx-auto text-center text-white h-full space-y-10">
          <h1 ref={headingRef} className="text-2xl font-bold">
            BRING YOUR IDEAS TO LIFE
          </h1>
          <h1
            ref={subheadingRef}
            className="lg:text-[3.3vw] text-[2rem] font-bold"
          >
            GET STARTED WITH THE PROJECT TODAY
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <button
              ref={buttonRef}
              className="uppercase py-8 lg:px-16 px-14 lg:text-2xl text-xl bg-customYellow text-black font-semibold"
            >
              Start a Project
            </button>
            <div
              ref={contactRef}
              className="text-2xl font-semibold flex justify-center text-center space-y-2 flex-col items-center"
            >
              <h1 className="text-customYellow">New Project</h1>
              <p>+91 9552314201</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStartProject;
