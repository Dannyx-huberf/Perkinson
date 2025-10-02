import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Card = ({ title, ref1, ref2, but1, but2, image }) => {
  return (
    <div className='flex flex-col gap-10 lg:flex lg:flex-row lg:items-center lg:self-stretch lg:gap-[109px]'>
      {/* Text Section */}
      <div className='flex flex-col gap-6 lg:max-w-[727px] lg:gap-[72px] lg:justify-start'>
        <div className='flex flex-col gap-4 lg:gap-[32px] self-start'>
          <h1 className='text-[14px] lg:text-[16px] font-projectfont font-[300] leading-[18px] text-textcolor'>
            {title}
          </h1>
          <p className='text-[28px] lg:text-[40px] font-projectfont font-[700] leading-[38px] lg:leading-[52px]'>
            {ref1}
          </p>
          <p className='text-[14px] lg:text-[16px] font-projectfont2 font-[400] leading-[24px] lg:leading-[30px] text-textcolor'>
            {ref2}
          </p>
        </div>

        {/* Buttons */}
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:gap-6'>
          <button className='py-[12px] px-[20px] md:py-[16px] md:px-[24px] rounded-[28px] md:rounded-[32px] bg-[rgba(211,211,211,0.05)] border border-project-color font-projectfont2 text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] font-[600] text-textcolor cursor-pointer capitalize'>
            {but1}
          </button>
          <button className='flex items-center justify-center gap-2 py-[12px] px-[20px] md:py-[16px] md:px-[24px] rounded-[28px] md:rounded-[32px] bg-[#267DFF] font-projectfont2 text-[14px] md:text-[16px] leading-[18px] md:leading-[20px] font-[600] cursor-pointer text-shadow-white hover:opacity-65 capitalize'>
            <p>{but2}</p>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className='relative flex justify-center'>
        {/* Wrap image + border in their own relative container */}
        <div className='relative inline-block'>
          {/* Decorative dashed border "3D frame" */}
          <div className='absolute top-0 left-0 w-full h-full border-2 border-dashed border-[rgba(255,255,255,0.16)] rounded-sm translate-x-3 translate-y-3'></div>

          {/* Actual image */}
          <img
            src={image}
            alt=''
            className='relative w-full max-w-[500px] lg:w-auto lg:max-w-none rounded-sm shadow-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
