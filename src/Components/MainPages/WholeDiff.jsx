import React, { useState, useEffect } from "react";
import img from "../Images/1.jpg";
import rightarrow from "../Images/rightarrow.svg";
import minusIcon from "../Images/minus.svg";
import plusIcon from "../Images/plus.svg";

const WholeDiff = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = Math.max(1, 1.2 - scrollPosition / 1000);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const initialData = [
    {
      question: "TEAM OF EXPERTS",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore?",
    },
    {
      question: "Creativity and innovation",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore?",
    },
    {
      question: "Technology",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore?",
    },
    {
      question: "Sustainability",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore?",
    },
    {
      question: "Honesty and transparency",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore?",
    },
  ];

  const [faqData, setFaqData] = useState(
    initialData.map((item) => ({ ...item, isOpen: false }))
  );

  const toggleContent = (index) => {
    setFaqData((prevState) =>
      prevState.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : item.isOpen,
      }))
    );
  };

  return (
    <div className="w-full relative overflow-hidden">
      <div className="absolute inset-0 min-w-full">
        <img
          src={img}
          alt="Background"
          className="background-image h-full w-full object-cover"
          style={{ transform: `scale(${scale})` }}
        />
        <div className="absolute w-full inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative z-9 w-full text-white flex lg:flex-row flex-col justify-center items-center py-10">
        <div className=" lg:w-5/12 w-11/12 mx-auto my-10 flex flex-col lg:justify-center justify-evenly lg:space-y-10 space-y-6 py-4">
          <p className="text-[16px] font-bold text-white uppercase">our cors</p>
          <p className="text-[2.2rem] md:text-[4.5rem] lg:text-[3.5vw] font-bold space-y-5 lg:leading-tight text-gray-200">
            WHOLE DIFFERENCE
          </p>
          <p className="text-xl font-semibold text-gray-400 lg:w-11/12 w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            explicabo nobis praesentium voluptatibus sapiente eos reiciendis
            veritatis, animi exercitationem doloremque!
          </p>
          <p className="uppercase text-[16px] text-white font-bold flex items-center cursor-pointer">
            read more
            <img
              src={rightarrow}
              alt=""
              className="bg-customYellow p-2 lg:p-3 text-black ml-2 lg:ml-3 hover:translate-x-2 transition-transform duration-300"
            />
          </p>
        </div>
        <div className="lg:w-5/12 w-11/12 mx-auto flex flex-col justify-end items-end mb-10 py-4">
          {faqData.map((item, index) => (
            <div key={index} className="w-full my-2">
              <div
                className="text-xl lg:font-bold font-semibold text-white flex flex-col justify-start items-start border-b-[5px] border-gray-400 w-11/12 lg:mx-auto lg:px-4 py-6 cursor-pointer"
                onClick={() => toggleContent(index)}
              >
                <div className="flex justify-center items-center">
                  <img
                    src={item.isOpen ? minusIcon : plusIcon}
                    alt={item.isOpen ? "Collapse" : "Expand"}
                    className="w-6 h-6 mr-4 rounded-[2px] bg-white"
                  />
                  <h1 className="lg:text-lg font-semibold text-[1rem] p-1 uppercase">
                    {item.question}
                  </h1>
                </div>
                <div
                  className={`faq-answer transition-all duration-700 ease-in-out overflow-hidden ${
                    item.isOpen ? "max-h-96" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pt-6 text-lg font-poppins">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WholeDiff;
