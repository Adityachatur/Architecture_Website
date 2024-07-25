import React, { useRef, useEffect } from "react";
import rightarrow from "../Images/rightarrow.svg";
import gallery1 from "../Images/Gallery1.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Idea = () => {
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Create a GSAP context for animations
    const ctx = gsap.context(() => {
      // Scroll-triggered animation for the header text
      gsap.from(textRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          scroller: "body",
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      });

      // Scroll-triggered animation for the cards
      cardsRef.current.forEach((card) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            scroller: "body",
            start: "top 90%",
            toggleActions: "play none none reset",
          },
        });
      });
    });

    // Cleanup function to remove animations and ScrollTrigger instances
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="service lg:h-[100vh] h-auto w-full flex flex-col justify-evenly space-y-10 items-center">
        <div ref={textRef} className="text-center">
          <h1 className="lg:text-[1vw] text-[0.8rem] uppercase font-semibold mt-10 mb-5">
            INSIGHTS
          </h1>
          <h1 className="lg:text-[3vw] text-[1.5rem] font-semibold">
            IDEAS AND NEWS
          </h1>
          <p className="uppercase flex justify-center items-center mt-5 text-xl font-bold">
            see all{" "}
            <img
              src={rightarrow}
              alt=""
              className="bg-customYellow p-2 lg:p-3 text-black ml-2 lg:ml-3 hover:translate-x-2"
            />
          </p>
        </div>

        <div className="lg:w-10/12 w-11/12 h-auto mx-auto">
          <div className="grid w-full mx-auto h-auto lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-10">
            <div
              className="w-full h-[400px] relative"
              ref={(el) => (cardsRef.current[0] = el)}
            >
              <img
                src={gallery1}
                className="w-full h-full object-cover overflow-hidden rounded-md"
                alt=""
              />
              <div className="absolute bottom-0 right-10 w-10 h-52 bg-customYellow flex items-center justify-center">
                <span className="transform rotate-90 text-2xl font-bold">
                  19.07.2024
                </span>
              </div>
            </div>
            <div
              className="w-full lg:h-[400px] md:h-[250px] h-auto lg:p-4 pt-1 pb-10 flex flex-col items-start justify-center space-y-6"
              ref={(el) => (cardsRef.current[1] = el)}
            >
              <h1 className="text-2xl font-semibold text-left">URBAN</h1>
              <h2 className="lg:text-[1.4vw] text-[1.5rem] font-bold">
                TIPS FOR PLANNING A PROJECTS
              </h2>
              <p className="text-lg font-semibold text-gray-400 pr-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                distinctio a optio exercitationem sint sit? Facilis ad
                doloremque corporis libero?
              </p>
            </div>
            <div
              className="w-full h-[400px] relative"
              ref={(el) => (cardsRef.current[2] = el)}
            >
              <img
                src={gallery1}
                className="w-full h-full object-cover overflow-hidden rounded-md"
                alt=""
              />
              <div className="absolute bottom-0 right-10 w-10 h-52 bg-customYellow flex items-center justify-center">
                <span className="transform rotate-90 text-2xl font-bold">
                  19.07.2024
                </span>
              </div>
            </div>
            <div
              className="w-full lg:h-[400px] h-auto md:h-[250px] lg:p-4 pt-1 pb-10 flex flex-col items-start justify-center space-y-6"
              ref={(el) => (cardsRef.current[3] = el)}
            >
              <h1 className="text-2xl font-semibold text-left">PERSPECTIVES</h1>
              <h2 className="lg:text-[1.4vw] text-[1.4rem] font-bold">
                DESIGN FOR PERFECT HOME
              </h2>
              <p className="text-lg font-semibold text-gray-400 pr-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                distinctio a optio exercitationem sint sit? Facilis ad
                doloremque corporis libero?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Idea;
