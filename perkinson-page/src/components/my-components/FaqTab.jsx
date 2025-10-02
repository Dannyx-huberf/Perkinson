import React from "react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";

const FaqTab = ({ question, answer, image }) => {
  return (
    <Alert
      className="
        flex items-start gap-3 rounded-[16px] border bg-[rgba(255,255,255,0.05)] p-4
        sm:rounded-[18px] sm:p-5
        md:gap-4
        lg:max-w-[715px] lg:rounded-[20px] lg:p-[24px]
      "
    >
      {image && (
        <img
          src={image}
          alt="faq icon"
          className="w-[24px] h-[24px] object-contain sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]"
        />
      )}
      <div>
        <AlertTitle
          className="
            mb-2 text-[15px] leading-[22px] font-projectfont font-[700] text-white
            sm:text-[16px] sm:leading-[23px] sm:mb-2.5
            lg:text-[17px] lg:leading-[24px] lg:mb-3
          "
        >
          {question}
        </AlertTitle>
        <AlertDescription
          className="
            text-[12px] leading-[18px] font-projectfont2 text-textcolor
            sm:text-[13px] sm:leading-[19px]
            md:text-[14px] md:leading-[20px]
            lg:text-[12px] lg:leading-[20px]
          "
        >
          {answer}
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default FaqTab;
