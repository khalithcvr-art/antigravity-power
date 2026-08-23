import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Search, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Building2, 
  ArrowRight, 
  ArrowLeft,
  Download, 
  Lock, 
  AlertCircle,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { SAMPLE_TRACKING_APPLICATIONS } from '../data/portfolioData';
import { TrackingApplication } from '../types';
import { trackConversion } from '../lib/tracking';
import { TRANSLATIONS } from '../data/translations';

interface StatusTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isArabic?: boolean;
}

export const StatusTrackerModal: React.FC<StatusTrackerModalProps> = ({ isOpen, onClose, isArabic = false }) => {
  const [trackingInput, setTrackingInput] = useState('EXP-AUH-2026');
  const [activeApplication, setActiveApplication] = useState<TrackingApplication | null>(
    SAMPLE_TRACKING_APPLICATIONS['EXP-AUH-2026']
  );
  const [searched, setSearched] = useState(true);

  const t = isArabic ? TRANSLATIONS.ar.tracker : TRANSLATIONS.en.tracker;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = trackingInput.trim().toUpperCase();
    trackConversion('status_tracker_search', { query });

    if (SAMPLE_TRACKING_APPLICATIONS[query]) {
      setActiveApplication(SAMPLE_TRACKING_APPLICATIONS[query]);
    } else {
      // Generate a dynamic realistic application status for custom inputs
      setActiveApplication({
        trackingNumber: query || 'EXP-GEN-8831',
        companyName: isArabic ? 'شركة النور للمشاريع ذ.م.م' : 'Al-Noor Horizon Ventures L.L.C',
        jurisdiction: isArabic ? 'دائرة التنمية الاقتصادية - أبوظبي' : 'Abu Dhabi Mainland (ADDED)',
        applicantName: isArabic ? 'سجل العميل النشط' : 'Active Client Record',
        submissionDate: '2026-08-19',
        estimatedCompletion: '2026-08-24',
        currentProgressPercent: 70,
        overallStatus: 'ACTIVE_PROCESSING',
        milestones: [
          {
            stepNumber: 1,
            title: isArabic ? 'الموافقة المبدئية وحجز الاسم التجاري' : 'Initial Security Approval & Name Reservation',
            authority: isArabic ? 'اقتصادية أبوظبي' : 'ADDED Abu Dhabi',
            status: 'completed',
            timestamp: isArabic ? '19 أغسطس 2026 · 11:00 ص' : 'Aug 19, 2026 · 11:00 AM',
            description: isArabic ? 'تمت الموافقة وتوثيق الاسم في السجل التجاري الوطني.' : 'Approved and locked in national trade registry.',
            referenceNo: 'TAMM-TN-8831',
            documentReady: true
          },
          {
            stepNumber: 2,
            title: isArabic ? 'توثيق عقد التأسيس الإلكتروني (الهوية الرقمية)' : 'Electronic MoA Execution (UAE Pass)',
            authority: isArabic ? 'دائرة القضاء - أبوظبي' : 'Abu Dhabi Judicial Dept',
            status: 'completed',
            timestamp: isArabic ? '20 أغسطس 2026 · 03:30 م' : 'Aug 20, 2026 · 03:30 PM',
            description: isArabic ? 'تم التحقق من التوقيعات الرقمية واعتماد العقد رسمياً.' : 'Digital notary signatures validated.',
            referenceNo: 'ADJD-MOA-9921',
            documentReady: true
          },
          {
            stepNumber: 3,
            title: isArabic ? 'إصدار الرخصة التجارية المعتمدة' : 'Commercial Trade License Issuance',
            authority: isArabic ? 'قطاع التراخيص الاقتصادية' : 'ADDED Commercial Licensing',
            status: 'completed',
            timestamp: isArabic ? '21 أغسطس 2026 · 09:45 ص' : 'Aug 21, 2026 · 09:45 AM',
            description: isArabic ? 'تم إصدار الرخصة بنسبة تملك أجنبي 100%.' : 'License generated with 100% foreign ownership status.',
            referenceNo: 'CN-6307408-REF',
            documentReady: true
          },
          {
            stepNumber: 4,
            title: isArabic ? 'فتح بطاقة المنشأة والفحص الطبي للإقامة' : 'ICP Establishment Immigration File & Medical',
            authority: isArabic ? 'الهيئة الاتحادية للهوية والجنسية' : 'ICP & Health Center',
            status: 'in_progress',
            description: isArabic ? 'تم اجتياز الفحص الطبي بنجاح. جاري استكمال البصمة الحيوية.' : 'Medical screening cleared. Biometric ID scheduling in progress.',
            referenceNo: 'ICP-EFILE-44210'
          },
          {
            stepNumber: 5,
            title: isArabic ? 'تثبيت الإقامة وفتح الحساب البنكي للشركة' : 'Residence Visa Stamping & Bank Onboarding',
            authority: isArabic ? 'بنك الإمارات دبي الوطني / ويو' : 'Emirates NBD / Wio Bank',
            status: 'pending',
            description: isArabic ? 'ملف التدقيق والامتثال البنكي بانتظار استلام بطاقة الهوية الإماراتية.' : 'Corporate bank compliance dossier awaiting final Emirates ID card.'
          }
        ]
      });
    }
    setSearched(true);
  };

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

              {/* Quick sample chips */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span>{isArabic ? 'سجلات تجريبية سريعة:' : 'Try sample records:'}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => { setTrackingInput('EXP-AUH-2026'); }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-400 font-mono text-[11px]"
                >
                  EXP-AUH-2026 {isArabic ? '(رخصة رئيسية + إقامة ذهبية)' : '(Mainland + Golden Visa)'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => { setTrackingInput('EXP-DXB-9842'); }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-400 font-mono text-[11px]"
                >
                  EXP-DXB-9842 {isArabic ? '(منطقة ميدان الحرة)' : '(Meydan Free Zone)'}
                </motion.button>
              </div>

              {activeApplication && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  
                  {/* Application Summary Card */}
                  <div className="p-6 rounded-2xl bg-obsidian-950 border border-white/10 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                          {isArabic ? 'ملف المعاملة الحكومية المعتمد' : 'Active Government Clearance File'}
                        </span>
                        <h4 className="text-xl font-display font-bold text-white">
                          {activeApplication.companyName}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {isArabic ? 'السلطة والولاية: ' : 'Jurisdiction: '}<strong className="text-slate-200">{activeApplication.jurisdiction}</strong> · {isArabic ? 'المقدم: ' : 'Applicant: '}{activeApplication.applicantName}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold flex items-center space-x-1.5 rtl:space-x-reverse">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{isArabic ? 'قيد الإجراء والمتابعة المباشرة' : activeApplication.overallStatus.replace(/_/g, ' ')}</span>
                        </span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div>
                      <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5">
                        <span>{t.progressLabel}</span>
                        <span className="text-emerald-400 font-bold">{activeApplication.currentProgressPercent}% {isArabic ? 'مكتمل' : 'Complete'}</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-obsidian-900 overflow-hidden p-0.5 border border-white/5">
                        <motion.div 
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 shadow-sm shadow-emerald-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${activeApplication.currentProgressPercent}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Milestones Stepper */}
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                      {t.milestonesTitle}
                    </h5>

                    <div className="space-y-4">
                      {activeApplication.milestones.map((milestone, idx) => (
                        <motion.div
                          key={milestone.stepNumber}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                            milestone.status === 'completed'
                              ? 'bg-obsidian-950/70 border-emerald-500/30'
                              : milestone.status === 'in_progress'
                              ? 'bg-cyan-500/5 border-cyan-500/40 shadow-md shadow-cyan-950'
                              : 'bg-obsidian-950/30 border-white/5 opacity-60'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                                milestone.status === 'completed'
                                  ? 'bg-emerald-500/20 text-emerald-400'
                                  : milestone.status === 'in_progress'
                                  ? 'bg-cyan-500/20 text-cyan-300 animate-pulse'
                                  : 'bg-white/5 text-slate-600'
                              }`}>
                                {milestone.status === 'completed' ? (
                                  <CheckCircle2 className="w-4 h-4" />
                                ) : (
                                  <span className="font-mono text-xs font-bold">{milestone.stepNumber}</span>
                                )}
                              </div>

                              <div>
                                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                  <h6 className="text-sm font-bold text-white">
                                    {milestone.title}
                                  </h6>
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                                    {milestone.authority}
                                  </span>
                                </div>

                                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                                  {milestone.description}
                                </p>

                                {milestone.referenceNo && (
                                  <div className="flex items-center space-x-3 rtl:space-x-reverse mt-2 text-[11px] font-mono text-slate-400">
                                    <span>{isArabic ? 'الرقم المرجعي: ' : 'Ref: '}<strong className="text-slate-200">{milestone.referenceNo}</strong></span>
                                    {milestone.timestamp && (
                                      <span>{isArabic ? 'التوقيت: ' : 'Timestamp: '}{milestone.timestamp}</span>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>

                            {milestone.documentReady && (
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="button"
                                onClick={() => alert(isArabic ? `تم تجهيز المستند المعتمد بنجاح للرقم المرجعي: ${milestone.referenceNo}` : `Simulated secure document download for: ${milestone.referenceNo}`)}
                                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-emerald-400 text-xs flex items-center space-x-1 rtl:space-x-reverse shrink-0 transition-colors"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">{t.downloadBtn}</span>
                              </motion.button>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Assistance & WhatsApp Action */}
                  <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>
                        {isArabic 
                          ? 'ملف موثق ومربوط مع دائرة التنمية الاقتصادية والهيئة الاتحادية للهوية والجنسية' 
                          : 'Official file synchronized with ADDED / ICP government portals'}
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={() => {
                        const msg = isArabic
                          ? `مرحباً إكسبيديا لخدمات الأعمال، أود الاستفسار عن حالة المعاملة برقم التتبع: *${activeApplication.trackingNumber}* (${activeApplication.companyName}).`
                          : `Hello Expedia Business Services, I would like an update on application *${activeApplication.trackingNumber}* (${activeApplication.companyName}).`;
                        window.open(`https://wa.me/971585858816?text=${encodeURIComponent(msg)}`, '_blank');
                      }}
                      className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold text-xs flex items-center space-x-2 rtl:space-x-reverse shadow-md shadow-emerald-500/20 transition-all shrink-0"
                    >
                      <MessageSquare className="w-4 h-4 fill-obsidian-950" />
                      <span>{isArabic ? 'استفسار فوري عبر واتساب' : 'WhatsApp Status Desk'}</span>
                    </motion.button>
                  </div>

                </div>
              )}

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};



