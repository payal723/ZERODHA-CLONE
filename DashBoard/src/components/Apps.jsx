// DashBoard/src/components/Apps.js

import React from "react";
import { Compass, BarChart, BookOpen } from "lucide-react";

const AppCard = ({ icon, title, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="block border rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-blue-500">
    <div className="flex items-center gap-4 mb-2">
      {icon}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </a>
);

const Apps = () => {
  return (
    <div>
      <h2 className="text-2xl font-light mb-6 text-gray-700">The Zerodha Universe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AppCard 
          icon={<Compass size={32} className="text-blue-500" />}
          title="Coin"
          description="Buy direct mutual funds, commission-free, delivered directly to your Demat account."
          link="#"
        />
        <AppCard 
          icon={<BookOpen size={32} className="text-green-500" />}
          title="Varsity"
          description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations."
          link="#"
        />
        <AppCard 
          icon={<BarChart size={32} className="text-orange-500" />}
          title="Kite Connect"
          description="Build your own trading platforms and experiences with our super simple HTTP/JSON APIs."
          link="#"
        />
         <AppCard 
          icon={<div className="text-purple-500 font-bold text-2xl">S</div>}
          title="smallcase"
          description="Ready-made stock & ETF baskets that help you build a diversified, long-term portfolio."
          link="#"
        />
      </div>
    </div>
  );
};

export default Apps;