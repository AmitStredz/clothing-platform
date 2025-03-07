import React from 'react';
import ProductList from '../Shared/product-list';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-emerald-900 to-emerald-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Festive Collection 2024</h1>
          <p className="text-xl text-emerald-100 mb-8">Discover our exclusive range of traditional & modern wear</p>
          <button className="bg-white text-emerald-800 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors">
            Shop New Arrivals
          </button>
        </div>
      </div>

      {/* Main Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Shop By Category</h2>
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
          ].map((collection) => (
            <div key={collection.title} className="group relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{collection.title}</h3>
                <button className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm hover:bg-white transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Collections */}
      <div className="bg-neutral-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Collections</h2>
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
            ].map((category) => (
              <div key={category.name} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-800 font-medium">{category.name}</p>
                </div>
              </div>
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
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">New Arrivals</h2>
        <ProductList />
      </div>

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
    </div>
  );
};

export default Homepage; 