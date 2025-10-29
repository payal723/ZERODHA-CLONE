import React from "react";
import { Search, UserPlus, Zap, BookOpen, TrendingUp } from "lucide-react";

const supportCategories = [
  {
    icon: <UserPlus size={28} className="text-blue-500" />,
    title: "Account Opening",
    subtopics: [
      "Getting started", "Online account opening", "Offline account opening",
      "Charges", "Company, Partnership and HUF", "NRI account opening",
    ],
  },
  {
    icon: <TrendingUp size={28} className="text-green-500" />,
    title: "Trading and Markets",
    subtopics: [
      "Trading FAQs", "Kite user manual", "Margins",
      "Product and order types", "Corporate actions", "GTT",
    ],
  },
  {
    icon: <BookOpen size={28} className="text-orange-500" />,
    title: "Policies",
    subtopics: [
      "Account modification", "Referral program", "Transferring shares",
      "DP charges", "Auctions", "Dormant accounts",
    ],
  },
  {
    icon: <Zap size={28} className="text-purple-500" />,
    title: "Platforms",
    subtopics: [
      "Kite Web", "Kite Mobile", "Coin Web",
      "Coin Mobile", "Kite Connect API", "Pi and other platforms",
    ],
  },
];

function Hero() {
  return (
    <section className="w-full bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-between items-center max-w-4xl mx-auto mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Support Portal</h1>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Track tickets
            </a>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 border rounded-lg shadow-sm">
            <h2 className="text-xl md:text-2xl font-light text-gray-700 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>
            <div className="relative mt-2 mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
              <input
                placeholder="E.g. how do I activate F&O, why is my order rejected?"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-4 text-sm text-blue-600">
              <a href="#" className="hover:underline">Track account opening</a>
              <a href="#" className="hover:underline">Track segment activation</a>
              <a href="#" className="hover:underline">Intraday margins</a>
              <a href="#" className="hover:underline">Kite user manual</a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category) => (
              <div key={category.title} className="border rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h4 className="text-lg font-semibold text-gray-800">{category.title}</h4>
                </div>
                <ul className="space-y-2">
                  {category.subtopics.map((topic) => (
                    <li key={topic}>
                      <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
                        {topic}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;