import React from "react";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="container mx-auto border-b border-gray-300 mb-12">
      <div className="text-center mt-12 p-3">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900">
          Technology
        </h1>

        <h3 className="text-gray-600 mt-3 text-2xl sm:text-3xl font-normal">
          Sleek, modern and intuitive trading platforms
        </h3>

        <p className="mt-3 mb-12">
          Check out our{" "}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-all duration-200"
          >
            investment offerings
            <ArrowRight size={20} />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
