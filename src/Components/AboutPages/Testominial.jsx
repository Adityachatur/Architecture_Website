import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import person1 from "../Images/person1.jpg";
import person2 from "../Images/person2.jpg";
import comment from "../Images/comment.svg";
const Testimonial = () => {
  const details = [
    {
      personimg: person1,
      personName: "Trivor Virtus",
      profession: "Designer",
      testimonials:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit debitis corporis maxime ea soluta, delectus explicabo quo, quam quae excepturi unde iure fugiat asperiores beatae? Cupiditate ex eligendi iusto.",
    },
    {
      personimg: person2,
      personName: "Emma Miller",
      profession: "SMM Manager",
      testimonials:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit debitis corporis maxime ea soluta, delectus explicabo quo, quam quae excepturi unde iure fugiat asperiores beatae? Cupiditate ex eligendi iusto.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      testimonialRef.current[currentIndex],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < details.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full  py-5">
      <div className="lg:w-10/12 w-11/12  mx-auto flex lg:flex-row flex-col">
        <div className="lg:w-5/12 w-full lg:h-[400px] h-auto  uppercase flex flex-col justify-center space-y-6 py-6">
          <p className="text-xl text-gray-400">Testimonials</p>
          <h1 className="lg:text-[3.6vw] text-[1.8rem] font-bold">
            What they <br className="lg:block hidden" />
            think of us
          </h1>
        </div>
        <div className="lg:w-7/12 w-full lg:h-[550px] h-auto   flex flex-col justify-end space-y-6">
          {details.map((items, index) => (
            <div
              key={index}
              ref={(el) => (testimonialRef.current[index] = el)}
              className={`lg:h-[250px] h-full border-l-[5px] transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0 absolute"
              }`}
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <div className="flex">
                <div className="w-[60px] h-[60px] bg-customYellow flex justify-center items-center">
                  {" "}
                  <img src={comment} alt="comment-logo" className=" h-14" />
                </div>
                <div className="w-[60px] h-[60px]">
                  <img src={items.personimg} alt="" />
                </div>
                <div className="text-xl font-semibold ml-2 justify-center uppercase flex flex-col">
                  <h1>{items.personName}</h1>
                  <p>{items.profession}</p>
                </div>
              </div>
              <p className="lg:ml-[60px] lg:w-8/12 w-11/12 mt-[6%] leading-relaxed lg:text-xl  text-base  font-semibold">
                {items.testimonials}
              </p>
            </div>
          ))}
          <div className=" w-[200px] h-[60px] flex justify-center items-center space-x-4 text-xl font-semibold">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`hover:text-customYellow ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === details.length - 1}
              className={`hover:text-customYellow ${
                currentIndex === details.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
