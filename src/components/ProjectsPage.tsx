"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchPexelsImage } from '@/utils/pexels';
import { PROJECTS_DATA, ProjectItem } from '@/constants/projectsData';

interface ProjectsPageProps {
  onProjectClick: (id: string) => void;
  onBackToHome: () => void;
}

export default function ProjectsPage({ onProjectClick, onBackToHome }: ProjectsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [resolvedImages, setResolvedImages] = useState<Record<string, string>>({});

  // Fetch images for all 9 projects from Pexels on mount
  useEffect(() => {
    async function loadAllImages() {
      try {
        const promises = Object.values(PROJECTS_DATA).map(p =>
          fetchPexelsImage(p.pexelsQuery, "large")
            .then(url => ({ id: p.id, url }))
            .catch(() => ({ id: p.id, url: p.fallbackImage }))
        );
        const results = await Promise.all(promises);
        const imageMap = results.reduce((acc, current) => {
          acc[current.id] = current.url;
          return acc;
        }, {} as Record<string, string>);
        setResolvedImages(imageMap);
      } catch (err) {
        console.error("Error loading projects page images from Pexels:", err);
      }
    }
    loadAllImages();
  }, []);

  const filterOptions = ["All", "Residential", "Renovation", "Interior", "Commercial", "Sustainable"];

  // Filter project list based on selection
  const filteredProjects = Object.values(PROJECTS_DATA).filter(p => {
    if (selectedFilter === "All") return true;
    return p.category === selectedFilter;
  });

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
            Home / <span className="font-semibold text-warm-dark">Projects</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 pb-8 text-left">
        <span className="font-display font-medium text-xs text-bronze/80 uppercase tracking-widest mb-3 block">
          [02]
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-warm-dark mb-4">
          Our Work
        </h1>
        <p className="font-body text-sm text-[#7c7267] max-w-xl leading-relaxed">
          Every project is a collaboration &mdash; shaped by the client's vision and refined by our craft.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mt-8 overflow-x-auto scrollbar-none pb-2">
          {filterOptions.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-display font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? "bg-[#1a1714] text-white"
                    : "bg-white border border-[#ccc] text-[#7c7267] hover:border-[#7c7267]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-8">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                data-project={project.id}
                data-category={project.category}
                onClick={() => onProjectClick(project.id)}
                className="flex flex-col rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
              >
                {/* Image Wrap */}
                <div className="relative h-[260px] overflow-hidden w-full rounded-t-xl bg-[#e0dbd2]">
                  <img
                    src={resolvedImages[project.id] || project.fallbackImage}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Category Pill Top-Left on image */}
                  <span className="absolute top-4 left-4 bg-[#1a1714] text-white text-[10px] font-display font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="bg-white border-x border-b border-[#e0dbd2] p-[16px] sm:p-[20px] rounded-b-xl flex flex-col justify-between flex-grow">
                  <div className="text-left">
                    <h3 className="font-display font-semibold text-[15px] text-[#1a1a1a] leading-snug group-hover:text-bronze transition-colors duration-200">
                      {project.name}
                    </h3>
                    <p className="font-body text-[12px] text-[#888] mt-1">
                      {project.location}
                    </p>
                  </div>

                  {/* Footer info row */}
                  <div className="flex justify-between items-center mt-5 pt-3 border-t border-warm-dark/5">
                    {/* Detail Chips */}
                    <div className="flex gap-2">
                      <span className="font-body text-[10px] text-[#6b5f52] bg-[#f0ece4] px-2.5 py-0.5 rounded-full font-medium">
                        {project.year}
                      </span>
                      <span className="font-body text-[10px] text-[#6b5f52] bg-[#f0ece4] px-2.5 py-0.5 rounded-full font-medium">
                        {project.area}
                      </span>
                    </div>

                    {/* View project link */}
                    <span className="font-display font-semibold text-[12px] text-[#6b5f52] group-hover:text-warm-dark transition-colors duration-200">
                      View Project &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    </div>
  );
}
