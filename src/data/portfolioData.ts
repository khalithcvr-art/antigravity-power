import { PortfolioProject, TrackingApplication } from '../types';

// Client identities are withheld. Entries describe the type of project and the
// capabilities delivered. No financial, tender, growth, ROI, conversion, traffic
// or percentage outcome is claimed, because none is evidenced in this repository.
export const DIGITAL_PORTFOLIO: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Investment & Asset Management Portal',
    titleAr: 'بوابة الاستثمار وإدارة الأصول',
    client: 'Client name withheld',
    clientAr: 'اسم العميل محجوب',
    sector: 'Wealth Management',
    sectorAr: 'إدارة الثروات',
    metric: 'Bilingual Client Portal',
    metricAr: 'بوابة عملاء ثنائية اللغة',
    deliverables: ['Dark investment portal interface', 'Bilingual Arabic/English RTL layout', 'Interactive portfolio calculator'],
    deliverablesAr: ['واجهة بوابة استثمار داكنة', 'تخطيط ثنائي اللغة عربي/إنجليزي يدعم RTL', 'حاسبة محافظ تفاعلية'],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    summary: 'A digital investment portal built with an interactive portfolio calculator, a dark interface system, and switching between Arabic and English.',
    summaryAr: 'بوابة استثمار رقمية مبنية بحاسبة محافظ تفاعلية، ونظام واجهة داكن، وإمكانية التبديل بين العربية والإنجليزية.',
    colorGlow: 'from-cyan-500/30 to-blue-600/20',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Aerospace & Defence Supplier Portal',
    titleAr: 'بوابة موردي الطيران والدفاع',
    client: 'Client name withheld',
    clientAr: 'اسم العميل محجوب',
    sector: 'Aviation & Defence Contracting',
    sectorAr: 'عقود الطيران والدفاع',
    metric: 'Encrypted Document Vault',
    metricAr: 'خزينة مستندات مشفرة',
    deliverables: ['Access-controlled interface', 'Encrypted document vault', 'Interactive 3D hardware viewer'],
    deliverablesAr: ['واجهة بصلاحيات وصول محددة', 'خزينة مستندات مشفرة', 'عارض تفاعلي ثلاثي الأبعاد للمعدات'],
    technologies: ['React 18', 'WebGL Shaders', 'Tailwind CSS', 'PostgreSQL'],
    summary: 'A supplier portal with access-controlled document storage and an interactive 3D hardware viewer, built to organise procurement documentation.',
    summaryAr: 'بوابة موردين تتضمن تخزين مستندات بصلاحيات محددة وعارضاً تفاعلياً ثلاثي الأبعاد للمعدات، لتنظيم مستندات المشتريات.',
    colorGlow: 'from-emerald-500/30 to-teal-600/20',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Hospitality Booking Suite',
    titleAr: 'منظومة حجوزات الضيافة',
    client: 'Client name withheld',
    clientAr: 'اسم العميل محجوب',
    sector: 'Hospitality & Resorts',
    sectorAr: 'الضيافة والمنتجعات',
    metric: 'Custom Booking Engine',
    metricAr: 'محرك حجز مخصص',
    deliverables: ['Custom booking engine', 'Brand identity system', 'WhatsApp concierge assistant'],
    deliverablesAr: ['محرك حجز مخصص', 'نظام هوية بصرية', 'مساعد كونسيرج عبر واتساب'],
    technologies: ['Vite', 'Tailwind CSS', 'WhatsApp Cloud API', 'Stripe UAE'],
    summary: 'A booking interface combining editorial, typography-led layouts with a WhatsApp assistant for reservation enquiries.',
    summaryAr: 'واجهة حجز تجمع بين تخطيطات تحريرية قائمة على الطباعة ومساعد عبر واتساب لاستفسارات الحجز.',
    colorGlow: 'from-amber-500/30 to-rose-600/20',
    featured: true
  },
  {
    id: 'proj-4',
    title: 'Logistics & Freight Operations Dashboard',
    titleAr: 'لوحة عمليات اللوجستيات والشحن',
    client: 'Client name withheld',
    clientAr: 'اسم العميل محجوب',
    sector: 'Supply Chain & Shipping',
    sectorAr: 'سلاسل الإمداد والشحن',
    metric: 'Clearance Workflow CRM',
    metricAr: 'نظام إدارة معاملات التخليص',
    deliverables: ['Customs documentation CRM', 'Container status dashboard', 'Clearance workflow automation'],
    deliverablesAr: ['نظام إدارة مستندات جمركية', 'لوحة لمتابعة حالة الحاويات', 'أتمتة مسارات معاملات التخليص'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Drizzle ORM'],
    summary: 'A shipment and customs documentation dashboard with container status views and workflow automation for clearance paperwork.',
    summaryAr: 'لوحة تحكم لمستندات الشحن والتخليص الجمركي مع عرض حالة الحاويات وأتمتة مسارات معاملات التخليص.',
    colorGlow: 'from-indigo-500/30 to-purple-600/20',
    featured: false
  }
];

export const SAMPLE_TRACKING_APPLICATIONS: Record<string, TrackingApplication> = {
  'EXP-AUH-2026': {
    trackingNumber: 'EXP-AUH-2026',
    companyName: 'Vertex Capital Partners L.L.C',
    jurisdiction: 'Abu Dhabi Mainland (ADDED)',
    applicantName: 'Tariq Al-Mansoor',
    submissionDate: '2026-08-18',
    estimatedCompletion: '2026-08-23',
    currentProgressPercent: 80,
    overallStatus: 'ACTIVE_PROCESSING',
    milestones: [
      {
        stepNumber: 1,
        title: 'Trade Name Reservation & Security Initial Clearance',
        authority: 'ADDED Abu Dhabi',
        status: 'completed',
        timestamp: 'Aug 18, 2026 · 10:14 AM',
        description: 'Trade name "Vertex Capital Partners L.L.C" approved under reservation reference TN-90284.',
        referenceNo: 'ADDED-TN-90284',
        documentReady: true
      },
      {
        stepNumber: 2,
        title: 'Memorandum of Association (MoA) Electronic Notarization',
        authority: 'Abu Dhabi Judicial Dept (ADJD)',
        status: 'completed',
        timestamp: 'Aug 19, 2026 · 02:45 PM',
        description: 'Digital signature completed via UAE Pass. Commercial Register registered in TAMM.',
        referenceNo: 'ADJD-MOA-44810',
        documentReady: true
      },
      {
        stepNumber: 3,
        title: 'Commercial License & Establishment Card Issuance',
        authority: 'ADDED & ICP',
        status: 'completed',
        timestamp: 'Aug 20, 2026 · 11:30 AM',
        description: 'Commercial License issued. ICP Establishment Immigration Card activated.',
        referenceNo: 'CN-8942109',
        documentReady: true
      },
      {
        stepNumber: 4,
        title: 'VIP Medical Screening & Emirates ID Biometrics',
        authority: 'Abu Dhabi Public Health Center & ICP',
        status: 'completed',
        timestamp: 'Aug 21, 2026 · 09:15 AM',
        description: 'Medical fitness cleared (Fit). Biometrics validated in ICP registry.',
        referenceNo: 'MED-FIT-88219',
        documentReady: true
      },
      {
        stepNumber: 5,
        title: '10-Year Golden Residency Visa Stamping & Physical ID Delivery',
        authority: 'ICP Immigration',
        status: 'in_progress',
        description: 'Electronic residency permit approved. Physical card in transit via Emirates Post courier.',
        referenceNo: 'ICP-EVISA-202608'
      }
    ]
  },
  'EXP-DXB-9842': {
    trackingNumber: 'EXP-DXB-9842',
    companyName: 'Nova Digital Agency FZCO',
    jurisdiction: 'Meydan Free Zone, Dubai',
    applicantName: 'Sophia Reynolds',
    submissionDate: '2026-08-20',
    estimatedCompletion: '2026-08-24',
    currentProgressPercent: 60,
    overallStatus: 'ACTIVE_PROCESSING',
    milestones: [
      {
        stepNumber: 1,
        title: 'Digital KYC & Free Zone Approval',
        authority: 'Meydan Free Zone Authority',
        status: 'completed',
        timestamp: 'Aug 20, 2026 · 01:20 PM',
        description: 'Shareholder passport and security vetting cleared.',
        referenceNo: 'MFZ-KYC-7721'
      },
      {
        stepNumber: 2,
        title: 'E-License & Certificate of Formation Issuance',
        authority: 'Meydan Authority',
        status: 'completed',
        timestamp: 'Aug 21, 2026 · 04:10 PM',
        description: 'Meydan trade license active with 3 media & tech activities.',
        referenceNo: 'MFZ-LIC-2026-9842',
        documentReady: true
      },
      {
        stepNumber: 3,
        title: 'Entry Permit & In-Country Status Change',
        authority: 'GDRFA Dubai',
        status: 'in_progress',
        description: 'E-Visa permit generated. Awaiting VIP medical scheduling.',
        referenceNo: 'GDRFA-EV-33921'
      },
      {
        stepNumber: 4,
        title: 'Emirates ID Biometrics & Medical Clearance',
        authority: 'Dubai Health Authority (DHA)',
        status: 'pending',
        description: 'Scheduled for Aug 23 at VIP Smart Salim Center.'
      },
      {
        stepNumber: 5,
        title: 'Corporate Bank Account Onboarding',
        authority: 'Wio Bank / Emirates NBD',
        status: 'pending',
        description: 'Bank compliance pre-approval file prepared by Expedia.'
      }
    ]
  }
};
