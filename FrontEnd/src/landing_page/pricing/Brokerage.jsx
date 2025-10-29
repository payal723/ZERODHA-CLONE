import React from "react";

function Brokerage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row px-5 py-10 mt-12 text-center border-t border-gray-300">
        <div className="w-full md:w-2/3 p-4">
          <a href="#" className="no-underline text-blue-600 hover:text-blue-800">
            <h3 className="text-xl font-semibold mb-4">Brokerage calculator</h3>
          </a>
          <ul
            className="text-left leading-relaxed text-xs sm:text-sm text-gray-600 list-none p-0"
          >
            <li className="mb-2">
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="mb-2">Digital contract notes will be sent via e-mail.</li>
            <li className="mb-2">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="mb-2">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li className="mb-2">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-2">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        
        <div className="w-full md:w-1/3 p-4">
          <a href="#" className="no-underline text-blue-600 hover:text-blue-800">
            <h3 className="text-xl font-semibold">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;