import Navigations from "@/components/my-components/Navigations";
import NewsLetter from "@/components/my-components/NewsLetter";
import React from "react";

const Footer = () => {
  return (
    <section className="px-[100px] py-[109px] bg-project-color  lg:space-y-[80px]">
      <Navigations />
      <NewsLetter />
    </section>
  );
};

export default Footer;
