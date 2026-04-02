import React, { useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { assets } from '../assets/assets';
import heroBackgroundImage from '../assets/pexels-artbovich-7031408.jpg';
import { ArrowRight, ArrowUpRight, Menu, Star } from 'lucide-react';
import { Link } from 'react-scroll';
import { testimonialsData } from '../assets/assets';

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', target: 'hero' },
    { label: 'Services', target: 'services' },
    { label: 'Properties', target: 'properties' },
    { label: 'About', target: 'about' },
    { label: 'Agents', target: 'testimonials' },
  ];

  const stats = [
    { number: '200+', label: 'Projects Complete' },
    { number: '70+', label: 'Happy Clients' },
    { number: '$10M+', label: 'Project Value' },
  ];

  return (
    <section id="hero" className="relative isolate overflow-hidden scroll-mt-28 bg-[#140d0f] py-5 md:py-8 lg:py-10">
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroBackgroundImage}
          alt=""
          className="absolute inset-0 h-full w-full scale-[1.06] object-cover brightness-[0.62] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/22 via-[#2a140b]/15 to-black/35" />
      </div>

      <div className="container-custom relative z-10">
        <Motion.header
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 flex items-center justify-between rounded-full border border-white/30 bg-black/25 px-3 py-2 text-white shadow-[0_12px_28px_rgba(0,0,0,0.28)] backdrop-blur-xl md:px-5"
        >
          <div className="flex items-center px-1 py-1">
            <img src={assets.logo} alt="Nestle@" className="h-8 w-auto md:h-9" />
          </div>

          <nav className="hidden items-center gap-2 text-[15px] font-semibold text-white lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.target}
                smooth={true}
                duration={650}
                className={`cursor-pointer rounded-full px-5 py-2.5 transition-all duration-300 hover:text-white ${
                  item.label === 'Home' ? 'bg-white/22 text-white shadow-inner shadow-black/10' : 'hover:bg-white/14'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="contact"
              smooth={true}
              duration={650}
              className="hidden cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-2.5 text-sm font-semibold text-[#2B0D3E] transition-all duration-300 hover:brightness-95 md:flex"
            >
              <span>Contact Us Now</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2B0D3E] text-white">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-300 hover:bg-white/20 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </Motion.header>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <Motion.nav
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="mb-4 overflow-hidden rounded-2xl border border-white/20 bg-[#2B0D3E]/90 p-3 shadow-sm backdrop-blur-sm lg:hidden"
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.target}
                    smooth={true}
                    duration={650}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="cursor-pointer rounded-xl px-3 py-2 text-sm font-medium text-[#F2EAF7] transition-colors duration-200 hover:bg-white/12 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                to="contact"
                smooth={true}
                duration={650}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-3 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C59DD9] px-4 py-2.5 text-sm font-medium text-[#2B0D3E]"
              >
                <span className="h-2 w-2 rounded-full bg-[#2B0D3E]" />
                Contact Us Now
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Motion.nav>
          )}
        </AnimatePresence>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative min-h-[76vh] md:min-h-[82vh]"
        >
          <div className="relative z-10 flex min-h-[76vh] items-end pb-8 pt-8 md:min-h-[82vh] md:pb-10 md:pt-10">
            <Motion.div
              initial={{ opacity: 0, x: -26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: 'easeOut' }}
              className="max-w-[690px] rounded-[24px] bg-black/22 p-6 backdrop-blur-[2px] md:p-8"
            >
              <h1 className="font-sans text-[3.05rem] font-semibold uppercase leading-[0.94] tracking-[-0.03em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:text-[3.8rem] md:text-[5.2rem]">
                Find your
                <br />
                perfect home
                <br />
                today
              </h1>

              <p className="mt-6 max-w-[590px] text-[1.02rem] leading-[1.45] text-white/95 md:text-lg md:leading-[1.45]">
                We provide tailored real estate solutions, guiding you through every step with personalized experiences that meet your unique needs and aspirations.
              </p>

              <Motion.div whileHover={{ y: -1.5 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="properties"
                  smooth={true}
                  duration={650}
                  className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#2B0D3E] transition-all duration-300 hover:bg-[#e7dbef]"
                >
                  <span>Explore Properties</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#7A3F91] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Motion.div>

              <div className="mt-8 grid max-w-[500px] grid-cols-3 gap-6 text-white md:mt-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-sans text-[2.25rem] font-light leading-none tracking-tight md:text-[2.8rem]">{stat.number}</p>
                    <p className="mt-1 text-sm text-white/80 md:text-base">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Motion.div>
          </div>

          <Motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="absolute bottom-3 right-0 z-30 hidden items-center gap-2 rounded-full bg-white px-2.5 py-1.5 shadow-[0_12px_22px_rgba(0,0,0,0.25)] md:flex lg:bottom-4"
          >
            <div className="flex -space-x-2">
              {[0, 1, 2, 0].map((index, imageIndex) => (
                <img
                  key={`${index}-${imageIndex}`}
                  src={testimonialsData[index].image}
                  alt={testimonialsData[index].name}
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="pr-0.5">
              <p className="whitespace-nowrap text-[0.82rem] font-semibold leading-none text-[#2B0D3E] md:text-[1.02rem]">10+ Featured Agents</p>
              <div className="mt-0.5 flex items-center gap-0.5 text-[#7A3F91]">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-2.5 w-2.5 fill-[#7A3F91]" />
                ))}
                <span className="ml-1 text-[0.78rem] font-semibold leading-none text-[#2B0D3E] md:text-[0.9rem]">5 / 5</span>
              </div>
            </div>
          </Motion.aside>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
