import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import png1 from "../Images/marq1.png";
import png2 from "../Images/marq2.png";
import png3 from "../Images/marq3.png";
import png4 from "../Images/marq4.png";
import png5 from "../Images/marq5.png";
import png6 from "../Images/marq6.png";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      const images = marquee.children;
      const totalWidth = Array.from(images).reduce(
        (acc, img) => acc + img.offsetWidth,
        0
      );

      gsap.to(marquee, {
        x: `-${totalWidth / 2}px`, // Corrected template literal syntax
        ease: "none",
        duration: 10,
        repeat: -1,
        onRepeat: () => {
          gsap.set(marquee, { x: 0 }); // Correctly reset position
        },
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="marquee-container overflow-x-hidden w-full bg-white h-[160px] flex justify-center items-center">
      <div ref={marqueeRef} className="marquee-content flex w-full space-x-28">
        <img src={png1} alt="" className="h-16" />
        <img src={png2} alt="" className="h-16" />
        <img src={png3} alt="" className="h-16" />
        <img src={png4} alt="" className="h-16" />
        <img src={png5} alt="" className="h-16" />
        <img src={png6} alt="" className="h-16" />
        <img src={png1} alt="" className="h-16" />
        <img src={png2} alt="" className="h-16" />
        <img src={png3} alt="" className="h-16" />
        <img src={png4} alt="" className="h-16" />
        <img src={png5} alt="" className="h-16" />
        <img src={png6} alt="" className="h-16" />
      </div>
    </div>
  );
};

export default Marquee;
