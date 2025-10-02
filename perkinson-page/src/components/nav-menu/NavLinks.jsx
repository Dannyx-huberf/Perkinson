import React from 'react';
import { Link } from 'react-router-dom'; // or Next.js <Link>
import { navLinks } from '@/constants/navLinks';

export default function NavLinks() {
  return (
    <ul className='hidden md:flex space-x-6 text-black font-medium'>
      {navLinks.map((link) => (
        <li key={link.path}>
          <Link
            to={link.path}
            className='text-gray-400 hover:text-blue-400 transition'
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
