"use client";

import React from 'react';

interface Partner {
  name: string;
  description: string;
  city: string;
  badge: string;
}

export default function PartnersPage({ onBackToHome }: { onBackToHome: () => void }) {
  const developers: Partner[] = [
    { name: "DLF Limited", description: "India's largest real estate developer", city: "New Delhi", badge: "Developer" },
    { name: "Godrej Properties", description: "Premium residential and commercial projects", city: "Mumbai", badge: "Developer" },
    { name: "Lodha Group", description: "Luxury living redefined across India", city: "Mumbai", badge: "Builder" },
    { name: "Prestige Group", description: "South India's most trusted property brand", city: "Bengaluru", badge: "Developer" },
    { name: "Oberoi Realty", description: "Crafting landmark addresses since 1983", city: "Mumbai", badge: "Developer" },
    { name: "Tata Housing", description: "Sustainable and affordable luxury homes", city: "Pan India", badge: "Builder" }
  ];

  const suppliers: Partner[] = [
    { name: "Kajaria Ceramics", description: "India's #1 tile and sanitaryware brand", city: "New Delhi", badge: "Tiles & Flooring" },
    { name: "Asian Paints", description: "Premium finishes and texture solutions", city: "Mumbai", badge: "Paints & Finishes" },
    { name: "Greenply Industries", description: "Quality wood and plywood solutions", city: "Kolkata", badge: "Wood & Joinery" },
    { name: "Jaquar Group", description: "Luxury bath fittings and wellness", city: "Manesar", badge: "Sanitaryware" },
    { name: "Havells India", description: "Smart electrical and lighting solutions", city: "New Delhi", badge: "Electrical & Lighting" },
    { name: "Spacewood", description: "Modular furniture and kitchen systems", city: "Nagpur", badge: "Furniture & Modular" }
  ];

  return (
    <div className="relative w-full bg-[#f5f0e8] min-h-screen pb-20">
      
      {/* Top bar & Breadcrumbs wrapper (to clear fixed Navbar) */}
      <div className="pt-28 pb-4 bg-[#f5f0e8] border-b border-warm-dark/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 font-display text-[13px] text-[#7c7267] hover:text-warm-dark transition-colors duration-250 cursor-pointer"
          >
            <span>&larr; Back to Home</span>
          </button>
          <div className="font-body text-[12px] text-[#7c7267] tracking-wide">
            Home / <span className="font-semibold text-warm-dark">Partners</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-20 pb-12 text-center flex flex-col items-center">
        <span className="font-display font-medium text-xs text-bronze/80 uppercase tracking-widest mb-3 block">
          [05]
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-warm-dark mb-4 leading-tight">
          Brands &amp; Firms We Work With
        </h1>
        <p className="font-body text-sm sm:text-base text-[#7c7267] max-w-xl leading-relaxed">
          ARKO collaborates with India's most respected real estate developers, material suppliers, and design studios to deliver exceptional results.
        </p>
      </div>

      {/* Centered Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col gap-20">

        {/* Section 1: Developers */}
        <div>
          <h2 className="font-display font-medium text-[18px] text-warm-dark uppercase tracking-wider mb-6 pb-2 border-b border-warm-dark/10 text-left">
            Real Estate Developers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developers.map((partner, idx) => (
              <div
                key={`dev-${idx}`}
                className="bg-white border border-[#e0dbd2] rounded-xl p-6 text-left flex flex-col justify-between min-h-[160px] transition-all duration-300 hover:border-[#b8b0a4] hover:bg-[#faf8f4] group"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2.5">
                    <h3 className="font-display font-semibold text-[15px] text-[#1a1a1a]">
                      {partner.name}
                    </h3>
                    <span className="font-body text-[10px] sm:text-[11px] bg-[#f0ece4] text-[#6b5f52] px-2.5 py-0.5 rounded-full whitespace-nowrap font-medium">
                      {partner.badge}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-[#7c7267] leading-relaxed">
                    {partner.description}
                  </p>
                </div>
                <div className="text-right mt-4">
                  <span className="font-body text-[11px] text-[#aaa] font-medium uppercase tracking-wide">
                    {partner.city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Suppliers */}
        <div>
          <h2 className="font-display font-medium text-[18px] text-warm-dark uppercase tracking-wider mb-6 pb-2 border-b border-warm-dark/10 text-left">
            Material &amp; Design Suppliers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suppliers.map((partner, idx) => (
              <div
                key={`sup-${idx}`}
                className="bg-white border border-[#e0dbd2] rounded-xl p-6 text-left flex flex-col justify-between min-h-[160px] transition-all duration-300 hover:border-[#b8b0a4] hover:bg-[#faf8f4] group"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2.5">
                    <h3 className="font-display font-semibold text-[15px] text-[#1a1a1a]">
                      {partner.name}
                    </h3>
                    <span className="font-body text-[10px] sm:text-[11px] bg-[#f0ece4] text-[#6b5f52] px-2.5 py-0.5 rounded-full whitespace-nowrap font-medium">
                      {partner.badge}
                    </span>
                  </div>
                  <p className="font-body text-[13px] text-[#7c7267] leading-relaxed">
                    {partner.description}
                  </p>
                </div>
                <div className="text-right mt-4">
                  <span className="font-body text-[11px] text-[#aaa] font-medium uppercase tracking-wide">
                    {partner.city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Become a Partner CTA */}
        <div className="bg-[#1a1714] rounded-2xl p-6 sm:p-14 text-center relative overflow-hidden border border-white/5 shadow-md">
          {/* Structural layout thin grid lines */}
          <div className="absolute inset-0 architect-grid-dark opacity-10 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-white">
              Want to collaborate with ARKO?
            </h2>
            <p className="font-body text-[14px] text-[#888] max-w-md leading-relaxed">
              We're always open to working with quality-driven firms and suppliers who share our vision for exceptional design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onBackToHome();
                  setTimeout(() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-white text-[#1a1714] font-medium text-sm rounded-lg px-8 py-3.5 hover:bg-[#f0ece4] transition-colors duration-250 cursor-pointer text-center"
              >
                Get in Touch &rarr;
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  onBackToHome();
                  setTimeout(() => {
                    const el = document.getElementById("about");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-transparent border border-white/40 text-white font-medium text-sm rounded-lg px-8 py-3.5 hover:bg-white/5 transition-colors duration-250 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
