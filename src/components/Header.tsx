import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tractor, Sun, BarChart2, Leaf, FileText, ShoppingCart, Menu, X, Sprout } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: { en: 'Home', hi: 'होम', te: 'హోమ్' }, path: '/', icon: Tractor },
    { name: { en: 'Weather', hi: 'मौसम', te: 'వాతావరణం' }, path: '/weather', icon: Sun },
    { name: { en: 'Market', hi: 'बाजार', te: 'మార్కెట్' }, path: '/market-prices', icon: BarChart2 },
    { name: { en: 'Crops', hi: 'फसल', te: 'పంట' }, path: '/crop-advisory', icon: Leaf },
    { name: { en: 'Organic', hi: 'जैविक', te: 'ఆర్గానిక్' }, path: '/organic-products', icon: Sprout },
    { name: { en: 'Schemes', hi: 'योजनाएं', te: 'పథకాలు' }, path: '/government-schemes', icon: FileText },
    { name: { en: 'Shop', hi: 'दुकान', te: 'షాప్' }, path: '/kisan-e-market', icon: ShoppingCart },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="relative z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.4),transparent_70%)]" />
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold flex items-center hover:text-green-100 transition-colors">
            <Tractor className="mr-2 animate-float" />
            <span className="hidden sm:inline bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              {language === 'en' ? 'AgriTech' : language === 'hi' ? 'कृषि तकनीक' : 'వ్యవసాయ సాంకేతికత'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-white/20 text-white font-medium scale-105 shadow-lg shadow-green-900/20'
                    : 'hover:bg-white/10 text-white/90 hover:scale-105'
                }`}
              >
                <item.icon size={18} className={isActive(item.path) ? 'animate-pulse-soft' : ''} />
                <span>{item.name[language as keyof typeof item.name]}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 glass-effect rounded-2xl p-2 shadow-xl">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-3 rounded-xl flex items-center space-x-2 transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-white/20 text-white font-medium scale-105'
                      : 'hover:bg-white/10 text-white/90 hover:scale-105'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={18} className={isActive(item.path) ? 'animate-pulse-soft' : ''} />
                  <span>{item.name[language as keyof typeof item.name]}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;