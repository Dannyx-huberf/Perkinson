import React from "react";

const TopPart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 py-6 text-center lg:gap-[32px] lg:px-7 lg:py-3">
      <h1 className="text-[14px] lg:text-[16px] text-textcolor leading-[18px] font-projectfont uppercase">
        OUR CLIENTS
      </h1>
      <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-projectfont font-[600] leading-[32px] sm:leading-[40px] lg:leading-[52px] max-w-[833px]">
        Equipping individuals and teams in Product Design with job-ready skills
        in high demand
      </p>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-textcolor leading-[22px] sm:leading-[26px] lg:leading-[30px] max-w-[783px] capitalize">
        Be inspired, gain knowledge, and explore real testimonials from
        individuals and teams about the invaluable benefits they've received
        from PekinsonX Academy.
      </p>
    </div>
  );
};

export default TopPart;
