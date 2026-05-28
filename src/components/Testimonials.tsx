"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function AnimatedStat({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1500;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(ease * value));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Testimonials() {
  const stats = [
    { value: 97, suffix: "%", label: "Client satisfaction rate" },
    { value: 120, suffix: "+", label: "Projects delivered" },
    { value: 4, suffix: ".9★", label: "Average client rating" },
    { value: 7, suffix: "+", label: "Years of experience" },
  ];

  const testimonials = [
    {
      quote: "ARKO made our home building journey smooth and stress free. From design to construction, everything was handled professionally.",
      author: "Micheal Harrington",
      role: "Homeowner",
      initials: "M"
    },
    {
      quote: "Working with ARKO was one of the best decisions we made. They understand how to create a living space that truly reflects your personality.",
      author: "Tania Li",
      role: "Interior Designer",
      initials: "T"
    }
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-[#F4EEE8] py-20 overflow-hidden border-t border-warm-dark/5 scroll-mt-28"
    >
      {/* Structural layout thin grid lines */}
      <div className="absolute inset-0 architect-grid opacity-30 pointer-events-none" />

      {/* Centered Container — same as other sections */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* Section Header — outside the card */}
        <div className="text-left mb-10">
          <span className="font-display font-medium text-xs text-bronze/80 uppercase tracking-widest mb-3 block">
            [04]
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-warm-dark">
            Why Choose ARKO
          </h2>
        </div>

        {/* Split Card — rounded, contained */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">

          {/* Left Half — Dark Warm */}
          <div className="bg-[#1a1714] p-10 sm:p-14 flex flex-col justify-center text-left relative">
            <div className="absolute inset-0 architect-grid-dark opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-display font-medium text-[22px] text-white leading-snug max-w-[300px] mb-10">
                Why homeowners and developers choose ARKO?
              </h3>

              {/* Stat Blocks */}
              <div className="flex flex-col divide-y divide-[#2e2923]">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="py-5 first:pt-0 last:pb-0"
                  >
                    <span className="font-display font-normal text-[36px] text-white tracking-tight leading-none block">
                      <AnimatedStat value={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="font-body text-[11px] text-[#666] uppercase tracking-[0.08em] font-semibold mt-1.5 block">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Half — Lighter Warm */}
          <div className="bg-[#f0ece4] p-10 flex flex-col justify-center text-left relative">
            <div className="relative z-10 flex flex-col justify-center h-full">

              {/* Testimonial Cards */}
              <div className="flex flex-col divide-y divide-[#d8d3c8]">
                {testimonials.map((t, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.15 }}
                    className="py-10 first:pt-0 last:pb-0"
                  >
                    {/* Quote */}
                    <p className="font-body italic text-[14px] text-[#1a1a1a] leading-[1.7] mb-6 max-w-md">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {/* Author Row */}
                    <div className="flex items-center gap-2.5">
                      {/* Avatar circle */}
                      <div className="w-9 h-9 rounded-full bg-[#1a1714] text-white font-display font-bold text-[13px] flex items-center justify-center flex-shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <span className="font-display font-medium text-[14px] text-[#111] block leading-tight">
                          {t.author}
                        </span>
                        <span className="font-body text-[12px] text-[#888] block mt-0.5">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View all reviews link */}
              <div className="mt-10 flex justify-end">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 font-display font-bold text-[12px] uppercase tracking-wider text-[#555] hover:text-[#111] transition-colors duration-300 group"
                >
                  <span>View all reviews</span>
                  <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
