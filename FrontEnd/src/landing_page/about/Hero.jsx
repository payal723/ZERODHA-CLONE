import React from "react";

function Hero() {
  return (
    <div className="container mx-auto">
      <div className="px-5 py-10 sm:px-12 sm:py-12 mt-12 mb-12">
        <h1 className="text-3xl sm:text-4xl text-center font-normal">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="
          flex flex-col md:flex-row 
          px-5 py-10 sm:px-12 sm:py-12 mt-12 
          border-t border-gray-300 
          text-gray-600 
          leading-[1.8] text-lg sm:text-xl">
        <div className="w-full md:w-1/2 p-5">
          <p className="mb-6">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="mb-6">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="mb-6">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-5">
          <p className="mb-6">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="mb-6">
            <a href="#" className="no-underline text-blue-600 hover:text-blue-800">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="mb-6">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;