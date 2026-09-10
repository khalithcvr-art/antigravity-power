import { useDialogKeyboard } from '../hooks/useDialogKeyboard';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ShieldCheck } from 'lucide-react';
import { generateWhatsAppUrl, trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';

interface StatusTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isArabic?: boolean;
}
export const StatusTrackerModal: React.FC<StatusTrackerModalProps> = ({ isOpen, onClose, isArabic = false }) => {
  const dialogRef = useDialogKeyboard(isOpen, onClose);
  const [trackingInput, setTrackingInput] = useState('');
  const [searched, setSearched] = useState(false);
  const t = isArabic ? TRANSLATIONS.ar.tracker : TRANSLATIONS.en.tracker;
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingInput.trim()) return;
    trackConversion('status_tracker_search', { source: 'status_tracker' });
    setSearched(true);
  };
  const message = isArabic
    ? `مرحباً، أرجو من المستشار التحقق من حالة معاملتي بالرقم المرجعي: ${trackingInput.trim()}`
    : `Hello, please ask a consultant to verify my application status. Reference: ${trackingInput.trim()}`;
  return (
    <AnimatePresence>
      {isOpen && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto ${isArabic ? 'font-arabic' : ''}`}>
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />
          
          {/* Modal Container */}
          <motion.div
            ref={dialogRef} role="dialog" aria-modal="true" aria-label={t.title}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="relative w-full max-w-4xl bg-obsidian-900 border border-white/15 rounded-3xl shadow-2xl shadow-black overflow-hidden flex flex-col my-8 z-10"
          >
            
            {/* Modal Top Header */}
            <div className="p-6 sm:px-8 border-b border-white/10 flex items-center justify-between bg-obsidian-950/90">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {t.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {t.subtitle}
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isArabic ? "إغلاق" : "Close"}
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto max-h-[75vh] space-y-6">
              
              {/* Tracking Search Input */}
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    id="status-reference"
                    aria-label={t.searchLabel}
                    maxLength={100}
                    required
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className="w-full pl-11 rtl:pl-4 rtl:pr-11 pr-4 py-3 rounded-2xl bg-obsidian-950 border border-white/15 text-sm text-white focus:outline-none focus:border-cyan-500 font-mono uppercase tracking-wider text-left rtl:text-right"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-obsidian-950 font-bold text-sm transition-all shadow-md shadow-cyan-500/20"
                >
                  {t.searchBtn}
                </motion.button>
              </form>


              <p role="status" className="text-base text-slate-200 leading-relaxed">
                {isArabic
                  ? 'لا يمكن التحقق من حالة معاملتك عبر هذه الصفحة حالياً. تواصل مع مستشارنا للحصول على تحديث موثّق.'
                  : 'Your application status cannot currently be verified on this page. Contact our consultant for a verified update.'}
              </p>
              {searched && <a href={generateWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-2xl bg-cyan-500 text-obsidian-950 font-bold">
                {isArabic ? 'اطلب تحديثاً عبر واتساب' : 'Request an update on WhatsApp'}
              </a>}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
