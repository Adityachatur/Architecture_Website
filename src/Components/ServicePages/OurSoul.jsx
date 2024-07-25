import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgimg from "../Images/bg.svg";
import righttick from "../Images/RIghttick.svg";
import rightarrow from "../Images/rightarrow.svg";
gsap.registerPlugin(ScrollTrigger);

const OurSoul = () => {
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const textRef = useRef(null); // Define textRef here

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hover effects and ScrollTrigger animations for the cards
      cardsRef.current.forEach((card, index) => {
        const img = imagesRef.current[index];

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

        card.addEventListener("mouseenter", () => {
          gsap.to(img, { borderColor: "#CFFF00", duration: 0.3 }); // Change image border color to green
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(img, { borderColor: "#e0e1dd", duration: 0.3 }); // Reset image border color
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "INTERIOR DECOR",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum pariatur perspiciati",
      svg: righttick,
    },
    {
      title: "EXTERIOR DESIGN",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum pariatur perspiciati",
      svg: righttick,
    },
    {
      title: "ARCHITECTURE",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum pariatur perspiciati",
      svg: righttick,
    },
  ];

  return (
    <div
      className="service lg:h-[100vh] h-auto w-full flex flex-col justify-evenly space-y-10 items-center bg-background"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div ref={textRef} className="text-center">
        <h1 className="lg:text-[1.5vw] text-[1rem] uppercase font-semibold mt-10 mb-5">
          GOOD VISION
        </h1>
        <h1 className="lg:text-[3vw] text-[1.5rem] font-semibold">OUR SOUL</h1>
      </div>

      <div className="lg:w-10/12 w-11/12 h-auto mx-auto">
        <div className=" flex justify-evenly lg:flex-row flex-col gap-4 my-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full h-[350px] bg-white text-black  flex justify-center space-y-10 items-center flex-col relative overflow-hidden"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img
                src={service.svg}
                alt=""
                className="h-24 border-[5px] p-4"
                ref={(el) => (imagesRef.current[index] = el)}
              />
              <p className="text-[2rem] font-bold">{service.title}</p>
              <p className="px-10 text-center text-lg text-gray-500 font-semibold">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-xl font-bold">See All</h1>{" "}
          <span>
            <img
              src={rightarrow}
              alt=""
              className="h-12  p-2 bg-customYellow ml-3 cursor-pointer hover:translate-x-3 duration-300 ease-in-out"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurSoul;
