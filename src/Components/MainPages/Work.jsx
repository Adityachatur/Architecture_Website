import React, { useRef, useEffect } from "react";
import setting from "../Images/setting.svg";
import User from "../Images/User.svg";
import pc from "../Images/pc.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const cardsRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP context for animations
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

      // Hover effects and scroll-triggered animations for the cards
      cardsRef.current.forEach((card, index) => {
        const button = card.querySelector(".card-button");
        const box = card.querySelector(".absolute-box");

        // Hover effects
        gsap.fromTo(
          button,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.3 }
        );
        gsap.fromTo(
          box,
          { borderColor: "#e0e1dd" },
          { borderColor: "#CFFF00", duration: 0.3 }
        );

        // Scroll-triggered animations for the cards
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

  const services = [
    {
      title: "HIGH EFFICIENCY",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum pariatur perspiciati",
      svg: setting,
    },
    {
      title: "TEAM OF EXPERTS",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum pariatur perspiciati",
      svg: User,
    },
    {
      title: "TECHNOLOGY",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum pariatur perspiciati",
      svg: pc,
    },
  ];

  return (
    <div className="service lg:h-[100vh] h-auto w-full flex flex-col justify-evenly space-y-10 items-center bg-background">
      <div ref={textRef} className="text-center">
        <h1 className="lg:text-[1.5vw] text-[1rem] uppercase font-semibold my-10">
          HOW WE WORK
        </h1>
        <h1 className="lg:text-[3vw] text-[1.5rem] font-semibold">
          THIS IS HOW MAGIC HAPPENS
        </h1>
      </div>

      <div className="lg:w-10/12 w-11/12 h-auto mx-auto">
        <div className="flex justify-evenly lg:flex-row flex-col py-5 w-full mx-auto gap-5 my-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full h-[300px] bg-white text-black border-t-[5px] flex justify-center space-y-5 items-start flex-col overflow-hidden relative"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <p className="px-10 lg:text-[1.8vw] text-[1.5rem] font-bold">
                {service.title}
              </p>
              <p className="px-10 text-lg text-gray-600 font-semibold card-paragraph">
                {service.description}
              </p>
              <div className="absolute-box absolute h-[60px] w-[60px] border-[5px] border-gray-300 top-[-20px] right-0 flex justify-center items-center">
                <img src={service.svg} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
