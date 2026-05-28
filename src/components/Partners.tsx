"use client";

import React from 'react';

export default function Partners() {
  const row1Companies = [
    "DLF",
    "Godrej Properties",
    "Oberoi Realty",
    "Prestige Group",
    "Lodha Group",
    "Mahindra Lifespaces",
    "Brigade Group",
    "Sobha Ltd"
  ];

  const row2Companies = [
    "Tata Housing",
    "Shapoorji Pallonji",
    "Embassy Group",
    "Puravankara",
    "Kolte Patil",
    "Hiranandani",
    "Omaxe",
    "Gaurs Group"
  ];

  // Duplicate arrays to allow seamless continuous loop scrolling
  const duplicatedRow1 = [...row1Companies, ...row1Companies, ...row1Companies, ...row1Companies];
  const duplicatedRow2 = [...row2Companies, ...row2Companies, ...row2Companies, ...row2Companies];

  return (
    <section
      id="partners"
      className="relative bg-[#f5f0e8] py-20 overflow-hidden border-t border-warm-dark/5 scroll-mt-28"
    >
      {/* Structural layout thin grid lines */}
      <div className="absolute inset-0 architect-grid opacity-30 pointer-events-none" />

      {/* Centered Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-left mb-12">
          <span className="font-display font-medium text-xs text-bronze/80 uppercase tracking-widest mb-3 block">
            [05]
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-warm-dark mb-3">
            Our Partners
          </h2>
          <p className="font-body text-sm text-[#7c7267] font-medium max-w-xl">
            Trusted by India's leading real estate developers and firms
          </p>
        </div>

        {/* Marquee Container with fade edge mask and hover-pause behavior */}
        <div 
          className="relative flex flex-col gap-5 py-2 overflow-hidden select-none group"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          {/* Row 1: Scrolls Left */}
          <div className="flex overflow-hidden">
            <div className="flex gap-4 animate-marquee-left group-hover:[animation-play-state:paused]">
              {duplicatedRow1.map((company, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex items-center justify-center bg-white border border-[#e0dbd2] rounded-[40px] px-7 h-[52px] flex-shrink-0 min-w-[140px]"
                >
                  <span className="font-display text-[13px] font-medium text-[#333] tracking-wide whitespace-nowrap">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolls Right */}
          <div className="flex overflow-hidden">
            <div className="flex gap-4 animate-marquee-right group-hover:[animation-play-state:paused]">
              {duplicatedRow2.map((company, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex items-center justify-center bg-white border border-[#e0dbd2] rounded-[40px] px-7 h-[52px] flex-shrink-0 min-w-[140px]"
                >
                  <span className="font-display text-[13px] font-medium text-[#333] tracking-wide whitespace-nowrap">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
