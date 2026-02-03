import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Cloud, Droplets, Wind, Thermometer } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';

const Weather: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Replace with actual API call when you have one
        const response = await axios.get('https://api.example.com/weather');
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div className="text-center">{language === 'en' ? 'Loading...' : 'लोड हो रहा है...'}</div>;
  }

  // Simulated weather data (replace with actual data from API)
  const simulatedWeather = {
    temperature: 28,
    humidity: 65,
    windSpeed: 10,
    description: language === 'en' ? 'Partly cloudy' : 'आंशिक रूप से बादल',
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
        {language === 'en' ? 'Weather Forecast' : 'मौसम का पूर्वानुमान'}
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Cloud className="text-blue-500 mr-2" size={24} />
            <span className="text-xl font-semibold">{simulatedWeather.description}</span>
          </div>
          <div className="flex items-center">
            <Thermometer className="text-red-500 mr-2" size={24} />
            <span className="text-xl font-semibold">{simulatedWeather.temperature}°C</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <Droplets className="text-blue-400 mr-2" size={20} />
            <span>{language === 'en' ? 'Humidity' : 'नमी'}: {simulatedWeather.humidity}%</span>
          </div>
          <div className="flex items-center">
            <Wind className="text-gray-500 mr-2" size={20} />
            <span>{language === 'en' ? 'Wind' : 'हवा'}: {simulatedWeather.windSpeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;