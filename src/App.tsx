import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Weather from './pages/Weather';
import MarketPrices from './pages/MarketPrices';
import CropAdvisory from './pages/CropAdvisory';
import GovernmentSchemes from './pages/GovernmentSchemes';
import KisanEMarket from './pages/KisanEMarket';
import TractorRent from './pages/TractorRent';
import Subsidies from './pages/Subsidies';
import PestControl from './pages/PestControl';
import SeedAvailability from './pages/SeedAvailability';
import OrganicProducts from './pages/OrganicProducts';
import LanguageContext from './contexts/LanguageContext';

const App: React.FC = () => {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div className="flex flex-col min-h-screen">
          {/* Animated background */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 opacity-20 animate-gradient-xy" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)] animate-pulse-soft" />
          </div>

          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 relative">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-3xl -z-10" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/market-prices" element={<MarketPrices />} />
              <Route path="/crop-advisory" element={<CropAdvisory />} />
              <Route path="/government-schemes" element={<GovernmentSchemes />} />
              <Route path="/kisan-e-market" element={<KisanEMarket />} />
              <Route path="/tractor-rent" element={<TractorRent />} />
              <Route path="/subsidies" element={<Subsidies />} />
              <Route path="/pest-control" element={<PestControl />} />
              <Route path="/seed-availability" element={<SeedAvailability />} />
              <Route path="/organic-products" element={<OrganicProducts />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageContext.Provider>
    </Router>
  );
};

export default App;