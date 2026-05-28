"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fetchPexelsImage } from '@/utils/pexels';

interface LatestProjectsProps {
  onProjectClick: (id: string) => void;
}

export default function LatestProjects({ onProjectClick }: LatestProjectsProps) {
  const [images, setImages] = useState<Record<string, string>>({
    "haven-residence": "/images/project_haven.png",
    "echo-terrace": "/images/project_echo.png",
    "verdant-house": "/images/project_main.png"
  });

  useEffect(() => {
    async function loadImages() {
      try {
        const [havenUrl, echoUrl, verdantUrl] = await Promise.all([
          fetchPexelsImage("luxury delhi house architecture", "large"),
          fetchPexelsImage("mumbai sea facing apartment interior", "large"),
          fetchPexelsImage("exposed concrete house courtyard garden", "large")
        ]);
        setImages({
          "haven-residence": havenUrl,
          "echo-terrace": echoUrl,
          "verdant-house": verdantUrl
        });
      } catch (err) {
        console.error("Error loading Pexels images in LatestProjects:", err);
      }
    }
    loadImages();
  }, []);

  const bannerProject = {
    id: "haven-residence",
    name: "The Haven Residence",
    location: "Lutyens' Delhi, New Delhi",
    year: "Residential · 2024",
    image: images["haven-residence"]
  };

  const gridProjects = [
    {
      id: "echo-terrace",
      name: "Echo Terrace",
      location: "MUMBAI",
      image: images["echo-terrace"]
    },
    {
      id: "verdant-house",
      name: "Verdant House",
      location: "BENGALURU",
      image: images["verdant-house"]
    }
  ];

  return (
    <section
      id="projects"
      className="relative bg-[#EAE6E1] pt-36 pb-20 overflow-hidden border-t border-warm-dark/5 scroll-mt-28"
    >
      {/* Structural layout thin grid lines */}
      <div className="absolute inset-0 architect-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header - Sits above the card */}
        <div className="flex flex-col items-start text-left mb-5">
          <span className="font-display font-medium text-xs text-bronze/80 uppercase tracking-widest mb-3 block">
            [02]
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-warm-dark">
            Latest Project
          </h2>
        </div>

        {/* Full-width Featured Project Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          data-project={bannerProject.id}
          onClick={() => onProjectClick(bannerProject.id)}
          className="relative w-full h-[580px] rounded-[14px] overflow-hidden border border-warm-dark/5 shadow-md group cursor-pointer mb-16 mx-auto"
        >
          <img
            src={bannerProject.image}
            alt={bannerProject.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
          />

          {/* Bottom Overlay - only bottom 160px dark gradient */}
          <div className="absolute bottom-0 inset-x-0 h-[180px] bg-gradient-to-t from-black/85 via-black/55 to-transparent flex items-end justify-between p-[28px] z-10">
            {/* Left aligned details */}
            <div className="flex flex-col items-start text-left">
              {/* Row 1: Small tag */}
              <span className="border-[0.5px] border-white/40 text-white text-[11px] font-display font-medium px-3 py-1 rounded-full tracking-[0.06em] uppercase">
                {bannerProject.year}
              </span>
              
              {/* Row 2: Project name */}
              <h3 className="font-display font-medium text-[28px] text-white tracking-tight mt-3 leading-none">
                {bannerProject.name}
              </h3>
              
              {/* Row 3: Location */}
              <span className="text-[13px] text-[#aaa] font-body mt-2">
                {bannerProject.location}
              </span>
            </div>

            {/* Right aligned hover element */}
            <div className="pb-1">
              <span className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white text-warm-dark font-display font-bold text-[12px] uppercase px-[18px] py-[8px] rounded-full shadow-lg inline-flex items-center gap-1.5">
                <span>Explore project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* Existing 2-Card Project Grid underneath */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12">
          {gridProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              data-project={project.id}
              onClick={() => onProjectClick(project.id)}
              className="relative aspect-[16/10] rounded-xl overflow-hidden group cursor-pointer border border-warm-dark/5 shadow-sm"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              {/* Bottom Dark Overlay Strip */}
              <div className="absolute bottom-0 inset-x-0 h-20 bg-black/55 backdrop-blur-[2px] flex items-center justify-between px-6 z-10 transition-colors duration-300 group-hover:bg-black/65">
                <div className="text-left">
                  <span className="font-display font-medium text-[15px] text-white tracking-tight">
                    {project.name}
                  </span>
                </div>
                <div className="text-right flex items-center gap-3">
                  <span className="font-body text-[11px] text-[#ccc] uppercase tracking-wider font-semibold">
                    {project.location}
                  </span>
                  {/* Hover View Pill */}
                  <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-white text-warm-dark font-display font-bold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                    Explore &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects bottom text link */}
        <div className="mt-8 flex justify-end">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 font-display font-bold text-xs uppercase tracking-wider text-[#888] hover:text-warm-dark transition-colors duration-350 group"
          >
            <span>View all projects</span>
            <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-350 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
