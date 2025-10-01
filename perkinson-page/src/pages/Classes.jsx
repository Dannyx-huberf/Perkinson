import Card from "@/components/my-components/Card";
import React from "react";
import { details } from "@/constants/utlitites";

const Classes = () => {
  return (
    <section className="lg:px-[100px] lg:py-[100px] ">
      <div className="lg:flex lg:flex-col lg:gap-[100px]">
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
