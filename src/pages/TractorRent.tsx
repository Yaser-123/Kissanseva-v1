import React, { useContext } from 'react';
import { Tractor } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';

const TractorRent: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const tractors = [
    { name: 'John Deere 5310', rate: 1000 },
    { name: 'Mahindra 575 DI', rate: 800 },
    { name: 'Sonalika DI 750 III', rate: 900 },
  ];

  const translations = {
    en: {
      title: 'Tractor Rent',
      description: 'Rent tractors for your farming needs',
      tractorName: 'Tractor Name',
      ratePerDay: 'Rate per Day (₹)',
      book: 'Book Now',
    },
    hi: {
      title: 'ट्रैक्टर किराया',
      description: 'अपनी खेती की जरूरतों के लिए ट्रैक्टर किराए पर लें',
      tractorName: 'ट्रैक्टर का नाम',
      ratePerDay: 'प्रति दिन दर (₹)',
      book: 'अभी बुक करें',
    },
    te: {
      title: 'ట్రాక్టర్ అద్దె',
      description: 'మీ వ్యవసాయ అవసరాలకు ట్రాక్టర్లను అద్దెకు తీసుకోండి',
      tractorName: 'ట్రాక్టర్ పేరు',
      ratePerDay: 'రోజువారీ ధర (₹)',
      book: 'ఇప్పుడే బుక్ చేసుకోండి',
    },
  };

  const t = translations[language as keyof typeof translations];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">{t.title}</h1>
      <p className="text-center mb-8">{t.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tractors.map((tractor, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <Tractor className="mx-auto mb-4 text-green-600" size={48} />
            <h2 className="text-xl font-semibold mb-2">{tractor.name}</h2>
            <p className="text-gray-600 mb-4">
              {t.ratePerDay}: ₹{tractor.rate}
            </p>
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md">
              {t.book}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TractorRent;