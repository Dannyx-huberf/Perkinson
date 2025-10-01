import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ title, ref1, ref2, but1, but2, image }) => {
  return (
    <div className="lg:flex lg:items-center lg:self-stretch lg:gap-[109px]">
      <div className="max-w-[727px] lg:flex lg:flex-col lg:gap-[72px] lg:justify-start">
        <div className="lg:flex lg:flex-col lg:gap-[32px] lg:self-start ">
          <h1 className="text-[16px] font-projectfont font-[300] leading-[18px] text-textcolor ">
            {title}
          </h1>
          <p className="text-[40px] font-projectfont font-[700] leading-[52px]">
            {ref1}
          </p>
          <p className="text-[16px] font-projectfont2 font-[400] leading-[30px] text-textcolor">
            {ref2}
          </p>
        </div>
        <div className="lg:flex lg:items-center lg:gap-6 ">
          <button className="lg:flex lg:py-[16px] lg:px-[24px] lg:rounded-[32px] bg-[rgba(211, 211, 211, 0.05)] border border-project-color lg:font-projectfont2 lg:leading-[20px] cursor-pointer capitalize font-[600] text-textcolor">
            {but1}
          </button>
          <button className="lg:flex lg:py-[16px] lg:px-[24px] lg:gap-1 lg:justify-center lg:items-center lg:rounded-[32px] bg-[#267DFF] lg:font-projectfont2 lg:leading-[20px] capitalize font-[600] cursor-pointer text-shadow-white hover:opacity-65">
            <p>{but2}</p>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div>
        <img src={image} alt="" className="rounded-sm" />
      </div>
    </div>
  );
};

export default Card;
