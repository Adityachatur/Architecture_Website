import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CallNow = () => {
  const callNowRef = useRef(null);

  useEffect(() => {
    console.log(callNowRef.current.children); // Log the children elements

    const ctx = gsap.context(() => {
      gsap.from(callNowRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: callNowRef.current,
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={callNowRef}
      className="w-full lg:h-[250px] flex justify-center items-center py-5"
    >
      <div className="lg:w-10/12 w-11/12 mx-auto flex lg:flex-row flex-col justify-between lg:items-center items-start space-y-10 py-10">
        <div className="flex justify-center items-start flex-col space-y-3">
          <h1 className="lg:text-2xl text-lg font-normal">Email Address</h1>
          <p className="lg:text-3xl text-2xl font-bold">Project@gmail.com</p>
        </div>
        <div className="flex justify-center items-start flex-col space-y-3">
          <h1 className="lg:text-2xl text-lg font-normal">Free Consultation</h1>
          <p className="lg:text-3xl text-2xl font-bold">+91 9552314201</p>
        </div>
        <div className="flex justify-center items-start flex-col space-y-3">
          <button className="py-4 px-10 bg-customYellow font-bold lg:text-2xl text-xl uppercase">
            Find The Space
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallNow;
