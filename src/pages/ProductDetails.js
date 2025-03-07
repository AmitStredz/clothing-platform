import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPhone, FaStore, FaHeart } from 'react-icons/fa';

const ProductDetails = () => {
  const { productId } = useParams();

  // Mock data - replace with actual data from your backend
  const product = {
    name: "Men's Slim Fit Solid Spread Collar Casual Shirt",
    price: 462,
    originalPrice: 1840,
    discount: "75% off",
    rating: 4.2,
    reviews: "41,996",
    description: "Perfect for Ramadan festivities, this elegant shirt combines comfort with style. Made from premium cotton fabric with a modern slim fit design.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Pink", "Black", "White", "Blue"],
    images: ["/assets/image.png"],
  };

  const shop = {
    name: "Al-Barakat Fashion Store",
    rating: 4.5,
    address: "123 Fashion Street, Dubai Mall",
    contact: "+971 50 123 4567",
    location: "Dubai, UAE",
  };

  return (
    <div className="min-h-screen bg-[#f8f4f1]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images Section */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-lg p-4 shadow-md">
              <button className="absolute top-4 right-4 text-[#8b5d3b] hover:text-red-500">
                <FaHeart className="text-2xl" />
              </button>
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {/* Thumbnail images would go here */}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h1 className="text-2xl font-semibold text-[#8b5d3b] mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded">
                  <span>{product.rating}</span>
                  <FaStar className="ml-1" />
                </div>
                <span className="text-gray-600">{product.reviews} Reviews</span>
              </div>
              
              <div className="mb-4">
                <span className="text-3xl font-bold text-[#8b5d3b]">₹{product.price}</span>
                <span className="ml-2 text-gray-500 line-through">₹{product.originalPrice}</span>
                <span className="ml-2 text-green-600 font-semibold">{product.discount}</span>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Select Size</h3>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border-2 border-[#d4b595] rounded-md hover:border-[#8b5d3b] hover:bg-[#f8f4f1]"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Select Color</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className="px-4 py-2 border-2 border-[#d4b595] rounded-md hover:border-[#8b5d3b] hover:bg-[#f8f4f1]"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-[#8b5d3b] text-white py-3 rounded-lg hover:bg-[#6d482e] transition-colors">
                  Add to Cart
                </button>
                <button className="flex-1 bg-[#d4b595] text-[#8b5d3b] py-3 rounded-lg hover:bg-[#c4a585] transition-colors">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Shop Details */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold text-[#8b5d3b] mb-4">Shop Details</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaStore className="text-[#8b5d3b] mr-2" />
                  <span>{shop.name}</span>
                </div>
                <div className="flex items-center">
                  <FaStar className="text-[#8b5d3b] mr-2" />
                  <span>{shop.rating} Rating</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-[#8b5d3b] mr-2" />
                  <span>{shop.address}</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-[#8b5d3b] mr-2" />
                  <span>{shop.contact}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 