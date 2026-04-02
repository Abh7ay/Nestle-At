export const faqCategories = ['All', 'General', 'Buying', 'Selling', 'Investment', 'Legal', 'Support'];

export const faqItems = [
  {
    id: 1,
    category: 'General',
    question: 'What services does Nestle offer?',
    answer:
      'Nestle offers comprehensive real estate services including property sales, buyer representation, rental management, investment consulting, property valuation, and legal services. We provide end-to-end solutions for all your real estate needs.',
    icon: 'building'
  },
  {
    id: 2,
    category: 'Buying',
    question: 'How do I get started with buying a property?',
    answer:
      "Getting started is easy! Simply contact one of our expert agents, schedule a consultation to discuss your requirements, and we'll guide you through the entire process from property search to closing. We'll help you find properties that match your budget and preferences.",
    icon: 'home'
  },
  {
    id: 3,
    category: 'Selling',
    question: 'What is the process for selling my property?',
    answer:
      'Our selling process includes a comprehensive market analysis, professional photography and marketing, strategic pricing, showing management, negotiation, and closing support. We handle everything to ensure you get the best possible price for your property.',
    icon: 'dollar-sign'
  },
  {
    id: 4,
    category: 'Investment',
    question: 'Do you provide investment property advice?',
    answer:
      "Yes, we specialize in investment properties! Our team provides market analysis, ROI calculations, portfolio management strategies, and helps identify high-potential investment opportunities. We'll help you build a diversified real estate portfolio.",
    icon: 'trending-up'
  },
  {
    id: 5,
    category: 'Legal',
    question: 'What legal services do you offer?',
    answer:
      'We provide comprehensive legal support including contract review, title search, documentation preparation, dispute resolution, and ensuring compliance with all real estate regulations. Our legal experts protect your interests throughout the transaction.',
    icon: 'file-text'
  },
  {
    id: 6,
    category: 'Support',
    question: 'How long does the average property transaction take?',
    answer:
      "The timeline varies depending on the type of transaction. Typically, residential purchases take 30-45 days from contract to closing, while commercial transactions may take 60-90 days. We'll provide you with a detailed timeline based on your specific situation.",
    icon: 'clock'
  },
  {
    id: 7,
    category: 'General',
    question: 'What areas do you serve?',
    answer:
      "We currently serve over 50 cities across multiple states, with a strong presence in major metropolitan areas. Our network continues to expand, and we can connect you with trusted partners in areas we don't directly serve.",
    icon: 'map-pin'
  },
  {
    id: 8,
    category: 'Support',
    question: 'How do you ensure client satisfaction?',
    answer:
      'Client satisfaction is our top priority! We achieve this through personalized service, transparent communication, expert guidance, attention to detail, and going above and beyond expectations. Our 98% satisfaction rate speaks to our commitment.',
    icon: 'shield'
  }
];

export const propertySortOptions = [
  { value: 'featured', label: 'Featured First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'beds-high', label: 'Most Beds' }
];
