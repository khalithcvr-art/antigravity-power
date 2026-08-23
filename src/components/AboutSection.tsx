import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  FileCheck2, 
  Lock, 
  Cpu, 
  Zap,
  Globe2,
  Users2,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';
import { ScrollReveal, BorderBeam, AnimatedCounter } from './motion/MotionPrimitives';
import { DualEngineMode } from '../types';

interface AboutSectionProps {
  mode?: DualEngineMode;
  isArabic?: boolean;
  onOpenEstimator?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  mode = 'corporate',
  isArabic = false,
  onOpenEstimator
}) => {
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const handleConsultWhatsApp = () => {
    trackConversion('whatsapp_click', { source: 'about_section_cta' });
    const msg = isArabic
      ? "مرحباً إكسبيديا، أود التعرف أكثر على خدماتكم المؤسسية واستشارة فريقكم المعتمد في أبوظبي."
      : "Hello Expedia, I would like to learn more about your authorized corporate services and consult your licensed Abu Dhabi team.";
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  const TRUST_PILLARS = [
    {
      id: 'pillar-1',
      icon: ShieldCheck,
      color: 'emerald',
      title: isArabic ? 'ترخيص رسمي معتمد من حكومة أبوظبي' : 'Government-Licensed Legal Entity',
      subtitle: isArabic ? 'رخصة تجارية رقم CN-6307408' : 'ADDED License No. CN-6307408',
      desc: isArabic
        ? 'شركة مسجلة ومعتمدة رسمياً من دائرة التنمية الاقتصادية في أبوظبي (ADDED)، ومربوطة إلكترونياً بمنظومة "تم" الحكومية لتنفيذ كافة المعاملات دون وسطاء.'
        : 'Officially registered and authorized by the Abu Dhabi Department of Economic Development (ADDED), integrated directly with the TAMM government ecosystem.',
      badges: ['ADDED Abu Dhabi', 'TAMM Direct API', 'DED Dubai']
    },
    {
      id: 'pillar-2',
      icon: Award,
      color: 'cyan',
      title: isArabic ? 'شريك قنوات معتمد لـ 4 مناطق حرة كبرى' : '4 Tier-1 Free Zone Channel Partnerships',
      subtitle: isArabic ? 'ميدان، مدينة مصدر، إيفزا، عجمان' : 'Meydan, Masdar City, IFZA & Ajman',
      desc: isArabic
        ? 'وكيل قنوات رسمي معتمد يتيح لك الوصول المباشر إلى أفضل باقات تأسيس الشركات والمكاتب الافتراضية مع إعفاءات ضريبية مؤهلة بنسبة 0% وتأشيرات سريعة.'
        : 'Official authorized channel partner providing fast-track trade licensing, premium flexi-desk quotas, and 0% qualifying corporate tax structuring.',
      badges: ['Meydan Free Zone', 'Masdar City Free Zone', 'IFZA Dubai', 'Ajman Free Zone']
    },
    {
      id: 'pillar-3',
      icon: FileCheck2,
      color: 'indigo',
      title: isArabic ? '12+ عاماً من الخبرة التنظيمية في الإمارات' : '12+ Years Regulatory Track Record',
      subtitle: isArabic ? 'أكثر من 500 شركة ناجحة' : '500+ Companies Launched',
      desc: isArabic
        ? 'سجل حافل بالنجاح في تأسيس أكثر من 500 شركة وإصدار 1,200+ تأشيرة مستثمر وموظف بنسبة موافقة أولية 99.4% وشفافية كاملة دون أي رسوم خفية.'
        : 'Over 500 commercial entities incorporated and 1,200+ investor/employee visas processed with a 99.4% first-time approval rate and zero hidden surcharges.',
      badges: ['99.4% Approval', '1,200+ Visas', 'Zero Hidden Fees']
    },
    {
      id: 'pillar-4',
      icon: Cpu,
      color: 'teal',
      title: isArabic ? 'المحرك المزدوج: تأسيس قانوني + هندسة برمجية' : 'Sovereign Dual-Engine Architecture',
      subtitle: isArabic ? 'منظومة شاملة للنمو الرقمي' : 'Legal Compliance + Bespoke Next.js Tech',
      desc: isArabic
        ? 'الجهة الوحيدة في أبوظبي التي تجمع بين استخراج الرخص التجارية وفتح الحسابات البنكية، وتطوير مواقع وتطبيقات Next.js فائقة السرعة مع أتمتة روبوتات الواتساب.'
        : 'The UAE’s only hybrid corporate house combining statutory trade licensing with bespoke Next.js web engineering, autonomous CRM workflows, and WhatsApp AI bots.',
      badges: ['Next.js 15 Full-Stack', 'WhatsApp Cloud API', '100% Code Handover']
    }
  ];

  const STATS_DATA = [
    {
      value: 12,
      suffix: '+',
      label: isArabic ? 'سنوات من الخبرة التنظيمية' : 'Years UAE Regulatory Mastery',
      sub: isArabic ? 'في بر أبوظبي والمناطق الحرة' : 'Abu Dhabi & Dubai Mainland / Freezone'
    },
    {
      value: 500,
      suffix: '+',
      label: isArabic ? 'شركة تم تأسيسها بنجاح' : 'Corporate Entities Launched',
      sub: isArabic ? 'رخص تجارية نشطة ومرخصة' : 'Active Commercial Trade Licenses'
    },
    {
      value: 99.4,
      suffix: '%',
      label: isArabic ? 'نسبة الموافقة من المرة الأولى' : 'First-Time Filing Approval Rate',
      sub: isArabic ? 'مطابقة كاملة لضوابط الوزارات' : 'Zero Rejection Standard'
    },
    {
      value: 100,
      suffix: '%',
      label: isArabic ? 'ملكية أجنبية وشفافية كاملة' : 'Foreign Ownership & Code IP',
      sub: isArabic ? 'للمستثمرين والمنصات الرقمية' : 'Zero Intermediary Markups'
    }
  ];

  return (
    <section id="about" className={`py-24 relative bg-obsidian-950 border-t border-white/5 overflow-hidden ${isArabic ? 'font-arabic' : ''}`}>
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow & Header */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 mb-4 shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {isArabic 
                  ? 'الملف التعريفي والسيادي للشركة · رخصة تجارية CN-6307408' 
                  : 'Official Sovereign Entity Dossier · Trade License CN-6307408'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              {isArabic ? (
                <>
                  القوة الاستراتيجية المعتمدة خلف <br className="hidden sm:inline" />
                  <span className="text-gradient-emerald">أكثر من 500 قصة نجاح استثمارية في الإمارات</span>
                </>
              ) : (
                <>
                  The Strategic Advisory Force Behind <br className="hidden sm:inline" />
                  <span className="text-gradient-emerald">500+ UAE Commercial Success Stories</span>
                </>
              )}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
              {isArabic ? (
                <>
                  شركة <strong className="text-white">إكسبيديا لخدمات الأعمال ش.ذ.م.م</strong> (Expedia Business and Services L.L.C) هي بيت خبرة ومستشار تنظيمي مرخص من <strong className="text-emerald-400">دائرة التنمية الاقتصادية في أبوظبي</strong>، ومقرها الرئيسي في <strong className="text-white">هايبو، الطابق الأول، أبوظبي مول</strong>. نجمع بين التمثيل الحكومي السيادي والتكنولوجيا الرقمية المتقدمة لتمكين المستثمرين من إطلاق وتوسيع أعمالهم بثقة مطلقة.
                </>
              ) : (
                <>
                  <strong className="text-white">Expedia Business and Services L.L.C</strong> is a licensed regulatory consultancy accredited by the <strong className="text-emerald-400">Abu Dhabi Department of Economic Development (ADDED)</strong>, headquartered at <strong className="text-white">Haibu, Level 1, Abu Dhabi Mall</strong>. We unite statutory legal governance with enterprise full-stack software engineering to accelerate commercial growth across the UAE.
                </>
              )}
            </p>
          </div>
        </ScrollReveal>

        {/* Live Statistics Counter Dashboard */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {STATS_DATA.map((stat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-obsidian-900/80 border border-white/10 glass-panel relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  <AnimatedCounter value={stat.value} />
                  <span className="text-emerald-400">{stat.suffix}</span>
                </div>
                <div className="font-display font-bold text-xs sm:text-sm text-slate-200">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-1">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {TRUST_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.id}>
                <div className="h-full p-8 rounded-3xl bg-obsidian-900/60 border border-white/10 glass-panel hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between space-y-6 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-obsidian-950 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        {pillar.subtitle}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {pillar.badges.map((badge, bIdx) => (
                      <span 
                        key={bIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-emerald-300/90"
                      >
                        ✓ {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Physical Office & Direct Governance Card */}
        <ScrollReveal>
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-obsidian-900 via-obsidian-950 to-obsidian-900 border border-white/15 shadow-2xl relative overflow-hidden">
            <BorderBeam size={240} duration={10} colorFrom="#10b981" colorTo="#06b6d4" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-emerald-400 text-xs font-mono uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>{isArabic ? 'المقر الرئيسي والموقع الجغرافي' : 'Headquarters & GEO Presence'}</span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {isArabic 
                    ? 'تفضل بزيارة مقرنا الرئيسي في قلب العاصمة أبوظبي' 
                    : 'Visit Our Executive Office in Central Abu Dhabi'}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isArabic ? (
                    <>
                      يقع مكتبنا في <strong>هايبو، الطابق الأول، أبوظبي مول، النادي السياحي، أبوظبي</strong>. نوفر لعملائنا غرف اجتماعات مجهزة بأعلى المعايير، ومستشارين قانونيين متخصصين، ومتابعة فورية ومباشرة لملفات الرخص والتأشيرات عبر بوابة تم الحكومية.
                    </>
                  ) : (
                    <>
                      Located at <strong>Haibu, Level 1, Abu Dhabi Mall, Al Zahiya, Abu Dhabi</strong>. We provide executive meeting spaces, certified PRO legal specialists, and real-time statutory tracking directly via the TAMM governmental network.
                    </>
                  )}
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>ADDED License: <strong>CN-6307408</strong></span>
                  </div>
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>Hotline: <strong>+971 58 5858 816</strong></span>
                  </div>
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span>Email: <strong>info@expediaservices.ae</strong></span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleConsultWhatsApp}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-display font-bold text-xs flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <span>{isArabic ? 'حجز جلسة استشارية حضورية' : 'Book Office Consultation'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </motion.button>

                {onOpenEstimator && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onOpenEstimator}
                    className="w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-display font-bold text-xs flex items-center justify-center space-x-2 rtl:space-x-reverse border border-white/10 transition-colors"
                  >
                    <span>{isArabic ? 'حساب تكلفة التأسيس فورياً' : 'Calculate Formation Cost'}</span>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
