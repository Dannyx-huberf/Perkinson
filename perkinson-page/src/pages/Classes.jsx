import Card from "@/components/my-components/Card";
import React from "react";
import { details } from "@/constants/utlitites";

const Classes = () => {
  return (
    <section className="px-4 py-10 lg:px-[100px] lg:py-[100px]">
      <div className="flex flex-col gap-12 lg:gap-[100px]">
        {details.map((details, index) => {
          return (
            <Card
              key={index}
              title={details.title}
              ref1={details.ref1}
              ref2={details.ref2}
              but1={details.but1}
              but2={details.but2}
              image={details.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Classes;
