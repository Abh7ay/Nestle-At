import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Award,
  Users,
  TrendingUp,
  Star,
  ArrowRight
} from 'lucide-react';

const VistaHavenAgents = () => {
  const agents = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Senior Real Estate Agent',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=400&h=400&fit=crop&crop=face',
      email: 'sarah.mitchell@vistahaven.com',
      phone: '+1 (555) 123-4567',
      location: 'Manhattan, NY',
      bio: 'With over 10 years of experience in luxury real estate, Sarah specializes in high-end residential properties and has closed over $100M in transactions.',
      specialties: ['Luxury Homes', 'Investment Properties', 'New Developments'],
      achievements: ['Top Agent 2023', '100+ Transactions', '5-Star Rating'],
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Commercial Real Estate Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      email: 'michael.chen@vistahaven.com',
      phone: '+1 (555) 234-5678',
      location: 'Brooklyn, NY',
      bio: 'Michael brings extensive expertise in commercial real estate, helping businesses find the perfect locations for their operations and investments.',
      specialties: ['Commercial Properties', 'Office Spaces', 'Retail Locations'],
      achievements: ['Commercial Expert', '50+ Deals', 'Market Leader'],
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Buyer\'s Agent Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      email: 'emily.rodriguez@vistahaven.com',
      phone: '+1 (555) 345-6789',
      location: 'Queens, NY',
      bio: 'Emily is dedicated to helping first-time homebuyers navigate the complex process of purchasing their dream home with confidence and ease.',
      specialties: ['First-Time Buyers', 'Family Homes', 'Neighborhood Expert'],
      achievements: ['Buyer\'s Choice', '200+ Families Helped', 'Patient Guide'],
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Investment Property Advisor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      email: 'david.thompson@vistahaven.com',
      phone: '+1 (555) 456-7890',
      location: 'Long Island, NY',
      bio: 'David specializes in investment properties, helping clients build wealth through strategic real estate investments and portfolio management.',
      specialties: ['Investment Properties', 'ROI Analysis', 'Portfolio Management'],
      achievements: ['Investment Guru', '$50M+ Portfolio', 'High Returns'],
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      id: 5,
      name: 'Jessica Williams',
      role: 'Luxury Property Specialist',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face',
      email: 'jessica.williams@vistahaven.com',
      phone: '+1 (555) 567-8901',
      location: 'Upper East Side, NY',
      bio: 'Jessica has an exceptional eye for luxury properties and has built strong relationships with high-net-worth clients seeking exclusive real estate opportunities.',
      specialties: ['Luxury Condos', 'Penthouses', 'Exclusive Listings'],
      achievements: ['Luxury Expert', 'VIP Clientele', 'Record Sales'],
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      id: 6,
      name: 'Robert Martinez',
      role: 'Property Management Expert',
      image: 'https://images.unsplash.com/photo-1560250097-0b11f2810876?w=400&h=400&fit=crop&crop=face',
      email: 'robert.martinez@vistahaven.com',
      phone: '+1 (555) 678-9012',
      location: 'Bronx, NY',
      bio: 'Robert manages a diverse portfolio of residential and commercial properties, ensuring maximum returns and tenant satisfaction for property owners.',
      specialties: ['Property Management', 'Tenant Relations', 'Maintenance'],
      achievements: ['Management Pro', '200+ Properties', 'High Occupancy'],
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      id: 7,
      name: 'Amanda Foster',
      role: 'Real Estate Analyst',
      image: 'https://images.unsplash.com/photo-1544002268-5a892216cd4b?w=400&h=400&fit=crop&crop=face',
      email: 'amanda.foster@vistahaven.com',
      phone: '+1 (555) 789-0123',
      location: 'Staten Island, NY',
      bio: 'Amanda provides in-depth market analysis and data-driven insights to help clients make informed real estate decisions based on current trends.',
      specialties: ['Market Analysis', 'Data Insights', 'Trend Forecasting'],
      achievements: ['Data Expert', 'Market Reports', 'Predictive Analysis'],
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    },
    {
      id: 8,
      name: 'James Wilson',
      role: 'New Construction Specialist',
      image: 'https://images.unsplash.com/photo-1507591064343-1cbaafd3498b?w=400&h=400&fit=crop&crop=face',
      email: 'james.wilson@vistahaven.com',
      phone: '+1 (555) 890-1234',
      location: 'New Jersey',
      bio: 'James specializes in new construction properties, working closely with developers to bring innovative housing solutions to the market.',
      specialties: ['New Construction', 'Developments', 'Custom Homes'],
      achievements: ['Construction Expert', '50+ Projects', 'Innovation Leader'],
      social: {
        linkedin: '#',
        twitter: '#',
        facebook: '#'
      }
    }
  ];

  const AgentCard = ({ agent, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
      whileHover={{ scale: 1.02, y: -10 }}
    >
      {/* Agent Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Social Links */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {Object.entries(agent.social).map(([platform, link]) => (
            <motion.a
              key={platform}
              href={link}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {platform === 'linkedin' && <Linkedin className="w-4 h-4" />}
              {platform === 'twitter' && <Twitter className="w-4 h-4" />}
              {platform === 'facebook' && <Facebook className="w-4 h-4" />}
            </motion.a>
          ))}
        </div>
        
        {/* Location Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center text-white text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
            <MapPin className="w-4 h-4 mr-1" />
            {agent.location}
          </div>
        </div>
      </div>
      
      {/* Agent Details */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-primary-dark mb-1">{agent.name}</h3>
          <p className="text-accent-gold font-medium">{agent.role}</p>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{agent.bio}</p>
        
        {/* Specialties */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {agent.specialties.map((specialty, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-accent-gold/10 text-accent-gold text-sm rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-700 mb-2">Achievements:</h4>
          <div className="space-y-1">
            {agent.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-center text-sm text-gray-600">
                <Award className="w-4 h-4 mr-2 text-accent-gold" />
                {achievement}
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-600 text-sm">
            <Mail className="w-4 h-4 mr-2" />
            {agent.email}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Phone className="w-4 h-4 mr-2" />
            {agent.phone}
          </div>
        </div>
        
        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="inline-flex items-center text-accent-gold font-semibold hover:text-yellow-400 transition-colors duration-300"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Agent
          <ArrowRight className="w-4 h-4 ml-2" />
        </motion.a>
      </div>
    </motion.div>
  );

  return (
    <section id="agents" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full mb-6">
            <span className="text-accent-gold font-medium text-sm">Our Team</span>
          </div>
          <h2 className="heading-lg mb-4">
            Expert Real Estate
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-400">
              {" "}Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our team of experienced agents is dedicated to providing exceptional service 
            and helping you achieve your real estate goals.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-accent-gold to-yellow-400 rounded-2xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary-dark mb-2">8+</div>
            <div className="text-lg font-semibold text-gray-700 mb-1">Expert Agents</div>
            <div className="text-sm text-gray-600">Dedicated professionals</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-accent-gold to-yellow-400 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary-dark mb-2">15+</div>
            <div className="text-lg font-semibold text-gray-700 mb-1">Years Experience</div>
            <div className="text-sm text-gray-600">Average per agent</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-accent-gold to-yellow-400 rounded-2xl">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary-dark mb-2">4.9</div>
            <div className="text-lg font-semibold text-gray-700 mb-1">Average Rating</div>
            <div className="text-sm text-gray-600">Client satisfaction</div>
          </motion.div>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
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
              Ready to Work with Our Expert Team?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with one of our experienced agents today and take the first step 
              toward finding your perfect property or achieving your real estate goals.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-accent-gold text-primary-dark rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Your Agent
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VistaHavenAgents;
