import React from "react";
import FaqTab from "@/components/my-components/FaqTab";
import { QA } from "@/constants/Info";

// Example images (replace with your own assets if needed)
import DesignIcon from "../../assets/image/Frame1.svg";
import PaymentIcon from "../../assets/image/Frame2.svg";
import BeginnerIcon from "../../assets/image/Frame3.svg";
import SupportIcon from "../../assets/image/Frame4.svg";
import WomanImage from "./WomanImage";

const Bottom = () => {
  const images = [DesignIcon, PaymentIcon, BeginnerIcon, SupportIcon];

  return (
    <section className="px-4 py-10 sm:px-8 sm:py-12 lg:px-0 lg:py-0">
      <div
        className="flex flex-col gap-10 
                      sm:gap-12 
                      lg:flex lg:flex-row lg:gap-[40px] lg:items-center"
      >
        {/* FAQ Tabs */}
        <div className="w-full space-y-6 sm:space-y-8 lg:space-y-4">
          {QA.map((item, index) => (
            <FaqTab
              key={index}
              question={item.question}
              answer={item.answer}
              image={images[index]}
            />
          ))}
        </div>

        {/* Woman Image - don’t shrink */}
        <div className="flex justify-center lg:justify-end lg:flex-shrink-0">
          <WomanImage />
        </div>
      </div>
    </section>
  );
};

export default Bottom;
