
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';

const navLinks = [
  { name: 'Dashboard', path: '/' },
  { name: 'Orders', path: '/orders' },
  { name: 'Holdings', path: '/holdings' },
  { name: 'Positions', path: '/positions' },
  { name: 'Funds', path: '/funds' },
  { name: 'Apps', path: '/apps' },
];

const Header = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="h-5" /> 
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-600">NIFTY 50</span>
                <span className="text-red-500">100.2</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-600">SENSEX</span>
                <span className="text-red-500">100.2</span>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <nav className="hidden md:flex items-center gap-6 text-gray-600 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600 font-semibold' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3 ml-6 pl-6 border-l">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm text-gray-700">{user.username}</span>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 rounded ${location.pathname === link.path ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t pt-4 mt-2 flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm text-gray-700">{user.username}</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;