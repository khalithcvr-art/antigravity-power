import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  MessageSquare, 
  Globe, 
  Award,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, CORPORATE_SERVICES, CHANNEL_PARTNERS } from '../data/siteData';
import { generateWhatsAppUrl, generateCallUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onOpenEstimator: () => void;
  onOpenTracker: () => void;
  isArabic?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimator, onOpenTracker, isArabic = false }) => {
  const t = isArabic ? TRANSLATIONS.ar.footer : TRANSLATIONS.en.footer;
  const navT = isArabic ? TRANSLATIONS.ar.navbar : TRANSLATIONS.en.navbar;

  const handleWhatsApp = () => {
    trackConversion('whatsapp_click', { source: 'footer_cta' });
    window.open(generateWhatsAppUrl(), '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 border-t border-white/10 text-slate-400 text-xs relative overflow-hidden">
      
      {/* Pre-Footer Conversion Strip */}
      <div className="border-b border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-obsidian-900/80 to-obsidian-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left rtl:md:text-right">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block mb-1">
              {isArabic ? 'هل أنت مستعد لتأسيس شركتك في الإمارات؟' : 'Ready to Incorporate in the UAE?'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {isArabic ? 'أطلق شركتك في البر الرئيسي أو المناطق الحرة اليوم' : 'Launch Your Mainland or Free Zone Company Today'}
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              {isArabic 
                ? 'احصل على تفصيل رسمي لرسوم الرخص الحكومية وإنجاز فوري عبر مستشارين معتمدين.' 
                : 'Get an itemized government fee breakdown and fast-track clearance from licensed experts.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold text-xs flex items-center space-x-2 rtl:space-x-reverse transition-all shadow-lg shadow-emerald-500/25"
            >
              <MessageSquare className="w-4 h-4 fill-obsidian-950" />
              <span>{navT.whatsappDirect}</span>
            </button>
            <button
              onClick={onOpenEstimator}
              className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-colors"
            >
              <span>{navT.costEstimator}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Credentials (Legal Entity Column) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="p-1 rounded-xl bg-obsidian-900 border border-white/10 shadow-md">
                <img 
                  src="/expedia-latest-logo.png" 
                  alt="Expedia Business and Services L.L.C" 
                  className="h-10 w-auto max-w-[170px] object-contain brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 font-semibold">
                  UAE · CN-6307408
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {COMPANY_INFO.legalName}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-6 rtl:pr-0 rtl:pl-6">
              {t.bio}
            </p>

            <div className="space-y-1.5 text-[11px] pt-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isArabic ? 'رقم الرخصة التجارية: ' : 'Trade License: '}<strong className="text-slate-200 font-mono">{COMPANY_INFO.tradeLicense}</strong></span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isArabic ? COMPANY_INFO.officeAddressAr : COMPANY_INFO.officeAddress}</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={generateCallUrl()} className="hover:text-emerald-400 font-mono">{COMPANY_INFO.phone}</a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white">{t.servicesTitle}</h4>
            <ul className="space-y-2">
              {CORPORATE_SERVICES.slice(0, 5).map(s => (
                <li key={s.id}>
                  <a href={`#${s.anchorId}`} className="hover:text-emerald-400 transition-colors">
                    {isArabic && s.titleAr ? s.titleAr : s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Free Zones & Mainland */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white">{t.jurisdictionsTitle}</h4>
            <ul className="space-y-2">
              {CHANNEL_PARTNERS.slice(0, 5).map(p => (
                <li key={p.id}>
                  <a href="#jurisdictions" className="hover:text-emerald-400 transition-colors">
                    {isArabic && p.nameAr ? p.nameAr : p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Portals & Tools */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white">{isArabic ? 'الأدوات والبوابات' : 'Portals & Tools'}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenTracker} className="hover:text-emerald-400 transition-colors text-left rtl:text-right">
                  {navT.trackStatus}
                </button>
              </li>
              <li>
                <button onClick={onOpenEstimator} className="hover:text-emerald-400 transition-colors text-left rtl:text-right">
                  {navT.costEstimator}
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  {navT.faq}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  {navT.contact}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 p-6 rounded-2xl bg-obsidian-900 border border-white/5 space-y-2 text-[11px] text-slate-400">
          <strong className="text-slate-200 block">{t.disclaimerTitle}</strong>
          <p className="leading-relaxed">
            {t.disclaimerText}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. {t.allRightsReserved}
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <span>{t.uaeCompliance}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title={isArabic ? 'العودة للأعلى' : 'Back to top'}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
