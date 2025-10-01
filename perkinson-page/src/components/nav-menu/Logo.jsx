import React from 'react';
import logo from '@/assets/img/logo.png';

export default function Logo() {
  return (
    <div className='flex items-center'>
      <img src={logo} alt='Pekinson Academy' className='w-35' />
    </div>
  );
}
