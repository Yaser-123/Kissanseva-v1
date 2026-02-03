import React, { useContext } from 'react';
import { FileText } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';

const Subsidies: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      title: 'Agricultural Subsidies',
      description: 'Information on available agricultural subsidies',
      subsidy: 'Subsidy',
      details: 'Details',
      applyNow: 'Apply Now',
    },
    hi: {
      title: 'कृषि सब्सिडी',
      description: 'उपलब्ध कृषि सब्सिडी पर जानकारी',
      subsidy: 'सब्सिडी',
      details: 'विवरण',
      applyNow: 'अभी आवेदन करें',
    },
    te: {
      title: 'వ్యవసాయ సబ్సిడీలు',
      description: 'అందుబాటులో ఉన్న వ్యవసాయ సబ్సిడీల సమాచారం',
      subsidy: 'సబ్సిడీ',
      details: 'వివరాలు',
      applyNow: 'ఇప్పుడే దరఖాస్తు చేసుకోండి',
    },
  };

  const t = translations[language as keyof typeof translations];

  const subsidies = [
    {
      name: t.subsidy + ' 1',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: t.subsidy + ' 2',
      details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: t.subsidy + ' 3',
      details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">{t.title}</h1>
      <p className="text-center mb-8">{t.description}</p>
      <div className="space-y-6">
        {subsidies.map((subsidy, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <FileText className="mr-2 text-green-600" />
              {subsidy.name}
            </h2>
            <p className="text-gray-700 mb-4">{subsidy.details}</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md">
              {t.applyNow}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subsidies;