import React from "react";

function Team() {
  return (
    <div className="container mx-auto">
      <div className="px-3 py-6 mt-12 border-t border-gray-300">
        <h1 className="text-center text-4xl font-normal">People</h1>
      </div>

      <div
        className="
          flex flex-col md:flex-row 
          px-3 py-6 
          text-gray-600 
          leading-[1.8] text-lg sm:text-xl
        "
      >
        <div className="w-full md:w-1/2 p-3 text-center">
          <img
            src="media/nithinKamath.jpg"
            className="rounded-full w-1/2 mx-auto"
          />
          <h4 className="mt-8 text-2xl font-semibold text-gray-800">
            Nithin Kamath
          </h4>
          <h6 className="text-base font-normal">Founder, CEO</h6>
        </div>
        <div className="w-full md:w-1/2 p-3">
          <p className="mb-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="mb-4">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="mb-4">Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800 underline">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;