import React from 'react';
import review from '../assets/img/success-stories.png';
import Buttons from './utils/Buttons';

export default function Reviews() {
  return (
    <section className='w-full max-w-6xl mx-auto px-6 py-16 text-center'>
      <div className='mb-10 text-left text-white'>
        <p className='text-xs uppercase tracking-widest text-gray-400 mb-2'>
          our success stories
        </p>
        <h2 className='text-xl md:text-2xl lg:text-4xl mb-6 font-semibold'>
          We've built up quite a Rep, 200+ Students from Over 5 continents
          worldwide
        </h2>
        <p className='text-sm text-gray-400 max-w-5xl mt-6'>
          Our track record speaks for itself—having garnered a solid reputation.
          Join our thriving community and embark on a journey of learning and
          growth in UIUX design. Experience the richness of cultural diversity
          as you collaborate with peers from various corners of the globe.
          Discover why learners from all over choose our academy to kickstart
          their design careers.
        </p>

        <div className='inline-flex p-1 mt-8 bg-[#1c1d1f] rounded-full text-sm font-semibold text-gray-300 shadow-inner'>
          <Buttons
            label='Testimonials'
            className='bg-blue-600 text-white px-[24px] py-[16px] rounded-[25px] hover:bg-blue-700 cursor-pointer transition w-40 flex justify-center'
          />

          <Buttons
            label='Student Case Studies'
            className=' bg-[#1c1d1f] text-[#777779] px-[24px] py-[16px] rounded-[25px] border-none hover:cursor-pointer transition w-40 flex justify-center'
          />
        </div>
      </div>

      <div className='flex justify-center flex-col gap-7'>
        <img src={review} alt='' />
      </div>
    </section>
  );
}
