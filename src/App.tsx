import React, { useState, useEffect } from 'react';
import { DualEngineMode } from './types';
import { HeroCanvas } from './components/HeroCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BentoServices } from './components/BentoServices';
import { SetupJourney } from './components/SetupJourney';
import { JurisdictionTable } from './components/JurisdictionTable';
import { TrustPartners } from './components/TrustPartners';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingDock } from './components/FloatingDock';
import { Footer } from './components/Footer';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import { StatusTrackerModal } from './components/StatusTrackerModal';
import { DedicatedJurisdictionPage } from './components/DedicatedJurisdictionPage';
import { DEDICATED_PAGES } from './data/jurisdictionPages';
import { trackConversion } from './lib/tracking';

export function App() {
  const [mode, setMode] = useState<DualEngineMode>('corporate');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState<boolean>(false);
  const [isArabic, setIsArabic] = useState<boolean>(false);
  const [currentSlug, setCurrentSlug] = useState<string>('');

  // Initial path detection
  useEffect(() => {
    const cleanPath = window.location.pathname.replace(/^\/+|\/+$/g, '');
    if (cleanPath && DEDICATED_PAGES[cleanPath]) {
      setCurrentSlug(cleanPath);
    } else {
      setCurrentSlug('');
    }

    const handlePopState = () => {
      const p = window.location.pathname.replace(/^\/+|\/+$/g, '');
      if (p && DEDICATED_PAGES[p]) {
        setCurrentSlug(p);
      } else {
        setCurrentSlug('');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigateSlug = (slug: string) => {
    window.history.pushState({}, '', `/${slug}`);
    setCurrentSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    trackConversion('page_view_dedicated', { slug });
  };

  const handleNavigateHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentSlug('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleMode = (newMode: DualEngineMode) => {
    setMode(newMode);
    trackConversion('dual_engine_switch', { newMode });
  };

  const handleToggleArabic = () => {
    setIsArabic(prev => !prev);
  };

  useEffect(() => {
    if (isArabic) {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }
  }, [isArabic]);

  const isDedicatedPage = Boolean(currentSlug && DEDICATED_PAGES[currentSlug]);

  return (
    <div className={`min-h-screen bg-obsidian-950 text-slate-100 relative selection:bg-emerald-500/30 selection:text-emerald-300 ${
      mode === 'corporate' ? 'neo-mesh-gradient' : 'neo-mesh-digital'
    } transition-colors duration-1000`}>
      
      {/* Background Interactive Particle Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <HeroCanvas mode={mode} />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Top Navbar */}
        <Navbar
          mode={mode}
          onToggleMode={handleToggleMode}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          onOpenTracker={() => setIsTrackerOpen(true)}
          isArabic={isArabic}
          onToggleArabic={handleToggleArabic}
          onNavigateSlug={handleNavigateSlug}
          onNavigateHome={handleNavigateHome}
        />

        {/* Main Content View (Dedicated Page vs Full Homepage) */}
        <main className="flex-grow">
          {isDedicatedPage ? (
            <DedicatedJurisdictionPage
              slug={currentSlug}
              isArabic={isArabic}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
              onOpenTracker={() => setIsTrackerOpen(true)}
              onNavigateHome={handleNavigateHome}
              onNavigateSlug={handleNavigateSlug}
            />
          ) : (
            <>
              <HeroSection
                mode={mode}
                onOpenEstimator={() => setIsEstimatorOpen(true)}
                onOpenTracker={() => setIsTrackerOpen(true)}
                onToggleMode={handleToggleMode}
                isArabic={isArabic}
              />

              <BentoServices
                mode={mode}
                onOpenEstimator={() => setIsEstimatorOpen(true)}
                isArabic={isArabic}
                onNavigateSlug={handleNavigateSlug}
              />

              <SetupJourney
                mode={mode}
                onOpenEstimator={() => setIsEstimatorOpen(true)}
                isArabic={isArabic}
              />

              <JurisdictionTable
                mode={mode}
                onOpenEstimator={() => setIsEstimatorOpen(true)}
                isArabic={isArabic}
                onNavigateSlug={handleNavigateSlug}
              />

              <TrustPartners 
                mode={mode}
                isArabic={isArabic}
                onNavigateSlug={handleNavigateSlug}
              />

              <AboutSection
                mode={mode}
                isArabic={isArabic}
                onOpenEstimator={() => setIsEstimatorOpen(true)}
              />

              <FaqSection
                mode={mode}
                isArabic={isArabic}
              />

              <ContactSection 
                isArabic={isArabic}
              />
            </>
          )}
        </main>

        {/* Global Footer */}
        <Footer
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          onOpenTracker={() => setIsTrackerOpen(true)}
          isArabic={isArabic}
          onNavigateSlug={handleNavigateSlug}
        />

        {/* Floating Dynamic Dock */}
        <FloatingDock
          mode={mode}
          onToggleMode={handleToggleMode}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          onOpenTracker={() => setIsTrackerOpen(true)}
          isArabic={isArabic}
        />

        {/* Interactive Modals */}
        <CostEstimatorModal
          isOpen={isEstimatorOpen}
          onClose={() => setIsEstimatorOpen(false)}
          isArabic={isArabic}
        />

        <StatusTrackerModal
          isOpen={isTrackerOpen}
          onClose={() => setIsTrackerOpen(false)}
          isArabic={isArabic}
        />

      </div>

    </div>
  );
}


