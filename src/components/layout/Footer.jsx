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
    <footer className="bg-primary-dark text-gray-400">
      <div className="container-custom py-6 md:py-7">
        <div className="flex flex-col gap-4 text-[0.94rem] md:text-base">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <a href="#hero" aria-label="Nestle@" className="inline-flex items-center text-white hover:opacity-90 transition-opacity">
              <img src={assets.logo} alt="Nestle@" className="h-7 w-auto" />
            </a>

            <span className="text-sm md:text-[0.95rem] text-gray-400">&copy; 2026 Nestle@. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-start">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
