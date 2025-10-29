import React from 'react'
import { MoveRight } from "lucide-react";


const Education = () => {
  return (
     <div className="p-8 md:p-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="md:w-1/2">
        <img src='media/education.svg' alt='Education image' className='h-full w-full object-contain'/>
        </div>
        <div className='ml-20 '>
          <h1 className='text-3xl text-gray-800'>Free and open market education</h1>
          <p className='text-gray-700 text-lg leading-relaxed mb-4 mt-4 w-xl'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
           <a
            href="#"
            className="text-blue-600 hover:text-black inline-flex items-center gap-1 ">
            Varsity<MoveRight size={18}/>
          </a>
          <p className='text-gray-700 text-lg leading-relaxed mb-4 mt-4 w-xl'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
           <a
            href="#"
            className="text-blue-600 hover:text-black inline-flex items-center gap-1">
            Trading Q&A
            <MoveRight size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Education