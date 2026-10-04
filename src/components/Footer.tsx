import { preferredScrollBehavior } from '../hooks/useMotionPreference';
import React from 'react';
import { ShieldCheck, Phone, MapPin, ArrowUp, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, CORPORATE_SERVICES } from '../data/siteData';
import { generateWhatsAppUrl, generateCallUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onOpenEstimator: () => void;
  onOpenTracker: () => void;
  isArabic?: boolean;
  onNavigateSlug?: (slug: string) => void;
}

const FOOTER_LINK = 'inline-block py-1 text-slate-400 transition-colors hover:text-white';

export const Footer: React.FC<FooterProps> = ({ onOpenEstimator, onOpenTracker, isArabic = false, onNavigateSlug }) => {
  const t = isArabic ? TRANSLATIONS.ar.footer : TRANSLATIONS.en.footer;
  const navT = isArabic ? TRANSLATIONS.ar.navbar : TRANSLATIONS.en.navbar;

  const handleWhatsApp = () => {
    trackConversion('whatsapp_click', { source: 'footer_cta' });
    window.open(generateWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: preferredScrollBehavior() });
  };

  const handleSlugClick = (e: React.MouseEvent, slug: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    if (onNavigateSlug) {
      onNavigateSlug(slug);
    } else {
      window.location.href = `${isArabic ? "/ar" : ""}/${slug}`;
    }
  };

  return (
    <footer className="relative border-t border-gold-400/20 bg-obsidian-950 text-sm text-slate-400">

      {/* Closing call to action */}
      <div className="border-b border-white/10 bg-gradient-to-b from-obsidian-900/70 to-obsidian-950 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {isArabic ? 'هل أنت مستعد لتأسيس شركتك في الإمارات؟' : 'Ready to Incorporate in the UAE?'}
            </p>
            <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              {isArabic ? 'أطلق شركتك في البر الرئيسي أو المناطق الحرة اليوم' : 'Launch Your Mainland or Free Zone Company Today'}
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-400">
              {isArabic
                ? 'احصل على تفصيل رسمي لرسوم الرخص الحكومية وإنجاز فوري عبر مستشارين معتمدين.'
                : 'Get an itemized government fee breakdown and fast-track clearance from licensed experts.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button type="button" onClick={handleWhatsApp} className="btn btn-lg bg-emerald-500 text-obsidian-950 hover:bg-emerald-400">
              <MessageSquare className="h-4 w-4 fill-obsidian-950" aria-hidden="true" />
              <span>{navT.whatsappDirect}</span>
            </button>
            <button type="button" onClick={onOpenEstimator} className="btn btn-lg btn-secondary">
              <span>{navT.costEstimator}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Link matrix */}
      <div className="mx-auto max-w-7xl px-4 pb-32 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Legal entity */}
          <div className="space-y-5 lg:col-span-2">
            <div className="flex items-center gap-4">
              <img
                src="/expedia-latest-logo.png"
                alt="Expedia Business and Services L.L.C"
                width="940"
                height="420"
                className="h-14 w-auto object-contain"
              />
              <div>
                <span className="block font-mono text-sm font-semibold text-gold-300">UAE · CN-6307408</span>
                <span className="block text-sm text-slate-400">{COMPANY_INFO.legalName}</span>
              </div>
            </div>

            <p className="max-w-md text-[0.9375rem] leading-7 text-slate-400">{t.bio}</p>

            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <span>{isArabic ? 'رقم الرخصة التجارية: ' : 'Trade License: '}<strong className="font-mono font-semibold text-slate-100">{COMPANY_INFO.tradeLicense}</strong></span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <span>{isArabic ? COMPANY_INFO.officeAddressAr : COMPANY_INFO.officeAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <a href={generateCallUrl()} className="transition-colors hover:text-white"><span dir="ltr" className="tnum">{COMPANY_INFO.phone}</span></a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-white">{t.servicesTitle}</h4>
            <ul className="mt-4 space-y-1">
              {CORPORATE_SERVICES.slice(0, 5).map(s => (
                <li key={s.id}>
                  <a href={`#${s.anchorId}`} className={FOOTER_LINK}>
                    {isArabic && s.titleAr ? s.titleAr : s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-white">{t.jurisdictionsTitle}</h4>
            <ul className="mt-4 space-y-1">
              {[
                { slug: 'meydan-free-zone', labelEn: 'Meydan Free Zone (Dubai)', labelAr: 'منطقة ميدان الحرة (دبي)' },
                { slug: 'masdar-city-free-zone', labelEn: 'Masdar City Free Zone (Abu Dhabi)', labelAr: 'مدينة مصدر الحرة (أبوظبي)' },
                { slug: 'ifza', labelEn: 'IFZA Dubai Free Zone', labelAr: 'سلطة إيفزا دبي' },
                { slug: 'ajman-free-zone', labelEn: 'Ajman Free Zone (AFZ)', labelAr: 'منطقة عجمان الحرة' },
                { slug: 'mainland-business-setup', labelEn: 'Mainland Business Setup (DED)', labelAr: 'البر الرئيسي (أبوظبي ودبي)' },
                { slug: 'ifza-vs-meydan', labelEn: 'IFZA vs Meydan Comparison', labelAr: 'مقارنة إيفزا وميدان' },
              ].map(p => (
                <li key={p.slug}>
                  <a
                    href={`${isArabic ? "/ar" : ""}/${p.slug}`}
                    onClick={(e) => handleSlugClick(e, p.slug)}
                    className={FOOTER_LINK}
                  >
                    {isArabic ? p.labelAr : p.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-white">{isArabic ? 'الأدوات والبوابات' : 'Portals & Tools'}</h4>
            <ul className="mt-4 space-y-1">
              <li>
                <button type="button" onClick={onOpenTracker} className={`${FOOTER_LINK} text-start`}>
                  {navT.trackStatus}
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenEstimator} className={`${FOOTER_LINK} text-start`}>
                  {navT.costEstimator}
                </button>
              </li>
              <li>
                <a href="#faq" className={FOOTER_LINK}>{navT.faq}</a>
              </li>
              <li>
                <a href="#contact" className={FOOTER_LINK}>{navT.contact}</a>
              </li>
            </ul>
          </div>

        </div>

        <nav aria-label={isArabic ? 'الأدلة والسياسات' : 'Guides and policies'} className="mt-12 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/10 pt-8 text-[0.9375rem]">
          <a href="/blog" className="text-slate-300 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-gold-400">{isArabic ? 'أدلة الأعمال (بالإنجليزية)' : 'Business guides'}</a>
          <a href="/privacy" className="text-slate-300 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-gold-400">{isArabic ? 'الخصوصية (بالإنجليزية)' : 'Privacy'}</a>
          <a href="/cookies" className="text-slate-300 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-gold-400">{isArabic ? 'ملفات الارتباط (بالإنجليزية)' : 'Cookies'}</a>
          <a href="/terms" className="text-slate-300 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-gold-400">{isArabic ? 'الشروط (بالإنجليزية)' : 'Terms'}</a>
        </nav>

        {/* Regulatory disclaimer */}
        <div className="note mt-8 text-slate-400">
          <strong className="note-label">{t.disclaimerTitle}</strong>
          {t.disclaimerText}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. {t.allRightsReserved}
          </div>

          <div className="flex items-center gap-4">
            <span>{t.uaeCompliance}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="btn btn-secondary h-10 min-h-0 w-10 p-0"
              aria-label={isArabic ? 'العودة للأعلى' : 'Back to top'}
              title={isArabic ? 'العودة للأعلى' : 'Back to top'}
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
