import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      setIsScrolled(scrollY > 50);
      setIsInHeroSection(scrollY < heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Properties', href: '#properties' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Full Navbar - Only in Hero Section */}
      {isInHeroSection && (
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
              : 'bg-transparent'
          }`}
        >
          <div className="container-custom">
            <nav className="flex items-center justify-between py-4">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                <div>
                  <img 
                    src={assets.logo} 
                    alt="Nestle@" 
                    className="h-10 w-auto transition-all duration-300"
                  />
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.nav 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="hidden lg:flex items-center space-x-8"
              >
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`font-medium transition-all duration-300 hover:text-accent-gold ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </motion.nav>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-700' 
                    : 'bg-white/20 backdrop-blur-sm text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </nav>
          </div>
        </motion.header>
      )}

      {/* Capsule Dropdown Menu - Only outside Hero Section */}
      {!isInHeroSection && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 z-50"
        >
          <div className="relative">
            <motion.button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center px-6 py-3 bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Menu Text */}
              <span className="text-sm font-medium text-gray-700">Menu</span>
            </motion.button>

            {/* Dropdown Content */}
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute top-full right-0 mt-3 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden"
              >
                <nav className="py-2">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent-gold transition-all duration-200 border-b border-gray-100 last:border-b-0"
                      whileHover={{ x: 8, scale: 1.02 }}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
