import React from 'react';
import backgroundImage from '@/assets/img/hero-banner-img.png';
import Buttons from './utils/Buttons';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className=' w-full py-20 md:py-32 lg:py-48 text-white text-center'>
      <div className='relative w-[80%] mx-auto'>
        {/* Main Heading */}
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-3 lg:mb-5'>
          From Learning to Mastering -<br className='sm:hidden' />
          Your Design Odyssey Starts Now!
        </h1>

        {/* Sub-text */}
        <p className='text-[17px] text-gray-300 mb-3 lg:mb-6'>
          Express your creativity and dive into the world of design with our
          expert-led courses. Elevate your career journey with our tailored
          programs.
        </p>

        {/* Buttons */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
          <Buttons
            label='Success Stories'
            className='text-[#777779] px-[22px] py-[16px] rounded-[25px] bg-[#1c1d1f] hover:bg-gray-900 cursor-pointer transition border-gray-600 w-40 flex justify-center'
          />

          <Buttons
            label='Join Community'
            className='bg-blue-600 text-white px-[22px] py-[16px] rounded-[25px] hover:bg-blue-700 cursor-pointer transition w-40 flex justify-center'
            icon={ChevronRight}
          />

          <img
            src={backgroundImage}
            className='hidden lg:flex absolute right-10 top-[-60px] h-90'
          />
        </div>
      </div>
    </section>
  );
}
