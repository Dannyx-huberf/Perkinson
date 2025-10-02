import React from 'react';
import perk1 from '../assets/img/perks-1.png';
import perk2 from '../assets/img/perks-2.png';
import perk3 from '../assets/img/perk-3.png';

export default function Perks() {
  return (
    <section className='w-full max-w-6xl mx-auto px-6 py-16 text-center'>
      <div className='mb-10 text-left text-white'>
        <p className='text-xs uppercase tracking-widest text-gray-400 mb-2'>
          THE PERKS
        </p>
        <h2 className='text-xl md:text-2xl lg:text-4xl mb-6 font-semibold'>
          An overview of Benefits to expect when you join the academy
        </h2>
        <p className='text-sm text-gray-400 max-w-5xl mt-6'>
          Embark on a transformative journey with our comprehensive guide to the
          benefits awaiting you upon joining the academy. Explore an array of
          advantages designed to enrich your learning experience, foster
          personal growth, and propel you towards success.
        </p>
      </div>

      <div className='flex justify-center flex-col gap-7'>
        <img
          src={perk1}
          alt='Design Briefs & Projects and Mentorship Opportunities'
          className='rounded-2xl w-full shadow-xl'
        />

        <img
          src={perk2}
          alt='Alumni Network, Continued-Learning, and Digital Design Certificates'
          className='rounded-2xl w-full shadow-xl'
        />

        <img
          src={perk3}
          alt='Exclusive Design Resources'
          className='rounded-2xl w-full shadow-xl'
        />
      </div>
    </section>
  );
}
