"use client";

import React from 'react';

/* Social Icon SVGs */
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#contact' },
  ];

  const propertyLinks = [
    { name: 'Featured Projects', href: '#projects' },
    { name: 'Modern Villas', href: '#projects' },
    { name: 'Architectural Studies', href: '#' },
    { name: 'Concept Designs', href: '#' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'FAQs', href: '#' },
  ];

  return (
    <footer className="relative bg-warm-dark text-white/50 pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Structural layout thin grid lines */}
      <div className="absolute inset-0 architect-grid-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Top Segment: Brand logo + Grid lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo & Description Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left font-body">
            <a href="#home" className="flex items-center gap-2 mb-6 group">
              <div className="relative w-8 h-8 flex items-center justify-center bg-transparent border-2 border-white rounded-lg transition-transform duration-300 group-hover:rotate-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-5 h-5 text-white"
                >
                  <path d="M4 20L12 4L20 20" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 12H15" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 4V20" strokeDasharray="1.5 1.5" opacity="0.6" />
                </svg>
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white">
                ARKO
              </span>
            </a>
            
            <p className="text-sm font-light leading-relaxed mb-8 max-w-xs text-white/40">
              We design and construct premium living spaces. Redefining modern luxury through innovative architecture and bespoke residential engineering.
            </p>

            {/* Social Icons Row */}
            <div className="flex gap-4">
              {[
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: TwitterIcon, label: 'Twitter' },
                { Icon: LinkedinIcon, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-warm-dark hover:bg-white hover:border-white transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid Columns */}
          <div className="lg:col-span-2 lg:col-start-6 text-left">
            <h3 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-250 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 text-left">
            <h3 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-6">
              Projects
            </h3>
            <ul className="space-y-4">
              {propertyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-250 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 text-left">
            <h3 className="font-display font-bold text-white text-xs uppercase tracking-widest mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-250 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright details row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-body font-light gap-4 text-white/30">
          <p>© {currentYear} ARKO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
