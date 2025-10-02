import React from 'react';
import HeroNav from './components/nav-menu/HeroNav';
import StackCard from './components/nav-menu/StackCard';

const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <nav className='w-full flex justify-center py-6'>
        <HeroNav />
      </nav>

      <div className='w-full flex justify-center mt-4'>
        <StackCard />
      </div>
    </div>
  );
};

export default App;
