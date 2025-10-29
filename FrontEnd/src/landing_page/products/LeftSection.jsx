import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mx-auto mt-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <img src={imageURL} alt={productName} className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 p-5 mt-5">
          <h1 className="text-4xl font-bold mb-4">{productName}</h1>
          <p className="text-gray-700 text-lg mb-6">{productDesription}</p>
          <div className="mb-4">
            <a 
              href={tryDemo} 
              className="text-blue-600 hover:text-blue-800 underline font-medium text-lg"
            >
              Try Demo
            </a>
            <a 
              href={learnMore} 
              className="text-blue-600 hover:text-blue-800 underline font-medium text-lg ml-12"
            >
              Learn More
            </a>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <a href={googlePlay} className="inline-block">
              <img src="media/googlePlayBadge.svg" alt="Google Play" className="h-10 sm:h-12" />
            </a>
            <a href={appStore} className="inline-block">
              <img
                src="media/appstoreBadge.svg"
                alt="App Store"
                className="h-10 sm:h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;