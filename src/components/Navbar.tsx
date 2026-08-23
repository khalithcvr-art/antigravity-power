import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Sparkles, 
  PhoneCall, 
  MessageSquare, 
  Calculator, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { DualEngineMode } from '../types';
import { trackConversion, generateWhatsAppUrl, generateCallUrl } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  mode: DualEngineMode;
  onToggleMode: (newMode: DualEngineMode) => void;
  onOpenEstimator: () => void;
  onOpenTracker: () => void;
  isArabic: boolean;
  onToggleArabic: () => void;
  onNavigateSlug?: (slug: string) => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  mode,
  onToggleMode,
  onOpenEstimator,
  onOpenTracker,
  isArabic,
  onToggleArabic,
  onNavigateSlug,
  onNavigateHome,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [jurisdictionsDropdownOpen, setJurisdictionsDropdownOpen] = useState(false);

  const t = isArabic ? TRANSLATIONS.ar.navbar : TRANSLATIONS.en.navbar;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    trackConversion('whatsapp_click', { source: 'navbar' });
    window.open(generateWhatsAppUrl(), '_blank');
  };

  const handleCall = () => {
    trackConversion('call_click', { source: 'navbar' });
    window.location.href = generateCallUrl();
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.href = '/';
    }
  };

  const handleSlugClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    setJurisdictionsDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavigateSlug) {
      onNavigateSlug(slug);
    } else {
      window.location.href = `/${slug}`;
    }
  };

  const handleServiceClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setServicesDropdownOpen(false);
    if (window.location.pathname !== '/' && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const s = document.getElementById('services');
      s?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-obsidian-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clean Prominent Logo (No background shade box, enlarged visibility) */}
          <div className="flex items-center">
            <a href="/" onClick={handleHomeClick} className="group flex items-center text-left rtl:text-right py-1">
              <img 
                src="/expedia-latest-logo.png" 
                alt="Expedia Business Services" 
                className="h-12 sm:h-14 md:h-16 w-auto max-w-[220px] sm:max-w-[270px] md:max-w-[320px] object-contain brightness-110 drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Dual-Engine Switcher (Fintech Center Capsule) */}
          <div className="hidden lg:flex items-center p-1 rounded-full bg-obsidian-900/90 border border-white/10 shadow-inner">
            <button
              onClick={() => onToggleMode('corporate')}
              className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                mode === 'corporate'
                  ? 'bg-emerald-500 text-obsidian-950 shadow-md shadow-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{t.corporateMode}</span>
            </button>
            <button
              onClick={() => onToggleMode('digital')}
              className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                mode === 'digital'
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-obsidian-950 shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.digitalMode}</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse text-sm font-medium text-slate-300">
            <div className="relative group" onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
              <button 
                className="flex items-center space-x-1 rtl:space-x-reverse hover:text-white transition-colors py-2"
                onClick={(e) => handleServiceClick(e, mode === 'corporate' ? 'services' : 'digital-services')}
              >
                <span>{t.services}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>

              {/* Mega Dropdown Preview */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 w-80 p-3 bg-obsidian-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1 mb-1">
                    {mode === 'corporate' ? (isArabic ? 'الخدمات الحكومية وتأسيس الشركات' : 'Core Government & PRO Units') : (isArabic ? 'الهندسة الرقمية والعلامة التجارية' : 'Digital Engineering & Brand')}
                  </div>
                  {mode === 'corporate' ? (
                    <div className="space-y-1">
                      <a 
                        href="#business-setup" 
                        onClick={(e) => handleServiceClick(e, 'business-setup')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-slate-200 hover:text-emerald-400 text-xs transition-colors"
                      >
                        <span className="font-semibold">{isArabic ? 'تأسيس الشركات والرخص الرئيسية' : 'Company Formation & Mainland'}</span>
                        <span className="text-[10px] text-emerald-400/80 font-mono">{isArabic ? 'ملك 100%' : '100% Own'}</span>
                      </a>
                      <a 
                        href="#pro-government" 
                        onClick={(e) => handleServiceClick(e, 'pro-government')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-slate-200 hover:text-emerald-400 text-xs transition-colors"
                      >
                        <span className="font-semibold">{isArabic ? 'علاقات الدوائر الحكومية وتم' : 'Corporate PRO & TAMM Liaison'}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{isArabic ? '7 دوائر' : '7 Depts'}</span>
                      </a>
                      <a 
                        href="#golden-visa" 
                        onClick={(e) => handleServiceClick(e, 'golden-visa')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-slate-200 hover:text-emerald-400 text-xs transition-colors"
                      >
                        <span className="font-semibold">{isArabic ? 'الإقامة الذهبية 10 سنوات' : '10-Year UAE Golden Visa'}</span>
                        <span className="text-[10px] text-goldMuted font-mono">VIP</span>
                      </a>
                      <a 
                        href="#corporate-tax" 
                        onClick={(e) => handleServiceClick(e, 'corporate-tax')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-slate-200 hover:text-emerald-400 text-xs transition-colors"
                      >
                        <span className="font-semibold">{isArabic ? 'ضريبة الشركات والامتثال المالي' : 'Corporate Tax & Freezone 0%'}</span>
                        <span className="text-[10px] text-teal-400 font-mono">FTA TRN</span>
                      </a>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <a 
                        href="#bespoke-web" 
                        onClick={(e) => handleServiceClick(e, 'bespoke-web')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-slate-200 hover:text-cyan-400 text-xs transition-colors"
                      >
                        <span className="font-semibold">{isArabic ? 'تطوير المواقع والمنصات الذكية' : 'Bespoke Web & App Engineering'}</span>
                        <span className="text-[10px] text-cyan-400 font-mono">Next.js 15</span>
                      </a>
                      <a 
                        href="#fintech-ui" 
                        onClick={(e) => handleServiceClick(e, 'fintech-ui')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-slate-200 hover:text-cyan-400 text-xs transition-colors"
                      >
                        <span className="font-semibold">{isArabic ? 'تصميم واجهات المستخدم الفاخرة' : 'Fintech-Grade UI/UX Design'}</span>
                        <span className="text-[10px] text-indigo-400 font-mono">Dark UI</span>
                      </a>
                      <a 
                        href="#corporate-branding" 
                        onClick={(e) => handleServiceClick(e, 'corporate-branding')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-slate-200 hover:text-cyan-400 text-xs transition-colors"
                      >
                        <span className="font-semibold">{isArabic ? 'بناء الهوية البصرية للشركات' : 'Corporate Brand Architecture'}</span>
                        <span className="text-[10px] text-purple-400 font-mono">Prestige</span>
                      </a>
                      <a 
                        href="#business-automation" 
                        onClick={(e) => handleServiceClick(e, 'business-automation')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-slate-200 hover:text-cyan-400 text-xs transition-colors"
                      >
                        <span className="font-semibold">{isArabic ? 'أنظمة إدارة علاقات العملاء والفواتير' : 'Automated CRM & Invoicing'}</span>
                        <span className="text-[10px] text-emerald-400 font-mono">Cloud</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Free Zones & Comparison Dropdown */}
            <div className="relative group" onMouseEnter={() => setJurisdictionsDropdownOpen(true)} onMouseLeave={() => setJurisdictionsDropdownOpen(false)}>
              <button 
                className="flex items-center space-x-1 rtl:space-x-reverse hover:text-white transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('jurisdictions');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{t.jurisdictions}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>

              {jurisdictionsDropdownOpen && (
                <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 w-80 p-3 bg-obsidian-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1 mb-1">
                    {isArabic ? 'المناطق الحرة والرخص المعتمدة' : 'Official Free Zones & DED Hubs'}
                  </div>
                  <div className="space-y-1">
                    {[
                      { slug: 'meydan-free-zone', titleEn: 'Meydan Free Zone (Dubai)', titleAr: 'منطقة ميدان الحرة (دبي)', tag: 'From 12.5k' },
                      { slug: 'masdar-city-free-zone', titleEn: 'Masdar City Free Zone (Abu Dhabi)', titleAr: 'مدينة مصدر الحرة (أبوظبي)', tag: 'AI & Tech' },
                      { slug: 'ifza', titleEn: 'IFZA Dubai Free Zone', titleAr: 'سلطة إيفزا دبي الحرة', tag: '1500+ Act' },
                      { slug: 'ajman-free-zone', titleEn: 'Ajman Free Zone (AFZ)', titleAr: 'منطقة عجمان الحرة', tag: 'From 5.9k' },
                      { slug: 'mainland-business-setup', titleEn: 'UAE Mainland Setup (ADDED/DED)', titleAr: 'البر الرئيسي (أبوظبي ودبي)', tag: '100% Own' },
                      { slug: 'ifza-vs-meydan', titleEn: 'IFZA vs. Meydan Comparison', titleAr: 'مقارنة إيفزا وميدان', tag: 'AEO Guide' },
                    ].map(j => (
                      <a
                        key={j.slug}
                        href={`/${j.slug}`}
                        onClick={(e) => handleSlugClick(e, j.slug)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-slate-200 hover:text-emerald-400 text-xs transition-colors"
                      >
                        <span className="font-semibold">{isArabic ? j.titleAr : j.titleEn}</span>
                        <span className="text-[10px] text-emerald-400/80 font-mono">{j.tag}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#how-it-works" onClick={(e) => {
              if (window.location.pathname !== '/' && onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }
            }} className="hover:text-white transition-colors">{t.journey}</a>
            <a href="#about" onClick={(e) => {
              if (window.location.pathname !== '/' && onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }
            }} className="hover:text-white transition-colors">{t.about}</a>
            <a href="#faq" onClick={(e) => {
              if (window.location.pathname !== '/' && onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }
            }} className="hover:text-white transition-colors">{t.faq}</a>
            <a href="#contact" onClick={(e) => {
              if (window.location.pathname !== '/' && onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }
            }} className="hover:text-white transition-colors">{t.contact}</a>
          </nav>

          {/* Quick Actions (Calculator, Status Tracker, Arabic, WhatsApp) */}
          <div className="hidden sm:flex items-center space-x-3 rtl:space-x-reverse">
            
            {/* Live PRO Tracker Trigger Button */}
            <button
              onClick={onOpenTracker}
              title={t.trackStatus}
              className="flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1.5 rounded-lg bg-obsidian-900/80 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all shadow-sm"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.trackStatus}</span>
            </button>

            {/* Cost Estimator Modal Trigger */}
            <button
              onClick={onOpenEstimator}
              className="flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-medium text-emerald-300 hover:text-emerald-200 transition-all shadow-sm shadow-emerald-950"
            >
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.costEstimator}</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleArabic}
              className="flex items-center space-x-1 rtl:space-x-reverse px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-arabic font-bold">{isArabic ? 'English' : 'عربي'}</span>
            </button>

            {/* Direct WhatsApp Action */}
            <button
              onClick={handleWhatsApp}
              className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl text-xs font-bold text-obsidian-950 transition-all duration-300 shadow-lg ${
                mode === 'corporate'
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02]'
                  : 'bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02]'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 fill-obsidian-950" />
              <span>{t.whatsappDirect}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2 rtl:space-x-reverse">
            <button
              onClick={onOpenTracker}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
              title={t.trackStatus}
            >
              <Search className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-obsidian-900 border border-white/10 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            {/* Dual Engine Switch Mobile */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-obsidian-950 border border-white/10">
              <button
                onClick={() => { onToggleMode('corporate'); setMobileMenuOpen(false); }}
                className={`py-2 text-xs font-bold rounded-lg text-center ${
                  mode === 'corporate' ? 'bg-emerald-500 text-obsidian-950' : 'text-slate-400'
                }`}
              >
                {t.corporateMode}
              </button>
              <button
                onClick={() => { onToggleMode('digital'); setMobileMenuOpen(false); }}
                className={`py-2 text-xs font-bold rounded-lg text-center ${
                  mode === 'digital' ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-obsidian-950' : 'text-slate-400'
                }`}
              >
                {t.digitalMode}
              </button>
            </div>

            <div className="flex flex-col space-y-3 pt-2 text-sm text-slate-300">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-white/5 flex items-center justify-between"
              >
                <span>{t.services} ({mode === 'corporate' ? (isArabic ? '11 خدمة' : '11 Modules') : (isArabic ? '4 ركائز' : '4 Pillars')})</span>
                <ArrowRight className="w-4 h-4 text-slate-500 rtl:rotate-180" />
              </a>
              <a 
                href="#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-white/5 flex items-center justify-between"
              >
                <span>{t.journey}</span>
                <ArrowRight className="w-4 h-4 text-slate-500 rtl:rotate-180" />
              </a>
              <a 
                href="#jurisdictions" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-white/5 flex items-center justify-between"
              >
                <span>{t.jurisdictions}</span>
                <ArrowRight className="w-4 h-4 text-slate-500 rtl:rotate-180" />
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-white/5 flex items-center justify-between"
              >
                <span>{t.about}</span>
                <ArrowRight className="w-4 h-4 text-slate-500 rtl:rotate-180" />
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-white/5 flex items-center justify-between"
              >
                <span>{t.faq}</span>
                <ArrowRight className="w-4 h-4 text-slate-500 rtl:rotate-180" />
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 flex items-center justify-between"
              >
                <span>{t.contact}</span>
                <ArrowRight className="w-4 h-4 text-slate-500 rtl:rotate-180" />
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => { onOpenEstimator(); setMobileMenuOpen(false); }}
                className="py-2.5 px-3 rounded-xl bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center space-x-1.5 rtl:space-x-reverse"
              >
                <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.costEstimator}</span>
              </button>
              <button
                onClick={() => { onToggleArabic(); setMobileMenuOpen(false); }}
                className="py-2.5 px-3 rounded-xl bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center justify-center space-x-1.5 rtl:space-x-reverse"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-arabic">{isArabic ? 'English' : 'عربي'}</span>
              </button>
            </div>

            <button
              onClick={() => { handleWhatsApp(); setMobileMenuOpen(false); }}
              className="w-full py-3 rounded-xl bg-emerald-500 font-bold text-obsidian-950 flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4 fill-obsidian-950" />
              <span>{t.whatsappDirect}</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

