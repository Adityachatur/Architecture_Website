import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import greatherthan from "../Images/greaterthan.svg";

gsap.registerPlugin(ScrollTrigger);

const Advantages = () => {
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered animation for the text
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

      // Scroll-triggered animations for the cards
      cardsRef.current.forEach((card) => {
        const borderContainer = card.querySelector(".border-container");
        const absoluteSquare = card.querySelector(".absolute-square");

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

        // Hover effects for the cards
        card.addEventListener("mouseenter", () => {
          gsap.to(borderContainer, { borderColor: "#CFFF00", duration: 0.5 });
          gsap.to(absoluteSquare, { borderColor: "#CFFF00", duration: 0.5 });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(borderContainer, { borderColor: "gray", duration: 0.5 });
          gsap.to(absoluteSquare, { borderColor: "gray", duration: 0.5 });
        });
      });
    });

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  const cardData = [
    {
      title: "LISTEN",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "STRATEGIES",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "PROJECT WORK",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "LAUNCH",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className=" service lg:h-[100vh] h-auto w-full flex flex-col justify-evenly py-10 items-center text-center bg-white">
      <div ref={textRef} className="textRef">
        <h1 className="lg:text-[1.5vw] text-[1rem] uppercase font-semibold mt-10 mb-5">
          OUR ADVANTAGES
        </h1>
        <h1 className="lg:text-[3vw] text-[1.2rem] uppercase font-bold">
          WE TAKE CARE OF EVERYTHING <br /> FOR YOU!
        </h1>
        <p className="text-xl font-semibold text-gray-400 p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br /> eiusmod tempor incididunt ut labore aliqua.
        </p>
      </div>
      <div className="lg:w-10/12 w-11/12  h-auto mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="advantage-card w-full h-[300px] flex flex-col justify-around items-center relative"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <h1 className="text-[1.7rem] font-bold uppercase">{card.title}</h1>
            <div className="border-container w-full h-[180px] border-t-[5px] border-gray-300 flex items-center justify-center relative">
              <h1 className="text-xl text-gray-600">{card.content}</h1>
              <div className="absolute-square absolute h-[60px] w-[60px] border-[5px] border-gray-300 bg-white left-1/2 transform -translate-x-1/2 top-[-30px] flex items-center justify-center">
                <img src={greatherthan} alt="" className="h-10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
