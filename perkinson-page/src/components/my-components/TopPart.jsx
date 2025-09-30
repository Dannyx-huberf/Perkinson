import React from "react";

const TopPart = () => {
  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-[32px]  px-7 py-3 text-center">
      <h1 className="text-[16px] text-textcolor leading-[18px] font-projectfont ">
        OUR CLIENTS
      </h1>
      <p className="text-[40px] font-projectfont font-[600] leading-[52px] max-w-[833px]">
        Equipping individuals and teams in Product Design with job-ready skills
        in high demand
      </p>
      <p className="text-[18px] text-textcolor leading-[30px] max-w-[783px] capitalize">
        Be inspired, gain knowledge, and explore real testimonials from
        individuals and teams about the invaluable benefits they've received
        from PekinsonX Academy.
      </p>
    </div>
  );
};

export default TopPart;
