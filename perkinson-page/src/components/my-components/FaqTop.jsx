import React from "react";

const FaqTop = () => {
  return (
    <div
      className="
        flex flex-col gap-6 items-center text-left
        sm:gap-8 sm:items-start sm:text-left
        lg:flex lg:flex-col lg:self-stretch lg:gap-[32px] lg:items-start lg:text-left
      "
    >
      {/* Small heading */}
      <h1
        className="
          text-[14px] leading-[16px] font-projectfont font-[300] uppercase
          sm:text-[15px] sm:leading-[17px]
          lg:text-[16px] lg:leading-[18px]
        "
      >
        Frequently Asked Questions
      </h1>

      {/* Main heading */}
      <p
        className="
          text-[22px] leading-[30px] font-projectfont font-[700] capitalize text-shadow-white
          sm:text-[28px] sm:leading-[36px]
          md:text-[32px] md:leading-[42px]
          lg:text-[40px] lg:leading-[52px]
        "
      >
        Find All the Answers You Need About PekinsonX Academy, Our UI/UX and
        Product Design Courses, and How You Can Thrive in Our Dynamic Remote
        Learning Community
      </p>

      {/* Paragraph */}
      <p
        className="
          text-[14px] leading-[22px] font-projectfont2 text-textcolor font-[400]
          sm:text-[16px] sm:leading-[26px]
          md:text-[17px] md:leading-[28px]
          lg:text-[18px] lg:leading-[30px]
        "
      >
        Curious about what PekinsonX Academy has to offer? Our FAQ section is
        here to help! Whether you're wondering about course details, community
        benefits, or how our remote learning works, we've got you covered.
        Explore our comprehensive FAQs to find the answers you're looking for,
        and feel confident in your journey with us. Ready to dive deeper? Visit
        our full FAQ page for all the information you need
      </p>
    </div>
  );
};

export default FaqTop;
