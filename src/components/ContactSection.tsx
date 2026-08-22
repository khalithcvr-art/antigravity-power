import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { generateWhatsAppUrl, generateCallUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  isArabic?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isArabic = false }) => {
  const t = isArabic ? TRANSLATIONS.ar.contact : TRANSLATIONS.en.contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: isArabic ? 'تأسيس الشركات بالبر الرئيسي (أبوظبي / دبي)' : 'Mainland Company Formation (Abu Dhabi / Dubai)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackConversion('generate_lead', formData);
    
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 }
    });

    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    trackConversion('whatsapp_click', { source: 'contact_section_direct' });
    const msg = isArabic
      ? `مرحباً إكسبيديا للأعمال والخدمات، اسمي ${formData.name || 'عميل محترم'}. أود الاستفسار بخصوص ${formData.service}.`
      : `Hello Expedia Business Services, my name is ${formData.name || 'Client'}. I am interested in consulting about ${formData.service}.`;
    window.open(generateWhatsAppUrl(msg), '_blank');
  };

  const serviceOptions = isArabic ? [
    'تأسيس الشركات بالبر الرئيسي (أبوظبي / دبي)',
    'تأسيس الشركات بالمناطق الحرة (ميدان / إفزا / مصدر)',
    'معاملات الإقامة الذهبية لمدة 10 سنوات (VIP)',
    'خدمات العلاقات العامة المؤسسية (PRO) وملف العمل',
    'التسجيل في ضريبة الشركات والرقم الضريبي',
    'تصميم المواقع وتطبيقات الويب والهوية الرقمية'
  ] : [
    'Mainland Company Formation (Abu Dhabi / Dubai)',
    'Free Zone License Setup (Meydan / IFZA / Masdar)',
    '10-Year UAE Golden Visa VIP Processing',
    'Corporate PRO Retainer & MoHRE File',
    'Corporate Tax Registration & TRN',
    'Bespoke Digital Web & Brand Engineering'
  ];

  return (
    <section id="contact" className="py-24 relative bg-obsidian-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office & Direct Liaison Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                {t.title} <br />
                <span className="text-gradient-emerald">{t.titleHighlight}</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                {t.subtitle}
              </p>
            </div>

            {/* Verified Entity Details */}
            <div className="p-6 rounded-3xl bg-obsidian-900 border border-white/10 space-y-5">
              
              <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">{t.headquartersTitle}</div>
                  <div className="text-sm font-bold text-white mt-0.5">{t.headquartersAddress}</div>
                  <div className="text-[11px] text-slate-400">{t.country}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">{t.phoneTitle}</div>
                  <a href={generateCallUrl()} className="text-sm font-bold text-white hover:text-emerald-400 transition-colors mt-0.5 block font-mono">
                    {COMPANY_INFO.phone}
                  </a>
                  <div className="text-[11px] text-slate-400">{t.phoneHours}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">{t.emailTitle}</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-white hover:text-emerald-400 transition-colors mt-0.5 block font-mono">
                    {COMPANY_INFO.email}
                  </a>
                  <div className="text-[11px] text-slate-400">{t.emailResponseTime}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>{t.tradeLicenseTitle}:</span>
                <span className="font-mono text-emerald-400 font-semibold">{COMPANY_INFO.tradeLicense}</span>
              </div>
            </div>

            {/* WhatsApp Immediate Connect Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-obsidian-900 to-obsidian-900 border border-emerald-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-emerald-400 text-xs font-mono font-bold uppercase mb-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>{isArabic ? 'قناة الرد الفوري' : 'Immediate Response Channel'}</span>
                </div>
                <h4 className="text-lg font-display font-bold text-white mb-2">
                  {isArabic ? 'أسرع طريقة للحصول على عرض أسعار' : 'Fastest Way to Get Quotes'}
                </h4>
                <p className="text-xs text-slate-300 mb-4">
                  {t.orDirectWhatsApp}
                </p>
              </div>

              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-display font-bold text-xs flex items-center justify-center space-x-2 rtl:space-x-reverse transition-all shadow-md shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4 fill-obsidian-950" />
                <span>{t.directWhatsAppBtn}</span>
              </button>
            </div>

          </div>

          {/* Right Column: High-Converting Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {t.successTitle}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    {t.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-1">
                      {t.formTitle}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {t.formSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                        {t.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-sm text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                        {t.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.phonePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-sm text-white focus:outline-none focus:border-emerald-500 text-left rtl:text-right"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                        {t.emailLabel} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-sm text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                        {t.serviceLabel} *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-sm text-white focus:outline-none focus:border-emerald-500"
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      {t.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-sm text-white focus:outline-none focus:border-emerald-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-display font-bold text-sm flex items-center justify-center space-x-2 rtl:space-x-reverse transition-all shadow-xl shadow-emerald-500/25 hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4 rtl:rotate-180" />
                    <span>{t.submitBtn}</span>
                  </button>

                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-[11px] text-slate-400 text-center pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>
                      {isArabic 
                        ? 'كافة بياناتك سرية ومحمية وفق قوانين حماية البيانات التجارية في دولة الإمارات.' 
                        : 'Your data is confidential and protected under UAE Commercial Data Protection laws.'}
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

