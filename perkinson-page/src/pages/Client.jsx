// Client.jsx
import React from "react";
import line from "../assets/image/line.png";
import shape from "../assets/image/shape.png";
import TopPart from "@/components/my-components/TopPart";
import Bottom from "@/components/my-components/Bottom";
import arraw from "../assets/image/ewq.svg";

const Client = () => {
  return (
    <section
      className="
        relative flex flex-col items-center gap-12 px-4 py-10 
        sm:gap-16 sm:px-6 sm:py-14
        md:gap-20 md:px-10 md:py-16
        lg:px-[100px] lg:py-[109px] lg:gap-[100px] lg:bg-[#18181D]
      "
    >
      {/* Absolute images */}
      <img
        src={shape}
        alt=""
        className="w-[120px] h-[100px] absolute top-0 left-0 sm:w-[160px] sm:h-[130px] lg:w-[200.17px] lg:h-[159.85px]"
      />
      <img
        src={line}
        alt=""
        className="w-[120px] h-[120px] absolute bottom-0 right-0 sm:w-[160px] sm:h-[160px] lg:w-[195.974px] lg:h-[196.005px]"
      />

      <TopPart />
      <Bottom />

      {/* Button */}
      <button
        className="
          flex items-center gap-3 rounded-[32px] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] px-6 py-3 text-white hover:opacity-60
          sm:px-8 sm:py-4
          md:px-10 md:py-5
          lg:py-[16px] lg:px-[130.5px] lg:rounded-[40px] lg:gap-[8px]
        "
      >
        <p className="font-projectfont2 font-[500] leading-[22px] sm:leading-[24px] lg:leading-[25.6px]">
          View Our Stories
        </p>
        <img
          src={arraw}
          alt=""
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-auto lg:h-auto"
        />
      </button>
    </section>
  );
};

export default Client;
