import React from "react";
import { MoveRight } from "lucide-react";

const Pricing = () => {
  return (
    <div className="p-8 md:p-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="md:w-2/5">
          <h2 className="text-3xl font-semibold text-gray-700 mb-3">
            Unbeatable pricing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:text-black inline-flex items-center gap-1 "
          >
            See pricing
            <MoveRight size={18} />
          </a>
        </div>
        <div className="md:w-3/5 flex flex-col sm:flex-row justify-around gap-8 w-full">
          <div className="flex items-center gap-3">
            <img
              src="https://zerodha.com/static/images/pricing-eq.svg"
              alt="₹0"
              className="h-20 w-auto"
            />
            <p className="text-gray-600 text-sm">
              Free account
              <br />
              opening
            </p>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://zerodha.com/static/images/pricing-eq.svg"
              alt="₹0"
              className="h-20 w-auto"
            />
            <p className="text-gray-600 text-sm">
              Free equity delivery
              <br />
              and direct mutual funds
            </p>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://zerodha.com/static/images/other-trades.svg"
              alt="₹20"
              className="h-20 w-auto"
            />
            <p className="text-gray-600 text-sm">
              Intraday and
              <br />
              F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
