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
        <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto p-4 sm:p-6">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Dialog */}
          <motion.div
            ref={dialogRef} role="dialog" aria-modal="true" aria-label={t.title}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.985 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 my-8 flex w-full max-w-3xl flex-col overflow-hidden rounded-[var(--radius-panel)] border border-white/15 bg-obsidian-900 shadow-pop"
          >

            <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-obsidian-950/80 p-6 sm:px-8">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">{t.title}</h3>
                  <p className="mt-0.5 text-sm text-slate-400">{t.subtitle}</p>
                </div>
              </div>

              <button
                type="button"
                aria-label={isArabic ? "إغلاق" : "Close"}
                onClick={onClose}
                className="btn btn-secondary h-11 min-h-0 w-11 shrink-0 p-0"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[75vh] space-y-6 overflow-y-auto p-6 sm:p-8">

              <form onSubmit={handleSearch} className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                  <input
                    type="text"
                    id="status-reference"
                    aria-label={t.searchLabel}
                    maxLength={100}
                    required
                    value={trackingInput}
                    onChange={(e) => setTrackingInput(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className="field ps-11 font-mono text-start"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg sm:min-h-12">
                  {t.searchBtn}
                </button>
              </form>

              <p role="status" className="text-base leading-7 text-slate-200">
                {isArabic
                  ? 'لا يمكن التحقق من حالة معاملتك عبر هذه الصفحة حالياً. تواصل مع مستشارنا للحصول على تحديث موثّق.'
                  : 'Your application status cannot currently be verified on this page. Contact our consultant for a verified update.'}
              </p>
              {searched && <a href={generateWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer"
                className="btn btn-primary btn-lg">
                {isArabic ? 'اطلب تحديثاً عبر واتساب' : 'Request an update on WhatsApp'}
              </a>}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
