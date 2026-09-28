import { preferredScrollBehavior } from '../hooks/useMotionPreference';
import { usePresence } from '../hooks/usePresence';
import { useScrolled } from '../hooks/useScrolled';
import React, { useRef, useState } from 'react';
import {
  Building2,
  Sparkles,
  PhoneCall,
  Calculator,
  Search,
  Menu,
  X,
  ChevronDown,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { DualEngineMode } from '../types';
import { trackConversion, generateCallUrl } from '../lib/tracking';
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
  isLogoDocked?: boolean;
  currentSlug?: string;
}

const isHomePath = () => /^\/(ar\/?)?$/.test(window.location.pathname);

/** A dropdown menu: opens on hover, ArrowDown or click; closes on Escape, focus-out or mouse-out. */
function useMenu() {
  const [open, setOpen] = useState(false);
  const presence = usePresence(open, 170);
  return { open, setOpen, ...presence };
}

const NAV_LINK =
  'relative whitespace-nowrap rounded-lg px-1.5 py-2 text-[0.9375rem] font-medium text-slate-300 transition-colors hover:text-white xl:px-3 ' +
  'after:absolute after:inset-x-1.5 after:bottom-0.5 xl:after:inset-x-3 after:h-px after:origin-center after:scale-x-0 after:bg-gold-400 after:transition-transform after:duration-300 after:ease-out ' +
  'hover:after:scale-x-100 aria-expanded:text-white aria-expanded:after:scale-x-100 aria-[current=page]:text-white aria-[current=page]:after:scale-x-100';

const MENU_PANEL =
  'pop absolute top-full z-50 mt-2 w-80 rounded-2xl border border-white/10 bg-obsidian-900/95 p-3 shadow-pop backdrop-blur-2xl start-0';

const MENU_ITEM =
  'flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-white aria-[current=page]:bg-white/5 aria-[current=page]:text-white';

export const Navbar: React.FC<NavbarProps> = ({
  mode,
  onToggleMode,
  onOpenEstimator,
  onOpenTracker,
  isArabic,
  onToggleArabic,
  onNavigateSlug,
  onNavigateHome,
  isLogoDocked = true,
  currentSlug = '',
}) => {
  const scrolled = useScrolled(12);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobile = usePresence(mobileMenuOpen, 170);
  const services = useMenu();
  const jurisdictions = useMenu();
  const servicesRef = useRef<HTMLDivElement>(null);
  const jurisdictionsRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  const t = isArabic ? TRANSLATIONS.ar.navbar : TRANSLATIONS.en.navbar;
  const accentText = mode === 'corporate' ? 'text-emerald-400' : 'text-cyan-400';

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
    jurisdictions.setOpen(false);
    setMobileMenuOpen(false);
    if (onNavigateSlug) {
      onNavigateSlug(slug);
    } else {
      window.location.href = `${isArabic ? '/ar' : ''}/${slug}`;
    }
  };

  /** Scroll to a home-page section, returning to the home page first when on a dedicated page. */
  const goToSection = (e: React.MouseEvent, targetId: string, fallbackId?: string) => {
    e.preventDefault();
    services.setOpen(false);
    setMobileMenuOpen(false);
    const scroll = () => {
      const element = document.getElementById(targetId) ?? (fallbackId ? document.getElementById(fallbackId) : null);
      element?.scrollIntoView({ behavior: preferredScrollBehavior(), block: 'start' });
    };
    if (!isHomePath() && onNavigateHome) {
      onNavigateHome();
      setTimeout(scroll, 100);
      return;
    }
    scroll();
  };

  const handleMenuKeyDown = (
    e: React.KeyboardEvent<HTMLElement>,
    menu: ReturnType<typeof useMenu>,
    wrapper: React.RefObject<HTMLDivElement>,
  ) => {
    const items = () => Array.from(wrapper.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []);
    const target = e.target as HTMLElement;
    const index = items().indexOf(target);
    const move = (to: number) => {
      const list = items();
      if (!list.length) return;
      e.preventDefault();
      list[(to + list.length) % list.length].focus();
    };

    if (e.key === 'ArrowDown' && target.tagName === 'BUTTON') {
      e.preventDefault();
      menu.setOpen(true);
      // Land on the first item once the menu has mounted.
      requestAnimationFrame(() => items()[0]?.focus());
    } else if (e.key === 'ArrowDown' && index >= 0) {
      move(index + 1);
    } else if (e.key === 'ArrowUp' && index >= 0) {
      move(index - 1);
    } else if (e.key === 'Home' && index >= 0) {
      move(0);
    } else if (e.key === 'End' && index >= 0) {
      move(-1);
    } else if (e.key === 'Escape' && menu.open) {
      e.preventDefault();
      menu.setOpen(false);
      wrapper.current?.querySelector<HTMLButtonElement>('button[aria-haspopup]')?.focus();
    }
  };

  const closeOnFocusOut = (e: React.FocusEvent<HTMLElement>, menu: ReturnType<typeof useMenu>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) menu.setOpen(false);
  };

  const servicesItems =
    mode === 'corporate'
      ? [
          { label: isArabic ? 'تأسيس الشركات والرخص الرئيسية' : 'Company Formation & Mainland', tag: isArabic ? 'ملك 100%' : '100% Own', tagClass: 'text-emerald-400' },
          { label: isArabic ? 'علاقات الدوائر الحكومية وتم' : 'Corporate PRO & TAMM Liaison', tag: isArabic ? '7 دوائر' : '7 Depts', tagClass: 'text-slate-400' },
          { label: isArabic ? 'الإقامة الذهبية 10 سنوات' : '10-Year UAE Golden Visa', tag: 'VIP', tagClass: 'text-gold-400' },
          { label: isArabic ? 'ضريبة الشركات والامتثال المالي' : 'Corporate Tax & Freezone 0%', tag: 'FTA TRN', tagClass: 'text-emerald-400' },
        ]
      : [
          { label: isArabic ? 'تطوير المواقع والمنصات الذكية' : 'Bespoke Web & App Engineering', tag: 'Next.js', tagClass: 'text-cyan-400' },
          { label: isArabic ? 'تصميم واجهات المستخدم الفاخرة' : 'Fintech-Grade UI/UX Design', tag: 'Dark UI', tagClass: 'text-cyan-400' },
          { label: isArabic ? 'بناء الهوية البصرية للشركات' : 'Corporate Brand Architecture', tag: 'Prestige', tagClass: 'text-gold-400' },
          { label: isArabic ? 'أنظمة إدارة علاقات العملاء والفواتير' : 'Automated CRM & Invoicing', tag: 'Cloud', tagClass: 'text-emerald-400' },
        ];
  const servicesTarget = mode === 'corporate' ? 'services' : 'digital-services';

  const jurisdictionItems = [
    { slug: 'meydan-free-zone', titleEn: 'Meydan Free Zone (Dubai)', titleAr: 'منطقة ميدان الحرة (دبي)', tag: 'From 12.5k' },
    { slug: 'masdar-city-free-zone', titleEn: 'Masdar City Free Zone (Abu Dhabi)', titleAr: 'مدينة مصدر الحرة (أبوظبي)', tag: 'AI & Tech' },
    { slug: 'ifza', titleEn: 'IFZA Dubai Free Zone', titleAr: 'سلطة إيفزا دبي الحرة', tag: '1500+ Act' },
    { slug: 'ajman-free-zone', titleEn: 'Ajman Free Zone (AFZ)', titleAr: 'منطقة عجمان الحرة', tag: 'From 5.9k' },
    { slug: 'mainland-business-setup', titleEn: 'UAE Mainland Setup (ADDED/DED)', titleAr: 'البر الرئيسي (أبوظبي ودبي)', tag: '100% Own' },
    { slug: 'ifza-vs-meydan', titleEn: 'IFZA vs. Meydan Comparison', titleAr: 'مقارنة إيفزا وميدان', tag: 'AEO Guide' },
  ];

  const modeButton = (target: DualEngineMode, Icon: typeof Building2, label: string, compact: boolean) => {
    const active = mode === target;
    return (
      <button
        type="button"
        onClick={() => onToggleMode(target)}
        aria-pressed={active}
        title={label}
        className={`flex items-center gap-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
          compact ? `h-9 w-9 justify-center ${active ? 'xl:w-auto xl:px-4' : ''}` : 'px-4 py-1.5'
        } ${active ? 'bg-accent text-obsidian-950' : 'text-slate-400 hover:text-white'}`}
      >
        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className={compact ? (active ? 'sr-only xl:not-sr-only' : 'sr-only') : ''}>{label}</span>
      </button>
    );
  };

  return (
    <header
      onKeyDown={(e) => {
        if (e.key === 'Escape' && mobileMenuOpen) {
          setMobileMenuOpen(false);
          mobileToggleRef.current?.focus();
        }
      }}
      className={`fixed inset-x-0 top-0 z-50 h-[var(--header-h)] border-b border-gold-400/15 bg-obsidian-950/85 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_14px_30px_-22px_rgb(0_0_0/0.9)]' : ''
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center gap-3 px-4 sm:px-6 lg:gap-3 lg:px-8 xl:gap-4 2xl:max-w-[88rem]">
        {/* Logo (also the landing target for the digital-studio intro) */}
        <div id="navbar-logo-target" className="flex shrink-0 items-center">
          <a
            href="/"
            onClick={handleHomeClick}
            className={`group flex items-center transition-opacity duration-500 ${
              mode === 'digital' && !isLogoDocked ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            <img
              src="/expedia-latest-logo.png"
              alt="Expedia Business Services"
              width="940"
              height="420"
              className="h-12 w-auto object-contain sm:h-14 xl:h-16"
            />
          </a>
        </div>

        {/* Engine switch: icons at lg, labels from xl */}
        <div
          role="group"
          aria-label={isArabic ? 'وضع العرض' : 'Site mode'}
          className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-obsidian-900/90 p-0.5 lg:flex"
        >
          {modeButton('corporate', Building2, t.corporateMode, true)}
          {modeButton('digital', Sparkles, t.digitalMode, true)}
        </div>

        {/* Primary navigation */}
        <nav
          aria-label={isArabic ? 'التنقل الرئيسي' : 'Primary'}
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex"
        >
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => services.setOpen(true)}
            onMouseLeave={() => services.setOpen(false)}
            onBlur={(e) => closeOnFocusOut(e, services)}
            onKeyDown={(e) => handleMenuKeyDown(e, services, servicesRef)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={services.open}
              aria-controls="services-navigation-menu"
              className={`${NAV_LINK} flex items-center gap-1`}
              onClick={(e) => goToSection(e, servicesTarget, 'services')}
            >
              <span>{t.services}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-300 ${services.open ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {services.mounted && (
              <div id="services-navigation-menu" role="menu" data-state={services.state} className={MENU_PANEL}>
                <div className="px-3 pb-2 pt-1 text-sm font-semibold text-slate-400">
                  {mode === 'corporate'
                    ? isArabic ? 'الخدمات الحكومية وتأسيس الشركات' : 'Core Government & PRO Units'
                    : isArabic ? 'الهندسة الرقمية والعلامة التجارية' : 'Digital Engineering & Brand'}
                </div>
                <div className="space-y-0.5">
                  {servicesItems.map((item) => (
                    <a
                      key={item.label}
                      href={`#${servicesTarget}`}
                      onClick={(e) => goToSection(e, servicesTarget, 'services')}
                      role="menuitem"
                      className={MENU_ITEM}
                    >
                      <span className="font-semibold">{item.label}</span>
                      <span className={`text-xs font-semibold ${item.tagClass}`}>{item.tag}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            ref={jurisdictionsRef}
            className="relative"
            onMouseEnter={() => jurisdictions.setOpen(true)}
            onMouseLeave={() => jurisdictions.setOpen(false)}
            onBlur={(e) => closeOnFocusOut(e, jurisdictions)}
            onKeyDown={(e) => handleMenuKeyDown(e, jurisdictions, jurisdictionsRef)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={jurisdictions.open}
              aria-controls="jurisdictions-navigation-menu"
              className={`${NAV_LINK} flex items-center gap-1`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('jurisdictions')?.scrollIntoView({ behavior: preferredScrollBehavior() });
              }}
            >
              <span>{t.jurisdictions}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-300 ${jurisdictions.open ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {jurisdictions.mounted && (
              <div id="jurisdictions-navigation-menu" role="menu" data-state={jurisdictions.state} className={MENU_PANEL}>
                <div className="px-3 pb-2 pt-1 text-sm font-semibold text-slate-400">
                  {isArabic ? 'المناطق الحرة والرخص المعتمدة' : 'Official Free Zones & DED Hubs'}
                </div>
                <div className="space-y-0.5">
                  {jurisdictionItems.map((j) => (
                    <a
                      key={j.slug}
                      href={`${isArabic ? '/ar' : ''}/${j.slug}`}
                      onClick={(e) => handleSlugClick(e, j.slug)}
                      aria-current={currentSlug === j.slug ? 'page' : undefined}
                      role="menuitem"
                      className={MENU_ITEM}
                    >
                      <span className="font-semibold">{isArabic ? j.titleAr : j.titleEn}</span>
                      <span className="text-xs font-semibold text-emerald-400">{j.tag}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {mode === 'corporate' && (
            <a href="#about" onClick={(e) => goToSection(e, 'about')} className={NAV_LINK}>
              {t.about}
            </a>
          )}
          <a href="#faq" onClick={(e) => goToSection(e, 'faq')} className={NAV_LINK}>
            {t.faq}
          </a>
          <a href="#contact" onClick={(e) => goToSection(e, 'contact')} className={NAV_LINK}>
            {t.contact}
          </a>
        </nav>

        {/* Actions: the quotation request is always labelled; the rest shrink to icons before they can clip */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={onOpenTracker}
            title={t.trackStatus}
            className="btn btn-ghost btn-sm h-10 min-h-0 w-10 p-0"
          >
            <Search className={`h-[1.125rem] w-[1.125rem] ${accentText}`} aria-hidden="true" />
            <span className="sr-only">{t.trackStatus}</span>
          </button>

          <button type="button" onClick={onOpenEstimator} className="btn btn-primary btn-sm lg:px-3 xl:px-4">
            <Calculator className="h-4 w-4" aria-hidden="true" />
            <span>{t.costEstimator}</span>
          </button>

          <button
            type="button"
            onClick={onToggleArabic}
            className="btn btn-secondary btn-sm gap-1.5 px-2.5"
          >
            <Globe className="h-4 w-4 text-slate-400" aria-hidden="true" />
            <span lang={isArabic ? 'en' : 'ar'} className="font-arabic font-bold">
              {isArabic ? 'English' : 'عربي'}
            </span>
          </button>

          <button
            type="button"
            onClick={handleCall}
            title={isArabic ? 'اتصل بنا مباشرة: +971 56 4425 950' : 'Call Expedia Direct: +971 56 4425 950'}
            className="btn btn-secondary btn-sm hidden gap-2 2xl:inline-flex"
          >
            <PhoneCall className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            <span className="tnum" dir="ltr">{COMPANY_INFO.phone}</span>
          </button>
        </div>

        {/* Mobile and tablet */}
        <div className="ms-auto flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onOpenTracker}
            title={t.trackStatus}
            className="btn btn-secondary h-11 w-11 min-h-0 p-0"
          >
            <Search className={`h-[1.125rem] w-[1.125rem] ${accentText}`} aria-hidden="true" />
            <span className="sr-only">{t.trackStatus}</span>
          </button>
          <button
            ref={mobileToggleRef}
            type="button"
            aria-label={isArabic ? (mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة') : (mobileMenuOpen ? 'Close menu' : 'Open menu')}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-secondary h-11 w-11 min-h-0 p-0"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile and tablet sheet */}
      {mobile.mounted && (
        <div
          id="mobile-navigation"
          data-state={mobile.state}
          className="sheet absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-h))] overflow-y-auto border-b border-white/10 bg-obsidian-950/95 shadow-pop backdrop-blur-2xl lg:hidden"
        >
          <div className="mx-auto max-w-2xl space-y-5 px-4 py-5 sm:px-6">
            <div role="group" aria-label={isArabic ? 'وضع العرض' : 'Site mode'} className="grid grid-cols-2 gap-1 rounded-xl border border-white/10 bg-obsidian-900 p-1">
              {(
                [
                  ['corporate', t.corporateMode],
                  ['digital', t.digitalMode],
                ] as const
              ).map(([target, label]) => (
                <button
                  key={target}
                  type="button"
                  aria-pressed={mode === target}
                  onClick={() => {
                    onToggleMode(target);
                    setMobileMenuOpen(false);
                  }}
                  className={`min-h-11 rounded-lg px-3 text-sm font-semibold ${
                    mode === target ? 'bg-accent text-obsidian-950' : 'text-slate-400'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <nav aria-label={isArabic ? 'التنقل الرئيسي' : 'Primary'} className="flex flex-col text-base text-slate-200">
              {[
                {
                  href: '#services',
                  id: mode === 'corporate' ? 'services' : 'digital-services',
                  fallback: 'services',
                  label: `${t.services} (${mode === 'corporate' ? (isArabic ? '11 خدمة' : '11 Modules') : (isArabic ? '4 ركائز' : '4 Pillars')})`,
                },
                { href: '#jurisdictions', id: 'jurisdictions', label: t.jurisdictions },
                ...(mode === 'corporate' ? [{ href: '#about', id: 'about', label: t.about }] : []),
                { href: '#faq', id: 'faq', label: t.faq },
                { href: '#contact', id: 'contact', label: t.contact },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => goToSection(e, link.id, (link as { fallback?: string }).fallback)}
                  className="flex min-h-12 items-center justify-between border-b border-white/5 py-2 last:border-b-0"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-slate-500 rtl:rotate-180" aria-hidden="true" />
                </a>
              ))}
            </nav>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  onOpenEstimator();
                  setMobileMenuOpen(false);
                }}
                className="btn btn-primary"
              >
                <Calculator className="h-4 w-4" aria-hidden="true" />
                <span>{t.costEstimator}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  onToggleArabic();
                  setMobileMenuOpen(false);
                }}
                className="btn btn-secondary"
              >
                <Globe className="h-4 w-4 text-slate-400" aria-hidden="true" />
                <span lang={isArabic ? 'en' : 'ar'} className="font-arabic">{isArabic ? 'English' : 'عربي'}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                handleCall();
                setMobileMenuOpen(false);
              }}
              className="btn btn-secondary w-full"
            >
              <PhoneCall className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              <span>
                {isArabic ? 'اتصل بنا: ' : 'Call Us: '}
                <span className="tnum" dir="ltr">{COMPANY_INFO.phone}</span>
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
