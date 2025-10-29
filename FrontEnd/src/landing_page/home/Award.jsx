import React from 'react';
import { MoveRight } from 'lucide-react';

const Award = () => {
  return (
    <div className='p-8 md:p-12 max-w-6xl mx-auto leading-[1.2] '>
      <div className='flex flex-col md:flex-row items-center gap-16'>
        <div className='md:w-1/2 space-y-10'>
          <div>
            <h1 className='text-3xl font-semibold text-gray-700 mb-7 '>Trust with confidence</h1>
            <h3 className='text-2xl text-gray-800 mb-3'>
              Customer-first always
            </h3>
            <p className='text-gray-600 leading-relaxed font-lg '>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold text-gray-700 mb-3 '>
              No spam or gimmicks
            </h3>
            <p className='text-gray-600 leading-relaxed font-lg'>
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. 
              <a href="#" className='text-blue-600 hover:underline ml-1'>
                Our philosophies
              </a>.
            </p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold text-gray-700 mb-3'>
              The Zerodha universe
            </h3>
            <p className='text-gray-600 leading-relaxed font-lg'>
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
            </p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold text-gray-700 mb-3'>
              Do better with money
            </h3>
            <p className='text-gray-600 leading-relaxed font-lg'>
              With initiatives like 
              <a href="#" className='text-blue-600 hover:underline mx-1'>
                Nudge
              </a> 
              and 
              <a href="#" className='text-blue-600 hover:underline mx-1'>
                Kill Switch
              </a>, 
              we don't just facilitate transactions, but actively help you do better with money.
            </p>
          </div>
        </div>    
        <div className='md:w-1/2'>
          <img 
            src="media/ecosystem.png" 
            alt="The Zerodha Universe" 
            className='w-full h-auto'
          />
          <div className='flex justify-center gap-8 mt-8'>
            <a href="#" className='text-blue-600 hover:text-black inline-flex items-center gap-1'>
              Explore our products<MoveRight size={18} />   </a>
            <a href="#" className='text-blue-600 hover:text-black inline-flex items-center gap-1'>
              Try Kite demo <MoveRight size={18} />
            </a> 
          </div>
        </div>

      </div>
      <div>
        <img src='https://zerodha.com/static/images/press-logos.png' alt='Zerodha' className='mt-10 flex ml-40 p-10' />
      </div>
    </div>
  );
}

export default Award;