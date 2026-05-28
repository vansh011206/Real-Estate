"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import LatestProjects from '@/components/LatestProjects';
import WhatWeOffer from '@/components/WhatWeOffer';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import ProjectDetail from '@/components/ProjectDetail';
import PartnersPage from '@/components/PartnersPage';
import ProjectsPage from '@/components/ProjectsPage';

type ViewType = 'home' | 'project-detail' | 'partners' | 'projects-page';

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('project-detail');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToProjects = () => {
    setCurrentView('projects-page');
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavClick = (name: string) => {
    if (name === 'HOME') {
      handleBackToHome();
    } else if (name === 'PARTNERS') {
      setCurrentView('partners');
      setSelectedProjectId(null);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (name === 'PROJECT') {
      setCurrentView('projects-page');
      setSelectedProjectId(null);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (name === 'CONTACT') {
      handleBackToHome();
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f0e8] relative overflow-hidden">
      {/* Dynamic Grid Background Overlay on entire website */}
      <div className="absolute inset-0 dots-pattern opacity-[0.02] pointer-events-none" />

      {/* Navigation Menu (Kept global so it remains present on both pages) */}
      <Navbar onLogoClick={handleBackToHome} onNavClick={handleNavClick} />

      <AnimatePresence mode="wait">
        {currentView === 'home' && (
          /* Main Homepage Container */
          <motion.div
            key="home-view"
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* Hero Section with overlapping 3D Text & House */}
            <Hero />

            {/* About Us section [01] */}
            <About />

            {/* Latest Projects section [02] */}
            <LatestProjects onProjectClick={handleProjectClick} />

            {/* What We Offer section [03] */}
            <WhatWeOffer />

            {/* Why Choose ARKO / Testimonials [04] */}
            <Testimonials />

            {/* Partners [05] */}
            <Partners />

            {/* Contact [06] */}
            <Contact />
          </motion.div>
        )}

        {currentView === 'project-detail' && selectedProjectId && (
          /* Project Detail Container */
          <motion.div
            key="project-detail-view"
            id="project-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <ProjectDetail
              projectId={selectedProjectId}
              onBack={handleBackToProjects}
            />
          </motion.div>
        )}

        {currentView === 'partners' && (
          /* Partners Page Container */
          <motion.div
            key="partners-view"
            id="partners-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <PartnersPage
              onBackToHome={handleBackToHome}
            />
          </motion.div>
        )}

        {currentView === 'projects-page' && (
          /* All Projects Page Container */
          <motion.div
            key="projects-page-view"
            id="projects-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <ProjectsPage
              onProjectClick={handleProjectClick}
              onBackToHome={handleBackToHome}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
