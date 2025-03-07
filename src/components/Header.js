import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-[#f8f4f1] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-[#8b5d3b]">
            Ramadan Collections
          </Link>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-lg border border-[#d4b595] focus:outline-none focus:border-[#8b5d3b]"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/cart" className="text-[#8b5d3b] hover:text-[#d4b595]">
              <FaShoppingCart className="text-2xl" />
            </Link>
            <Link to="/profile" className="text-[#8b5d3b] hover:text-[#d4b595]">
              <FaUser className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 