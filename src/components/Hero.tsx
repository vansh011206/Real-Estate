"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[75vh] sm:h-screen sm:min-h-screen w-full flex flex-col items-center justify-end bg-gradient-to-b from-[#C4B9AC] via-[#DCD6CE] to-[#EAE6E1] overflow-hidden pt-24 sm:pt-36 pb-0"
    >
      {/* Subtle overlay texture or grid lines */}
      <div className="absolute inset-0 dots-pattern opacity-10 pointer-events-none" />

      {/* Giant Thin Text "ARKO" layered behind the house */}
      <div className="absolute inset-x-0 top-[38%] sm:top-[42%] -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-10 w-full">
        <motion.h1
          initial={{ opacity: 0, y: -80, scale: 1.05 }}
          animate={{ opacity: 0.38, y: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold text-[26vw] sm:text-[32vw] leading-none tracking-[0.05em] sm:tracking-[0.08em] pl-[0.09em] sm:pl-[0.13em] text-[#A89379] select-none text-center w-full"
        >
          ARKO
        </motion.h1>
      </div>

      {/* 3D Modern House Container - Foreground */}
      <div className="relative w-full max-w-7xl mx-auto flex justify-center z-20 px-6 mt-auto -translate-y-14 sm:-translate-y-10">
        <motion.div
          initial={{ opacity: 0, y: 150, scale: 0.95 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/9] flex items-end overflow-visible origin-bottom z-20 transform scale-[1.5] sm:scale-[1.28]"
        >
          <img
            src="/images/hero_house.png"
            alt="ARKO modern architectural villa"
            className="w-full h-full object-contain object-bottom drop-shadow-[0_32px_64px_rgba(0,0,0,0.12)] filter brightness-[1.02] contrast-[1.02]"
          />
        </motion.div>
      </div>

      {/* Bottom Shadow Overlay for visual blending */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
}
