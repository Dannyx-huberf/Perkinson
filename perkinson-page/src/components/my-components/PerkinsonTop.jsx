import React from "react";
import logo from "../../assets/image/perkinsonlogo.png";

const PerkinsonTop = () => {
  return (
    <div className="flex flex-col items-center gap-6 px-4 text-center lg:gap-[50px] lg:px-0">
      {/* Small title */}
      <h1 className="text-[14px] leading-[16px] font-[300] font-projectfont text-textcolor sm:text-[16px] sm:leading-[18px]">
        Pekinson X Academy
      </h1>

      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-[200px] sm:w-[300px] md:w-[380px] lg:max-w-[443px]"
      />

      {/* Main heading */}
      <p className="text-[24px] leading-[32px] font-[700] font-projectfont text-shadow-white sm:text-[28px] sm:leading-[36px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[52px]">
        Engage with our Students Globally
      </p>

      {/* Subheading */}
      <p className="text-[14px] leading-[22px] font-[600] font-projectfont2 text-textcolor sm:text-[16px] sm:leading-[26px] md:text-[18px] md:leading-[30px]">
        Pose Inquiries, Assist Others, Discuss Your Studies, and Connect with
        People Worldwide
      </p>
    </div>
  );
};

export default PerkinsonTop;
