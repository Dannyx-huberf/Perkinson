import React from "react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";

const FaqTab = ({ question, answer, image }) => {
  return (
    <Alert className="flex items-start gap-3 lg:max-w-[715px] rounded-[20px] border bg-[rgba(255, 255, 255, 0.05)] lg:p-[24px]">
      {image && (
        <img
          src={image}
          alt="faq icon"
          className="w-[32px] h-[32px] object-contain"
        />
      )}
      <div>
        <AlertTitle
          className={`mb-3 text-[17px] font-projectfont font-[700] leading-[24px] text-white`}
        >
          {question}
        </AlertTitle>
        <AlertDescription
          className={`text-[12px] font-projectfont2 leading-[20px] text-textcolor`}
        >
          {answer}
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default FaqTab;
