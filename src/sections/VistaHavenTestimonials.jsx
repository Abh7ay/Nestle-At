import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote,
  Home,
  Building,
  MapPin
} from 'lucide-react';
import { testimonialsData } from '../assets/assets';

const VistaHavenTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = testimonialsData;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full mb-6">
            <span className="text-accent-gold font-medium text-sm">Client Testimonials</span>
          </div>
          <h2 className="heading-lg mb-4">
            What Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-400">
              {" "}Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Hear from our satisfied clients about their experiences working with Nestel@ 
            and how we helped them achieve their real estate goals.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Client Info */}
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].alt || testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-primary-dark" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-accent-gold font-medium mb-4">
                    {testimonials[currentIndex].title}
                  </p>
                  
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  <div className="flex flex-col space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center md:justify-start">
                      <Building className="w-4 h-4 mr-2 text-accent-gold" />
                      Satisfied Client
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <Star className="w-4 h-4 mr-2 text-accent-gold" />
                      {testimonials[currentIndex].rating} Star Rating
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-accent-gold/20" />
                  <p className="text-lg text-gray-700 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-accent-gold text-primary-dark rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-accent-gold w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-accent-gold text-primary-dark rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
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
            className="text-center p-6 bg-gray-50 rounded-2xl"
          >
            <div className="text-3xl font-bold text-primary-dark mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-gray-50 rounded-2xl"
          >
            <div className="text-3xl font-bold text-primary-dark mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center p-6 bg-gray-50 rounded-2xl"
          >
            <div className="text-3xl font-bold text-primary-dark mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center p-6 bg-gray-50 rounded-2xl"
          >
            <div className="text-3xl font-bold text-primary-dark mb-2">15+</div>
            <div className="text-gray-600">Years Service</div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-dark to-gray-800 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Satisfied Clients Today
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the same exceptional service that our clients rave about. 
              Let us help you find your perfect property or achieve your real estate goals.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-accent-gold text-primary-dark rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VistaHavenTestimonials;
