import { flushSync } from 'react-dom';
import { preferredScrollBehavior, prefersReducedMotion } from './hooks/useMotionPreference';
import { usePresence } from './hooks/usePresence';
import { ComfortHero } from './components/ComfortHero';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { DualEngineMode } from './types';
import { HeroCanvas } from './components/HeroCanvas';
import { Navbar } from './components/Navbar';
const HeroSection = lazy(() => import('./components/HeroSection').then(m => ({default: m.HeroSection}))); 
import { BentoServices } from './components/BentoServices';
import { SetupJourney } from './components/SetupJourney';
import { JurisdictionTable } from './components/JurisdictionTable';
import { TrustPartners } from './components/TrustPartners';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { FloatingDock } from './components/FloatingDock';
import { Footer } from './components/Footer';
const CostEstimatorModal = lazy(() => import('./components/CostEstimatorModal').then(m => ({default: m.CostEstimatorModal}))); 
const StatusTrackerModal = lazy(() => import('./components/StatusTrackerModal').then(m => ({default: m.StatusTrackerModal}))); 
import { DedicatedJurisdictionPage } from './components/DedicatedJurisdictionPage';
import { DEDICATED_PAGES } from './data/jurisdictionPages';
import { trackConversion } from './lib/tracking';

export function App({initialPath = typeof window === 'undefined' ? '/' : window.location.pathname}: {initialPath?: string} = {}) {
  const [mode, setMode] = useState<DualEngineMode>('corporate');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState<boolean>(false);
  const [isArabic, setIsArabic] = useState<boolean>(initialPath === '/ar' || initialPath.startsWith('/ar/'));
  const [currentSlug, setCurrentSlug] = useState<string>(initialPath.replace(/^\/ar(?=\/|$)/, '').replace(/^\/+|\/+$/g, ''));
  const [isLogoDocked, setIsLogoDocked] = useState<boolean>(true);
  // The corporate hero only plays its entrance after a mode switch, never over the prerendered first paint.
  const [modeSwitched, setModeSwitched] = useState<boolean>(false);
  const estimatorPresence = usePresence(isEstimatorOpen, 260);
  const trackerPresence = usePresence(isTrackerOpen, 260);

  // Initial path detection
  useEffect(() => {
    const cleanPath = window.location.pathname.replace(/^\/ar(?=\/|$)/, '').replace(/^\/+|\/+$/g, '');
    if (cleanPath && DEDICATED_PAGES[cleanPath]) {
      setCurrentSlug(cleanPath);
    } else {
      setCurrentSlug('');
    }

    const handlePopState = () => {
      setIsArabic(window.location.pathname === '/ar' || window.location.pathname.startsWith('/ar/'));
      const p = window.location.pathname.replace(/^\/ar(?=\/|$)/, '').replace(/^\/+|\/+$/g, '');
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
    window.history.pushState({}, '', `${isArabic ? '/ar' : ''}/${slug}`);
    setCurrentSlug(slug);
    window.scrollTo({ top: 0, behavior: preferredScrollBehavior() });
    trackConversion('page_view_dedicated', { slug });
  };

  const handleNavigateHome = () => {
    window.history.pushState({}, '', isArabic ? '/ar' : '/');
    setCurrentSlug('');
    window.scrollTo({ top: 0, behavior: preferredScrollBehavior() });
  };

  const handleToggleMode = (newMode: DualEngineMode) => {
    if (newMode === mode) return;
    const apply = () => {
      setMode(newMode);
      setIsLogoDocked(newMode !== 'digital');
      setModeSwitched(true);
    };
    trackConversion('dual_engine_switch', { newMode });
    // Short native crossfade where View Transitions exist; an instant swap everywhere else.
    const viewTransitions = document as Document & { startViewTransition?: (update: () => void) => unknown };
    if (viewTransitions.startViewTransition && !prefersReducedMotion()) {
      viewTransitions.startViewTransition(() => flushSync(apply));
    } else {
      apply();
    }
  };

  const handleToggleArabic = () => {
    window.location.assign(`${isArabic ? '' : '/ar'}${currentSlug ? '/' + currentSlug : '/'} ` .trim());
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

  useEffect(() => {
    if (currentSlug) return;
    const title = isArabic ? 'تأسيس الشركات وخدمات المعاملات في أبوظبي | إكسبيديا' : 'Business Setup & PRO Services Abu Dhabi | Expedia';
    const description = isArabic ? 'تأسيس الشركات واستفسارات الإقامة وخدمات المعاملات والدعم الرقمي. تواصل مع إكسبيديا للحصول على عرض سعر حسب احتياجاتك.' : 'Company formation, residency enquiries, PRO services and digital support in Abu Dhabi and Dubai. Contact Expedia for a quotation tailored to your needs.';
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://www.expediaservices.ae/${isArabic ? 'ar/' : ''}`);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://www.expediaservices.ae/${isArabic ? 'ar/' : ''}`);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }, [currentSlug, isArabic]);

  const isDedicatedPage = Boolean(currentSlug && DEDICATED_PAGES[currentSlug]);

  return (
    <div data-mode={mode} className="app-ground relative min-h-screen text-white">
      <div className="app-wash pointer-events-none absolute inset-x-0 top-0 z-0 h-[56rem]" aria-hidden="true" />

      {/* Digital studio only: a faint grid and a quiet particle field. Corporate mode stays clean. */}
      {mode === 'digital' && (
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
          <HeroCanvas mode={mode} />
          <div className="bg-lines absolute inset-0 opacity-60" />
        </div>
      )}

      <div className="relative z-10 flex flex-col min-h-screen">
        
        <a className="skip-to-content" href="#main-content" onClick={() => document.getElementById("main-content")?.focus()}>
          {isArabic ? "انتقل إلى المحتوى الرئيسي" : "Skip to main content"}
        </a>
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
          isLogoDocked={isLogoDocked}
          currentSlug={isDedicatedPage ? currentSlug : ''}
        />

        {/* Main Content View (Dedicated Page vs Full Homepage) */}
        <main id="main-content" tabIndex={-1} className="flex-grow">
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
              {mode === 'corporate' ? <ComfortHero isArabic={isArabic} animateIn={modeSwitched} /> : <Suspense fallback={<p role="status" className="px-4 pb-24 pt-40 text-center text-slate-400">Loading…</p>}><HeroSection
                mode={mode}
                onOpenEstimator={() => setIsEstimatorOpen(true)}
                onOpenTracker={() => setIsTrackerOpen(true)}
                onToggleMode={handleToggleMode}
                isArabic={isArabic}
                onLogoDocked={setIsLogoDocked}
                onNavigateSlug={handleNavigateSlug}
              /></Suspense>}

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

              {mode === 'corporate' && (
                <AboutSection
                  mode={mode}
                  isArabic={isArabic}
                  onOpenEstimator={() => setIsEstimatorOpen(true)}
                />
              )}

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
        <Suspense fallback={null}>{estimatorPresence.mounted && <CostEstimatorModal
          isOpen={isEstimatorOpen}
          onClose={() => setIsEstimatorOpen(false)}
          isArabic={isArabic}
        />}</Suspense>

        <Suspense fallback={null}>{trackerPresence.mounted && <StatusTrackerModal
          isOpen={isTrackerOpen}
          onClose={() => setIsTrackerOpen(false)}
          isArabic={isArabic}
        />}</Suspense>

      </div>

    </div>
  );
}


