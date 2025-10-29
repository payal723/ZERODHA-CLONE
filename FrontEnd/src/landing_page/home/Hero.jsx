

import React from 'react';

const Hero = () => {
  return (
    <div className='p-5 mx-auto max-w-7xl'> 
      <div className='flex flex-col items-center text-center'>
        <img src='media/homeHero.png' alt='Hero-Image' className='mb-10 w-full max-w-4xl mt-20'/> 
                <h1 className='text-4xl font-bold mb-4'>Invest in everything</h1>
                <p className='text-lg mb-8'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button 
          className='mb-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-4 rounded-lg shadow-md w-40 transition duration-300 ease-in-out'>
          Signup For Free
        </button>
      </div>
    </div>
  );
};

export default Hero;