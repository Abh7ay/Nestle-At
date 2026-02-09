import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Heart, 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Calendar,
  Eye,
  Star,
  Building,
  Home,
  DollarSign,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { assets, vistaPropertiesData } from '../assets/assets';

const VistaHavenProperties = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const properties = vistaPropertiesData.map((property, index) => ({
    id: property.id,
    title: property.title,
    type: property.type,
    location: property.city,
    price: `$${property.price.toLocaleString()}`,
    beds: property.beds,
    baths: property.baths,
    sqft: property.floorspace,
    image: property.image,
    featured: property.featured,
    badge: property.featured ? 'Featured' : 'New',
    rating: 5,
    views: Math.floor(Math.random() * 2000) + 500,
    date: 'Recently'
  }));

  const categories = [
    { id: 'all', label: 'All Properties', icon: Building },
    { id: 'featured', label: 'Featured', icon: Star },
    { id: 'house', label: 'Houses', icon: Home },
    { id: 'apartment', label: 'Apartments', icon: Building },
    { id: 'villa', label: 'Villas', icon: Home }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesCategory = selectedCategory === 'all' || 
                          selectedCategory === 'featured' ? property.featured :
                          property.type.toLowerCase().includes(selectedCategory);
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const PropertyCard = ({ property, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
        viewMode === 'list' ? 'flex' : ''
      }`}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Property Image */}
      <div className={`relative ${viewMode === 'list' ? 'w-80 h-64 flex-shrink-0' : 'h-80 overflow-hidden'}`}>
        <img
          src={property.image}
          alt={property.title}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
            viewMode === 'list' ? 'rounded-l-2xl' : 'rounded-t-2xl'
          }`}
        />
        
        {/* Badge */}
        {property.badge && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-accent-gold text-primary-dark text-xs font-bold rounded-full">
              {property.badge}
            </span>
          </div>
        )}
        
        {/* Heart Icon */}
        <motion.button
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent-gold hover:text-primary-dark transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className="w-5 h-5" />
        </motion.button>
        
        {/* Views */}
        <div className="absolute bottom-4 right-4 flex items-center text-white text-sm bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
          <Eye className="w-4 h-4 mr-1" />
          {property.views}
        </div>
      </div>
      
      {/* Property Details */}
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-primary-dark mb-2">{property.title}</h3>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {property.location}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-accent-gold">{property.price}</div>
            <div className="flex items-center text-sm text-gray-600">
              <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
              {property.rating}
            </div>
          </div>
        </div>
        
        {/* Property Features */}
        <div className="flex items-center space-x-4 mb-4 text-gray-600">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.sqft} sqft</span>
          </div>
        </div>
        
        {/* Date */}
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Calendar className="w-4 h-4 mr-1" />
          Listed {property.date}
        </div>
        
        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="inline-flex items-center text-accent-gold font-semibold hover:text-yellow-400 transition-colors duration-300"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-2" />
        </motion.a>
      </div>
    </motion.div>
  );

  return (
    <section id="properties" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full mb-6">
            <span className="text-accent-gold font-medium text-sm">Featured Properties</span>
          </div>
          <h2 className="heading-lg mb-4">
            Discover Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-yellow-400">
              {" "}Dream Property
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Browse our curated selection of premium properties in prime locations. 
            Each listing offers exceptional value and investment potential.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:border-accent-gold focus:outline-none transition-colors"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
                    selectedCategory === category.id
                      ? 'bg-accent-gold text-primary-dark'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                </button>
              ))}
            </div>
            
            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-accent-gold text-primary-dark'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="grid grid-cols-2 gap-1 w-4 h-4">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-accent-gold text-primary-dark'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="space-y-1 w-4 h-4">
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                </div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-8"
        >
          <p className="text-gray-600">
            Showing <span className="font-semibold text-primary-dark">{filteredProperties.length}</span> properties
          </p>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:border-accent-gold focus:outline-none">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </motion.div>

        {/* Properties Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-accent-gold text-primary-dark rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Properties
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default VistaHavenProperties;
