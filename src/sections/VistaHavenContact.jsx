import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Building,
  Users,
  Globe,
  ArrowRight
} from 'lucide-react';

const VistaHavenContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'general'
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@vistahaven.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Main St, New York, NY 10001',
      description: 'By appointment only'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday - Friday: 9AM - 6PM',
      description: 'Saturday: 10AM - 4PM'
    }
  ];

  const services = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'buying', label: 'Property Buying' },
    { value: 'selling', label: 'Property Selling' },
    { value: 'renting', label: 'Rental Services' },
    { value: 'investment', label: 'Investment Properties' },
    { value: 'valuation', label: 'Property Valuation' }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full mb-6">
            <span className="text-accent-gold font-medium text-sm">Get In Touch</span>
          </div>
          <h2 className="heading-lg mb-4">
            Let's Start Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-400">
              {" "}Real Estate Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Whether you're buying, selling, or investing, our expert team is ready to help 
            you achieve your real estate goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary-dark mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                      >
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all resize-none"
                      placeholder="Tell us more about your real estate needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-accent-gold text-primary-dark rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    whileHover={{ scale: !isSubmitting ? 1.02 : 1 }}
                    whileTap={{ scale: !isSubmitting ? 0.98 : 1 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 bg-accent-gold rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-dark mb-1">{info.title}</h4>
                      <p className="text-gray-700">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">Our Location</h3>
              
              <div className="relative h-64 bg-gradient-to-br from-accent-gold/10 to-yellow-400/10 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">123 Main St, New York, NY 10001</p>
                    <p className="text-sm text-gray-500 mt-2">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent-gold to-yellow-400 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-primary-dark/80 mb-6 max-w-2xl mx-auto">
              For urgent inquiries or time-sensitive matters, call our hotline for immediate assistance.
            </p>
            <motion.a
              href="tel:+15551234567"
              className="inline-flex items-center px-8 py-4 bg-primary-dark text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency Hotline: +1 (555) 123-4567
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VistaHavenContact;
