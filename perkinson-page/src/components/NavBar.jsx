import React, { useState } from 'react';
import Logo from './nav-menu/Logo';
import NavLinks from './nav-menu/NavLinks';
import Buttons from './utils/Buttons';
import { ChevronRight, Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full py-4 relative'>
      {/* Mobile: Logo + Hamburger */}
      <div className='flex items-center justify-between lg:hidden'>
        <Logo />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='focus:outline-none'
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop nav */}
      <div className='hidden lg:flex items-center w-full'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <Logo />
        </div>

        {/* NavLinks centered */}
        <div className='flex-1 flex items-center justify-center space-x-6'>
          <NavLinks />
        </div>

        {/* CTA button */}
        <div className='flex-shrink-0'>
          <Buttons
            label='Join Community'
            className='bg-blue-600 text-white px-[22px] py-[16px] rounded-[25px] hover:bg-blue-700 cursor-pointer transition'
            icon={ChevronRight}
          />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='absolute top-full left-0 w-full flex flex-col items-center py-6 lg:hidden space-y-4 z-50'>
          <ul className='flex flex-col items-center space-y-4'>
            {[
              { label: 'Home', path: '/' },
              { label: 'Online Course', path: '/online-course' },
              { label: 'Success Stories', path: '/success-stories' },
              { label: 'Community', path: '/community' },
              { label: 'FAQs', path: '/faqs' },
            ].map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className='text-black text-lg hover:text-blue-400 transition'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Buttons
            label='Join Community'
            className='bg-blue-600 text-white px-[22px] py-[16px] rounded-[25px] hover:bg-blue-700 cursor-pointer transition'
            icon={ChevronRight}
          />
        </div>
      )}
    </nav>
  );
}
