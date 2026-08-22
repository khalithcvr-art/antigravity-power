import React, { useState } from 'react';
import { 
  ChevronDown, 
  MessageSquare, 
  BookOpen
} from 'lucide-react';
import { FAQS } from '../data/siteData';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';

interface FaqSectionProps {
  isArabic: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ isArabic }) => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: isArabic ? 'الكل' : 'All' },
    { id: 'Mainland', label: isArabic ? 'البر الرئيسي' : 'Mainland' },
    { id: 'Freezone', label: isArabic ? 'المناطق الحرة' : 'Freezone' },
    { id: 'PRO', label: isArabic ? 'العلاقات العامة' : 'PRO' },
    { id: 'Tax & Golden Visa', label: isArabic ? 'الضرائب والإقامة الذهبية' : 'Tax & Golden Visa' },
    { id: 'Digital & Web', label: isArabic ? 'الحلول الرقمية والويب' : 'Digital & Web' }
  ];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? '' : id));
  };

  const handleAskCustom = () => {
    trackConversion('whatsapp_click', { source: 'faq_custom_question' });
    const msg = isArabic 
      ? "مرحباً إكسبيديا، لدي استفسار مخصص بخصوص تأسيس الشركات وخدمات العلاقات العامة في الإمارات لم أجده في قسم الأسئلة الشائعة."
      : "Hello Expedia, I have a specific question about UAE company formation / PRO services that wasn't in your FAQ.";
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="faq" className={`py-24 relative bg-obsidian-950/95 border-t border-white/5 ${isArabic ? 'font-arabic' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isArabic ? 'مستودع المعرفة واللوائح التنظيمية المعتمدة' : 'AEO Direct Knowledge Repository'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            {isArabic ? (
              <>
                الأسئلة الشائعة حول <br className="hidden sm:inline" />
                <span className="text-gradient-emerald">تأسيس الشركات والأنظمة الحكومية</span>
              </>
            ) : (
              <>
                Frequently Answered <br className="hidden sm:inline" />
                <span className="text-gradient-emerald">Regulatory & Setup Inquiries</span>
              </>
            )}
          </h2>
          
          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            {isArabic 
              ? 'إجابات قانونية وتنظيمية مباشرة مستندة إلى قانون الشركات التجارية الإماراتي لعام 2026، وضوابط وزارة الموارد البشرية، ومعايير الهيئة الاتحادية للضرائب.'
              : 'Direct statutory answers reflecting current 2026 UAE Commercial Companies Law, MoHRE labour codes, and Federal Tax Authority standards.'
            }
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-obsidian-950 shadow-md shadow-emerald-500/20 font-bold'
                  : 'bg-obsidian-900 border border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const categoryLabel = isArabic && faq.categoryAr ? faq.categoryAr : faq.category;
            const questionText = isArabic && faq.questionAr ? faq.questionAr : faq.question;
            const answerText = isArabic && faq.answerAr ? faq.answerAr : faq.answer;
            const directAnswerText = isArabic && faq.directAnswerAEOAr ? faq.directAnswerAEOAr : faq.directAnswerAEO;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-obsidian-900 border-emerald-500/40 shadow-xl shadow-black/40'
                    : 'bg-obsidian-900/60 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left rtl:text-right flex items-center justify-between gap-4"
                >
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-emerald-400 shrink-0">
                      {categoryLabel}
                    </span>
                    <span className="text-base sm:text-lg font-display font-bold text-white">
                      {questionText}
                    </span>
                  </div>

                  <div className={`p-1.5 rounded-full bg-white/5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-emerald-400 bg-emerald-500/10' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/5 space-y-4 animate-in fade-in duration-200">
                    {/* Direct Answer AEO Box */}
                    <div className="p-3.5 rounded-xl bg-obsidian-950/90 border border-emerald-500/20 text-xs font-mono text-slate-300">
                      <span className="text-emerald-400 font-bold uppercase tracking-wider block mb-1 text-[10px]">
                        {isArabic ? 'ملخص تنفيذي معتمد' : 'AEO Concise Snippet'}
                      </span>
                      {directAnswerText}
                    </div>

                    <p>
                      {answerText}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Question Banner */}
        <div className="p-8 rounded-3xl glass-panel border border-white/10 text-center sm:text-left rtl:sm:text-right flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-1">
              {isArabic ? 'هل لديك استفسار تنظيمي خاص أو هيكلة أعمال مخصصة؟' : 'Have a specific corporate structure or custom query?'}
            </h3>
            <p className="text-xs text-slate-400">
              {isArabic 
                ? 'يجيب كبار مستشاري العلاقات العامة لدينا على كافة الاستفسارات المؤسسية بسرية تامة وخلال أقل من 15 دقيقة.'
                : 'Our senior PRO advisors respond to confidential corporate inquiries in under 15 minutes.'
              }
            </p>
          </div>

          <button
            onClick={handleAskCustom}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold text-xs flex items-center space-x-2 rtl:space-x-reverse transition-all shadow-lg shadow-emerald-500/20"
          >
            <MessageSquare className="w-4 h-4 fill-obsidian-950" />
            <span>{isArabic ? 'استشر مسؤول علاقات عامة عبر واتساب' : 'Ask a Senior PRO via WhatsApp'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
