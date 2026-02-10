import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
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
  Phone,
  ChevronRight
} from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      category: 'General',
      question: 'What services does Nestle offer?',
      answer: 'Nestle offers comprehensive real estate services including property sales, buyer representation, rental management, investment consulting, property valuation, and legal services. We provide end-to-end solutions for all your real estate needs.',
      icon: Building
    },
    {
      id: 2,
      category: 'Buying',
      question: 'How do I get started with buying a property?',
      answer: 'Getting started is easy! Simply contact one of our expert agents, schedule a consultation to discuss your requirements, and we\'ll guide you through the entire process from property search to closing. We\'ll help you find properties that match your budget and preferences.',
      icon: Home
    },
    {
      id: 3,
      category: 'Selling',
      question: 'What is the process for selling my property?',
      answer: 'Our selling process includes a comprehensive market analysis, professional photography and marketing, strategic pricing, showing management, negotiation, and closing support. We handle everything to ensure you get the best possible price for your property.',
      icon: DollarSign
    },
    {
      id: 4,
      category: 'Investment',
      question: 'Do you provide investment property advice?',
      answer: 'Yes, we specialize in investment properties! Our team provides market analysis, ROI calculations, portfolio management strategies, and helps identify high-potential investment opportunities. We\'ll help you build a diversified real estate portfolio.',
      icon: TrendingUp
    },
    {
      id: 5,
      category: 'Legal',
      question: 'What legal services do you offer?',
      answer: 'We provide comprehensive legal support including contract review, title search, documentation preparation, dispute resolution, and ensuring compliance with all real estate regulations. Our legal experts protect your interests throughout the transaction.',
      icon: FileText
    },
    {
      id: 6,
      category: 'Support',
      question: 'How long does the average property transaction take?',
      answer: 'The timeline varies depending on the type of transaction. Typically, residential purchases take 30-45 days from contract to closing, while commercial transactions may take 60-90 days. We\'ll provide you with a detailed timeline based on your specific situation.',
      icon: Clock
    },
    {
      id: 7,
      category: 'General',
      question: 'What areas do you serve?',
      answer: 'We currently serve over 50 cities across multiple states, with a strong presence in major metropolitan areas. Our network continues to expand, and we can connect you with trusted partners in areas we don\'t directly serve.',
      icon: MapPin
    },
    {
      id: 8,
      category: 'Support',
      question: 'How do you ensure client satisfaction?',
      answer: 'Client satisfaction is our top priority! We achieve this through personalized service, transparent communication, expert guidance, attention to detail, and going above and beyond expectations. Our 98% satisfaction rate speaks to our commitment.',
      icon: Shield
    }
  ];

  const categories = ['All', 'General', 'Buying', 'Selling', 'Investment', 'Legal', 'Support'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
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
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
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
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-300"
                whileHover={{ backgroundColor: "#f9fafb" }}
              >
                <div className="flex items-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-yellow-400 rounded-xl flex items-center justify-center mr-4">
                    <faq.icon className="w-6 h-6 text-white" />
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
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
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
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-dark to-gray-800 rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent-gold rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-primary-dark" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our expert team is here to help. 
              Reach out to us and we'll provide you with the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-accent-gold text-primary-dark rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
                <ChevronRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                className="inline-flex items-center px-8 py-4 border-2 border-white/50 text-white rounded-lg font-semibold hover:bg-white hover:text-primary-dark transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us
                <Phone className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-6 bg-white rounded-2xl shadow-lg"
          >
            <div className="text-3xl font-bold text-primary-dark mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-white rounded-2xl shadow-lg"
          >
            <div className="text-3xl font-bold text-primary-dark mb-2">100+</div>
            <div className="text-gray-600">FAQ Topics</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center p-6 bg-white rounded-2xl shadow-lg"
          >
            <div className="text-3xl font-bold text-primary-dark mb-2">98%</div>
            <div className="text-gray-600">Questions Answered</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center p-6 bg-white rounded-2xl shadow-lg"
          >
            <div className="text-3xl font-bold text-primary-dark mb-2">5min</div>
            <div className="text-gray-600">Avg Response Time</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
