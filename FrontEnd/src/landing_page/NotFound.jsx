import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="text-center max-w-2xl">
        <img 
          src="/media/404.jpg" 
          alt="404 not found" 
          className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 rounded-lg shadow-lg object-cover"
        />
        
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8 text-lg">
          The page you're looking for doesn't exist.
        </p>
                <Link 
          to="/" 
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;