"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Key, Users, Target, Award, ArrowRight } from 'lucide-react';

function AnimatedNumber({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const isPercent = value.includes('%');
  const isPlus = value.includes('+');

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // cubic ease-out
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(ease * numericPart));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericPart]);

  return (
    <span ref={ref}>
      {count}
      {isPlus && '+'}
      {isPercent && '%'}
    </span>
  );
}

export default function About() {
  const uspCards = [
    {
      icon: Key,
      title: "Turnkey solutions",
      subtitle: "Concept to handover"
    },
    {
      icon: Users,
      title: "Client-first approach",
      subtitle: "Your vision, our craft"
    },
    {
      icon: Target,
      title: "Precision design",
      subtitle: "Every detail matters"
    },
    {
      icon: Award,
      title: "7+ years experience",
      subtitle: "Industry proven"
    }
  ];

  const statsList = [
    { value: "7+", label: "Years of experience" },
    { value: "120+", label: "Projects delivered" },
    { value: "98%", label: "Client satisfaction" },
    { value: "15+", label: "Design awards" }
  ];

  return (
    <section
      id="about"
      className="relative bg-[#0a0a0a] text-white py-14 sm:py-20 overflow-hidden border-t border-white/5 flex items-center min-h-[50vh] lg:min-h-[60vh] scroll-mt-28"
    >
      {/* Structural layout thin grid lines */}
      <div className="absolute inset-0 architect-grid-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 w-full">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-t border-white/10 pt-12">
          
          {/* Left Column (Span 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left h-full">
            <div>
              <span className="font-display font-medium text-xs text-bronze/70 uppercase tracking-widest mb-3 block">
                [01]
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
                About us
              </h2>

              {/* 2x2 Icon Grid of USP Cards - tight gap and info chip style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {uspCards.map((card, idx) => {
                  const IconComponent = card.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#1a1a1a] border border-[#2a2a2a] p-2 sm:p-3 rounded-lg flex items-center gap-2 sm:gap-3 transition-colors duration-300 hover:border-[#3a3a3a]"
                    >
                      <div className="p-1 sm:p-1.5 bg-white/5 rounded border border-white/5 flex-shrink-0">
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-bronze-light stroke-[1.5]" />
                      </div>
                      <div className="text-left min-w-0">
                        <h4 className="font-display font-semibold text-[12px] sm:text-[13px] text-white truncate">
                          {card.title}
                        </h4>
                        <p className="font-body text-[10px] sm:text-[11px] text-[#888] truncate">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Muted Project Link at bottom left */}
            <div className="mt-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 font-display font-bold text-[10px] uppercase tracking-widest text-[#888] hover:text-white transition-colors duration-350 group"
              >
                <span>See our projects</span>
                <ArrowRight className="w-3 h-3 transform transition-transform duration-350 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column (Span 6) - Horizontal Stat Strip with separators */}
          <div className="lg:col-span-6 flex items-center lg:pl-12 lg:border-l border-white/10 w-full mt-8 lg:mt-0 h-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:gap-y-0 sm:divide-x divide-[#2a2a2a] w-full py-4 items-center">
              {statsList.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col text-left sm:pl-5 sm:first:pl-0"
                >
                  <span className="font-display font-bold text-[32px] text-white tracking-tight leading-none">
                    <AnimatedNumber value={stat.value} />
                  </span>
                  <span className="font-body text-[10px] text-[#888] uppercase tracking-[0.08em] font-semibold mt-1">
                    {stat.label}
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
