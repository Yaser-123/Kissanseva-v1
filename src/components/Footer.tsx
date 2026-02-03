import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="bg-green-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>
          {language === 'en'
            ? '© 2024 Indian Agriculture App. All rights reserved.'
            : '© 2024 भारतीय कृषि ऐप। सर्वाधिकार सुरक्षित।'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;