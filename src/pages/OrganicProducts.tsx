import React, { useContext, useState } from 'react';
import { Leaf, Star, Heart, Share2 } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  likes: number;
  isLiked: boolean;
}

const OrganicProducts: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: language === 'en' ? 'Organic Rice' : 'जैविक चावल',
      price: 120,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
      category: language === 'en' ? 'Grains' : 'अनाज',
      likes: 243,
      isLiked: false,
    },
    {
      id: 2,
      name: language === 'en' ? 'Organic Honey' : 'जैविक शहद',
      price: 450,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80',
      category: language === 'en' ? 'Natural Sweeteners' : 'प्राकृतिक मिठास',
      likes: 189,
      isLiked: false,
    },
    {
      id: 3,
      name: language === 'en' ? 'Organic Turmeric' : 'जैविक हल्दी',
      price: 180,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=500&q=80',
      category: language === 'en' ? 'Spices' : 'मसाले',
      likes: 167,
      isLiked: false,
    },
  ]);

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: language === 'en' ? 'All' : 'सभी' },
    { id: 'grains', name: language === 'en' ? 'Grains' : 'अनाज' },
    { id: 'spices', name: language === 'en' ? 'Spices' : 'मसाले' },
    { id: 'sweeteners', name: language === 'en' ? 'Sweeteners' : 'मिठास' },
  ];

  const toggleLike = (productId: number) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          likes: product.isLiked ? product.likes - 1 : product.likes + 1,
          isLiked: !product.isLiked,
        };
      }
      return product;
    }));
  };

  const shareProduct = (product: Product) => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this organic ${product.name}!`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-green-800 flex items-center gap-2">
          <Leaf className="text-green-600" />
          {language === 'en' ? 'Organic Products' : 'जैविक उत्पाद'}
        </h1>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-green-600 text-white'
                : 'bg-green-50 text-green-600 hover:bg-green-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => toggleLike(product.id)}
                  className={`p-2 rounded-full ${
                    product.isLiked
                      ? 'bg-red-500 text-white'
                      : 'bg-white/90 text-gray-600'
                  } hover:scale-105 transition-transform`}
                >
                  <Heart size={20} className={product.isLiked ? 'fill-current' : ''} />
                </button>
                <button
                  onClick={() => shareProduct(product)}
                  className="p-2 rounded-full bg-white/90 text-gray-600 hover:scale-105 transition-transform"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center text-yellow-500">
                  <Star size={16} className="fill-current" />
                  <span className="ml-1 text-sm">{product.rating}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
                  {language === 'en' ? 'Add to Cart' : 'कार्ट में जोड़ें'}
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {product.likes} {language === 'en' ? 'likes' : 'पसंद'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganicProducts;