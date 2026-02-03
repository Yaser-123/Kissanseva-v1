import React, { useContext, useState } from 'react';
import { FileText, ChevronRight, Users, Calendar, IndianRupee, ExternalLink } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';

interface Scheme {
  id: string;
  name: {
    en: string;
    hi: string;
    te: string;
  };
  description: {
    en: string;
    hi: string;
    te: string;
  };
  benefits: {
    en: string;
    hi: string;
    te: string;
  };
  eligibility: {
    en: string;
    hi: string;
    te: string;
  };
  deadline: string;
  beneficiaries: string;
  fundingAmount: string;
  image: string;
}

const GovernmentSchemes: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [selectedScheme, setSelectedScheme] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const schemes: Scheme[] = [
    {
      id: 'pm-kisan',
      name: {
        en: 'PM-KISAN',
        hi: 'पीएम-किसान',
        te: 'పీఎం-కిసాన్',
      },
      description: {
        en: 'Direct income support of ₹6000 per year to eligible farmer families',
        hi: 'पात्र किसान परिवारों को ₹6000 प्रति वर्ष की प्रत्यक्ष आय सहायता',
        te: 'అర్హత కలిగిన రైతు కుటుంబాలకు సంవత్సరానికి ₹6000 ప్రత్యక్ష ఆదాय మద్దతు',
      },
      benefits: {
        en: '₹6000 per year in three installments',
        hi: 'तीन किस्तों में ₹6000 प्रति वर्ष',
        te: 'మూడు వాయిదాలలో సంవత్సరానికి ₹6000',
      },
      eligibility: {
        en: 'Small and marginal farmers with less than 2 hectares of land',
        hi: '2 हेक्टेयर से कम भूमि वाले छोटे और सीमांत किसान',
        te: '2 హెక్టార్ల కంటే తక్కువ భూమి ఉన్న చిన్న మరియు సన్నకారు రైతులు',
      },
      deadline: '2024-12-31',
      beneficiaries: '11.37 Cr',
      fundingAmount: '₹6,000',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8dc7a3d16f?w=500&q=80',
    },
    {
      id: 'soil-health',
      name: {
        en: 'Soil Health Card Scheme',
        hi: 'मृदा स्वास्थ्य कार्ड योजना',
        te: 'నేల ఆరోగ్య కార్డ్ పథకం',
      },
      description: {
        en: 'Provides detailed assessment of soil condition and recommended fertilizers',
        hi: 'मिट्टी की स्थिति का विस्तृत मूल्यांकन और अनुशंसित उर्वरक प्रदान करता है',
        te: 'నేల పరిస్థితి యొక్క వివరణాత్మక అంచనా మరియు సిఫార్సు చేయబడిన ఎరువులు',
      },
      benefits: {
        en: 'Free soil testing and fertilizer recommendations',
        hi: 'निःशुल्क मिट्टी परीक्षण और उर्वरक सिफारिशें',
        te: 'ఉచిత నేల పరీక్ష మరియు ఎరువుల సిఫార్సులు',
      },
      eligibility: {
        en: 'All farmers with agricultural land',
        hi: 'कृषि भूमि वाले सभी किसान',
        te: 'వ్యవసాయ భూమి ఉన్న అన్ని రైతులు',
      },
      deadline: '2024-12-31',
      beneficiaries: '22.5 Cr',
      fundingAmount: 'Free Service',
      image: 'https://images.unsplash.com/photo-1589948100953-9f57a73714e4?w=500&q=80',
    },
    {
      id: 'pmfby',
      name: {
        en: 'PM Fasal Bima Yojana',
        hi: 'पीएम फसल बीमा योजना',
        te: 'పీఎం పంట భీమా యోజన',
      },
      description: {
        en: 'Comprehensive crop insurance scheme to protect against crop failure',
        hi: 'फसल विफलता से सुरक्षा के लिए व्यापक फसल बीमा योजना',
        te: 'పంట వైఫల్యం నుండి రక్షణ కోసం సమగ్ర పంట భీమా పథకం',
      },
      benefits: {
        en: 'Insurance coverage and financial support',
        hi: 'बीमा कवरेज और वित्तीय सहायता',
        te: 'భీమా కవరేజ్ మరియు ఆర్థిక మద్దతు',
      },
      eligibility: {
        en: 'All farmers growing notified crops',
        hi: 'अधिसूचित फसलें उगाने वाले सभी किसान',
        te: 'నోటిఫై చేయబడిన పంటలు పండించే అన్ని రైతులు',
      },
      deadline: '2024-12-31',
      beneficiaries: '30.7 Cr',
      fundingAmount: 'Variable',
      image: 'https://images.unsplash.com/photo-1599710666624-5f4bb4541a49?w=500&q=80',
    },
  ];

  const filteredSchemes = schemes.filter(scheme =>
    scheme.name[language as keyof typeof scheme.name]
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const t = {
    title: language === 'en' ? 'Government Schemes' : language === 'hi' ? 'सरकारी योजनाएं' : 'ప్రభుత్వ పథకాలు',
    search: language === 'en' ? 'Search schemes...' : language === 'hi' ? 'योजनाएं खोजें...' : 'పథకాలను శోధించండి...',
    benefits: language === 'en' ? 'Benefits' : language === 'hi' ? 'लाभ' : 'ప్రయోజనాలు',
    eligibility: language === 'en' ? 'Eligibility' : language === 'hi' ? 'पात्रता' : 'అర్హత',
    deadline: language === 'en' ? 'Deadline' : language === 'hi' ? 'अंतिम तिथि' : 'గడువు',
    beneficiaries: language === 'en' ? 'Beneficiaries' : language === 'hi' ? 'लाभार्थी' : 'లబ్ధిదారులు',
    amount: language === 'en' ? 'Amount' : language === 'hi' ? 'राशि' : 'మొత్తం',
    applyNow: language === 'en' ? 'Apply Now' : language === 'hi' ? 'अभी आवेदन करें' : 'ఇప్పుడే దరఖాస్తు చేసుకోండి',
    viewDetails: language === 'en' ? 'View Details' : language === 'hi' ? 'विवरण देखें' : 'వివరాలను వీక్షించండి',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-4 md:mb-0">{t.title}</h1>
        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder={t.search}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className={`
              bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300
              ${selectedScheme === scheme.id ? 'ring-2 ring-green-500 scale-102' : 'hover:scale-101'}
            `}
          >
            <div className="relative h-48">
              <img
                src={scheme.image}
                alt={scheme.name[language as keyof typeof scheme.name]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {scheme.name[language as keyof typeof scheme.name]}
              </h2>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-4">
                {scheme.description[language as keyof typeof scheme.description]}
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-gray-600">{scheme.beneficiaries} {t.beneficiaries}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-gray-600">{t.deadline}: {scheme.deadline}</span>
                </div>
                <div className="flex items-center text-sm">
                  <IndianRupee className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-gray-600">{scheme.fundingAmount}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => setSelectedScheme(selectedScheme === scheme.id ? null : scheme.id)}
                  className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
                >
                  {t.viewDetails}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center">
                  {t.applyNow}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>

              {selectedScheme === scheme.id && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{t.benefits}</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {scheme.benefits[language as keyof typeof scheme.benefits]}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{t.eligibility}</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {scheme.eligibility[language as keyof typeof scheme.eligibility]}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovernmentSchemes;