import Bottom from "@/components/my-components/Bottom";
import FaqTop from "@/components/my-components/FaqTop";
import React from "react";

const Faq = () => {
  return (
    <div
      className="
        bg-project-color 
        px-4 py-10 
        sm:px-6 sm:py-14 
        md:px-10 md:py-16 
        lg:px-[100px] lg:py-[109px] 
        lg:flex lg:flex-col lg:gap-[100px]
      "
    >
      <FaqTop />
      <Bottom />
    </div>
  );
};

export default Faq;
