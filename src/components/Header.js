import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = {
    "Women's": ['Ethnic Wear', 'Western Wear', 'Fusion Collection', 'Accessories'],
    "Men's": ['Traditional', 'Formal Wear', 'Casual Collection', 'Designer Kurtas'],
    "Kids'": ['Boys Wear', 'Girls Wear', 'Party Wear', 'Ethnic Collection'],
    "Trending": ['New Arrivals', 'Best Sellers', 'Festival Edit', 'Designer Picks']
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-emerald-900 text-white py-2 px-4 text-center text-sm font-light">
        <span className="inline-flex items-center">
          <FaPhoneAlt className="mr-2 text-xs" /> 
          Need Help? Call us: +1234567890 | Free Shipping on Orders Above $99
        </span>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-playfair font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent">
                RAMADAN COLLECTIONS
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
              {Object.keys(categories).map((category) => (
                <div
                  key={category}
                  className="relative group py-8 cursor-pointer"
                  onMouseEnter={() => setIsMenuOpen(true)}
                  onMouseLeave={() => setIsMenuOpen(false)}
                >
                  <span className="text-gray-700 hover:text-emerald-700 transition-colors">
                    {category}
                  </span>
                  
                  <AnimatePresence>
                    {isMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block"
                      >
                        {categories[category].map((subCategory) => (
                          <Link
                            key={subCategory}
                            to={`/category/${subCategory.toLowerCase().replace(' ', '-')}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                          >
                            {subCategory}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="relative group hidden md:block">
                <input
                  type="text"
                  placeholder="Search designs..."
                  className="w-48 md:w-64 px-4 py-2 rounded-full text-sm border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                <FaSearch className="absolute right-3 top-3 text-gray-400 group-hover:text-emerald-600 transition-colors" />
              </div>

              <Link to="/wishlist" className="text-gray-600 hover:text-emerald-600 transition-colors">
                <FaHeart className="text-xl" />
              </Link>
              
              <Link to="/cart" className="relative">
                <FaShoppingCart className="text-xl text-gray-600 hover:text-emerald-600 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-600 hover:text-emerald-600 transition-colors"
              >
                {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden"
              >
                <div className="py-4 space-y-4">
                  {Object.keys(categories).map((category) => (
                    <div key={category} className="space-y-2">
                      <h3 className="text-lg font-medium text-gray-700">{category}</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {categories[category].map((subCategory) => (
                          <Link
                            key={subCategory}
                            to={`/category/${subCategory.toLowerCase().replace(' ', '-')}`}
                            className="text-sm text-gray-600 hover:text-emerald-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subCategory}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Search Bar */}
      <div className="lg:hidden bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search designs..."
              className="w-full px-4 py-2 rounded-full text-sm border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 