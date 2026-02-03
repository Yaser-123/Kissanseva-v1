import React, { useContext } from 'react';
import { Bug } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';

const PestControl: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      title: 'Pest Control',
      description: 'Information on common pests and control measures',
      pest: 'Pest',
      controlMeasures: 'Control Measures',
    },
    hi: {
      title: 'कीट नियंत्रण',
      description: 'सामान्य कीटों और नियंत्रण उपायों पर जानकारी',
      pest: 'कीट',
      controlMeasures: 'नियंत्रण उपाय',
    },
    te: {
      title: 'పురుగు మందులు',
      description: 'సాధారణ పురుగులు మరియు నియంత్రణ చర్యలపై సమాచారం',
      pest: 'పురుగు',
      controlMeasures: 'నియంత్రణ చర్యలు',
    },
  };

  const t = translations[language as keyof typeof translations];

  const pests = [
    {
      name: t.pest + ' 1',
      measures: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: t.pest + ' 2',
      measures: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: t.pest + ' 3',
      measures: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">{t.title}</h1>
      <p className="text-center mb-8">{t.description}</p>
      <div className="space-y-6">
        {pests.map((pest, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Bug className="mr-2 text-green-600" />
              {pest.name}
            </h2>
            <p className="text-gray-700">
              <strong>{t.controlMeasures}:</strong> {pest.measures}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PestControl;