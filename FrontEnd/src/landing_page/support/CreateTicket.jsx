import React from "react";
import { PlusCircle } from "lucide-react";

function CreateTicket() {
  const topics = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account",
    "Opening",
    "NRI Account Opening",
    "Charges at Zerodha",
    "Zerodha IDFC FIRST Bank 3-in-1 Account",
    "Getting Started",
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-10 mt-10 mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-8 text-center text-gray-900">
          To create a ticket, select a relevant topic
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-5"
            >
              <h4 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <PlusCircle className="text-blue-600" size={22} />
                Account Opening
              </h4>

              <div className="flex flex-col space-y-2">
                {topics.map((topic, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-150 text-[15px]"
                  >
                    {topic}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
