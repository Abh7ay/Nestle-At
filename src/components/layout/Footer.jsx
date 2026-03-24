import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  const footerLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Properties', href: '#properties' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <footer className="bg-[#0B1220] text-[#9CA3AF]">
      <div className="container-custom py-6 md:py-7">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm md:text-[1.03rem]">
          <a href="#hero" aria-label="Nestle@" className="inline-flex items-center text-[#E5E7EB] hover:text-white transition-colors">
            <img src={assets.logo} alt="Nestle@" className="h-7 w-auto" />
          </a>

          <span className="text-[#9CA3AF]">&copy; 2026 Nestle@. All rights reserved.</span>

          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
