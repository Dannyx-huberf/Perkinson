import React from 'react';
import whyImg from '../assets/img/why-section-img.png';

export default function WhySection() {
  return (
    <section className='w-full max-w-6xl mx-auto px-6 py-16 text-center'>
      <div className='mb-10 text-left text-white'>
        <p className='text-xs uppercase tracking-widest text-gray-400 mb-2'>
          WHY PEKINSON X ACADEMY?
        </p>
        <h2 className='text-xl md:text-2xl lg:text-4xl mb-6 font-semibold'>
          At Pekinson <span className='font-semibold text-gray-300'>X</span>{' '}
          Academy, we prioritize empowering individuals through practical,
          hands-on learning experience that adapts to the evolving design
          industry. Our distinctive approach engages members in shaping the
          curriculum, ensuring its relevance and impact.
        </h2>
        <p className='italic text-sm text-gray-400 max-w-5xl mt-6'>
          To democratize quality design education globally, fostering
          collaboration and cross-cultural innovation among diverse communities
          of designers, educators, and industry professionals, while nurturing
          the next generation of ethical, empathetic design leaders.{' '}
          <span className='not-italic font-bold text-white'>
            - Our Big Picture Vision
          </span>
        </p>
      </div>

      <div className='flex justify-center'>
        <img
          src={whyImg}
          alt='Why section illustration'
          className='w-full rounded-lg'
        />
      </div>
    </section>
  );
}
