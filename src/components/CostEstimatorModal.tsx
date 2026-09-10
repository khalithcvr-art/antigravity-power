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
  const field = 'w-full p-3 rounded-xl bg-obsidian-950 text-white border border-white/20';
  return <AnimatePresence>{isOpen && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" dir={isArabic ? 'rtl' : 'ltr'}>
    <div className="fixed inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose} />
    <motion.div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="quote-request-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full max-w-2xl bg-obsidian-900 border border-white/15 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-white">
      <div className="flex items-center justify-between gap-4 mb-4"><h2 id="quote-request-title" className="text-2xl font-bold">{label('Build your quotation request', 'جهّز طلب عرض الأسعار')}</h2><button aria-label={label('Close', 'إغلاق')} onClick={onClose} className="p-3"><X /></button></div>
      <p className="text-slate-300 mb-6">{label('Select your requirements. Our consultant will confirm eligibility, documents, the overall price and any exclusions. No price or processing time is confirmed here.', 'حدد متطلباتك. سيؤكد مستشارنا الأهلية والمستندات والتكلفة الإجمالية وأي استثناءات. لا يتم تأكيد سعر أو مدة إنجاز هنا.')}</p>
      <div className="space-y-4">
        <label className="block">{label('Jurisdiction', 'المنطقة')}<select className={field} value={jurisdiction} onChange={e => setJurisdiction(e.target.value)}>{JURISDICTIONS.map(j => <option key={j.id} value={j.id}>{isArabic ? j.nameAr : j.name}</option>)}</select></label>
        <label className="block">{label('Number of visas', 'عدد التأشيرات')}<select className={field} value={visas} onChange={e => setVisas(e.target.value)}>{Array.from({length:11},(_,i)=><option key={i} value={i}>{i}</option>)}</select></label>
        <label className="block">{label('Visa type', 'نوع التأشيرة')}<select className={field} value={visaType} onChange={e => setVisaType(e.target.value)}>{[['Needs guidance','أحتاج مساعدة'],['Employee','موظف'],['Owner / investor','مالك / مستثمر'],['Dependent / family','تابع / عائلة']].map(([en,ar])=><option key={en} value={en}>{label(en,ar)}</option>)}</select></label>
        <label className="block">{label('Office requirements', 'متطلبات المكتب')}<select className={field} value={office} onChange={e => setOffice(e.target.value)}>{[['Needs guidance','أحتاج مساعدة'],['Shared workspace','مساحة مشتركة'],['Dedicated office','مكتب خاص']].map(([en,ar])=><option key={en} value={en}>{label(en,ar)}</option>)}</select></label>
        <label className="flex gap-3 items-center"><input type="checkbox" checked={golden} onChange={e=>setGolden(e.target.checked)} />{label('Request Golden Visa eligibility review', 'طلب مراجعة أهلية الإقامة الذهبية')}</label>
        <a href={generateWhatsAppUrl(request)} target="_blank" rel="noopener noreferrer" onClick={()=>trackConversion('calculator_lead',{source:'quotation_requirements'})} className="block text-center rounded-xl bg-cyan-500 text-obsidian-950 p-4 font-bold">{label('Send requirements on WhatsApp', 'إرسال المتطلبات عبر واتساب')}</a>
        <p className="text-sm text-slate-300">{label('This opens WhatsApp with your requirements. Send the message there to request a quotation.', 'يفتح هذا الرابط واتساب مع متطلباتك. أرسل الرسالة هناك لطلب عرض الأسعار.')}</p>
      </div>
    </motion.div>
  </div>}</AnimatePresence>;
};
