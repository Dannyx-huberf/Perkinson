import React from "react";
import FaqTab from "@/components/my-components/FaqTab";
import { QA } from "@/constant/Info";

// Example images (you can replace with your own assets)
import DesignIcon from "../../assets/image/Frame1.svg";
import PaymentIcon from "../../assets/image/Frame2.svg";
import BeginnerIcon from "../../assets/image/Frame3.svg";
import SupportIcon from "../../assets/image/Frame4.svg";
import WomanImage from "./WomanImage";

const Bottom = () => {
  const images = [DesignIcon, PaymentIcon, BeginnerIcon, SupportIcon];

  return (
    <section className="">
      <div className="lg:flex lg:gap-[40px] lg:items-center">
        <div className="space-y-4">
          {QA.map((item, index) => (
            <FaqTab
              key={index}
              question={item.question}
              answer={item.answer}
              image={images[index]}
            />
          ))}
        </div>

        <WomanImage />
      </div>
    </section>
  );
};

export default Bottom;
