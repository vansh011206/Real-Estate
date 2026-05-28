"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { fetchPexelsImage } from '@/utils/pexels';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

import { PROJECTS_DATA } from '@/constants/projectsData';

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = PROJECTS_DATA[projectId];

  // Set up local state for resolved images
  const [resolvedImages, setResolvedImages] = useState<{
    hero: string;
    gallery: string[];
  }>({
    hero: project?.fallbackImage || "/images/project_haven.png",
    gallery: [
      project?.fallbackImage || "/images/offer_house.png",
      project?.fallbackImage || "/images/offer_drafting.png",
      project?.fallbackImage || "/images/project_main.png"
    ]
  });

  // If projectId changes, scroll to top automatically & fetch images from Pexels
  useEffect(() => {
    window.scrollTo(0, 0);

    if (!project) return;

    // Reset state to static fallbacks first
    setResolvedImages({
      hero: project.fallbackImage,
      gallery: [project.fallbackImage, project.fallbackImage, project.fallbackImage]
    });

    if (project.pexelsQuery && project.galleryQueries) {
      async function loadPexelsImages() {
        try {
          const [heroUrl, g1, g2, g3] = await Promise.all([
            fetchPexelsImage(project.pexelsQuery, "large"),
            fetchPexelsImage(project.galleryQueries[0], "large"),
            fetchPexelsImage(project.galleryQueries[1], "large"),
            fetchPexelsImage(project.galleryQueries[2], "large")
          ]);
          setResolvedImages({
            hero: heroUrl,
            gallery: [g1, g2, g3]
          });
        } catch (err) {
          console.error("Error loading project detail images from Pexels:", err);
        }
      }
      loadPexelsImages();
    }
  }, [projectId, project]);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center bg-[#f5f0e8] min-h-screen font-body">
        <p className="text-warm-dark text-lg mb-4">Project not found.</p>
        <button onClick={onBack} className="text-bronze underline font-semibold">
          Back to home
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-[#f5f0e8] min-h-screen">
      
      {/* Top bar & Breadcrumbs wrapper (to clear fixed Navbar) */}
      <div className="pt-28 pb-4 bg-[#f5f0e8] border-b border-warm-dark/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          
          {/* Back button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 font-display text-[13px] text-[#7c7267] hover:text-warm-dark transition-colors duration-250 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>

          {/* Breadcrumb path */}
          <div className="font-body text-[12px] text-[#7c7267] tracking-wide">
            Home / Projects / <span className="font-semibold text-warm-dark">{project.name}</span>
          </div>

        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[300px] sm:h-[520px] overflow-hidden">
        <img
          src={resolvedImages.hero}
          alt={project.name}
          className="w-full h-full object-cover object-center"
        />
        {/* Bottom overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-12">
          <div className="max-w-7xl mx-auto w-full text-left">
            {/* Tag pill */}
            <span className="inline-block border-[0.5px] border-white/50 text-white text-[11px] font-display font-medium px-3.5 py-1 rounded-full tracking-[0.06em] uppercase mb-4">
              {project.tag}
            </span>
            {/* Name */}
            <h1 className="font-display font-medium text-white text-2xl sm:text-4xl lg:text-5xl leading-tight mb-2">
              {project.name}
            </h1>
            {/* Location */}
            <p className="font-body text-[14px] text-[#ccc]">
              {project.location}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 sm:py-20 relative z-10">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (65% equivalent -> 8/12 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-10 text-left">
            <div>
              <h2 className="font-display font-medium text-[18px] text-warm-dark uppercase tracking-wider mb-6 pb-2 border-b border-warm-dark/10">
                Project Overview
              </h2>
              {/* Render descriptions */}
              <div className="flex flex-col gap-5 text-[15px] text-warm-dark/80 font-body leading-relaxed">
                {project.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* 3-Image Gallery Grid (2 top, 1 full-width bottom) */}
            <div className="flex flex-col gap-2 sm:gap-4 mt-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-sm bg-[#e0dbd2]">
                  <img
                    src={resolvedImages.gallery[0]}
                    alt="Gallery image 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-sm bg-[#e0dbd2]">
                  <img
                    src={resolvedImages.gallery[1]}
                    alt="Gallery image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden shadow-sm w-full bg-[#e0dbd2]">
                <img
                  src={resolvedImages.gallery[2]}
                  alt="Gallery image 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column (35% equivalent -> 4/12 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-white border border-[#e0dbd2] rounded-xl p-6 text-left shadow-sm">
              <h3 className="font-display font-bold text-xs uppercase tracking-widest text-[#7c7267] mb-6 pb-2 border-b border-warm-dark/5">
                Project Details
              </h3>
              
              {/* Detail Items */}
              <div className="flex flex-col divide-y divide-warm-dark/5">
                {[
                  { label: "Location", value: project.location },
                  { label: "Project Type", value: project.type },
                  { label: "Year Completed", value: project.year },
                  { label: "Area (sq ft)", value: project.area },
                  { label: "Budget Range", value: project.budget },
                  { label: "Services Provided", value: project.services }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3.5 first:pt-0 last:pb-0">
                    <span className="font-body text-[11px] text-[#7c7267] uppercase tracking-wider font-semibold">
                      {item.label}
                    </span>
                    <span className="font-body text-[13px] text-warm-dark font-medium text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book similar project button */}
            <a
              href="#contact"
              onClick={(e) => {
                // Smooth scroll to contact section
                const contactEl = document.getElementById("contact");
                if (contactEl) {
                  // If we need to go back to home, we can do so. But wait! Since contact is on the homepage, 
                  // to book a call, the user should be returned to the homepage and scrolled to the contact section!
                  // Let's implement that logic nicely.
                  e.preventDefault();
                  onBack();
                  setTimeout(() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="mt-4 w-full bg-[#1a1714] text-white font-medium text-sm rounded-lg py-3.5 flex items-center justify-center gap-2 hover:bg-[#2e2923] transition-colors duration-250 shadow-sm"
            >
              <span>Book a similar project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
