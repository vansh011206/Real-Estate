"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/constants/data';

interface NavbarProps {
  onLogoClick?: () => void;
  onNavClick?: (name: string) => void;
}

export default function Navbar({ onLogoClick, onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 py-6 px-6 md:px-12 ${
          isScrolled || isMenuOpen
            ? 'bg-[#EAE6E1]/90 backdrop-blur-md border-b border-warm-dark/5 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Brand Logo - Left */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              if (onLogoClick) onLogoClick();
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-9.5 h-9.5 flex items-center justify-center bg-transparent border-2 border-warm-dark rounded-lg transition-transform duration-300 group-hover:rotate-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-5.5 h-5.5 text-warm-dark"
              >
                {/* Monogram A with architectural layout feel */}
                <path d="M4 20L12 4L20 20" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12H15" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 4V20" strokeDasharray="1.5 1.5" opacity="0.6" />
              </svg>
            </div>
            <span className="font-display font-black text-2xl tracking-tight text-warm-dark">
              ARKO
            </span>
          </a>

          {/* Central Pill Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-2 px-2.5 py-2 bg-warm-dark/[0.04] hover:bg-warm-dark/[0.06] border border-warm-dark/[0.05] backdrop-blur-md rounded-full transition-all duration-300 md:absolute md:left-1/2 md:-translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavClick) onNavClick(link.name);
                }}
                className="px-5.5 py-2 text-[12px] font-display font-semibold tracking-wider text-warm-dark/60 hover:text-warm-dark transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Right (Hidden on mobile) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavClick) onNavClick('CONTACT');
              }}
              className="inline-flex items-center gap-2 font-display font-bold text-sm uppercase tracking-wider text-warm-dark bg-white border border-warm-dark/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:translate-y-0 px-7 py-3.5 rounded-full transition-all duration-300"
            >
              <span>Book a Call</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="w-4 h-4"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden items-center justify-center p-2.5 rounded-full border border-warm-dark/10 bg-white text-warm-dark hover:bg-warm-dark/5 transition-all duration-250 cursor-pointer shadow-sm z-50"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 pt-[100px] z-40 bg-[#EAE6E1]/90 backdrop-blur-lg flex flex-col justify-start items-center p-8 gap-8 border-t border-warm-dark/5 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    if (onNavClick) onNavClick(link.name);
                  }}
                  className="font-display font-bold text-xl tracking-widest text-warm-dark/75 hover:text-warm-dark transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="w-full border-t border-warm-dark/10 my-4" />

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                if (onNavClick) onNavClick('CONTACT');
              }}
              className="w-full max-w-xs text-center font-display font-bold text-xs uppercase tracking-widest text-warm-dark bg-white border border-warm-dark/10 py-4 rounded-full shadow-sm hover:bg-[#f0ece4] transition-all duration-250 cursor-pointer"
            >
              Book a Call &rarr;
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
