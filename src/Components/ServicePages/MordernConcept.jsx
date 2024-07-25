import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const MordernConcept = () => {
  const textref = useRef(null);
  useEffect(() => {
    // GSAP context for animations
    const ctx = gsap.context(() => {
      // Staggered scroll-triggered animation for each item
      gsap.from(textref.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5, // Stagger delay between each item
        scrollTrigger: {
          trigger: textref.current, // Adjust trigger as needed
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
      <div
        className="h-[350px]  w-full flex flex-col text-center  space-y-10 justify-center items-center"
        ref={textref}
      >
        <p className="uppercase lg:text-[1.2vw] text-[1rem] font-bold">
          MODERN CONCEPT
        </p>
        <p className="lg:text-[1vw] text-[1.1rem] leading-relaxed font-semibold text-gray-400 lg:w-6/12 md:w-8/12 w-11/12 mx-auto">
          MODERN CONCEPT Ruizarch we are a leader in architecture and design
          with a user-centric approach and deep technical expertise. We are
          consistently ranked as one of the top 10 architecture firms in the
          world, and our core disciplines are supported by a wide range of
          complementary services, all of which have a singular goal: to build
          environments where our clients thrive.
        </p>
      </div>
    </>
  );
};

export default MordernConcept;
