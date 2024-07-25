import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import img1 from "../Images/Gallery3.jpg";
import img2 from "../Images/Gallery2.jpg";
import img3 from "../Images/Gallery1.jpg";
import rightarrow from "../Images/rightarrow.svg";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const images = [img1, img2, img3];

const AboutWork = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imganiref = useRef(null);
  const textAniRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.from(textAniRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textAniRef.current,
          scroller: "body",
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      gsap.to(imganiref.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          gsap.fromTo(
            imganiref.current,
            { scale: 1.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5 }
          );
        },
      });
    }
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      gsap.to(imganiref.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          );
          gsap.fromTo(
            imganiref.current,
            { scale: 1.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5 }
          );
        },
      });
    }
  };

  return (
    <div className="lg:h-screen h-auto w-full flex flex-col justify-center">
      <div className="flex lg:flex-row flex-col justify-center h-full w-full mx-auto items-center py-10">
        <div className="lg:h-[80vh] md:h-auto h-[60vh] lg:w-5/12 w-11/12 relative order-2 lg:order-1 lg:mt-0 mt-10 overflow-hidden">
          <div ref={imganiref} className="h-full w-full">
            <img
              src={images[currentImageIndex]}
              alt=""
              className="object-cover h-full w-full z-0"
            />
          </div>
          <div className="absolute bottom-0 right-10 lg:w-[220px] md:w-[200px] w-[160px] h-[80px] lg:h-[100px] bg-white z-9 flex justify-center items-center space-x-4 lg:text-2xl text-xl lg:font-bold font-semibold p-2">
            <button
              onClick={handlePrev}
              disabled={currentImageIndex === 0}
              className={`hover:text-customYellow ${
                currentImageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentImageIndex === images.length - 1}
              className={`hover:text-customYellow ${
                currentImageIndex === images.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
        <div
          ref={textAniRef}
          className="lg:h-[50vh] h-auto lg:w-5/12 w-11/12 order-1 lg:order-2 flex flex-col justify-center space-y-10 lg:pl-24 lg:pr-10 py-4 pr-4"
        >
          <p className="text-2xl font-semibold">Work</p>
          <p className="lg:text-[3vw] text-[2rem] font-bold">
            WHAT WE HAVE DONE
          </p>
          <p className="text-xl text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-xl font-bold uppercase flex items-center cursor-pointer">
            SEE PROJECTS{" "}
            <img
              src={rightarrow}
              alt=""
              className="bg-customYellow py-3 px-5 ml-3 hover:translate-x-2"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutWork;
