import React from "react";
import logo from "../../assets/image/perkinsonlogo.png";
import { Navigation, Learn, courses, quicklinks } from "@/constants/utlitites";
const Navigations = () => {
  return (
    <section className="lg:flex lg:justify-between lg:gap-[140px]">
      <div className="">
        <img src={logo} alt="perkinson-logo" className="w-[267px]" />
      </div>

      <div className="text-white  lg:flex lg:flex-1 lg:gap-[65px]">
        <div>
          <h1 className="text-24px font-projectfont font-[900] mb-3">
            Quick Links
          </h1>

          <ul className="font-projectfont2 text-textcolor font-[400] leading-[30px]  text-[16px]">
            {quicklinks.map((links, index) => (
              <li key={index} className="cursor-pointer link-hover">
                {links}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-24px font-projectfont font-[900] mb-3">
            Navigation
          </h1>
          <ul className="font-projectfont2 text-textcolor font-[400] leading-[30px] text-[16px]">
            {Navigation.map((links, index) => (
              <li key={index} className="cursor-pointer link-hover">
                {links}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-24px font-projectfont font-[900] mb-3">Learn</h1>
          <ul className="font-projectfont2 text-textcolor font-[400] leading-[30px] text-[16px]">
            {Learn.map((links, index) => (
              <li key={index} className="cursor-pointer link-hover">
                {links}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-24px font-projectfont font-[900] mb-3">
            Courses
          </h1>
          <ul className="font-projectfont2 text-textcolor font-[400] leading-[30px] text-[16px]">
            {courses.map((links, index) => (
              <li key={index} className="cursor-pointer link-hover">
                {links}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navigations;
