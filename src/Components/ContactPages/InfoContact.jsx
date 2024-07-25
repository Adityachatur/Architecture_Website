import React, { useEffect, useRef } from "react";
import img from "../Images/2.jpg";
import gsap from "gsap";
const InfoContact = () => {
  const textref = useRef(null);
  const imgref = useRef(null);
  useEffect(() => {
    // GSAP context for animations
    const ctx = gsap.context(() => {
      // Staggered scroll-triggered animation for each item
      gsap.from([textref.current, imgref.current], {
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
      <div className="w-full flex lg:flex-row flex-col  my-5">
        <div
          className="lg:w-6/12 w-full mx-auto pr-6 lg:py-0 py-5"
          ref={textref}
        >
          <h1 className="uppercase text-[2rem] lg:text-[3vw] font-bold">
            INFO CONTACT
          </h1>
          <p className="text-xl font-semibold text-gray-500">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more or less normal
            distribution of letters.
          </p>
        </div>
        <div className="lg:w-6/12 w-full flex justify-end py-5" ref={imgref}>
          <img
            src={img}
            className=" h-[250px] lg:w-[500px] w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default InfoContact;
