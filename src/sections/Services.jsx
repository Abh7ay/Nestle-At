import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Award,
  Search,
  FileText,
  Calculator,
  Camera,
  Key
} from 'lucide-react';
import { assets } from '../assets/assets';

const Services = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const featuredServices = [
    {
      title: 'Property Sales',
      description: 'Expertly promoting and selling your property to attract qualified buyers.',
      icon: Target,
      features: ['Market Analysis', 'Professional Photography', 'Strategic Marketing', 'Negotiation'],
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    },
    {
      title: 'Buyer Representation',
      description: 'Guiding you through the home-buying process, prioritizing your interests.',
      icon: Users,
      features: ['Property Search', 'Virtual Tours', 'Due Diligence', 'Closing Support'],
      color: 'from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop'
    },
    {
      title: 'Investment Consulting',
      description: 'Providing strategic advice to help you capitalize on real estate opportunities.',
      icon: TrendingUp,
      features: ['Market Analysis', 'ROI Optimization', 'Portfolio Management', 'Risk Assessment'],
      color: 'from-purple-500 to-purple-600',
      image: assets.project_img_3
    }
  ];

  const allServices = [
    {
      title: 'Property Sales',
      description: 'Expertly promoting and selling your property to attract qualified buyers.',
      icon: Target,
      features: ['Market Analysis', 'Professional Photography', 'Strategic Marketing', 'Negotiation'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Buyer Representation',
      description: 'Guiding you through the home-buying process, prioritizing your interests.',
      icon: Users,
      features: ['Property Search', 'Virtual Tours', 'Due Diligence', 'Closing Support'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Rental Management',
      description: 'Managing tenant relations, maintenance, and finances to maximize rental returns.',
      icon: Building,
      features: ['Tenant Screening', 'Property Maintenance', 'Rent Collection', 'Financial Reporting'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Investment Consulting',
      description: 'Providing strategic advice to help you capitalize on real estate opportunities.',
      icon: TrendingUp,
      features: ['Market Analysis', 'ROI Optimization', 'Portfolio Management', 'Risk Assessment'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Property Valuation',
      description: 'Accurately assessing your property\'s value for sales, purchases, or investments.',
      icon: Award,
      features: ['Appraisal Services', 'Market Comparisons', 'Investment Analysis', 'Legal Compliance'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Legal Services',
      description: 'Comprehensive legal support for all your real estate transactions and documentation.',
      icon: FileText,
      features: ['Contract Review', 'Title Search', 'Legal Documentation', 'Dispute Resolution'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Market Analysis',
      description: 'In-depth market research and analysis to inform your real estate decisions.',
      icon: Search,
      features: ['Trend Analysis', 'Comparative Market Analysis', 'Investment Opportunities', 'Risk Assessment'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Financial Consulting',
      description: 'Expert financial advice and mortgage assistance for your property investments.',
      icon: Calculator,
      features: ['Mortgage Assistance', 'Financial Planning', 'Investment Strategies', 'Tax Optimization'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Property Management',
      description: 'Complete property management solutions for landlords and property owners.',
      icon: Key,
      features: ['Maintenance Coordination', 'Rent Collection', 'Tenant Relations', 'Property Inspections'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Properties Managed', description: 'Active listings and management' },
    { number: '98%', label: 'Client Satisfaction', description: 'Exceeding expectations consistently' },
    { number: '24/7', label: 'Support Available', description: 'Always here when you need us' },
    { number: '15+', label: 'Years Experience', description: 'Industry expertise and knowledge' }
  ];

  const tabs = [
    { id: 'featured', label: 'Featured Services' },
    { id: 'all', label: 'All Services' }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full mb-6">
            <span className="text-accent-gold font-medium text-sm">Our Services</span>
          </div>
          <h2 className="heading-lg mb-4">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-400">
              {" "}Real Estate Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From property sales to investment consulting, we provide comprehensive services 
            tailored to your unique real estate needs.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-lg shadow-md p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent-gold text-primary-dark shadow-lg'
                    : 'text-gray-600 hover:text-primary-dark'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-primary-dark mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Content */}
        <div className="min-h-[400px]">
          {activeTab === 'featured' ? (
            <motion.div
              key="featured"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -10 }}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-primary-dark">{service.title}</h4>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href="#contact"
                      className="inline-flex items-center text-accent-gold font-semibold hover:text-yellow-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="all"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {allServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-primary-dark">{service.title}</h4>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-dark to-gray-800 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is ready to provide personalized services tailored to your specific real estate needs.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-accent-gold text-primary-dark rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
