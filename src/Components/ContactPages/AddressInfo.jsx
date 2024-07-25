import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AddressInfo = () => {
  const textref = useRef(null);
  const textref1 = useRef(null);

  useEffect(() => {
    // GSAP context for animations
    const ctx = gsap.context(() => {
      // Staggered scroll-triggered animation for each item
      gsap.from([textref.current, textref1.current], {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5, // Stagger delay between each item
        scrollTrigger: {
          trigger: textref.current, // Adjust trigger as needed
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    });

    // Cleanup function to remove animations and ScrollTrigger instances
    return () => ctx.revert();
  }, []);

  const info = [
    {
      city: "WILLS POINT",
      address:
        "10233 Gaillard Lake Est Suite 420 Houston, TX 75169 (903) 560 - 9830",
    },
    {
      city: "CHICAGO",
      address:
        "10233 Gaillard Lake Est Suite 420 Houston, TX 75169 (903) 560 - 9830",
    },
    {
      city: "HARRIMAN",
      address:
        "10233 Gaillard Lake Est Suite 420 Houston, TX 75169 (903) 560 - 9830",
    },
  ];

  return (
    <div className="w-full my-10  flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0">
      <div
        className="lg:w-6/12 w-full grid grid-cols-1 lg:grid-cols-3 gap-4"
        ref={textref}
      >
        {info.map((item, index) => (
          <div
            key={index}
            className="flex flex-col py-6 px-3 bg-white space-y-6"
          >
            <h1 className="text-2xl font-bold mb-2">{item.city}</h1>
            <p className="text-xl font-semibold text-gray-700 leading-relaxed">
              {item.address}
            </p>
          </div>
        ))}
      </div>

      <div className="lg:w-6/12 w-full flex justify-end" ref={textref1}>
        <div className="lg:w-8/12 w-full border-2 p-4 flex flex-col space-y-5">
          <div className="flex flex-col text-xl font-semibold text-gray-400">
            <h1 className="lg:text-3xl text-2xl font-bold text-black pb-5">
              HEADQUARTERS
            </h1>
            <ul>
              <li>USA</li>
              <li>New York - 1800 Wazee Street</li>
              <li>Suite 300 NY, NY 80202</li>
            </ul>
          </div>

          <div className="flex flex-col text-xl font-semibold text-gray-400">
            <h1 className="lg:text-3xl text-2xl font-bold text-black pb-5">
              PHONE
            </h1>
            <ul>
              <li>+7 (200) 600-30-30</li>
              <li>+7 (200) 200 - 80 - 02</li>
            </ul>
          </div>

          <div className="flex flex-col text-xl font-semibold text-gray-400">
            <h1 className="lg:text-3xl text-2xl font-bold text-black pb-5">
              EMAIL
            </h1>
            <ul>
              <li>info@ruizarch.com</li>
              <li>hello@ruizarch.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
