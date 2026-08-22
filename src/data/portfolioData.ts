import { PortfolioProject, TrackingApplication } from '../types';

export const DIGITAL_PORTFOLIO: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Aura Fintech & Asset Management',
    titleAr: 'منصة أورا للتقنية المالية وإدارة الأصول',
    client: 'Aura Capital DIFC',
    clientAr: 'أورا كابيتال (مركز دبي المالي العالمي)',
    sector: 'Wealth Management & Private Equity',
    sectorAr: 'إدارة الثروات والأسهم الخاصة',
    metric: '+340% HNW Client Inquiries',
    metricAr: '+340% زيادة استفسارات كبار المستثمرين',
    deliverables: ['Obsidian Dark Web Portal', 'Bilingual Arabic/English RTL Design', 'Real-Time Portfolio Estimator'],
    deliverablesAr: ['بوابة ويب داكنة فائقة الفخامة', 'تصميم ثنائي اللغة عربي/إنجليزي RTL', 'حاسبة فورية لعوائد المحافظ الاستثمارية'],
    technologies: ['Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    summary: 'Engineered an institutional-grade digital investment portal featuring real-time return calculators, dark glassmorphism, and seamless bilingual Arabic/English switching.',
    summaryAr: 'تطوير بوابة استثمار رقمية مؤسسية تتضمن حاسبات عوائد فورية، وتأثيرات زجاجية راقية، وتبديل سلس وفوري بين العربية والإنجليزية.',
    colorGlow: 'from-cyan-500/30 to-blue-600/20',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Vanguard Aerospace & Defense Portal',
    titleAr: 'بوابة فانغارد للطيران والدفاع',
    client: 'Vanguard Dynamics UAE',
    clientAr: 'فانغارد داينامكس الإمارات',
    sector: 'Aviation & Defense Contracting',
    sectorAr: 'عقود الطيران والصناعات الدفاعية',
    metric: 'AED 18M Government Tender Won',
    metricAr: 'الفوز بمناقصة حكومية بقيمة 18 مليون درهم',
    deliverables: ['Military-Grade UI/UX', 'Encrypted Document Vault', 'Interactive 3D Hardware Explorer'],
    deliverablesAr: ['واجهة استخدام عالية الأمان', 'خزينة مستندات مشفرة', 'مستعرض تفاعلي ثلاثي الأبعاد للمعدات'],
    technologies: ['React 18', 'WebGL Shaders', 'Tailwind CSS', 'PostgreSQL'],
    summary: 'A secure, high-prestige defense portal tailored to win federal government procurement tenders across Abu Dhabi and GCC ministries.',
    summaryAr: 'بوابة دفاعية وتكنولوجية مشفرة مصممة للفوز بالمناقصات والمشتريات الحكومية الاتحادية في أبوظبي ودول مجلس التعاون.',
    colorGlow: 'from-emerald-500/30 to-teal-600/20',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Silk & Sand Luxury Hospitality Suite',
    titleAr: 'منظومة سيلك آند ساند للضيافة الفاخرة',
    client: 'Silk & Sand Resorts Palm Jumeirah',
    clientAr: 'منتجعات سيلك آند ساند (نخلة جميرا)',
    sector: 'Ultra-Luxury Hospitality',
    sectorAr: 'الضيافة الفاخرة والمنتجعات',
    metric: '4.9x ROI on Direct Bookings',
    metricAr: '4.9x عائد الاستثمار على الحجوزات المباشرة',
    deliverables: ['Custom Booking Engine', 'Brand Identity Suite', 'Dynamic Concierge WhatsApp Bot'],
    deliverablesAr: ['محرك حجز مخصص فائق السرعة', 'هوية بصرية فاخرة متكاملة', 'مساعد واتساب ذكي لخدمات الكونسيرج VIP'],
    technologies: ['Vite', 'Tailwind CSS', 'WhatsApp Cloud API', 'Stripe UAE'],
    summary: 'Crafted a bespoke luxury booking interface combining typography-driven editorial layouts with an instant VIP concierge reservation bot.',
    summaryAr: 'تصميم وتطوير واجهة حجز فائقة الفخامة تجمع بين التحرير الطباعي الراقي والمساعد الذكي لحجوزات كبار الشخصيات عبر واتساب.',
    colorGlow: 'from-amber-500/30 to-rose-600/20',
    featured: true
  },
  {
    id: 'proj-4',
    title: 'Apex Logistics & Freight Automation',
    titleAr: 'منظومة أبيكس للوجستيات وأتمتة الشحن',
    client: 'Apex Global Logistics KIZAD',
    clientAr: 'أبيكس العالمية للخدمات اللوجستية (كيزاد)',
    sector: 'Supply Chain & Maritime Shipping',
    sectorAr: 'سلاسل الإمداد والشحن البحري',
    metric: '68% Reduction in Manual PRO Filings',
    metricAr: '68% خفض في المعاملات اليدوية للجمارك',
    deliverables: ['Custom Customs CRM', 'Real-time Container Tracker', 'Automated Tawjeeh Workflows'],
    deliverablesAr: ['نظام إدارة عملاء جمركي متكامل', 'تتبع الحاويات والشحنات في الوقت الفعلي', 'أتمتة معاملات التوجيه والتخليص'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Drizzle ORM'],
    summary: 'Designed and deployed an end-to-end customs tracking dashboard connecting KIZAD warehouse leases directly with UAE customs APIs.',
    summaryAr: 'تصميم ونشر لوحة تحكم لتتبع الشحنات الجمركية وربط عقود مستودعات كيزاد مباشرة مع واجهات الجمارك الإماراتية.',
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
