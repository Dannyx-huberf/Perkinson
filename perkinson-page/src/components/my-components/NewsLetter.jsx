import React from "react";
import fb from "../../assets/image/fb.svg";
import instagram from "../../assets/image/instagram.svg";
import twitter from "../../assets/image/twitter.svg";
import whatsapp from "../../assets/image/whatsapp.svg";

const NewsLetter = () => {
  return (
    <section className="lg:flex lg:gap-[237px] lg:items-center">
      <article className="lg:max-w-[439px] lg:flex-col lg:space-y-5">
        <p className="font-projectfont2 text-[17px] leading-[30px] text-textcolor">
          Questions or updates? Follow us on social media for news and design
          inspiration. Connect with us!
        </p>
        <div className="lg:flex lg:gap-[48.9px]">
          <img src={fb} alt="" className="w-[48.99px] h-[48.99px]" />
          <img src={twitter} alt="" className="w-[48.99px] h-[48.99px]" />
          <img src={instagram} alt="" className="w-[48.99px] h-[48.99px]" />
          <img src={whatsapp} alt="" className="w-[48.99px] h-[48.99px]" />
        </div>
      </article>
      <article className="max-w-[564px] lg:flex-col lg:justify-between">
        <h1 className="font-projectfont text-[40px] leading-[20.8px] font-[600] lg:mb-3">
          Our Newsletters
        </h1>
        <p className="font-projectfont2 text-[17px] leading-[30px] text-textcolor">
          Subscribe to our newsletter and get exclusive insights, tips, and the
          latest trends delivered straight to your inbox. Don’t miss out — Join
          our community of design enthusiasts today!
        </p>
        <form className="rounded-[32px] bg-[#242528] lg:max-w-[483px] lg:flex lg:justify-between lg:py-[3px] lg:pl-[26px]">
          <input
            type="text"
            placeholder="Enter your Email Address"
            className=""
          />
          <button className="lg:self-end-safe lg:rounded-4xl lg:py-[16px] lg:px-[24px] lg:text-[16px] font-projectfont2 bg-[#267DFF] hover:cursor-pointer">
            Subscribe
          </button>
        </form>
      </article>
    </section>
  );
};

export default NewsLetter;
