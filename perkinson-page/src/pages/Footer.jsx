import Navigations from "@/components/my-components/Navigations";
import NewsLetter from "@/components/my-components/NewsLetter";
import React from "react";

const Footer = () => {
  return (
    <section className="lg:px-[100px] lg:py-[109px] px-4 py-10 space-y-5 bg-project-color  lg:space-y-[80px]">
      <Navigations />
      <NewsLetter />
    </section>
  );
};

export default Footer;
