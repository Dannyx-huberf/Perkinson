// Bottom.jsx
import React from "react";

import shopify from "../../assets/image/ii.png";
import spotify from "../../assets/image/pp.png";
import samsung from "../../assets/image/rt.svg";
import wise from "../../assets/image/uu.png";
import anz from "../../assets/image/tte.svg";
import typeform from "../../assets/image/typeform.svg";
import service from "../../assets/image/sss.svg";

const Bottom = () => {
  return (
    <div
      className="
        flex flex-wrap justify-center items-center gap-6
        lg:flex-nowrap lg:gap-[16px]
      "
    >
      <img
        src={typeform}
        alt="typeform"
        className="w-[120px] sm:w-[140px] lg:w-[162px] h-auto"
      />
      <img
        src={spotify}
        alt="spotify"
        className="w-[100px] sm:w-[120px] lg:w-[128px] h-auto"
      />
      <img
        src={shopify}
        alt="shopify"
        className="w-[100px] sm:w-[120px] lg:w-[128px] h-auto"
      />
      <img
        src={service}
        alt="service"
        className="w-[120px] sm:w-[140px] lg:w-[162px] h-auto"
      />
      <img
        src={wise}
        alt="wise"
        className="w-[100px] sm:w-[120px] lg:w-[128px] h-auto"
      />
      <img
        src={anz}
        alt="anz"
        className="w-[120px] sm:w-[140px] lg:w-[162px] h-auto"
      />
      <img
        src={samsung}
        alt="samsung"
        className="w-[120px] sm:w-[140px] lg:w-[162px] h-auto"
      />
    </div>
  );
};

export default Bottom;
