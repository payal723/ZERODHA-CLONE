import React from "react";

function Hero() {
  return (
    <div className="container mx-auto">
      <div className="px-5 py-10 mt-12 border-b border-gray-300 text-center">
        <h1 className="text-4xl sm:text-5xl font-normal">Pricing</h1>
        <h3 className="text-gray-600 mt-3 text-xl sm:text-2xl font-normal">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="flex flex-col md:flex-row px-5 py-10 mt-12 text-center">
        <div className="w-full md:w-1/3 p-4 mb-8 md:mb-0">
          <img 
            src="media/pricingEquity.svg" 
            alt="Equity"
            className="mx-auto" 
          />
          <h1 className="text-3xl font-semibold mt-4">Free equity delivery</h1>
          <p className="text-gray-600 mt-2">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4 mb-8 md:mb-0">
          <img 
            src="media/intradayTrades.svg" 
            alt="Intraday Trades"
            className="mx-auto" 
          />
          <h1 className="text-3xl font-semibold mt-4">Intraday and F&O trades</h1>
          <p className="text-gray-600 mt-2">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img 
            src="media/pricingEquity.svg" 
            alt="Direct MF"
            className="mx-auto" 
          />
          <h1 className="text-3xl font-semibold mt-4">Free direct MF</h1>
          <p className="text-gray-600 mt-2">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;