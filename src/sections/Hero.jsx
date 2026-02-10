import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { 
  ArrowRight, 
  MapPin, 
  Home, 
  Building, 
  Star, 
  Shield, 
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const stats = [
    { 
      icon: Building, 
      number: '500+', 
      label: 'Properties Sold',
      description: 'Successfully delivered properties'
    },
    { 
      icon: Home, 
      number: '1,200+', 
      label: 'Happy Clients',
      description: 'Satisfied families and investors'
    },
    { 
      icon: Shield, 
      number: '$50M+', 
      label: 'Total Value',
      description: 'Property transactions completed'
    },
    { 
      icon: Star, 
      number: '15+', 
      label: 'Expert Agents',
      description: 'Dedicated professionals'
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image Only */}
      <div className="absolute inset-0">
        <img
          src={assets.header_img}
          alt="Real Estate Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="heading-xl mb-6 text-white leading-tight tracking-tight mt-32"
            >
              Find Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-400">
                Luxury Home Today
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
            >
              Your trusted partner in finding the perfect property. 
              We guide you through every step with personalized service.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-accent-gold to-yellow-400 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-accent-gold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-300">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="#properties"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="group relative px-10 py-5 bg-accent-gold text-primary-dark rounded-2xl font-bold text-lg flex items-center hover:bg-yellow-400 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore Properties</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
              </motion.a>
              
              <Link
                to="contact"
                smooth={true}
                duration={800}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="group relative px-10 py-5 border-2 border-white/50 rounded-2xl font-bold text-lg flex items-center bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary-dark hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
              className="flex items-center justify-center gap-8 mb-12 mt-20"
            >
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 mr-2 text-accent-gold" />
                <span className="text-sm font-medium">Trusted by Many</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Star className="w-5 h-5 mr-2 text-accent-gold" />
                <span className="text-sm font-medium">5-Star Service</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Shield className="w-5 h-5 mr-2 text-accent-gold" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-accent-gold transition-colors mt-16"
            >
              <Link
                to="properties"
                smooth={true}
                duration={800}
                className="flex flex-col items-center"
              >
                <div className="flex space-x-2 mb-4">
                  <motion.div 
                    className="w-1 h-1 bg-current rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div 
                    className="w-1 h-1 bg-current rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div 
                    className="w-1 h-1 bg-current rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                  />
                </div>
                <span className="text-sm font-medium animate-pulse">Scroll to explore properties</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
