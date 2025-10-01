import Bottom from "@/components/my-components/Bottom";
import FaqTop from "@/components/my-components/FaqTop";
import React from "react";

const Faq = () => {
  return (
    <div className="bg-project-color px-[100px] py-[109px] lg:flex lg:flex-col lg:gap-[100px]">
      <FaqTop />
      <Bottom />
    </div>
  );
};

export default Faq;
