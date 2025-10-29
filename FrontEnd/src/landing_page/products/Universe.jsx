import React from "react";

function Universe() {
  return (
    <div className="container mx-auto mt-12">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-normal mb-3">
          The Zerodha Universe
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 p-3 mt-5">
            <img 
              src="media/smallcaseLogo.png" 
              alt="Thematic investment platform" 
              className="mx-auto h-12 mb-2"
            />
            <p className="text-sm text-gray-500 mt-2">
              Thematic investment platform
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-3 mt-5">
            <img 
              src="media/smallcaseLogo.png" 
              alt="Thematic investment platform" 
              className="mx-auto h-12 mb-2"
            />
            <p className="text-sm text-gray-500 mt-2">
              Thematic investment platform
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-3 mt-5">
            <img 
              src="media/smallcaseLogo.png" 
              alt="Thematic investment platform" 
              className="mx-auto h-12 mb-2"
            />
            <p className="text-sm text-gray-500 mt-2">
              Thematic investment platform
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-3 mt-5">
            <img 
              src="media/smallcaseLogo.png" 
              alt="Thematic investment platform" 
              className="mx-auto h-12 mb-2"
            />
            <p className="text-sm text-gray-500 mt-2">
              Thematic investment platform
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-3 mt-5">
            <img 
              src="media/smallcaseLogo.png" 
              alt="Thematic investment platform" 
              className="mx-auto h-12 mb-2"
            />
            <p className="text-sm text-gray-500 mt-2">
              Thematic investment platform
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-3 mt-5">
            <img 
              src="media/smallcaseLogo.png" 
              alt="Thematic investment platform" 
              className="mx-auto h-12 mb-2"
            />
            <p className="text-sm text-gray-500 mt-2">
              Thematic investment platform
            </p>
          </div>
        </div>

        <button
          className="
            p-2 
            bg-blue-600 
            hover:bg-blue-700 
            text-white 
            text-xl 
            font-medium 
            rounded 
            mt-10 mb-12
            w-11/12 sm:w-1/2 md:w-1/5 
            mx-auto
          "
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;