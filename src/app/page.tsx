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

  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '918882675336';
  const whatsappMessage = encodeURIComponent("Hi ARKO Studio, I am interested in your premium properties. Please share more details.");

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

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
        {/* Pulsing Outer Glow */}
        <motion.div 
          className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.6, 0, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.a
          href={`https://wa.me/${whatsappPhone}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.55)] cursor-pointer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-label="Contact on WhatsApp"
        >
          {/* WhatsApp Icon */}
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.022-.079-.186-.208-.437-.327-.245-.122-1.495-.738-1.723-.822-.227-.084-.393-.128-.559.128-.166.257-.647.822-.793.987-.145.166-.29.186-.535.064-.245-.122-.917-.338-1.748-1.078-.646-.575-1.082-1.287-1.21-1.509-.128-.222-.014-.343.109-.464.113-.11.245-.286.368-.43.122-.145.166-.245.245-.407.084-.166.042-.314-.022-.437-.064-.122-.559-1.343-.768-1.848-.204-.493-.413-.423-.559-.43-.145-.008-.314-.008-.483-.008-.169 0-.443.064-.675.314-.232.252-.89 0-.89 2.158s1.597 4.238 1.82 4.54c.227.3.3.3 3.14 5.378 1.962 1.812 3.018 1.895 3.398 1.934.38.039 1.223-.02 1.495-.314.272-.294.272-.738.272-1.036 0-.294-.022-.38-.044-.458zm-5.466 7.62c-1.95 0-3.87-.52-5.58-1.5l-.4-.24-4.12 1.08 1.1-4.01-.26-.42c-1.07-1.71-1.64-3.71-1.64-5.77 0-5.99 4.87-10.86 10.86-10.86 2.9 0 5.62 1.13 7.67 3.18 2.05 2.05 3.18 4.77 3.18 7.67 0 5.99-4.88 10.87-10.87 10.87zm0-23.77c-7.1 0-12.87 5.77-12.87 12.88 0 2.27.59 4.49 1.72 6.44l-1.83 6.69 6.84-1.79c1.89 1.03 4.02 1.58 6.14 1.58 7.1 0 12.88-5.77 12.88-12.88 0-3.44-1.34-6.68-3.78-9.12-2.44-2.44-5.68-3.79-9.13-3.79z" />
          </svg>
        </motion.a>
      </div>
    </main>
  );
}
