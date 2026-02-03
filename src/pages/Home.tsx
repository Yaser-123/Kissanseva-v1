import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Sun, BarChart2, Leaf, FileText, ShoppingCart, Tractor, Droplets, Bug, Sprout } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const features = [
    { name: language === 'en' ? 'Weather AI' : language === 'hi' ? 'मौसम एआई' : 'వాతావరణ ఎఐ', path: '/weather', icon: Sun, gradient: 'from-sky-400 to-blue-500' },
    { name: language === 'en' ? 'Market Analytics' : language === 'hi' ? 'बाजार विश्लेषण' : 'మార్కెట్ విశ్లేషణ', path: '/market-prices', icon: BarChart2, gradient: 'from-purple-400 to-pink-500' },
    { name: language === 'en' ? 'Smart Crop Guide' : language === 'hi' ? 'स्मार्ट फसल गाइड' : 'స్మార్ట్ పంట గైడ్', path: '/crop-advisory', icon: Leaf, gradient: 'from-green-400 to-emerald-500' },
    { name: language === 'en' ? 'Organic Hub' : language === 'hi' ? 'जैविक हब' : 'ఆర్గానిక్ హబ్', path: '/organic-products', icon: Sprout, gradient: 'from-lime-400 to-green-500' },
    { name: language === 'en' ? 'Digital Marketplace' : language === 'hi' ? 'डिजिटल मार्केटप्लेस' : 'డిజిటల్ మార్కెట్', path: '/kisan-e-market', icon: ShoppingCart, gradient: 'from-orange-400 to-red-500' },
    { name: language === 'en' ? 'Smart Equipment' : language === 'hi' ? 'स्मार्ट उपकरण' : 'స్మార్ట్ పరికరాలు', path: '/tractor-rent', icon: Tractor, gradient: 'from-yellow-400 to-orange-500' },
    { name: language === 'en' ? 'GovTech Schemes' : language === 'hi' ? 'सरकारी टेक योजनाएं' : 'ప్రభుత్వ టెక్ పథకాలు', path: '/government-schemes', icon: FileText, gradient: 'from-indigo-400 to-blue-500' },
    { name: language === 'en' ? 'Pest Defense' : language === 'hi' ? 'कीट रक्षा' : 'పురుగు రక్షణ', path: '/pest-control', icon: Bug, gradient: 'from-red-400 to-rose-500' },
    { name: language === 'en' ? 'Seed Bank' : language === 'hi' ? 'बीज बैंक' : 'విత్తన బ్యాంక్', path: '/seed-availability', icon: Sprout, gradient: 'from-teal-400 to-emerald-500' },
  ];

  const getWelcomeMessage = () => {
    switch (language) {
      case 'en':
        return 'Future of Farming';
      case 'hi':
        return 'खेती का भविष्य';
      case 'te':
        return 'వ్యవసాయం భవిష్యత్తు';
      default:
        return 'Future of Farming';
    }
  };

  const getSubtitle = () => {
    switch (language) {
      case 'en':
        return 'AI-Powered Agricultural Solutions';
      case 'hi':
        return 'एआई-संचालित कृषि समाधान';
      case 'te':
        return 'ఎఐ-ఆధారిత వ్యవసాయ పరిష్కారాలు';
      default:
        return 'AI-Powered Agricultural Solutions';
    }
  };

  return (
    <div className="text-center relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 opacity-5 animate-gradient-xy"></div>

      <div className="relative">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          {getWelcomeMessage()}
        </h1>
        <p className="text-xl mb-12 text-gray-600">{getSubtitle()}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature) => (
            <Link
              key={feature.path}
              to={feature.path}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative p-6 flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {feature.name}
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;