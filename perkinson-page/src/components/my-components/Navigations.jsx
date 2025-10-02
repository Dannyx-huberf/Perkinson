import React from "react";
import logo from "../../assets/image/perkinsonlogo.png";
import { Navigation, Learn, courses, quicklinks } from "@/constants/utlitites";
import MobileDropdown from "./MobileDropdown"; // import wrapper

const Navigations = () => {
  return (
    <section className=" flex flex-col flex-wrap gap-14 md:flex-row md:flex md:justify-between md:gap-[40px] lg:flex-row lg:flex lg:justify-between lg:gap-[145px]">
      <div>
        <img src={logo} alt="perkinson-logo" className="lg:w-[267px] w-35" />
      </div>

      <div className="text-white flex flex-col md:flex-row md:flex-1 md:gap-[30px] md:flex-wrap lg:flex-row lg:flex-1 lg:gap-[65px] ">
        <MobileDropdown title="Quick Links">
          <ul className="font-projectfont2 text-textcolor font-[400] leading-[30px] text-[16px]">
            {quicklinks.map((links, index) => (
              <li key={index} className="cursor-pointer link-hover">
                {links}
              </li>
            ))}
          </ul>
        </MobileDropdown>

        <MobileDropdown title="Navigation">
          <ul className="font-projectfont2 text-textcolor font-[400] leading-[30px] text-[16px]">
            {Navigation.map((links, index) => (
              <li key={index} className="cursor-pointer link-hover">
                {links}
              </li>
            ))}
          </ul>
        </MobileDropdown>

        <MobileDropdown title="Learn">
          <ul className="font-projectfont2 text-textcolor font-[400] leading-[30px] text-[16px]">
            {Learn.map((links, index) => (
              <li key={index} className="cursor-pointer link-hover">
                {links}
              </li>
            ))}
          </ul>
        </MobileDropdown>

        <MobileDropdown title="Courses">
          <ul className="font-projectfont2 text-textcolor font-[400] leading-[30px] text-[16px]">
            {courses.map((links, index) => (
              <li key={index} className="cursor-pointer link-hover">
                {links}
              </li>
            ))}
          </ul>
        </MobileDropdown>
      </div>
    </section>
  );
};

export default Navigations;
