import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import img from "../Images/2.jpg";
import video from "../Images/video.svg";
import architectureVideo from "../Images/video.mp4"; // Add your video path here

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const About = () => {
  const numberRef = useRef(null);
  const imganiref = useRef(null);
  const textRefs = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Create a GSAP context
    const ctx = gsap.context(() => {
      gsap.fromTo(
        numberRef.current,
        { innerText: 0 },
        {
          innerText: 17,
          duration: 1.5,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: numberRef.current,
            scroller: "body",
            start: "top 90%",
            toggleActions: "play none none reset",
          },
          // onUpdate is no longer needed when using TextPlugin
        }
      );

      gsap.from(imganiref.current, {
        y: 80,
        duration: 1,
        scrollTrigger: {
          trigger: imganiref.current,
          scroller: "body",
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      });

      gsap.from(textRefs.current, {
        y: 100,
        duration: 1,
        stagger: 0.2,
        opacity: 0,
        scrollTrigger: {
          trigger: textRefs.current[0],
          scroller: "body",
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      });
    });

    // Cleanup function to remove animations and ScrollTrigger instances
    return () => ctx.revert();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="lg:h-screen h-auto w-full flex flex-col justify-center font-sora">
        <div className="flex lg:flex-row flex-col justify-center h-full w-full mx-auto items-center py-10">
          <div
            ref={imganiref}
            className="lg:h-[80vh] md:h-auto  h-[60vh] lg:w-5/12 w-11/12 relative order-2 lg:order-1 lg:mt-0 mt-10"
          >
            <img src={img} alt="" className="object-cover h-full w-full z-0" />
            <div className="absolute bottom-0 right-0 lg:w-[240px] md:w-[240px] w-[150px] h-[200px] lg:h-[260px] md:h-[240px] bg-white z-9 flex flex-col justify-center items-center p-2">
              <p ref={numberRef} className="text-[6vw] lg:text-[3vw] font-bold">
                17
              </p>
              <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.2vw] leading-tight text-right font-bold uppercase">
                <span className="bg-customYellow px-1">Years</span> of <br />
                successful <br />
                work
              </p>
            </div>
          </div>
          <div className="lg:h-[50vh] h-auto lg:w-5/12  w-11/12 order-1 lg:order-2 flex flex-col justify-center space-y-10 lg:pl-24 lg:pr-10 py-4 pr-4 ">
            <p
              ref={(el) => (textRefs.current[0] = el)}
              className="text-2xl font-semibold"
            >
              About Tusdio
            </p>
            <p
              ref={(el) => (textRefs.current[1] = el)}
              className="lg:text-[3vw] text-[2rem] font-bold"
            >
              GREAT EXPERIENCE
            </p>
            <p
              ref={(el) => (textRefs.current[2] = el)}
              className="text-xl text-gray-500"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua quis
              ipsum suspendisse ultrices gravida
            </p>
            <p
              ref={(el) => (textRefs.current[3] = el)}
              className="text-xl font-bold uppercase flex items-center cursor-pointer "
              onClick={toggleModal}
            >
              Watch Video{" "}
              <img
                src={video}
                alt=""
                className="bg-customYellow py-3 px-5 ml-3 hover:translate-x-2"
              />
            </p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative  w-11/12 lg:w-8/12 p-6">
            <button
              className="absolute top-0 right-[-5px] text-black text-5xl font-bold"
              onClick={toggleModal}
            >
              &times;
            </button>
            <video src={architectureVideo} controls className="w-full h-auto" />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
