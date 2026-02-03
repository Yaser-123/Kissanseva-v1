import React, { useContext } from 'react';
import { Leaf } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';

const SeedAvailability: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      title: 'Seed Availability',
      description: 'Check the availability of seeds for various crops',
      crop: 'Crop',
      seedType: 'Seed Type',
      availability: 'Availability',
      available: 'Available',
      limitedStock: 'Limited Stock',
      outOfStock: 'Out of Stock',
    },
    hi: {
      title: 'बीज उपलब्धता',
      description: 'विभिन्न फसलों के लिए बीजों की उपलब्धता की जांच करें',
      crop: 'फसल',
      seedType: 'बीज प्रकार',
      availability: 'उपलब्धता',
      available: 'उपलब्ध',
      limitedStock: 'सीमित स्टॉक',
      outOfStock: 'स्टॉक में नहीं',
    },
    te: {
      title: 'విత్తన లభ్యత',
      description: 'వివిధ పంటల కోసం విత్తనాల లభ్యతను తనిఖీ చేయండి',
      crop: 'పంట',
      seedType: 'విత్తన రకం',
      availability: 'లభ్యత',
      available: 'అందుబాటులో ఉంది',
      limitedStock: 'పరిమిత నిల్వ',
      outOfStock: 'స్టాక్ లో లేదు',
    },
  };

  const t = translations[language as keyof typeof translations];

  const seeds = [
    { crop: 'Wheat', seedType: 'HD-2967', availability: t.available },
    { crop: 'Rice', seedType: 'MTU-7029', availability: t.limitedStock },
    { crop: 'Cotton', seedType: 'Bt Cotton', availability: t.outOfStock },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">{t.title}</h1>
      <p className="text-center mb-8">{t.description}</p>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left">{t.crop}</th>
              <th className="py-2 px-4 text-left">{t.seedType}</th>
              <th className="py-2 px-4 text-left">{t.availability}</th>
            </tr>
          </thead>
          <tbody>
            {seeds.map((seed, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                <td className="py-2 px-4 flex items-center">
                  <Leaf className="mr-2 text-green-600" size={18} />
                  {seed.crop}
                </td>
                <td className="py-2 px-4">{seed.seedType}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      seed.availability === t.available
                        ? 'bg-green-200 text-green-800'
                        : seed.availability === t.limitedStock
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {seed.availability}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeedAvailability;