import React from "react";
import fb from "../../assets/image/fb.svg";
import instagram from "../../assets/image/instagram.svg";
import twitter from "../../assets/image/twitter.svg";
import whatsapp from "../../assets/image/whatsapp.svg";

const NewsLetter = () => {
  return (
    <section className="flex flex-col gap-12 px-3 py-10 sm:px-8 md:gap-16 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-[237px] lg:px-0 lg:py-0">
      {/* Left side */}
      <article className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left lg:max-w-[439px] lg:gap-5">
        <p className="font-projectfont2 text-[15px] leading-[24px] text-textcolor sm:text-[16px] sm:leading-[26px] md:text-[17px] md:leading-[30px]">
          Questions or updates? Follow us on social media for news and design
          inspiration. Connect with us!
        </p>

        {/* Social icons */}
        <div className="flex gap-6 sm:gap-8 lg:gap-[48.9px] justify-center">
          <img
            src={fb}
            alt="facebook"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[48.99px] lg:h-[48.99px] transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(38,125,255,0.6)] cursor-pointer"
          />
          <img
            src={twitter}
            alt="twitter"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[48.99px] lg:h-[48.99px] transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(29,155,240,0.6)] cursor-pointer"
          />
          <img
            src={instagram}
            alt="instagram"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[48.99px] lg:h-[48.99px] transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(225,48,108,0.6)] cursor-pointer"
          />
          <img
            src={whatsapp}
            alt="whatsapp"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[48.99px] lg:h-[48.99px] transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(37,211,102,0.6)] cursor-pointer"
          />
        </div>
      </article>

      {/* Right side */}
      <article className="flex flex-col gap-6 text-center sm:text-left lg:max-w-[564px] lg:gap-4">
        <h1 className="font-projectfont text-[26px] leading-[32px] font-[600] sm:text-[32px] sm:leading-[38px] md:text-[36px] md:leading-[42px] lg:text-[40px] lg:leading-[48px]">
          Our Newsletters
        </h1>
        <p className="font-projectfont2 text-[15px] leading-[24px] text-textcolor sm:text-[16px] sm:leading-[26px] md:text-[17px] md:leading-[30px]">
          Subscribe to our newsletter and get exclusive insights, tips, and the
          latest trends delivered straight to your inbox. Don’t miss out — Join
          our community of design enthusiasts today!
        </p>

        {/* Form */}
        <form className="flex flex-col gap-3 rounded-[32px] bg-[#242528] p-3 sm:flex-row sm:items-center sm:gap-2 sm:p-2 lg:max-w-[483px] lg:flex lg:flex-row lg:justify-between lg:py-[3px] lg:pl-[26px]">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none sm:text-base"
          />
          <button className="rounded-[32px] bg-[#267DFF] px-5 py-3 text-sm font-projectfont2 text-white hover:opacity-80 sm:px-6 sm:py-3 sm:text-base lg:py-[16px] lg:px-[24px] lg:text-[16px]">
            Subscribe
          </button>
        </form>
      </article>
    </section>
  );
};

export default NewsLetter;
