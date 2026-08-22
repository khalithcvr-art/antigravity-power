import React, { useState, useEffect } from 'react';
import { DualEngineMode } from './types';
import { HeroCanvas } from './components/HeroCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BentoServices } from './components/BentoServices';
import { SetupJourney } from './components/SetupJourney';
import { JurisdictionTable } from './components/JurisdictionTable';
import { TrustPartners } from './components/TrustPartners';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingDock } from './components/FloatingDock';
import { Footer } from './components/Footer';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import { StatusTrackerModal } from './components/StatusTrackerModal';
import { trackConversion } from './lib/tracking';

export function App() {
  const [mode, setMode] = useState<DualEngineMode>('corporate');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState<boolean>(false);
  const [isArabic, setIsArabic] = useState<boolean>(false);

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
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
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
          />

          <SetupJourney
            mode={mode}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
            isArabic={isArabic}
          />

          <JurisdictionTable
            onOpenEstimator={() => setIsEstimatorOpen(true)}
            isArabic={isArabic}
          />

          <TrustPartners 
            isArabic={isArabic}
          />

          <FaqSection
            isArabic={isArabic}
          />

          <ContactSection 
            isArabic={isArabic}
          />
        </main>

        {/* Global Footer */}
        <Footer
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          onOpenTracker={() => setIsTrackerOpen(true)}
          isArabic={isArabic}
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

