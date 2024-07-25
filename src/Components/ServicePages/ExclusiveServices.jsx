import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgimg from "../Images/bg.svg";
import pen from "../Images/pen.svg";
import layers from "../Images/layers.svg";
import coffee from "../Images/coffee.svg";
import rightarrow from "../Images/rightarrow.svg";

gsap.registerPlugin(ScrollTrigger);

const ExclusiveServices = () => {
  const cardsRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
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

      // Hover effects and ScrollTrigger animations for the cards
      cardsRef.current.forEach((card) => {
        const paragraph = card.querySelector(".card-paragraph");
        const button = card.querySelector(".card-button");

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

        gsap.fromTo(
          paragraph,
          {
            opacity: 1,
            y: 0,
          },
          {
            opacity: 0,
            y: 20,
            duration: 0.3,
            paused: true,
            onComplete: () => {
              button.style.opacity = 0;
            },
          }
        );

        gsap.fromTo(
          button,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            paused: true,
          }
        );

        card.addEventListener("mouseenter", () => {
          gsap.to(paragraph, { opacity: 0, y: 20, duration: 0.3 });
          gsap.to(button, { opacity: 1, y: 0, duration: 0.3 });
          gsap.to(card, { borderColor: "#CFFF00", duration: 0.3 }); // Tailwind green-500 color
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(paragraph, { opacity: 1, y: 0, duration: 0.3 });
          gsap.to(button, { opacity: 0, y: 20, duration: 0.3 });
          gsap.to(card, { borderColor: "#e0e1dd", duration: 0.3 }); // Initial border color
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
      svg: pen,
    },
    {
      title: "EXTERIOR DESIGN",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum pariatur perspiciati",
      svg: layers,
    },
    {
      title: "ARCHITECTURE",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum pariatur perspiciati",
      svg: coffee,
    },
    {
      title: "Work Space",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum pariatur perspiciati",
      svg: layers,
    },
    {
      title: "exterior design",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum pariatur perspiciati",
      svg: pen,
    },
    {
      title: "furniture & decore",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat earum pariatur perspiciati",
      svg: coffee,
    },
  ];

  return (
    <div
      className="service  lg:h-auto h-auto w-full flex flex-col justify-evenly space-y-10 items-center bg-background"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div ref={textRef} className="text-center">
        <h1 className="lg:text-[1.5vw] text-[1rem] uppercase font-semibold mt-10 mb-5">
          ON THIS WE WORK
        </h1>
        <h1 className="lg:text-[3vw] text-[1.5rem] font-semibold">
          EXCLUSIVE SERVICES
        </h1>
      </div>

      <div className="lg:w-10/12 w-11/12 h-auto mx-auto">
        <div className="grid lg:grid-cols-3  h-auto md:grid-cols-2 grid-cols-1 gap-4 my-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full h-[350px] bg-white text-black border-[5px] flex justify-center items-center flex-col relative overflow-hidden p-5"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img src={service.svg} alt="" className="h-16 w-16 mb-4" />
              <p className="text-[1.5rem] font-bold uppercase mb-4">
                {service.title}
              </p>
              <p className="px-10 text-center text-lg text-gray-500 font-semibold card-paragraph mb-4">
                {service.description}
              </p>
              <button className="px-8 py-8 bg-customYellow text-white font-semibold card-button opacity-0 absolute bottom-0 transform translate-y-4">
                <img src={rightarrow} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveServices;
