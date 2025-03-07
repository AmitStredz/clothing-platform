import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPhone, FaStore, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetails = () => {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);

  // Mock data with multiple images
  const product = {
    name: "Men's Slim Fit Solid Spread Collar Casual Shirt",
    price: 462,
    originalPrice: 1840,
    discount: "75% off",
    rating: 4.2,
    reviews: "41,996",
    description: "Perfect for festivities, this elegant shirt combines comfort with style. Made from premium cotton fabric with a modern slim fit design.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#FFE4E1", "#000000", "#FFFFFF", "#4169E1"],
    colorNames: ["Pink", "Black", "White", "Blue"],
    images: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157",
      "https://images.unsplash.com/photo-1603252109360-909f4f96251f",
      "https://images.unsplash.com/photo-1603252109438-7223b15d5f83",
      "https://images.unsplash.com/photo-1603252109612-24fa03a5c968",
    ],
  };

  const shop = {
    name: "Al-Barakat Fashion Store",
    rating: 4.5,
    address: "123 Fashion Street, Dubai Mall",
    contact: "+971 50 123 4567",
    location: "Dubai, UAE",
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images Section */}
          <motion.div 
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="space-y-6"
          >
            <div className="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden group">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsWishlist(!isWishlist)}
                className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md"
              >
                <FaHeart className={`text-2xl transition-colors ${isWishlist ? 'text-red-500' : 'text-gray-400'}`} />
              </motion.button>
              
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-xl"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative rounded-lg overflow-hidden ${
                    currentImageIndex === index ? 'ring-2 ring-emerald-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Details Section */}
          <motion.div 
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl font-playfair font-bold text-gray-800 mb-4"
              >
                {product.name}
              </motion.h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center bg-emerald-500 text-white px-3 py-1 rounded-full">
                  <span className="font-medium">{product.rating}</span>
                  <FaStar className="ml-1" />
                </div>
                <span className="text-gray-500">{product.reviews} Reviews</span>
              </div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
              >
                <div className="flex items-baseline space-x-3 mb-2">
                  <span className="text-4xl font-bold text-gray-800">₹{product.price}</span>
                  <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                  <span className="text-lg font-medium text-emerald-600">{product.discount}</span>
                </div>
              </motion.div>

              <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Select Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-emerald-500 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Select Color</h3>
                <div className="flex flex-wrap gap-4">
                  {product.colors.map((color, index) => (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-12 h-12 rounded-full shadow-md ${
                        selectedColor === color ? 'ring-2 ring-offset-2 ring-emerald-500' : ''
                      }`}
                      style={{ backgroundColor: color }}
                    >
                      {selectedColor === color && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
                        >
                          {product.colorNames[index]}
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaShoppingCart />
                    Add to Cart
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gray-800 text-white py-4 rounded-xl font-medium hover:bg-gray-900 transition-colors shadow-lg"
                >
                  Buy Now
                </motion.button>
              </div>
            </div>

            {/* Shop Details Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-6">Store Information</h2>
              <div className="space-y-4">
                {[
                  { icon: FaStore, text: shop.name },
                  { icon: FaStar, text: `${shop.rating} Rating` },
                  { icon: FaMapMarkerAlt, text: shop.address },
                  { icon: FaPhone, text: shop.contact }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-600"
                  >
                    <item.icon className="text-emerald-600" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails; 