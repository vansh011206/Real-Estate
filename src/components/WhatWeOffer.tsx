"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
}

export default function WhatWeOffer() {
  const services: Service[] = [
    {
      title: "Custom Home Design",
      description: "Built from scratch, shaped by your vision",
      image: "/images/offer_house.png"
    },
    {
      title: "Project Management",
      description: "From permits to handover, handled with precision",
      image: "/images/offer_drafting.png"
    },
    {
      title: "Interior Design",
      description: "Where function meets aesthetic, top to bottom",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Landscape & Exteriors",
      description: "Outdoor spaces as considered as the interior",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Renovation & Restoration",
      description: "Breathing new life into existing spaces",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "3D Visualization",
      description: "See your home before a single brick is laid",
      image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Smart Home Integration",
      description: "Technology seamlessly built into every design",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section
      id="services"
      className="relative bg-[#F4EEE8] py-20 overflow-hidden border-t border-warm-dark/5 scroll-mt-28"
    >
      {/* Structural layout thin grid lines */}
      <div className="absolute inset-0 architect-grid opacity-30 pointer-events-none" />

      {/* Top Header Row */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 flex items-end justify-between mb-10">
        <div className="text-left">
          <span className="font-display font-medium text-xs text-bronze/80 uppercase tracking-widest mb-3 block">
            [03]
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-warm-dark">
            What We Offer
          </h2>
        </div>
        <div className="flex items-center gap-1.5 text-[#888] font-display text-[12px] uppercase tracking-wider font-semibold pb-1.5">
          <span>Scroll to explore</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Horizontally Scrollable Card Strip */}
      <div className="relative w-full overflow-hidden z-10">
        <div className="flex overflow-x-auto gap-4 px-6 sm:px-12 py-4 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-[380px] h-[480px] flex-shrink-0 relative rounded-[14px] overflow-hidden border border-warm-dark/5 shadow-sm group transition-transform duration-300 ease-in-out hover:scale-[1.02]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center"
              />
              
              {/* Full-card bottom dark overlay (bottom 140px, transparent to rgba 0.72) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/40 to-transparent opacity-100 group-hover:from-black/80 group-hover:via-black/50 transition-colors duration-300 flex items-end justify-between p-6 z-10">
                <div className="text-left max-w-[240px]">
                  <h3 className="font-display font-medium text-lg sm:text-xl text-white tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-body text-xs text-[#bbb] mt-1.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pb-1.5 flex-shrink-0">
                  <span className="border-[0.5px] border-white/40 text-white text-[10px] uppercase font-display font-bold px-3.5 py-1.5 rounded-full tracking-wider hover:bg-white hover:text-warm-dark transition-colors duration-300">
                    Explore →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
