import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Target,
  Heart,
  Globe,
  Clock,
  Trophy,
  Building,
  Home
} from 'lucide-react';

const About = () => {
  const stats = [
    { 
      icon: Building, 
      number: '500+', 
      label: 'Properties Sold', 
      description: 'Successfully delivered properties to happy clients' 
    },
    { 
      icon: Users, 
      number: '1,200+', 
      label: 'Happy Clients', 
      description: 'Families and investors who trust our expertise' 
    },
    { 
      icon: Trophy, 
      number: '15+', 
      label: 'Years Experience', 
      description: 'Industry leadership and proven track record' 
    },
    { 
      icon: Globe, 
      number: '50+', 
      label: 'Cities Covered', 
      description: 'Expanding our premium real estate services' 
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'We put our clients at the heart of everything we do, ensuring personalized service and exceptional results.'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through transparency, honesty, and ethical business practices.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering the highest standards of service and exceeding client expectations.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Embracing cutting-edge technology and modern strategies to stay ahead in the real estate market.'
    }
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Foundation',
      description: 'Nestle was founded with a vision to revolutionize luxury real estate services.',
      icon: Building
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Expanded operations to major cities and established our premium property portfolio.',
      icon: Globe
    },
    {
      year: '2018',
      title: 'Innovation',
      description: 'Introduced cutting-edge technology and data-driven approaches to real estate.',
      icon: TrendingUp
    },
    {
      year: '2024',
      title: 'Leadership',
      description: 'Recognized as industry leaders with over 500 successful property transactions.',
      icon: Trophy
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full mb-6">
            <span className="text-accent-gold font-medium text-sm">About Nestel@</span>
          </div>
          <h2 className="heading-lg mb-4">
            Your Trusted Partner in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-400">
              {" "}Luxury Real Estate
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            With over 15 years of excellence, we've built a reputation for delivering 
            exceptional service and outstanding results for our clients.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-accent-gold/5 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-accent-gold to-yellow-400 rounded-2xl">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary-dark mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6 text-primary-dark">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To provide exceptional real estate services that exceed client expectations through 
              innovation, integrity, and personalized attention to detail. We strive to make every 
              property transaction a seamless and rewarding experience.
            </p>
            <div className="space-y-4">
              {['Personalized Service', 'Market Expertise', 'Client Satisfaction'].map((item, index) => (
                <div key={item} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6 text-primary-dark">Our Vision</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To be the most trusted and innovative real estate company, setting new standards 
              for excellence in property services while creating lasting value for our clients and 
              communities.
            </p>
            <div className="space-y-4">
              {['Industry Leadership', 'Sustainable Growth', 'Global Reach'].map((item, index) => (
                <div key={item} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-md mb-4 text-primary-dark">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our business and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-accent-gold to-yellow-400 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-md mb-4 text-primary-dark">Our Journey</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our success story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent-gold/20"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-yellow-400 rounded-full flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-primary-dark mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <span className="text-accent-gold font-bold">{item.year}</span>
                    </div>
                  </div>

                  <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {item.year.slice(-2)}
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-dark to-gray-800 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Nestle Difference?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have found their dream properties through our expert guidance.
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

export default About;
