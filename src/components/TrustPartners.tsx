import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  ArrowRight, 
  ArrowLeft
} from 'lucide-react';
import { CHANNEL_PARTNERS, UAE_AUTHORITIES } from '../data/siteData';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';
import { TiltCard, ScrollReveal } from './motion/MotionPrimitives';

interface TrustPartnersProps {
  isArabic?: boolean;
}

export const TrustPartners: React.FC<TrustPartnersProps> = ({ isArabic = false }) => {
  const t = isArabic ? TRANSLATIONS.ar.trustPartners : TRANSLATIONS.en.trustPartners;

  const handlePartnerInquiry = (name: string) => {
    trackConversion('whatsapp_click', { partner: name });
    const msg = isArabic 
      ? `مرحباً إكسبيديا، أود تأسيس شركتي في *${name}*. أرجو تزويدي بالأنشطة المتاحة وعرض الأسعار.`
      : `Hello Expedia, I want to establish my entity in *${name}*. Please send me the activity list and promotional package.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className={`py-20 relative bg-obsidian-950/70 border-t border-white/5 overflow-hidden ${isArabic ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
              <Award className="w-3.5 h-3.5 text-goldMuted" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {t.title} <br className="hidden sm:inline" />
              <span className="text-gradient-emerald">{t.titleHighlight}</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Main Partner Zone Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CHANNEL_PARTNERS.slice(0, 4).map((partner) => {
            const name = isArabic && partner.nameAr ? partner.nameAr : partner.name;
            const city = isArabic && partner.cityAr ? partner.cityAr : partner.city;
            const badge = isArabic && partner.badgeAr ? partner.badgeAr : partner.badge;
            const desc = isArabic && partner.descAr ? partner.descAr : partner.desc;
            const startingPrice = isArabic && partner.startingPriceAr ? partner.startingPriceAr : partner.startingPrice;
            const popularFor = isArabic && partner.popularForAr ? partner.popularForAr : partner.popularFor;

            return (
              <TiltCard
                key={partner.id}
                maxTilt={6}
                glowColor="rgba(16, 185, 129, 0.15)"
                className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                      {city}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {isArabic ? 'تبدأ من ' : 'From '} {startingPrice}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {name}
                  </h3>
                  <div className="text-[11px] text-goldMuted font-medium mb-3">
                    {badge}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {desc}
                  </p>

                  <div className="text-[11px] text-slate-500 font-mono mb-6">
                    {isArabic ? 'الأنشطة الملائمة: ' : 'Best For: '} <span className="text-slate-300">{popularFor}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handlePartnerInquiry(name)}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-obsidian-950 border border-white/10 text-xs font-semibold text-slate-200 transition-all flex items-center justify-center space-x-1.5 rtl:space-x-reverse shadow-sm"
                >
                  <span>{isArabic ? `تأسيس في ${name}` : `Setup in ${name.split(' ')[0]}`}</span>
                  <ArrowIcon className="w-3 h-3" />
                </motion.button>
              </TiltCard>
            );
          })}
        </div>

        {/* UAE Government Authorities Marquee / Grid */}
        <ScrollReveal>
          <div className="p-8 rounded-3xl bg-obsidian-900/60 border border-white/10">
            <div className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
              {isArabic ? 'الربط الرقمي المباشر مع المنظومة الحكومية والمصرفية' : 'Direct Regulatory Integration & Electronic Portals'}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {UAE_AUTHORITIES.map((auth, idx) => {
                const badge = isArabic && auth.badgeAr ? auth.badgeAr : auth.badge;

                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="p-3 rounded-2xl bg-obsidian-950/80 border border-white/5 text-center flex flex-col items-center justify-center hover:border-emerald-500/30 transition-colors group cursor-default"
                  >
                    <span className="font-display font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
                      {auth.name}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                      {badge}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center text-[11px] text-slate-400 mt-6 font-mono">
              {t.complianceNote}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

