// Client.jsx
import React from "react";
import line from "../assets/image/line.png";
import shape from "../assets/image/shape.png";
import TopPart from "@/components/my-components/TopPart";
import Bottom from "@/components/my-components/Bottom";
import arraw from "../assets/image/ewq.svg";

const Client = () => {
  return (
    <section className="relative px-[100px] py-[109px] bg-[#18181D] flex flex-col gap-[100px] items-center">
      {/* Absolute images */}
      <img
        src={shape}
        alt=""
        className="w-[200.17px] h-[159.85px] absolute top-0 left-0"
      />
      <img
        src={line}
        alt=""
        className="w-[195.974px] h-[196.005px] absolute bottom-0 right-0"
      />

      <TopPart />
      <Bottom />

      <button className="lg:py-[16px] lg:px-[130.5px] bg-[rgba(255, 255, 255, 0.05)] border-[0.913px] border-[rgba(255, 255, 255, 0.05)] rounded-[40px] lg:flex lg:gap-[8px] hover:opacity-60 ">
        <p className="font-projectfont2 font-[500] leading-[25.6px]">
          View Our Stories
        </p>{" "}
        <img src={arraw} alt="" />
      </button>
    </section>
  );
};

export default Client;
