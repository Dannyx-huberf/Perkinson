import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navMenu } from '../../constants/navMenu';

export default function HeroNav() {
  const location = useLocation();
  return (
    <ul className='hidden md:flex space-x-8 font-medium'>
      {navMenu.map((link) => {
        const isActive =
          location.pathname === link.path ||
          (location.pathname === '/' && link.path === '/design');

        return (
          <li key={link.path}>
            <Link
              to={link.path}
              className={
                isActive
                  ? 'text-gray-200 transition'
                  : 'text-[#6b6b6d] hover:text-blue-400 transition'
              }
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
