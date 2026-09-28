import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare, CircleCheck, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './motion/MotionPrimitives';
import { SectionHeader } from './SectionHeader';
import { COMPANY_INFO } from '../data/siteData';
import { generateWhatsAppUrl, generateCallUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';
import { getEarlyEnquiry, clearEarlyEnquiry } from '../lib/earlyEnquiry';


interface ContactSectionProps {
  isArabic?: boolean;
}

// Supabase edge function. Public by design: a website visitor has no
// session. It only ever INSERTs an enquiry - it cannot read leads back out,
// so this URL being in a public repo exposes nothing.
const ENQUIRY_ENDPOINT =
  'https://juqweomhyevxyyspkwbk.supabase.co/functions/v1/website-enquiry';

export const ContactSection: React.FC<ContactSectionProps> = ({ isArabic = false }) => {
  const t = isArabic ? TRANSLATIONS.ar.contact : TRANSLATIONS.en.contact;

  const [formData, setFormData] = useState(() => ({
    name: getEarlyEnquiry().name ?? '',
    phone: getEarlyEnquiry().phone ?? '',
    email: getEarlyEnquiry().email ?? '',
    service: getEarlyEnquiry().service ?? (isArabic ? 'تأسيس الشركات بالبر الرئيسي (أبوظبي / دبي)' : 'Mainland Company Formation (Abu Dhabi / Dubai)'),
    message: getEarlyEnquiry().message ?? ''
  }));
  const [visaType, setVisaType] = useState(() => getEarlyEnquiry().visaType ?? '');
  // Honeypot: the edge function silently drops any enquiry where
  // company_website is filled in. Humans never see this field.
  const [companyWebsite, setCompanyWebsite] = useState('');
  useEffect(clearEarlyEnquiry, []);
  const visaService = isArabic ? 'تأشيرات الإقامة' : 'Residency visas';
  const [submitted, setSubmitted] = useState(false);

  const pendingRequest = useRef<{payload: string; id: string} | null>(null);
  const sendingRef = useRef(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sendingRef.current) return;
    sendingRef.current = true;
    setSending(true);
    setSendError(false);

    // The enquiry MUST actually leave the browser before we celebrate.
    // Previously this function only fired analytics and confetti, so every
    // submission was silently lost - the visitor saw success and nobody was
    // ever told. Await the POST, and only show success if it really landed.
    try {
      const payload = JSON.stringify({ ...formData, company_website: companyWebsite, message: [formData.service === visaService && visaType ? 'Visa type: ' + visaType : '', formData.message].filter(Boolean).join('\n') });
      if (!pendingRequest.current || pendingRequest.current.payload !== payload) {
        pendingRequest.current = {payload, id: crypto.randomUUID()};
      }
      const res = await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...JSON.parse(payload), request_id: pendingRequest.current.id })
      });
      if (!res.ok) throw new Error('enquiry endpoint returned ' + res.status);
    } catch (err) {
      console.error('Enquiry submission failed:', err);
      setSendError(true);
      sendingRef.current = false;
      setSending(false);
      return; // no confetti, no false success - the visitor can retry or WhatsApp
    }

    trackConversion('generate_lead', { source: 'contact_form' });

    sendingRef.current = false;
    setSending(false);
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
    visaService,
    'معاملات الإقامة الذهبية لمدة 10 سنوات (VIP)',
    'خدمات العلاقات العامة المؤسسية (PRO) وملف العمل',
    'التسجيل في ضريبة الشركات والرقم الضريبي',
    'تصميم المواقع وتطبيقات الويب والهوية الرقمية'
  ] : [
    'Mainland Company Formation (Abu Dhabi / Dubai)',
    'Free Zone License Setup (Meydan / IFZA / Masdar)',
    visaService,
    '10-Year UAE Golden Visa VIP Processing',
    'Corporate PRO Retainer & MoHRE File',
    'Corporate Tax Registration & TRN',
    'Bespoke Digital Web & Brand Engineering'
  ];

  useEffect(() => {
    const selectService = (event: Event) => {
      const index = (event as CustomEvent<number>).detail;
      const mapping = [0, 2, 4, 5, 6];
      if (mapping[index] !== undefined) setFormData(prev => ({...prev, service: serviceOptions[mapping[index]]}));
    };
    window.addEventListener('enquiry-service', selectService);
    return () => window.removeEventListener('enquiry-service', selectService);
  }, [isArabic]);

  const label = 'mb-1.5 block text-sm font-semibold text-ink-2';
  const tile = 'grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-emerald-400';

  return (
    <section id="contact" className="section border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">

          {/* Office and direct channels */}
          <div className="space-y-8 lg:col-span-5">
            <SectionHeader eyebrow={t.badge} title={<>{t.title} {t.titleHighlight}</>} subtitle={t.subtitle} />

            <ScrollReveal>
              <div className="card space-y-6 p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className={tile}><MapPin className="h-5 w-5" aria-hidden="true" /></span>
                  <div>
                    <div className="text-sm text-slate-400">{t.headquartersTitle}</div>
                    <div className="mt-0.5 font-bold text-white">{t.headquartersAddress}</div>
                    <div className="text-sm text-slate-400">{t.country}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className={tile}><Phone className="h-5 w-5" aria-hidden="true" /></span>
                  <div>
                    <div className="text-sm text-slate-400">{t.phoneTitle}</div>
                    <a href={generateCallUrl()} className="mt-0.5 block font-bold text-white transition-colors hover:text-emerald-400">
                      <span dir="ltr" className="tnum">{COMPANY_INFO.phone}</span>
                    </a>
                    <div className="text-sm text-slate-400">{t.phoneHours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className={tile}><Mail className="h-5 w-5" aria-hidden="true" /></span>
                  <div className="min-w-0">
                    <div className="text-sm text-slate-400">{t.emailTitle}</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="mt-0.5 block break-all font-bold text-white transition-colors hover:text-emerald-400">
                      <span dir="ltr">{COMPANY_INFO.email}</span>
                    </a>
                    <div className="text-sm text-slate-400">{t.emailResponseTime}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm text-slate-400">
                  <span>{t.tradeLicenseTitle}:</span>
                  <span className="font-mono font-semibold text-gold-300">{COMPANY_INFO.tradeLicense}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-[var(--radius-card)] border border-emerald-500/30 bg-emerald-950/40 p-6 sm:p-7">
                <p className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  {isArabic ? 'قناة الرد الفوري' : 'Immediate Response Channel'}
                </p>
                <h4 className="mt-2 text-lg font-bold text-white">
                  {isArabic ? 'أسرع طريقة للحصول على عرض أسعار' : 'Fastest Way to Get Quotes'}
                </h4>
                <p className="mb-5 mt-1.5 text-sm leading-6 text-slate-300">{t.orDirectWhatsApp}</p>
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="btn w-full bg-emerald-500 text-obsidian-950 hover:bg-emerald-400"
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  <span>{t.directWhatsAppBtn}</span>
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Enquiry form: a paper card, so the place where people write is the most readable surface on the page */}
          <ScrollReveal className="lg:col-span-7">
            <div data-surface="paper" className="paper rounded-[var(--radius-panel)] p-7 shadow-pop sm:p-10">

              {submitted ? (
                <div className="space-y-4 py-10 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/20 text-emerald-800">
                    <CircleCheck className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink">{t.successTitle}</h3>
                  <p className="mx-auto max-w-md text-base leading-7 text-ink-2">{t.successMessage}</p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn btn-sm border-ink/25 bg-transparent text-ink hover:bg-ink/5"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-5">
                  <div className="absolute w-px h-px overflow-hidden -m-px p-0 border-0" style={{ clip: 'rect(0 0 0 0)' }} aria-hidden="true">
                    <label htmlFor="company-website-field">Company website</label>
                    <input
                      id="company-website-field"
                      type="text"
                      name="company_website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-ink">{t.formTitle}</h3>
                    <p className="mt-1 text-sm text-ink-3">{t.formSubtitle}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="enquiry-name" className={label}>
                        {t.nameLabel} <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        autoComplete="name"
                        id="enquiry-name" aria-label={t.nameLabel} value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.namePlaceholder}
                        className="field-paper"
                      />
                    </div>

                    <div>
                      <label htmlFor="enquiry-phone" className={label}>
                        {t.phoneLabel} <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        autoComplete="tel"
                        id="enquiry-phone" aria-label={t.phoneLabel} value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.phonePlaceholder}
                        className="field-paper text-left rtl:text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="enquiry-email" className={label}>
                      {t.emailLabel} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      id="enquiry-email" aria-label={t.emailLabel} value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.emailPlaceholder}
                      className="field-paper"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiry-service" className={label}>
                      {t.serviceLabel} <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="enquiry-service" aria-label={t.serviceLabel} value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="field-paper"
                    >
                      {serviceOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {formData.service === visaService && <div>
                    <label htmlFor="visa-type" className={label}>{isArabic ? 'ما نوع الإقامة المطلوبة؟' : 'Which type of residency are you looking for?'}</label>
                    <select id="visa-type" required value={visaType} onChange={e => setVisaType(e.target.value)} className="field-paper">
                      <option value="">{isArabic ? 'اختر نوع الإقامة' : 'Choose a visa type'}</option>
                      <option value="Employee">{isArabic ? 'موظف' : 'Employee'}</option>
                      <option value="Owner / investor">{isArabic ? 'مالك / مستثمر' : 'Owner / investor'}</option>
                      <option value="Dependent / family">{isArabic ? 'تابع / عائلة' : 'Dependent / family'}</option>
                      <option value="Needs guidance">{isArabic ? 'أحتاج المساعدة في الاختيار' : 'I’m not sure yet'}</option>
                    </select>
                  </div>}
                  <div>
                    <label htmlFor="enquiry-message" className={label}>{t.messageLabel}</label>
                    <textarea
                      rows={4}
                      id="enquiry-message" aria-label={t.messageLabel} value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.messagePlaceholder}
                      className="field-paper resize-y"
                    />
                  </div>

                  {sendError && <p role="alert" className="rounded-xl border border-danger-700/30 bg-danger-700/10 px-4 py-3 text-sm font-medium leading-6 text-danger-700">{isArabic ? 'تعذر إرسال الاستفسار. بياناتك ما زالت موجودة؛ حاول مرة أخرى أو تواصل عبر واتساب.' : 'We couldn’t send your enquiry. Your details are still here—please retry or contact us on WhatsApp.'}</p>}
                  <button type="submit" disabled={sending} className="btn btn-lg btn-paper w-full">
                    <Send className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    <span>{sending ? (isArabic ? 'جارٍ الإرسال…' : 'Sending…') : t.submitBtn}</span>
                  </button>

                  <p className="flex items-center justify-center gap-2 pt-1 text-center text-sm text-ink-3">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-800" aria-hidden="true" />
                    <span>
                      {isArabic
                        ? 'كافة بياناتك سرية ومحمية وفق قوانين حماية البيانات التجارية في دولة الإمارات.'
                        : 'Your data is confidential and protected under UAE Commercial Data Protection laws.'}
                    </span>
                  </p>
                </form>
              )}

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
