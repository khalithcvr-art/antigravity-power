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
import { DualEngineMode } from '../types';

interface TrustPartnersProps {
  mode?: DualEngineMode;
  isArabic?: boolean;
  onNavigateSlug?: (slug: string) => void;
  onOpenEstimator?: () => void;
}

export const TrustPartners: React.FC<TrustPartnersProps> = ({ 
  mode = 'corporate', 
  isArabic = false, 
  onNavigateSlug,
  onOpenEstimator 
}) => {
  const tCorp = isArabic ? TRANSLATIONS.ar.trustPartners : TRANSLATIONS.en.trustPartners;

  const DIGITAL_TECH_STACK = [
    {
      id: 'nextjs-react',
      name: 'Next.js 15 & React 19',
      nameAr: 'محرك Next.js 15 و React 19',
      category: isArabic ? 'الأداء الفائق' : 'Performance Tier',
      badge: 'LCP < 0.4s',
      badgeAr: 'تحميل < 0.4 ثانية',
      desc: 'Modern Server Components delivering sub-second page rendering, 60fps Framer Motion fluid animations, and high Google organic search velocity.',
      descAr: 'مكونات خادم حديثة تمنح سرعة تصفح فائقة في أجزاء من الثانية، وتأثيرات حركية 60fps، وسرعة تصدر في محركات البحث.',
      highlight: isArabic ? 'معايير السرعة العالمية' : 'Sub-Second Edge Rendering',
      popularFor: isArabic ? 'تطبيقات الويب والمواقع المؤسسية الفاخرة' : 'Bespoke Corporate Web Apps & Portals',
      popularForAr: 'تطبيقات الويب والمواقع المؤسسية الفاخرة',
      color: 'cyan'
    },
    {
      id: 'supabase-postgres',
      name: 'Supabase & PostgreSQL',
      nameAr: 'قواعد بيانات PostgreSQL وسوبابيز',
      category: isArabic ? 'عزل وأمن البيانات' : 'Sovereign Database',
      badge: 'RLS Isolated',
      badgeAr: 'حماية البيانات RLS',
      desc: 'Enterprise-grade relational database architecture with row-level security, tenant data isolation, and instant real-time websocket synchronization.',
      descAr: 'بنية قواعد بيانات علائقية متطورة مع حماية كاملة على مستوى الصفوف، وعزل بيانات الشركات، وتزامن فوري للأحداث والمعاملات.',
      highlight: isArabic ? 'أمان بنكي للبيانات' : 'Multi-Tenant Isolation',
      popularFor: isArabic ? 'أنظمة إدارة العملاء والفوترة والمالية' : 'Custom CRM, Finance & ERP Modules',
      popularForAr: 'أنظمة إدارة العملاء والفوترة والمالية',
      color: 'indigo'
    },
    {
      id: 'whatsapp-ai',
      name: 'WhatsApp Cloud API & AI',
      nameAr: 'أتمتة واتساب والذكاء الاصطناعي',
      category: isArabic ? 'أتمتة المبيعات' : 'Autonomous AI Flow',
      badge: 'Instant Lead Bot',
      badgeAr: 'رد آلي فوري',
      desc: 'Direct WhatsApp Meta Cloud API integration with custom autonomous agents answering clients 24/7, generating PDF quotes, and booking meetings.',
      descAr: 'ربط مباشر مع واجهة واتساب السحابية الرسمية لروبوتات ذكاء اصطناعي تجيب على العملاء على مدار الساعة وتصدر عروض الأسعار.',
      highlight: isArabic ? 'تحويل العملاء 24/7' : '24/7 Autonomous Sales',
      popularFor: isArabic ? 'أتمتة استقطاب العملاء والمبيعات' : 'Automated Lead Qualification & Quotes',
      popularForAr: 'أتمتة استقطاب العملاء والمبيعات',
      color: 'emerald'
    },
    {
      id: 'cloudflare-edge',
      name: 'Cloudflare & Vercel Edge',
      nameAr: 'شبكة الحافة السحابية العالمية',
      category: isArabic ? 'الانتشار السحابي' : 'Global Edge CDN',
      badge: '< 12ms GCC Ping',
      badgeAr: 'استجابة < 12ms بالخليج',
      desc: 'Sovereign cloud deployment across local UAE & GCC edge nodes with automated SSL encryption, DDoS mitigation, and 99.99% uptime guarantee.',
      descAr: 'استضافة سحابية موزعة على عقد محلية في الإمارات ودول الخليج تضمن أعلى مستويات الحماية وسرعة استجابة لا تتجاوز 12ms.',
      highlight: isArabic ? 'أمان وسرعة فائقة' : '99.99% Guaranteed Uptime',
      popularFor: isArabic ? 'المواقع ذات الزيارات العالية والأمان' : 'High-Traffic Sovereign Infrastructure',
      popularForAr: 'المواقع ذات الزيارات العالية والأمان',
      color: 'purple'
    }
  ];

  const DIGITAL_FRAMEWORKS = [
    { name: 'TypeScript', nameAr: 'تايب سكريبت', role: 'Type-Safe Architecture', roleAr: 'هندسة آمنة برمجياً' },
    { name: 'Tailwind CSS v4', nameAr: 'تيلويند سي إس إس 4', role: 'Design Tokens', roleAr: 'أنظمة التصميم الحديثة' },
    { name: 'Stripe & Network Intl', nameAr: 'بوابات الدفع الإماراتية', role: 'UAE Payment Gateways', roleAr: 'معالجة المدفوعات' },
    { name: 'Schema.org JSON-LD', nameAr: 'مخططات السكيما المنظمة', role: 'Google & ChatGPT AEO', roleAr: 'الظهور في محركات الذكاء' },
    { name: 'Framer Motion', nameAr: 'فريمير موشن', role: '60FPS Micro-Animations', roleAr: 'مؤثرات بصرية 60fps' },
    { name: 'Python FastAPI', nameAr: 'بايثون فاست إيه بي آي', role: 'AI Microservices', roleAr: 'معالجة الذكاء الاصطناعي' },
    { name: 'REST & GraphQL', nameAr: 'واجهات الربط البرمجي', role: 'Seamless Integration', roleAr: 'تكامل الأنظمة السلس' }
  ];

  const getSlugForPartner = (id: string, name: string): string => {
    if (id.includes('meydan') || name.toLowerCase().includes('meydan')) return 'meydan-free-zone';
    if (id.includes('masdar') || name.toLowerCase().includes('masdar')) return 'masdar-city-free-zone';
    if (id.includes('ifza') || name.toLowerCase().includes('ifza')) return 'ifza';
    if (id.includes('ajman') || name.toLowerCase().includes('ajman')) return 'ajman-free-zone';
    return 'meydan-free-zone';
  };

  const handlePartnerClick = (partner: any) => {
    const slug = getSlugForPartner(partner.id, partner.name);
    if (onNavigateSlug) {
      onNavigateSlug(slug);
    } else {
      window.location.href = `/${slug}`;
    }
  };

  const handlePartnerInquiry = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    trackConversion('whatsapp_click', { partner: name });
    const msg = isArabic 
      ? `مرحباً إكسبيديا، أود تأسيس شركتي في *${name}*. أرجو تزويدي بالأنشطة المتاحة وعرض الأسعار.`
      : `Hello Expedia, I want to establish my entity in *${name}*. Please send me the activity list and promotional package.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  const handleTechInquiry = (techName: string) => {
    trackConversion('whatsapp_click', { tech: techName });
    const msg = isArabic 
      ? `مرحباً إكسبيديا الرقمية، أود استشارة خبرائكم التقنيين بخصوص تطبيق معايير *${techName}* في مشروعي.`
      : `Hello Expedia Digital, I would like to consult your engineers regarding *${techName}* integration for my project.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const headerBadge = mode === 'corporate' 
    ? tCorp.badge 
    : (isArabic ? 'البنية التحتية والهندسة البرمجية' : 'Enterprise Technology & Cloud Stack');
  
  const headerTitle = mode === 'corporate'
    ? tCorp.title
    : (isArabic ? 'ركائز الهندسة الرقمية' : 'The 4 Core Pillars of');
  
  const headerTitleHighlight = mode === 'corporate'
    ? tCorp.titleHighlight
    : (isArabic ? 'لمنصتك السيادية' : 'Our Sovereign Tech Stack');
  
  const headerSubtitle = mode === 'corporate'
    ? tCorp.subtitle
    : (isArabic ? 'تقنيات حديثة تضمن سرعة التحميل الفائقة، وأعلى مستويات الأمان، وتكامل الذكاء الاصطناعي.' : 'Engineered with Next.js 15, PostgreSQL isolation, Cloudflare edge latency, and autonomous WhatsApp lead agents.');

  return (
    <section className={`py-20 relative bg-obsidian-950/70 border-t border-white/5 overflow-hidden ${isArabic ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
              <Award className={`w-3.5 h-3.5 ${mode === 'corporate' ? 'text-goldMuted' : 'text-cyan-400'}`} />
              <span>{headerBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {headerTitle} <br className="hidden sm:inline" />
              <span className={mode === 'corporate' ? 'text-gradient-emerald' : 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400'}>
                {headerTitleHighlight}
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto">
              {headerSubtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Cards Grid: Corporate Partners vs Digital Tech Pillars */}
        {mode === 'corporate' ? (
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
                  className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between group cursor-pointer"
                >
                  <div onClick={() => handlePartnerClick(partner)}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                        {city}
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        {isArabic ? 'تبدأ من ' : 'From '} {startingPrice}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                      <span>{name}</span>
                      <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
                    </h3>
                    <div className="text-[11px] text-goldMuted font-medium mb-3">
                      {badge}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {desc}
                    </p>

                    <div className="p-2.5 rounded-xl bg-obsidian-950/60 border border-white/5 text-[10px] text-slate-400 mb-5">
                      <span className="font-semibold text-slate-200 block mb-0.5">{isArabic ? 'الأنسب لـ:' : 'Ideal for:'}</span>
                      {popularFor}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
                    <button
                      onClick={() => handlePartnerClick(partner)}
                      className="w-full py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold text-xs flex items-center justify-center space-x-1.5 rtl:space-x-reverse shadow-md shadow-emerald-500/20 transition-all duration-200"
                    >
                      <span>{isArabic ? 'تفاصيل التأسيس والتكاليف' : 'View Setup Details & Costs'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                    
                    <button
                      onClick={(e) => handlePartnerInquiry(e, name)}
                      className="w-full py-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-[11px] text-center border border-white/10 transition-colors"
                    >
                      {isArabic ? 'استفسار واتساب سريع' : 'Quick WhatsApp Inquire'}
                    </button>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {DIGITAL_TECH_STACK.map((tech) => {
              const name = isArabic ? tech.nameAr : tech.name;
              const desc = isArabic ? tech.descAr : tech.desc;
              const badge = isArabic ? tech.badgeAr : tech.badge;
              const popularFor = isArabic ? tech.popularForAr : tech.popularFor;

              return (
                <TiltCard
                  key={tech.id}
                  maxTilt={6}
                  glowColor="rgba(6, 182, 212, 0.15)"
                  className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between group cursor-pointer border-cyan-500/20 hover:border-cyan-500/50"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-300">
                        {tech.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      <span>{name}</span>
                      <ArrowIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
                    </h3>
                    <div className="text-[11px] text-indigo-400 font-medium mb-3">
                      {tech.highlight}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {desc}
                    </p>

                    <div className="p-2.5 rounded-xl bg-obsidian-950/60 border border-white/5 text-[10px] text-slate-400 mb-5">
                      <span className="font-semibold text-slate-200 block mb-0.5">{isArabic ? 'الاستخدام في النظام:' : 'System Implementation:'}</span>
                      {popularFor}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
                    <button
                      onClick={() => handleTechInquiry(name)}
                      className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-obsidian-950 font-bold text-xs flex items-center justify-center space-x-1.5 rtl:space-x-reverse shadow-md shadow-cyan-500/20 transition-all duration-200"
                    >
                      <span>{isArabic ? 'طلب استشارة معمارية' : 'Consult System Architect'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        )}

        {/* Marquee Footprint: Government Authorities (Corporate) vs Tech Frameworks (Digital) */}
        <ScrollReveal>
          <div className="p-6 sm:p-8 rounded-3xl bg-obsidian-900/60 border border-white/5 backdrop-blur-md">
            <div className="text-center mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                {mode === 'corporate'
                  ? (isArabic ? 'تكامل حكومي معتمد ومباشر عبر 7 دوائر رسمية' : 'Direct Official API Integration Across 7 UAE Authorities')
                  : (isArabic ? 'أطر العمل البرمجية المعتمدة في منصات إكسبيديا' : 'Core Sovereign Engineering Frameworks & Protocol Integrations')}
              </span>
            </div>

            {mode === 'corporate' ? (
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {UAE_AUTHORITIES.map((auth, idx) => (
                  <div 
                    key={idx}
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 transition-all text-center"
                  >
                    <span className="font-mono font-bold text-xs text-emerald-400">{auth.name}</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">{isArabic ? auth.badgeAr : auth.badge}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {DIGITAL_FRAMEWORKS.map((fw) => (
                  <div 
                    key={fw.name}
                    className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/10 transition-all text-xs text-slate-300 hover:text-white"
                  >
                    <span className="font-mono font-bold text-cyan-400">{fw.name}</span>
                    <span className="text-slate-400">|</span>
                    <span className="text-[11px] font-medium text-slate-300">{isArabic ? fw.roleAr : fw.role}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

