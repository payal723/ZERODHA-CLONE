import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Signup", to: "/Signup" },
  { name: "About", to: "/About" },
  { name: "Products", to: "/Products" },
  { name: "Pricing", to: "/Pricing" },
  { name: "Support", to: "/Support" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const Logo = () => (
    <div className="flex items-center space-x-1">
      <Link to="/" className="cursor-pointer">
        <img src="/media/logo.svg" alt="Company Logo" className="h-6 w-auto" />
      </Link>
    </div>
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Redirect function
  const redirectToDashboard = () => {
    window.location.href = import.meta.env.VITE_DASHBOARD_URL;
  };

  return (
    <nav className="border-b border-gray-200 bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-700 hover:text-blue-600 text-base font-medium"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="hidden md:block ml-6 relative">
              <Menu
                className="h-6 w-6 text-gray-700 cursor-pointer"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border">
                  <button
                    onClick={redirectToDashboard}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Kite Dashboard
                  </button>
                </div>
              )}
            </div>

            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="p-2">
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              {link.name}
            </Link>
          ))}
          <button
            onClick={redirectToDashboard}
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
          >
            Kite Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;