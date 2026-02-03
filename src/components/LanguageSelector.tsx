import React, { useContext } from 'react';
import Select from 'react-select';
import LanguageContext from '../contexts/LanguageContext';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'हिन्दी' },
  { value: 'te', label: 'తెలుగు' },
];

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const customStyles = {
    control: (base: any) => ({
      ...base,
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      boxShadow: 'none',
      borderRadius: '9999px',
      padding: '2px 8px',
      cursor: 'pointer',
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected ? '#22c55e' : state.isFocused ? '#f0fdf4' : 'white',
      color: state.isSelected ? 'white' : '#374151',
      cursor: 'pointer',
    }),
    menu: (base: any) => ({
      ...base,
      borderRadius: '12px',
      overflow: 'hidden',
      border: 'none',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    }),
    singleValue: (base: any) => ({
      ...base,
      color: 'white',
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: 'white',
      '&:hover': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  };

  return (
    <Select
      options={languages}
      value={languages.find(lang => lang.value === language)}
      onChange={(selectedOption: any) => setLanguage(selectedOption.value)}
      className="w-32"
      classNamePrefix="select"
      styles={customStyles}
      isSearchable={false}
    />
  );
};

export default LanguageSelector;