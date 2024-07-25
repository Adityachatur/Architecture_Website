import React, { useRef, useEffect } from "react";
import rightarrow from "../Images/rightarrow.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InputField = React.memo(
  ({ label, type, name, placeholder, required }) => {
    return (
      <div className="w-full">
        <label htmlFor={name} className="text-2xl font-semibold">
          {label} {required && <span className="text-red-500 text-2xl">*</span>}
        </label>
        <br />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="border-b-2 border-gray-300 py-5 text-xl text-gray-400 w-full focus:outline-none focus:border-b-[4px] focus:border-customYellow transition-all duration-300 ease-in-out"
        />
      </div>
    );
  }
);

const TextareaField = React.memo(({ label, name, placeholder, required }) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="text-2xl font-semibold">
        {label} {required && <span className="text-red-500 text-2xl">*</span>}
      </label>
      <br />
      <textarea
        name={name}
        placeholder={placeholder}
        className="border-b-2 border-gray-300 py-5 text-xl text-gray-400 w-full focus:outline-none focus:border-b-[4px] focus:border-customYellow transition-all duration-300 ease-in-out"
        rows="5"
      ></textarea>
    </div>
  );
});

const Form = () => {
  const formRef = useRef(null);
  const headingref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
      gsap.from(".button", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      });
    });
    gsap.from(headingref.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingref.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full flex lg:flex-row flex-col">
      <div
        className="lg:w-4/12 w-full flex flex-col space-y-6 my-5 lg:p-6 py-6"
        ref={headingref}
      >
        <h1 className="text-[3vw] uppercase font-bold leading-tight">
          WE’D LOVE TO TALK
        </h1>
        <p className="text-xl font-semibold text-gray-400 border-b-[5px] border-gray-300 py-5">
          Have a question? We’d love to hear from you. Send us a note to get the
          conversation started - or click on an office above and talk to us.
          Especially about designing something, or something we’ve designed.
        </p>
        <p className="text-xl font-semibold text-gray-400 py-5">
          Interested in joining the team? Browse our current openings.
        </p>
        <p className="flex items-center text-xl font-semibold text-gray-400 py-5">
          Join Now
          <span>
            <img src={rightarrow} alt="" className="p-2 bg-customYellow ml-2" />
          </span>
        </p>
      </div>
      <div
        className="lg:w-8/12 w-full flex flex-col space-y-10 my-5 lg:px-10 lg:p-6 py-6"
        ref={formRef}
      >
        <form action="">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 py-10">
            <InputField
              label="Enter Name"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              required
            />
            <InputField
              label="Phone"
              type="number"
              name="phone"
              placeholder="Enter Your Phone Number"
              required
            />
            <InputField
              label="Budget"
              type="text"
              name="budget"
              placeholder="Enter Your Budget"
              required
            />
          </div>
          <TextareaField
            label="Comment"
            name="comment"
            placeholder="Enter Your Comment"
            required
          />
          <div className="py-5">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" required />
              <span className="text-xl">
                Accept the terms and conditions of personal data.
              </span>
            </label>
          </div>
          <div className="py-5">
            <button
              type="submit"
              className=" button bg-customYellow text-black py-4 px-10 text-2xl font-semibold transition-all duration-300 ease-in-out hover:translate-x-3"
            >
              Send Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
