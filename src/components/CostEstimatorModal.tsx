import { useDialogKeyboard } from '../hooks/useDialogKeyboard';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { JURISDICTIONS } from '../data/pricingData';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';

interface CostEstimatorModalProps { isOpen: boolean; onClose: () => void; isArabic?: boolean; }

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({ isOpen, onClose, isArabic = false }) => {
  const dialogRef = useDialogKeyboard(isOpen, onClose);
  const [jurisdiction, setJurisdiction] = useState(JURISDICTIONS[0].id);
  const [visas, setVisas] = useState('1');
  const [visaType, setVisaType] = useState('Needs guidance');
  const [office, setOffice] = useState('Needs guidance');
  const [golden, setGolden] = useState(false);
  const selected = JURISDICTIONS.find(j => j.id === jurisdiction)!;
  const label = (en: string, ar: string) => isArabic ? ar : en;
  const arabicValues: Record<string, string> = { 'Needs guidance': 'أحتاج مساعدة', 'Employee': 'موظف', 'Owner / investor': 'مالك / مستثمر', 'Dependent / family': 'تابع / عائلة', 'Shared workspace': 'مساحة مشتركة', 'Dedicated office': 'مكتب خاص' };
  const request = isArabic
    ? `مرحباً، أرجو إعداد عرض أسعار بعد مراجعة المتطلبات:\nالمنطقة: ${selected.nameAr}\nعدد التأشيرات: ${visas}\nنوع التأشيرة: ${arabicValues[visaType]}\nالمكتب: ${arabicValues[office]}\nطلب مراجعة أهلية الإقامة الذهبية: ${golden ? 'نعم' : 'لا'}\nأرجو تأكيد المستندات والتكلفة الإجمالية والاستثناءات بعد المراجعة.`
    : `Hello, please prepare a quotation after reviewing these requirements:\nJurisdiction: ${selected.name}\nVisas: ${visas}\nVisa type: ${visaType}\nOffice: ${office}\nGolden Visa eligibility review: ${golden ? 'Yes' : 'No'}\nPlease confirm required documents, the overall selling total and exclusions after review.`;
  const field = 'field mt-1.5';
  const caption = 'block text-sm font-semibold text-slate-200';
  return <AnimatePresence>{isOpen && <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto p-4" dir={isArabic ? 'rtl' : 'ltr'}>
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose}
    />
    <motion.div
      ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="quote-request-title"
      initial={{ opacity: 0, y: 14, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.985 }}
      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
      className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[var(--radius-panel)] border border-white/15 bg-obsidian-900 p-6 text-white shadow-pop sm:p-8"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 id="quote-request-title" className="text-2xl font-bold leading-tight">{label('Build your quotation request', 'جهّز طلب عرض الأسعار')}</h2>
        <button aria-label={label('Close', 'إغلاق')} onClick={onClose} className="btn btn-secondary h-11 min-h-0 w-11 shrink-0 p-0"><X className="h-5 w-5" aria-hidden="true" /></button>
      </div>
      <p className="mb-7 text-base leading-7 text-slate-300">{label('Select your requirements. Our consultant will confirm eligibility, documents, the overall price and any exclusions. No price or processing time is confirmed here.', 'حدد متطلباتك. سيؤكد مستشارنا الأهلية والمستندات والتكلفة الإجمالية وأي استثناءات. لا يتم تأكيد سعر أو مدة إنجاز هنا.')}</p>
      <div className="space-y-5">
        <label className="block"><span className={caption}>{label('Jurisdiction', 'المنطقة')}</span><select className={field} value={jurisdiction} onChange={e => setJurisdiction(e.target.value)}>{JURISDICTIONS.map(j => <option key={j.id} value={j.id}>{isArabic ? j.nameAr : j.name}</option>)}</select></label>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block"><span className={caption}>{label('Number of visas', 'عدد التأشيرات')}</span><select className={field} value={visas} onChange={e => setVisas(e.target.value)}>{Array.from({length:11},(_,i)=><option key={i} value={i}>{i}</option>)}</select></label>
          <label className="block"><span className={caption}>{label('Visa type', 'نوع التأشيرة')}</span><select className={field} value={visaType} onChange={e => setVisaType(e.target.value)}>{[['Needs guidance','أحتاج مساعدة'],['Employee','موظف'],['Owner / investor','مالك / مستثمر'],['Dependent / family','تابع / عائلة']].map(([en,ar])=><option key={en} value={en}>{label(en,ar)}</option>)}</select></label>
        </div>
        <label className="block"><span className={caption}>{label('Office requirements', 'متطلبات المكتب')}</span><select className={field} value={office} onChange={e => setOffice(e.target.value)}>{[['Needs guidance','أحتاج مساعدة'],['Shared workspace','مساحة مشتركة'],['Dedicated office','مكتب خاص']].map(([en,ar])=><option key={en} value={en}>{label(en,ar)}</option>)}</select></label>
        <label className="flex cursor-pointer items-center gap-3 text-base text-slate-100"><input type="checkbox" checked={golden} onChange={e=>setGolden(e.target.checked)} className="h-5 w-5 shrink-0 cursor-pointer accent-emerald-500" />{label('Request Golden Visa eligibility review', 'طلب مراجعة أهلية الإقامة الذهبية')}</label>
        <a href={generateWhatsAppUrl(request)} target="_blank" rel="noopener noreferrer" onClick={()=>trackConversion('calculator_lead',{source:'quotation_requirements'})} className="btn btn-primary btn-lg w-full">{label('Send requirements on WhatsApp', 'إرسال المتطلبات عبر واتساب')}</a>
        <p className="text-sm leading-6 text-slate-400">{label('This opens WhatsApp with your requirements. Send the message there to request a quotation.', 'يفتح هذا الرابط واتساب مع متطلباتك. أرسل الرسالة هناك لطلب عرض الأسعار.')}</p>
      </div>
    </motion.div>
  </div>}</AnimatePresence>;
};
