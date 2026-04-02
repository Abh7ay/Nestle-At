import React from 'react';
import { motion as Motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle,
  Target,
  Heart,
  Globe,
  Trophy,
  Building
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
      description: 'Every recommendation starts with your goals, budget, and timeline.'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Clear communication, transparent pricing, and dependable guidance at every step.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Thorough research, strong negotiation, and careful execution from search to closing.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Data-backed strategy combined with practical local market expertise.'
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
    <section id="about" className="section-padding scroll-mt-28 bg-white">
      <div className="container-custom">
        {/* Header */}
        <Motion.div
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
        </Motion.div>

        {/* Stats Section */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <Motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center rounded-xl border border-gray-200 p-6 transition-colors duration-300 hover:bg-accent-gold/5"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-accent-gold to-yellow-400 rounded-2xl">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary-dark mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </Motion.div>
          ))}
        </Motion.div>

        {/* Mission & Vision */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6 text-primary-dark">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We help clients make confident property decisions with honest advice,
              clear process, and reliable execution from first consultation to final handover.
            </p>
            <div className="space-y-4">
              {['Personalized advisory', 'Market-led recommendations', 'Stress-free transactions'].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6 text-primary-dark">Our Vision</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To become the most trusted real estate partner in every market we serve,
              known for transparency, quality, and measurable client outcomes.
            </p>
            <div className="space-y-4">
              {['Consistent market leadership', 'Sustainable long-term growth', 'Lasting client relationships'].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </Motion.div>
        </Motion.div>

        {/* Core Values */}
        <Motion.div
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
              <Motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 p-6 text-center transition-colors duration-300 hover:bg-gray-50"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-accent-gold to-yellow-400 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* Timeline */}
        <Motion.div
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
                <Motion.div
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
                </Motion.div>
              ))}
            </div>
          </div>
        </Motion.div>

      </div>
    </section>
  );
};

export default About;
