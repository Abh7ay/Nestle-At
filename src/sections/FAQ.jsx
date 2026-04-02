import React, { useEffect, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  HelpCircle, 
  Home, 
  DollarSign, 
  FileText, 
  Users, 
  Clock, 
  Shield,
  Building,
  TrendingUp,
  MapPin,
} from 'lucide-react';
import { faqCategories, faqItems } from '../content/siteData';

const FAQ = () => {
  const [activeFaqId, setActiveFaqId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqItems 
    : faqItems.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (faqId) => {
    setActiveFaqId((currentFaqId) => (currentFaqId === faqId ? null : faqId));
  };

  useEffect(() => {
    setActiveFaqId(null);
  }, [selectedCategory]);

  const iconMap = {
    building: Building,
    home: Home,
    'dollar-sign': DollarSign,
    'trending-up': TrendingUp,
    'file-text': FileText,
    clock: Clock,
    'map-pin': MapPin,
    shield: Shield
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'General': return Building;
      case 'Buying': return Home;
      case 'Selling': return DollarSign;
      case 'Investment': return TrendingUp;
      case 'Legal': return FileText;
      case 'Support': return Users;
      default: return HelpCircle;
    }
  };

  return (
    <section id="faq" className="section-padding scroll-mt-28 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full mb-6">
            <span className="text-accent-gold font-medium text-sm">Frequently Asked Questions</span>
          </div>
          <h2 className="heading-lg mb-4">
            Got
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-400">
              {" "}Questions?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Find answers to common questions about our services, process, and how we can help 
            you achieve your real estate goals.
          </p>
        </Motion.div>

        {/* Category Filter */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {faqCategories.map((category) => (
            <Motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                selectedCategory === category
                  ? 'bg-accent-gold text-primary-dark shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category !== 'All' && (
                <React.Fragment>
                  {React.createElement(getCategoryIcon(category), { className: "w-4 h-4 mr-2" })}
                </React.Fragment>
              )}
              {category}
            </Motion.button>
          ))}
        </Motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <Motion.button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-300"
                whileHover={{ backgroundColor: "#f9fafb" }}
              >
                <div className="flex items-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-yellow-400 rounded-xl flex items-center justify-center mr-4">
                    {React.createElement(iconMap[faq.icon] || HelpCircle, { className: 'w-6 h-6 text-white' })}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-dark mb-1">
                      {faq.question}
                    </h3>
                    <span className="text-sm text-accent-gold font-medium">
                      {faq.category}
                    </span>
                  </div>
                </div>
                <Motion.div
                  animate={{ rotate: activeFaqId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                </Motion.div>
              </Motion.button>

              <AnimatePresence>
                {activeFaqId === faq.id && (
                  <Motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
