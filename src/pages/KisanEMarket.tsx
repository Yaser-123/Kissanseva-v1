import React, { useContext, useState } from 'react';
import { ShoppingCart, Plus, Tag, User, Package } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';
import ImageUpload from '../components/ImageUpload';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: string;
  seller: string;
  image: string;
  category: string;
}

const KisanEMarket: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Organic Wheat',
      price: 2000,
      quantity: '100 kg',
      seller: 'Ramesh Kumar',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=80',
      category: 'Grains'
    },
    {
      id: 2,
      name: 'Premium Rice',
      price: 2500,
      quantity: '50 kg',
      seller: 'Suresh Patel',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
      category: 'Grains'
    },
    {
      id: 3,
      name: 'Fresh Tomatoes',
      price: 1500,
      quantity: '25 kg',
      seller: 'Priya Singh',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&q=80',
      category: 'Vegetables'
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    quantity: '',
    seller: '',
    image: '',
    category: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: name === 'price' ? parseFloat(value) : value });
  };

  const handleImageSelect = (imageUrl: string) => {
    setNewProduct({ ...newProduct, image: imageUrl });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.image) {
      alert('Please upload an image');
      return;
    }
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ name: '', price: 0, quantity: '', seller: '', image: '', category: '' });
    setShowForm(false);
  };

  const t = {
    title: language === 'en' ? 'Kisan e-Market' : 'किसान ई-मार्केट',
    addProduct: language === 'en' ? 'Add Product' : 'उत्पाद जोड़ें',
    productName: language === 'en' ? 'Product Name' : 'उत्पाद का नाम',
    price: language === 'en' ? 'Price (₹)' : 'मूल्य (₹)',
    quantity: language === 'en' ? 'Quantity' : 'मात्रा',
    seller: language === 'en' ? 'Seller Name' : 'विक्रेता का नाम',
    category: language === 'en' ? 'Category' : 'श्रेणी',
    buyNow: language === 'en' ? 'Buy Now' : 'अभी खरीदें',
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-indigo-900">{t.title}</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-4 py-2 rounded-lg flex items-center hover:from-indigo-700 hover:to-indigo-900 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Plus size={18} className="mr-2" />
          {t.addProduct}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.productName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.price}
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.quantity}
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={newProduct.quantity}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.category}
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="seller" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.seller}
                </label>
                <input
                  type="text"
                  id="seller"
                  name="seller"
                  value={newProduct.seller}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Image
              </label>
              <ImageUpload onImageSelect={handleImageSelect} className="h-full" />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-indigo-900 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t.addProduct}
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className="bg-white/90 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {product.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Tag size={16} className="mr-2" />
                  <span>₹{product.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Package size={16} className="mr-2" />
                  <span>{product.quantity}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <User size={16} className="mr-2" />
                  <span>{product.seller}</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:from-indigo-700 hover:to-indigo-900 transition-all duration-300">
                <ShoppingCart size={18} className="mr-2" />
                {t.buyNow}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KisanEMarket;