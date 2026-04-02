import React, { useEffect, useMemo, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote,
  Building,
  Clock3,
  MapPin
} from 'lucide-react';
import { testimonialsData } from '../assets/assets';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = useMemo(() => {
    const outcomes = [
      { city: 'California', timeline: 'Closed in 21 days', type: 'Luxury apartment' },
      { city: 'San Francisco', timeline: 'Offer accepted in 9 days', type: 'Investment condo' },
      { city: 'Chicago', timeline: 'Negotiated 7.5% below asking', type: 'Family townhouse' }
    ];

    return testimonialsData.map((item, index) => ({
      ...item,
      outcome: outcomes[index % outcomes.length]
    }));
  }, []);

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const handleKeyNavigation = (event) => {
    if (event.key === 'ArrowRight') {
      nextTestimonial();
    }

    if (event.key === 'ArrowLeft') {
      prevTestimonial();
    }
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
    <section id="testimonials" className="section-padding scroll-mt-28 bg-white">
      <div className="container-custom">
        {/* Header */}
        <Motion.div
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
        </Motion.div>

        {/* Testimonial Carousel */}
        <div
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onKeyDown={handleKeyNavigation}
          tabIndex={0}
          role="region"
          aria-label="Client testimonials carousel"
        >
          <AnimatePresence mode="wait">
            <Motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 90 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -90 }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-xl md:p-12"
            >
              <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
                <div className="text-center md:text-left">
                  <div className="relative mx-auto mb-5 flex w-fit items-center justify-center md:mx-0">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].alt || testimonials[currentIndex].name}
                      className="mx-auto h-24 w-24 rounded-full object-cover md:mx-0"
                    />
                    <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-gold">
                      <Quote className="w-4 h-4 text-primary-dark" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-primary-dark mb-2">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-accent-gold font-medium mb-4">
                    {testimonials[currentIndex].title}
                  </p>
                  
                  <div className="mb-4 flex justify-center md:justify-start">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  <div className="space-y-2 rounded-2xl border border-gray-200 bg-white/80 p-4 text-left text-sm text-gray-600">
                    <div className="flex items-center justify-center md:justify-start">
                      <Building className="w-4 h-4 mr-2 text-accent-gold" />
                      Satisfied Client
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <MapPin className="mr-2 h-4 w-4 text-accent-gold" />
                      {testimonials[currentIndex].outcome.city}
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <Clock3 className="mr-2 h-4 w-4 text-accent-gold" />
                      {testimonials[currentIndex].outcome.timeline}
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <Star className="w-4 h-4 mr-2 text-accent-gold" />
                      {testimonials[currentIndex].rating} Star Rating
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -left-2 -top-6 h-14 w-14 text-accent-gold/20" />
                  <p className="mb-7 max-w-2xl text-xl leading-relaxed text-gray-700 italic md:text-2xl md:leading-relaxed">
                    {testimonials[currentIndex].text.replace(/^["']|["']$/g, '')}
                  </p>

                  <div className="inline-flex items-center rounded-full border border-accent-gold/30 bg-accent-gold/10 px-4 py-2 text-sm font-medium text-primary-dark">
                    Outcome: {testimonials[currentIndex].outcome.type}
                  </div>

                  <div className="mt-8">
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500">
                      <span>Story {currentIndex + 1}</span>
                      <span>{testimonials.length}</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                      <Motion.div
                        key={currentIndex}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: isPaused ? 0 : 5.2, ease: 'linear' }}
                        className="h-full rounded-full bg-accent-gold"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <Motion.button
              onClick={prevTestimonial}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent-gold px-4 text-primary-dark transition-colors hover:bg-yellow-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Show previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="hidden text-sm font-semibold md:inline">Prev Story</span>
            </Motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-accent-gold w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Motion.button
              onClick={nextTestimonial}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent-gold px-4 text-primary-dark transition-colors hover:bg-yellow-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Show next testimonial"
            >
              <span className="hidden text-sm font-semibold md:inline">Next Story</span>
              <ChevronRight className="h-6 w-6" />
            </Motion.button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
