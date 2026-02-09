import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Send
} from 'lucide-react';
import { assets } from '../../assets/assets';

const VistaHavenFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Property Sales', href: '#services' },
      { name: 'Property Management', href: '#services' },
      { name: 'Market Analysis', href: '#services' },
      { name: 'Legal Services', href: '#services' }
    ],
    properties: [
      { name: 'Featured Properties', href: '#properties' },
      { name: 'New Listings', href: '#properties' },
      { name: 'Luxury Homes', href: '#properties' },
      { name: 'Commercial', href: '#properties' },
      { name: 'Investment Properties', href: '#properties' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'FAQ', href: '#faq' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-primary-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="heading-lg mb-4">
              Stay Updated with 
              <span className="text-accent-gold"> Nestel@</span>
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get exclusive access to new properties, market insights, and investment opportunities
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-accent-gold focus:outline-none transition-colors"
                required
              />
              <motion.button
                type="submit"
                className="px-8 py-3 bg-accent-gold text-primary-dark rounded-lg font-semibold hover:bg-accent-gold/90 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubscribed ? (
                  <span className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Subscribed!
                  </span>
                ) : (
                  <span className="flex items-center">
                    Subscribe
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <img 
                src={assets.logo} 
                alt="Nestel@" 
                className="h-12 w-auto"
              />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in luxury real estate. We specialize in premium properties 
              and personalized service to help you find your perfect home.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-accent-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-accent-gold" />
                <span>info@nestel.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-accent-gold" />
                <span>123 Main St, New York, NY 10001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-accent-gold hover:text-primary-dark transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6 capitalize">
                {category === 'company' ? 'Company' : 
                 category === 'services' ? 'Services' :
                 category === 'properties' ? 'Properties' : 'Support'}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-accent-gold transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          >
            <p>&copy; 2024 Nestel@. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent-gold transition-colors">Cookie Policy</a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default VistaHavenFooter;
