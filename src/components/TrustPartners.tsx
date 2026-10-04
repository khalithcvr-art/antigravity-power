import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { CHANNEL_PARTNERS, UAE_AUTHORITIES } from '../data/siteData';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';
import { InteractiveCard, ScrollReveal } from './motion/MotionPrimitives';
import { SectionHeader } from './SectionHeader';
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
      // Offered to clients. This marketing site itself runs on Vite 6 + React 18.
      name: 'Next.js & React Development',
      nameAr: 'تطوير بـ Next.js و React',
      category: isArabic ? 'الأداء الفائق' : 'Performance Tier',
      badge: 'Server Components',
      badgeAr: 'مكونات خادم',
      desc: 'Modern Server Components, smooth Framer Motion interactions, and crawlable markup. Real-world speed and search results are measured per project.',
      descAr: 'مكونات خادم حديثة، وتأثيرات حركية سلسة، ومحتوى قابل للفهرسة. تُقاس السرعة الفعلية ونتائج البحث لكل مشروع.',
      highlight: isArabic ? 'نشر على شبكة الحافة' : 'Edge-Deployed Rendering',
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
      badge: 'GCC Edge Nodes',
      badgeAr: 'عقد حافة في الخليج',
      desc: 'Cloud deployment across UAE & GCC edge nodes with automated SSL encryption, DDoS mitigation, and monitored availability.',
      descAr: 'استضافة سحابية موزعة على عقد في الإمارات ودول الخليج مع تشفير SSL وحماية من هجمات الحرمان من الخدمة ومراقبة الجاهزية.',
      highlight: isArabic ? 'استضافة مراقَبة' : 'Monitored Availability',
      popularFor: isArabic ? 'المواقع ذات الزيارات العالية والأمان' : 'High-Traffic Sovereign Infrastructure',
      popularForAr: 'المواقع ذات الزيارات العالية والأمان',
      color: 'purple'
    }
  ];

  const DIGITAL_FRAMEWORKS = [
    { name: 'TypeScript', nameAr: 'تايب سكريبت', role: 'Type-Safe Architecture', roleAr: 'هندسة آمنة برمجياً' },
    { name: 'Tailwind CSS v4', nameAr: 'تيلويند سي إس إس 4', role: 'Design Tokens', roleAr: 'أنظمة التصميم الحديثة' },
    { name: 'Stripe & Network Intl', nameAr: 'بوابات الدفع الإماراتية', role: 'UAE Payment Gateways', roleAr: 'معالجة المدفوعات' },
    { name: 'Schema.org JSON-LD', nameAr: 'مخططات السكيما المنظمة', role: 'Structured Data', roleAr: 'بيانات منظمة للمحتوى' },
    { name: 'Framer Motion', nameAr: 'فريمير موشن', role: 'Micro-Animations', roleAr: 'مؤثرات بصرية دقيقة' },
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
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const handleTechInquiry = (techName: string) => {
    trackConversion('whatsapp_click', { tech: techName });
    const msg = isArabic
      ? `مرحباً إكسبيديا الرقمية، أود استشارة خبرائكم التقنيين بخصوص تطبيق معايير *${techName}* في مشروعي.`
      : `Hello Expedia Digital, I would like to consult your engineers regarding *${techName}* integration for my project.`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const headerBadge = mode === 'corporate'
    ? tCorp.badge
    : (isArabic ? 'البنية التحتية والهندسة البرمجية' : 'Enterprise Technology & Cloud Stack');

  const headerTitle = mode === 'corporate'
    ? tCorp.title
    : (isArabic ? 'ركائز الهندسة الرقمية' : 'The 4 Core Pillars of');  // client delivery stack

  const headerTitleHighlight = mode === 'corporate'
    ? tCorp.titleHighlight
    : (isArabic ? 'لمنصتك السيادية' : 'Our Client Delivery Stack');

  const headerSubtitle = mode === 'corporate'
    ? tCorp.subtitle
    : (isArabic ? 'نبني منصات عملائنا بتقنيات حديثة مع عزل للبيانات، واستضافة على شبكة الحافة، وأتمتة للواتساب.' : 'We build client platforms with modern React frameworks, PostgreSQL data isolation, edge hosting, and WhatsApp lead automation.');

  return (
    <section className="section border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeader
          eyebrow={headerBadge}
          title={<>{headerTitle} {headerTitleHighlight}</>}
          subtitle={headerSubtitle}
        />

        {mode === 'corporate' ? (
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CHANNEL_PARTNERS.slice(0, 4).map((partner) => {
              const name = isArabic && partner.nameAr ? partner.nameAr : partner.name;
              const city = isArabic && partner.cityAr ? partner.cityAr : partner.city;
              const badge = isArabic && partner.badgeAr ? partner.badgeAr : partner.badge;
              const desc = isArabic && partner.descAr ? partner.descAr : partner.desc;
              const startingPrice = isArabic && partner.startingPriceAr ? partner.startingPriceAr : partner.startingPrice;
              const popularFor = isArabic && partner.popularForAr ? partner.popularForAr : partner.popularFor;

              return (
                <InteractiveCard key={partner.id} className="group flex flex-col p-6">
                  <div className="flex-1 cursor-pointer" onClick={() => handlePartnerClick(partner)}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="chip">{city}</span>
                      <span className="text-sm font-semibold text-emerald-400">{startingPrice}</span>
                    </div>

                    <h3 className="mt-5 flex items-start justify-between gap-3 text-xl font-bold leading-snug text-white">
                      <span>{name}</span>
                      <ArrowIcon
                        className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition-all group-hover:text-emerald-400 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                        aria-hidden="true"
                      />
                    </h3>
                    <div className="mt-1 text-sm font-semibold text-gold-300">{badge}</div>

                    <p className="mt-3 text-sm leading-6 text-slate-300">{desc}</p>

                    <div className="note mb-6 mt-5 text-slate-400">
                      <span className="note-label">{isArabic ? 'الأنسب لـ:' : 'Ideal for:'}</span>
                      {popularFor}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                    <button type="button" onClick={() => handlePartnerClick(partner)} className="btn btn-primary btn-sm">
                      <span>{isArabic ? 'تفاصيل التأسيس والتكاليف' : 'View Setup Details & Costs'}</span>
                      <ArrowIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                    <button type="button" onClick={(e) => handlePartnerInquiry(e, name)} className="btn btn-secondary btn-sm">
                      {isArabic ? 'استفسار واتساب سريع' : 'Quick WhatsApp Inquire'}
                    </button>
                  </div>
                </InteractiveCard>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {DIGITAL_TECH_STACK.map((tech) => {
              const name = isArabic ? tech.nameAr : tech.name;
              const desc = isArabic ? tech.descAr : tech.desc;
              const badge = isArabic ? tech.badgeAr : tech.badge;
              const popularFor = isArabic ? tech.popularForAr : tech.popularFor;

              return (
                <InteractiveCard key={tech.id} glow className="group flex flex-col p-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="chip chip-accent">{tech.category}</span>
                      <span className="text-sm font-semibold text-cyan-400">{badge}</span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold leading-snug text-white">{name}</h3>
                    <div className="mt-1 text-sm font-semibold text-gold-300">{tech.highlight}</div>

                    <p className="mt-3 text-sm leading-6 text-slate-300">{desc}</p>

                    <div className="note mb-6 mt-5 text-slate-400">
                      <span className="note-label">{isArabic ? 'الاستخدام في النظام:' : 'System Implementation:'}</span>
                      {popularFor}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <button type="button" onClick={() => handleTechInquiry(name)} className="btn btn-primary btn-sm w-full">
                      <span>{isArabic ? 'طلب استشارة معمارية' : 'Consult System Architect'}</span>
                      <ArrowIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </InteractiveCard>
              );
            })}
          </div>
        )}

        {/* Authorities (corporate) or frameworks (digital) */}
        <ScrollReveal className="mt-14">
          <div>
            <h3 className="text-base font-semibold text-slate-300">
              {mode === 'corporate'
                ? (isArabic ? 'ننسّق معاملات عملائنا مع 7 جهات حكومية إماراتية' : 'Applications Coordinated Across 7 UAE Government Authorities')
                : (isArabic ? 'أطر العمل البرمجية المعتمدة في منصات إكسبيديا' : 'Core Sovereign Engineering Frameworks & Protocol Integrations')}
            </h3>

            {mode === 'corporate' ? (
              <ul className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/10 sm:grid-cols-4">
                {UAE_AUTHORITIES.map((auth, idx) => (
                  <li key={idx} className="bg-obsidian-950 px-4 py-4">
                    <span className="block text-base font-bold text-gold-300">{auth.name}</span>
                    <span className="mt-0.5 block text-sm text-slate-400">{isArabic ? auth.badgeAr : auth.badge}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-5 flex flex-wrap gap-3">
                {DIGITAL_FRAMEWORKS.map((fw) => (
                  <li
                    key={fw.name}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm transition-colors hover:border-cyan-500/40"
                  >
                    <span className="font-mono font-semibold text-cyan-400">{fw.name}</span>
                    <span className="text-slate-500" aria-hidden="true">/</span>
                    <span className="text-slate-300">{isArabic ? fw.roleAr : fw.role}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
