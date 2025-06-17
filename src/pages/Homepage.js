import React from 'react';
import { motion } from 'framer-motion';
import ProductList from '../Shared/product-list';

// Add to your _app.js or index.html:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">

const Homepage = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-poppins">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-emerald-900 to-emerald-700 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050')] bg-cover bg-center mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl font-playfair font-bold text-white mb-6 leading-tight">
              Festive Collection <span className="text-emerald-300">2025</span>
            </h1>
            <p className="text-xl text-emerald-100 mb-8 font-light max-w-xl">
              Discover our exclusive range of traditional & modern wear, crafted for the modern sophisticate
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-800 px-10 py-4 rounded-full hover:bg-emerald-50 transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Categories */}
      <div className="container mx-auto px-4 py-20">
        <motion.h2 
          {...fadeInUp}
          className="text-4xl font-playfair font-bold mb-12 text-gray-800 text-center"
        >
          Shop By Category
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Women\'s Fashion',
              image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
              link: '/womens'
            },
            {
              title: 'Men\'s Collection',
              image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22',
              link: '/mens'
            },
            {
              title: 'Kids\' Wear',
              image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8',
              link: '/kids'
            }
          ].map((collection, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={collection.title}
              className="group relative h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-3xl font-playfair font-semibold text-white mb-4">{collection.title}</h3>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/90 text-gray-900 px-6 py-3 rounded-full text-sm hover:bg-white transition-colors shadow-lg"
                >
                  Discover More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Collections with Glass Effect */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-playfair font-bold mb-12 text-gray-800 text-center"
          >
            Featured Collections
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                name: 'Festive Kurtas', 
                image: 'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg'
              },
              { 
                name: 'Designer Suits', 
                image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
              },
              { 
                name: 'Traditional Wear', 
                image: 'https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg'
              },
              { 
                name: 'Fusion Collection', 
                image: 'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg'
              },
            ].map((category, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={category.name}
                className="group bg-white/70 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-playfair font-semibold text-gray-800">{category.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Clothing Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Browse by Style</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Casual Wear', link: '/casual' },
            { name: 'Formal Wear', link: '/formal' },
            { name: 'Party Wear', link: '/party' },
            { name: 'Traditional', link: '/traditional' },
            { name: 'Designer Kurtas', link: '/kurtas' },
            { name: 'Co-ord Sets', link: '/coords' },
            { name: 'Ethnic Fusion', link: '/fusion' },
            { name: 'Luxury Collection', link: '/luxury' },
          ].map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-lg text-center hover:bg-emerald-50 transition-colors cursor-pointer border border-gray-100">
              <p className="text-gray-800 font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Products */}
      {/* <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">New Arrivals</h2>
        <ProductList />
      </div> */}

      {/* Newsletter */}
      <div className="bg-emerald-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8 text-emerald-100">Subscribe to receive special Ramadan offers and updates</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Add to your styles.css or global CSS */}
      <style jsx global>{`
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Homepage; 