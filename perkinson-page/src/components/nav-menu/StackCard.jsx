import React from "react";
import stackCard from "../../assets/img/stack-card.png";

export default function StackCard() {
  return (
    <div className="max-w-5xl w-full flex justify-center mb-15 lg:mb-10">
      <img src={stackCard} alt="Stack Card" className="rounded-xl shadow-lg" />
    </div>
  );
}
