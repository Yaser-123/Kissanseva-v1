import React, { useContext, useState, useEffect } from 'react';
import { BarChart2, TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';

interface MarketPrice {
  crop: string;
  price: number;
  trend: 'up' | 'down' | 'stable';
  change: string;
  lastUpdated: string;
}

const MarketPrices: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);

  const marketPrices: MarketPrice[] = [
    { 
      crop: language === 'en' ? 'Rice' : 'चावल',
      price: 2000,
      trend: 'up',
      change: '+2.5%',
      lastUpdated: '2 min ago'
    },
    { 
      crop: language === 'en' ? 'Wheat' : 'गेहूं',
      price: 1800,
      trend: 'down',
      change: '-1.2%',
      lastUpdated: '5 min ago'
    },
    { 
      crop: language === 'en' ? 'Cotton' : 'कपास',
      price: 5500,
      trend: 'up',
      change: '+3.7%',
      lastUpdated: '1 min ago'
    },
    { 
      crop: language === 'en' ? 'Sugarcane' : 'गन्ना',
      price: 300,
      trend: 'up',
      change: '+0.8%',
      lastUpdated: 'Just now'
    }
  ];

  const refreshPrices = async () => {
    setRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRefreshing(false);
  };

  useEffect(() => {
    const interval = setInterval(refreshPrices, 15000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-green-200 rounded w-1/3 mx-auto mb-8"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-green-100 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600 bg-green-50';
      case 'down':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-800">
          {language === 'en' ? 'Market Prices' : 'बाजार मूल्य'}
        </h1>
        <button
          onClick={refreshPrices}
          disabled={refreshing}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
        >
          <RefreshCw size={16} className={`${refreshing ? 'animate-spin' : ''}`} />
          <span>{language === 'en' ? 'Refresh' : 'रीफ्रेश'}</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left">{language === 'en' ? 'Crop' : 'फसल'}</th>
              <th className="py-3 px-4 text-right">{language === 'en' ? 'Price (₹/quintal)' : 'मूल्य (₹/क्विंटल)'}</th>
              <th className="py-3 px-4 text-right">{language === 'en' ? '24h Change' : '24 घंटे परिवर्तन'}</th>
              <th className="py-3 px-4 text-right">{language === 'en' ? 'Last Updated' : 'अंतिम अपडेट'}</th>
            </tr>
          </thead>
          <tbody>
            {marketPrices.map((item, index) => (
              <tr 
                key={index} 
                onClick={() => setSelectedCrop(item.crop)}
                className={`
                  ${index % 2 === 0 ? 'bg-green-50/50' : 'bg-white'}
                  ${selectedCrop === item.crop ? 'bg-green-100/50' : ''}
                  hover:bg-green-100/50 transition-colors duration-150 cursor-pointer
                `}
              >
                <td className="py-3 px-4 font-medium">{item.crop}</td>
                <td className="py-3 px-4 text-right font-mono">₹{item.price.toLocaleString()}</td>
                <td className="py-3 px-4">
                  <div className={`flex items-center justify-end rounded-full px-2 py-1 ${getTrendColor(item.trend)}`}>
                    {item.trend === 'up' ? (
                      <TrendingUp size={16} className="mr-1" />
                    ) : (
                      <TrendingDown size={16} className="mr-1" />
                    )}
                    <span className="font-medium">{item.change}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-right text-sm text-gray-500">
                  {item.lastUpdated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <BarChart2 className="mr-2" size={16} />
          <span>
            {language === 'en' 
              ? 'Live prices updated every 15 minutes' 
              : 'हर 15 मिनट में अपडेट किए गए लाइव मूल्य'}
          </span>
        </div>
        <div className="text-right text-xs">
          {language === 'en' ? 'Click on a row to see detailed analytics' : 'विस्तृत विश्लेषण के लिए पंक्ति पर क्लिक करें'}
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;