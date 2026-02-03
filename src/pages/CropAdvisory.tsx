import React, { useContext, useState } from 'react';
import { Leaf } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';

const CropAdvisory: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [selectedCrop, setSelectedCrop] = useState('');

  const crops = [
    { value: 'rice', label: language === 'en' ? 'Rice' : 'चावल' },
    { value: 'wheat', label: language === 'en' ? 'Wheat' : 'गेहूं' },
    { value: 'cotton', label: language === 'en' ? 'Cotton' : 'कपास' },
    { value: 'sugarcane', label: language === 'en' ? 'Sugarcane' : 'गन्ना' },
  ];

  const advisories: { [key: string]: string } = {
    rice: language === 'en'
      ? 'Maintain proper water level in the field. Apply fertilizers as per soil test recommendations.'
      : 'खेत में पानी का उचित स्तर बनाए रखें। मिट्टी परीक्षण की सिफारिशों के अनुसार उर्वरक लगाएं।',
    wheat: language === 'en'
      ? 'Monitor for rust and apply fungicides if necessary. Irrigate at critical growth stages.'
      : 'जंग की निगरानी करें और यदि आवश्यक हो तो कवकनाशी लगाएं। महत्वपूर्ण विकास चरणों में सिंचाई करें।',
    cotton: language === 'en'
      ? 'Scout for bollworms and apply appropriate pesticides. Avoid excessive nitrogen application.'
      : 'बॉलवर्म के लिए निरीक्षण करें और उपयुक्त कीटनाशक लगाएं। अत्यधिक नाइट्रोजन के प्रयोग से बचें।',
    sugarcane: language === 'en'
      ? 'Ensure proper drainage to prevent waterlogging. Apply balanced fertilizers for optimal growth.'
      : 'जलभराव को रोकने के लिए उचित जल निकासी सुनिश्चित करें। इष्टतम विकास के लिए संतुलित उर्वरक लगाएं।',
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
        {language === 'en' ? 'Crop Advisory' : 'फसल सलाह'}
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="crop-select" className="block mb-2 font-semibold">
            {language === 'en' ? 'Select a crop:' : 'फसल चुनें:'}
          </label>
          <select
            id="crop-select"
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">{language === 'en' ? 'Choose a crop' : 'फसल चुनें'}</option>
            {crops.map((crop) => (
              <option key={crop.value} value={crop.value}>
                {crop.label}
              </option>
            ))}
          </select>
        </div>
        {selectedCrop && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <Leaf className="mr-2 text-green-600" />
              {language === 'en' ? 'Advisory for' : 'के लिए सलाह'} {crops.find(c => c.value === selectedCrop)?.label}
            </h2>
            <p className="text-gray-700">{advisories[selectedCrop]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropAdvisory;