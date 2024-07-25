import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const IntrestedWork = () => {
  const headinref = useRef(null);
  const pararef = useRef(null);
  const buttonref = useRef(null);
  useEffect(() => {
    // GSAP context for animations
    const ctx = gsap.context(() => {
      // Staggered scroll-triggered animation for each item
      gsap.from([headinref.current, pararef.current, buttonref.current], {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5, // Stagger delay between each item
        scrollTrigger: {
          trigger: headinref.current, // Adjust trigger as needed
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    });

    // Cleanup function to remove animations and ScrollTrigger instances
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="lg:w-10/12 w-11/12 mx-auto  py-10">
        <div
          className="flex lg:flex-row flex-col justify-between lg:space-y-0 space-y-10"
          ref={headinref}
        >
          <div className="lg:w-4/12 w-full justify-center flex flex-col items-start ">
            <h1 className="uppercase text-xl font-bold py-4">Your Idea</h1>
            <h1 className="lg:text-[3vw] text-[1.8rem] font-bold">
              INTERESTED IN OUR <span className="bg-customYellow">WORK?</span>
            </h1>
          </div>
          <div className="lg:w-5/12  w-full px-5 justify-center flex items-center ">
            <h1
              className="text-[1vw] font-semibold text-gray-400"
              ref={pararef}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              quibusdam asperiores delectus, ut ab ipsa voluptates saepe animi
              quidem, eligendi voluptatem aperiam quaerat optio suscipit eaque
              sint hic eius repellendus.
            </h1>
          </div>
          <div className="lg:w-3/12 w-full lg:justify-end justify-center flex items-center">
            <button
              className="bg-customYellow py-6 px-10 uppercase font-bold lg:text-2xl text-xl"
              ref={buttonref}
            >
              Let's Talk Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntrestedWork;
