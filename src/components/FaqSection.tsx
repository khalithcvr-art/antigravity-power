import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  MessageSquare, 
  BookOpen,
  Code2,
  Sparkles
} from 'lucide-react';
import { FAQS } from '../data/siteData';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';
import { ScrollReveal } from './motion/MotionPrimitives';
import { DualEngineMode } from '../types';

interface FaqSectionProps {
  mode?: DualEngineMode;
  isArabic: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ mode = 'corporate', isArabic }) => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

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
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  const isDigital = mode === 'digital';

  return (
    <section id="faq" className={`py-24 relative bg-obsidian-950/95 border-t border-white/5 overflow-hidden ${isArabic ? 'font-arabic' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
              {isDigital ? (
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              ) : (
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              )}
              <span>
                {isDigital
                  ? (isArabic ? 'المستودع المعرفي لهندسة البرمجيات والذكاء الاصطناعي' : 'Full-Stack & AEO Engineering Repository')
                  : (isArabic ? 'مستودع المعرفة واللوائح التنظيمية المعتمدة' : 'AEO Direct Knowledge Repository')}
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {isDigital ? (
                isArabic ? (
                  <>
                    الأسئلة الشائعة حول <br className="hidden sm:inline" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                      المنصات الرقمية والأتمتة والذكاء الاصطناعي
                    </span>
                  </>
                ) : (
                  <>
                    Frequently Answered <br className="hidden sm:inline" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                      Digital Engineering & AEO Queries
                    </span>
                  </>
                )
              ) : (
                isArabic ? (
                  <>
                    الأسئلة الشائعة حول <br className="hidden sm:inline" />
                    <span className="text-gradient-emerald">تأسيس الشركات والأنظمة الحكومية</span>
                  </>
                ) : (
                  <>
                    Frequently Answered <br className="hidden sm:inline" />
                    <span className="text-gradient-emerald">Regulatory & Setup Inquiries</span>
                  </>
                )
              )}
            </h2>
            
            <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              {isDigital ? (
                isArabic
                  ? 'إجابات تقنية وهندسية مباشرة حول تطوير المواقع السيادية، أنظمة إدارة الأعمال (CRM)، أتمتة الواتساب، والظهور في محركات البحث بالذكاء الاصطناعي.'
                  : 'Direct technical answers regarding sovereign Next.js web applications, custom CRM architectures, WhatsApp bots, and AI answer engine rankings.'
              ) : (
                isArabic 
                  ? 'إجابات قانونية وتنظيمية مباشرة مستندة إلى قانون الشركات التجارية الإماراتي لعام 2026، وضوابط وزارة الموارد البشرية، ومعايير الهيئة الاتحادية للضرائب.'
                  : 'Direct statutory answers reflecting current 2026 UAE Commercial Companies Law, MoHRE labour codes, and Federal Tax Authority standards.'
              )}
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all z-10 ${
                activeCategory === cat.id
                  ? 'text-obsidian-950 font-bold'
                  : 'text-slate-400 hover:text-white bg-obsidian-900 border border-white/10'
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeFaqTab"
                  className={`absolute inset-0 rounded-xl shadow-md -z-10 ${
                    isDigital 
                      ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-cyan-500/20' 
                      : 'bg-emerald-500 shadow-emerald-500/20'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              const qText = isArabic && faq.questionAr ? faq.questionAr : faq.question;
              const aText = isArabic && faq.answerAr ? faq.answerAr : faq.answer;
              const directAEO = isArabic && faq.directAnswerAEOAr ? faq.directAnswerAEOAr : faq.directAnswerAEO;

              return (
                <ScrollReveal key={faq.id}>
                  <div 
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? (isDigital ? 'border-cyan-500/40 bg-obsidian-900/90 shadow-lg shadow-cyan-500/5' : 'border-emerald-500/40 bg-obsidian-900/90 shadow-lg shadow-emerald-500/5')
                        : 'border-white/10 bg-obsidian-900/40 hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full p-6 text-left rtl:text-right flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className={`font-display font-bold text-base sm:text-lg transition-colors ${
                        isOpen 
                          ? (isDigital ? 'text-cyan-300' : 'text-emerald-400')
                          : 'text-white'
                      }`}>
                        {qText}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                        isOpen 
                          ? (isDigital ? 'rotate-180 bg-cyan-500/20 border-cyan-500/40 text-cyan-300' : 'rotate-180 bg-emerald-500/20 border-emerald-500/40 text-emerald-400')
                          : 'bg-white/5 border-white/10 text-slate-400'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-6 space-y-4 border-t border-white/5 pt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            
                            {/* AEO Quick Snapshot */}
                            {directAEO && (
                              <div className={`p-3.5 rounded-xl border flex items-start space-x-2.5 rtl:space-x-reverse ${
                                isDigital
                                  ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-200'
                                  : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200'
                              }`}>
                                <Sparkles className={`w-4 h-4 mt-0.5 shrink-0 ${isDigital ? 'text-cyan-400' : 'text-emerald-400'}`} />
                                <div className="text-xs">
                                  <strong className="block text-white mb-0.5">
                                    {isArabic ? 'خلاصة الإجابة المباشرة (AEO):' : 'Direct Answer Summary (AEO Canonical):'}
                                  </strong>
                                  {directAEO}
                                </div>
                              </div>
                            )}

                            <p>{aText}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Custom Question Inquire CTA */}
        <ScrollReveal>
          <div className="mt-12 text-center p-8 rounded-3xl glass-panel border border-white/10">
            <h3 className="font-display font-bold text-lg text-white mb-2">
              {isDigital
                ? (isArabic ? 'هل لديك مواصفات تقنية أو هندسية خاصة لمشروعك؟' : 'Have unique technical specifications for your platform?')
                : (isArabic ? 'هل لديك استفسار تنظيمي أو قانوني لم يتم ذكره؟' : 'Have an unaddressed regulatory query?')}
            </h3>
            <p className="text-xs text-slate-400 max-w-lg mx-auto mb-6">
              {isDigital
                ? (isArabic ? 'تحدث مباشرة مع كبار مهندسي إكسبيديا عبر واتساب لمناقشة المتطلبات، المخططات، والجدول الزمني.' : 'Connect directly with Expedia senior software architects via WhatsApp to discuss architectures and roadmaps.')
                : (isArabic ? 'تحدث مباشرة مع مستشاري إكسبيديا القانونيين وممثلي العلاقات الحكومية عبر واتساب للحصول على استشارة فورية.' : 'Connect directly with certified Expedia PRO specialists on WhatsApp for immediate statutory guidance.')}
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleAskCustom}
              className={`px-6 py-3 rounded-xl font-bold text-xs inline-flex items-center space-x-2 rtl:space-x-reverse shadow-lg transition-all ${
                isDigital 
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-obsidian-950 shadow-cyan-500/20' 
                  : 'bg-emerald-500 text-obsidian-950 shadow-emerald-500/20'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>
                {isDigital
                  ? (isArabic ? 'استشارة هندسية فورية عبر واتساب' : 'Chat with Engineering Team on WhatsApp')
                  : (isArabic ? 'طرح سؤال مخصص عبر واتساب' : 'Ask Custom Question on WhatsApp')}
              </span>
            </motion.button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

