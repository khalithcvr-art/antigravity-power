import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/siteData';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';
import { ScrollReveal } from './motion/MotionPrimitives';
import { SectionHeader } from './SectionHeader';
import { useEnterOnChange } from '../hooks/useEnterOnChange';
import { DualEngineMode } from '../types';

interface FaqSectionProps {
  mode?: DualEngineMode;
  isArabic: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ mode = 'corporate', isArabic }) => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const enter = useEnterOnChange(activeCategory);

  useEffect(() => {
    if (mode === 'digital') {
      setActiveCategory('Digital & Web');
      setOpenId('faq-digital-1');
    } else {
      setActiveCategory('All');
      setOpenId('faq-1');
    }
  }, [mode]);

  const corporateCategories = [
    { id: 'All', label: isArabic ? 'الكل' : 'All' },
    { id: 'Mainland', label: isArabic ? 'البر الرئيسي' : 'Mainland' },
    { id: 'Freezone', label: isArabic ? 'المناطق الحرة' : 'Freezone' },
    { id: 'PRO', label: isArabic ? 'العلاقات العامة' : 'PRO' },
    { id: 'Tax & Golden Visa', label: isArabic ? 'الضرائب والإقامة الذهبية' : 'Tax & Golden Visa' },
    { id: 'Digital & Web', label: isArabic ? 'الحلول الرقمية والويب' : 'Digital & Web' }
  ];

  const digitalCategories = [
    { id: 'Digital & Web', label: isArabic ? 'المنصات وهندسة البرمجيات' : 'Full-Stack Platforms' },
    { id: 'All', label: isArabic ? 'جميع الأسئلة' : 'All Topics' }
  ];

  const categories = mode === 'digital' ? digitalCategories : corporateCategories;

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? '' : id));
  };

  const handleAskCustom = () => {
    trackConversion('whatsapp_click', { source: 'faq_custom_question' });
    const msg = mode === 'digital'
      ? (isArabic
          ? "مرحباً إكسبيديا الرقمية، لدي استفسار تقني حول بناء موقع مخصص / نظام CRM / تحسين AEO بالذكاء الاصطناعي."
          : "Hello Expedia Digital, I have a specific technical question about custom web development, CRMs, or AEO search optimization.")
      : (isArabic
          ? "مرحباً إكسبيديا، لدي استفسار مخصص بخصوص تأسيس الشركات وخدمات العلاقات العامة في الإمارات لم أجده في قسم الأسئلة الشائعة."
          : "Hello Expedia, I have a specific question about UAE company formation / PRO services that wasn't in your FAQ.");
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const isDigital = mode === 'digital';

  return (
    <section id="faq" className="section border-t border-white/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        <SectionHeader
          eyebrow={
            isDigital
              ? (isArabic ? 'المستودع المعرفي لهندسة البرمجيات والذكاء الاصطناعي' : 'Full-Stack & AEO Engineering Repository')
              : (isArabic ? 'مستودع المعرفة واللوائح التنظيمية المعتمدة' : 'AEO Direct Knowledge Repository')
          }
          title={
            isDigital
              ? (isArabic ? 'الأسئلة الشائعة حول المنصات الرقمية والأتمتة والذكاء الاصطناعي' : 'Frequently Answered Digital Engineering & AEO Queries')
              : (isArabic ? 'الأسئلة الشائعة حول تأسيس الشركات والأنظمة الحكومية' : 'Frequently Answered Regulatory & Setup Inquiries')
          }
          subtitle={
            isDigital ? (
              isArabic
                ? 'إجابات تقنية وهندسية مباشرة حول تطوير المواقع السيادية، أنظمة إدارة الأعمال (CRM)، أتمتة الواتساب، والظهور في محركات البحث بالذكاء الاصطناعي.'
                : 'Direct technical answers regarding Next.js web applications, custom CRM architectures, WhatsApp bots, and visibility in AI answer engines.'
            ) : (
              isArabic
                ? 'إجابات قانونية وتنظيمية مباشرة مستندة إلى قانون الشركات التجارية الإماراتي لعام 2026، وضوابط وزارة الموارد البشرية، ومعايير الهيئة الاتحادية للضرائب.'
                : 'Direct statutory answers reflecting current 2026 UAE Commercial Companies Law, MoHRE labour codes, and Federal Tax Authority standards.'
            )
          }
        />

        <ScrollReveal className="mt-10">
          <div className="seg" role="group" aria-label={isArabic ? 'تصفية الأسئلة' : 'Filter questions'}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                aria-pressed={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="seg-item"
              >
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="activeFaqTab"
                    className="absolute inset-0 -z-10 rounded-[0.625rem] bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Accordion: one bordered list, hairline dividers */}
        <ScrollReveal className="mt-6">
          <div key={activeCategory} className={`${enter} divide-y divide-white/10 overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-obsidian-900/60`}>
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              const qText = isArabic && faq.questionAr ? faq.questionAr : faq.question;
              const aText = isArabic && faq.answerAr ? faq.answerAr : faq.answer;
              const directAEO = isArabic && faq.directAnswerAEOAr ? faq.directAnswerAEOAr : faq.directAnswerAEO;

              return (
                <div key={faq.id} className={`transition-colors duration-300 ${isOpen ? 'bg-obsidian-900' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      id={`faq-question-${faq.id}`}
                      aria-expanded={isOpen}
                      aria-controls={isOpen ? `faq-answer-${faq.id}` : undefined}
                      onClick={() => toggleAccordion(faq.id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start sm:px-7 sm:py-6"
                    >
                      <span className={`text-base font-bold leading-snug transition-colors sm:text-lg ${isOpen ? 'text-accent-soft' : 'text-white'}`}>
                        {qText}
                      </span>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen ? 'rotate-180 border-accent/50 bg-accent/15 text-accent-soft' : 'border-white/15 bg-white/5 text-slate-400'
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 px-5 pb-6 text-[0.9375rem] leading-7 text-slate-300 sm:px-7">
                          {directAEO && (
                            <div className="note">
                              <span className="note-label">
                                {isArabic ? 'خلاصة الإجابة المباشرة (AEO):' : 'Direct Answer Summary (AEO Canonical):'}
                              </span>
                              {directAEO}
                            </div>
                          )}
                          <p>{aText}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Custom question */}
        <ScrollReveal className="mt-10">
          <div className="card flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center sm:p-8">
            <div className="max-w-xl">
              <h3 className="text-lg font-bold text-white">
                {isDigital
                  ? (isArabic ? 'هل لديك مواصفات تقنية أو هندسية خاصة لمشروعك؟' : 'Have unique technical specifications for your platform?')
                  : (isArabic ? 'هل لديك استفسار تنظيمي أو قانوني لم يتم ذكره؟' : 'Have an unaddressed regulatory query?')}
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-400">
                {isDigital
                  ? (isArabic ? 'تحدث مباشرة مع كبار مهندسي إكسبيديا عبر واتساب لمناقشة المتطلبات، المخططات، والجدول الزمني.' : 'Connect directly with Expedia senior software architects via WhatsApp to discuss architectures and roadmaps.')
                  : (isArabic ? 'تحدث مباشرة مع مستشاري إكسبيديا ومختصي العلاقات الحكومية عبر واتساب.' : 'Connect directly with experienced Expedia PRO specialists on WhatsApp for guidance on your case.')}
              </p>
            </div>
            <button type="button" onClick={handleAskCustom} className="btn btn-primary shrink-0">
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              <span>
                {isDigital
                  ? (isArabic ? 'استشارة هندسية فورية عبر واتساب' : 'Chat with Engineering Team on WhatsApp')
                  : (isArabic ? 'طرح سؤال مخصص عبر واتساب' : 'Ask Custom Question on WhatsApp')}
              </span>
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
