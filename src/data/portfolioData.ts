import { PortfolioProject } from '../types';

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
