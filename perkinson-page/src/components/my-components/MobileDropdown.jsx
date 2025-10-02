import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const MobileDropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full md:w-auto">
      {/* Title */}
      <button
        className="w-full flex items-center justify-between md:block md:mb-3 text-left"
        onClick={() => setOpen(!open)}
      >
        <h1 className="text-[18px] md:text-[24px] font-projectfont font-[900]">
          {title}
        </h1>
        {/* Show chevron ONLY on mobile */}
        <FaChevronDown
          className={`md:hidden transform transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      <div
        className={`
          overflow-hidden transition-all duration-300 
          ${open ? "max-h-60 mt-2 opacity-100" : "max-h-0 opacity-0"} 
          md:max-h-none md:opacity-100 md:mt-0
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileDropdown;
