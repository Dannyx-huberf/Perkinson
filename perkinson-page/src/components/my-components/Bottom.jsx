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
    <div className="lg:flex lg:justify-center lg:items-center lg:gap-[16px]">
      <img src={typeform} alt="" className="w-[162px] h-[55px]" />
      <img src={spotify} alt="" className="w-[128px] h-[47.61px]" />
      <img src={shopify} alt="" className="w-[128px] h-[47.61px]" />
      <img src={service} alt="" className="w-[162px] h-[55px]" />
      <img src={wise} alt="" className="w-[128px] h-[47.61px]" />
      <img src={anz} alt="" className="w-[162px] h-[55px]" />
      <img src={samsung} alt="" className="w-[162px] h-[55px]" />
    </div>
  );
};

export default Bottom;
