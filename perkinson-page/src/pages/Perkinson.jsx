// Client.jsx
import React from "react";
import line from "../assets/image/line.svg";
import shape from "../assets/image/shape.svg";
import PerkinsonTop from "@/components/my-components/PerkinsonTop";

const Perkinson = () => {
  return (
    <section className="relative flex flex-col items-center gap-10 px-4 py-16 bg-[#18181D] sm:gap-16 sm:py-20 md:px-10 lg:px-[100px] lg:py-[109px] lg:gap-[100px]">
      {/* Absolute images */}
      <img
        src={shape}
        alt=""
        className="w-[120px] h-[100px] absolute top-2 left-2 sm:w-[150px] sm:h-[120px] lg:w-[200.17px] lg:h-[159.85px] lg:top-0 lg:left-0"
      />
      <img
        src={line}
        alt=""
        className="w-[120px] h-[120px] absolute bottom-2 right-2 sm:w-[150px] sm:h-[150px] lg:w-[195.974px] lg:h-[196.005px] lg:bottom-0 lg:right-0"
      />

      {/* TopPart stays responsive */}
      <PerkinsonTop />

      {/* Button */}
      <button className="py-3 px-6 bg-[#267DFF] border border-[rgba(255,255,255,0.05)] rounded-[40px] flex items-center gap-2 text-white hover:opacity-60 sm:py-4 sm:px-8 lg:py-[16px] lg:px-[24px] lg:gap-[8px]">
        <p className="font-projectfont2 font-[500] text-sm leading-[22px] sm:text-base sm:leading-[24px] lg:leading-[25.6px]">
          View Our Stories
        </p>
      </button>
    </section>
  );
};

export default Perkinson;
