import React from 'react'

const OpenAccount = () => {
  return (
    <div className='p-5 mx-auto max-w-7xl'> 
      <div className='flex flex-col items-center text-center mt-5'>
                <h3 className='text-3xl mb-4 text-gray-800'>Open a Zerodha account</h3>
                <p className='text-lg mb-8 text-gray-700'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button 
          className='mb-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-4 rounded-lg shadow-md w-40 transition duration-300 ease-in-out'>
          Signup For Free
        </button>
      </div>
    </div>
    )
}

export default OpenAccount