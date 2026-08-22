import { JurisdictionOption, CalculatorState, CalculatorBreakdown } from '../types';

export const JURISDICTIONS: JurisdictionOption[] = [
  {
    id: 'auh-mainland',
    name: 'Abu Dhabi Mainland (ADDED)',
    nameAr: 'بر أبوظبي الرئيسي (دائرة التنمية الاقتصادية)',
    city: 'Abu Dhabi',
    cityAr: 'أبوظبي',
    type: 'Mainland',
    typeAr: 'البر الرئيسي',
    tag: '100% Foreign Ownership · UAE Wide',
    tagAr: 'ملكية أجنبية 100% · حرية التجارة في كل الإمارات',
    baseCost: 9500,
    visaCostPerPerson: 3850,
    renewalCost: 7800,
    foreignOwnership: '100% Unrestricted',
    foreignOwnershipAr: '100% ملكية كاملة غير مقيدة',
    processingTime: '24–72 Hours',
    processingTimeAr: '24-72 ساعة',
    flexiDeskIncluded: false,
    corporateTaxStatus: '9% standard (0% under AED 375k)',
    corporateTaxStatusAr: '9% قياسية (0% للأرباح الأقل من 375,000 درهم)',
    highlights: [
      'Bid for Abu Dhabi Government & Semi-Government contracts',
      'Unrestricted physical office locations across the emirate',
      'Unlimited employee visa quota scalability',
      'Direct TAMM digital portal integration'
    ],
    highlightsAr: [
      'المشاركة في المناقصات الحكومية وشبه الحكومية بأبوظبي',
      'حرية استئجار المقرات والمحلات في أي موقع داخل الإمارة',
      'إمكانية توسيع كوتا التأشيرات للموظفين بدون قيود',
      'ربط رقمي مباشر وفوري مع منظومة خدمات تم الحكومية'
    ],
    popularFor: 'Commercial Trading, General Contracting, Engineering, Retail',
    popularForAr: 'التجارة العامة، والمقاولات، والهندسة، والمتاجر والتجزئة',
    authorities: ['ADDED', 'MoHRE', 'ICP', 'TAMM', 'ADCCI'],
    authoritiesAr: ['اقتصادية أبوظبي', 'وزارة الموارد البشرية', 'الهيئة الاتحادية للهوية', 'منظومة تم', 'غرفة أبوظبي']
  },
  {
    id: 'dxb-mainland',
    name: 'Dubai Mainland (DED)',
    nameAr: 'بر دبي الرئيسي (دائرة الاقتصاد والسياحة)',
    city: 'Dubai',
    cityAr: 'دبي',
    type: 'Mainland',
    typeAr: 'البر الرئيسي',
    tag: 'Global Prestige · Dubai Market Access',
    tagAr: 'مكانة عالمية مرموقة · وصول مباشر لأسواق دبي',
    baseCost: 14500,
    visaCostPerPerson: 4200,
    renewalCost: 11000,
    foreignOwnership: '100% Unrestricted',
    foreignOwnershipAr: '100% ملكية كاملة غير مقيدة',
    processingTime: '2–4 Business Days',
    processingTimeAr: '2-4 أيام عمل',
    flexiDeskIncluded: false,
    corporateTaxStatus: '9% standard (0% under AED 375k)',
    corporateTaxStatusAr: '9% قياسية (0% للأرباح الأقل من 375,000 درهم)',
    highlights: [
      'Trade anywhere in Dubai and wider UAE territory',
      'Open retail shops, showrooms, or corporate headquarters',
      'Immediate corporate banking with major UAE banks',
      'No geographical trade restrictions'
    ],
    highlightsAr: [
      'ممارسة التجارة بحرية في كافة مناطق دبي ودولة الإمارات',
      'فتح معارض ومحلات تجارية ومقرات رئيسية فاخرة',
      'أولوية فتح الحسابات البنكية لدى كبرى البنوك الإماراتية',
      'حرية التعاقد دون أي قيود جغرافية أو نطاقية'
    ],
    popularFor: 'Import/Export, Hospitality, Consultancy, Luxury Services',
    popularForAr: 'الاستيراد والتصدير، والضيافة والمطاعم، والاستشارات، والخدمات الفاخرة',
    authorities: ['DED', 'MoHRE', 'GDRFA', 'Dubai Chamber'],
    authoritiesAr: ['اقتصادية دبي', 'وزارة الموارد البشرية', 'إقامة دبي', 'غرفة دبي']
  },
  {
    id: 'meydan-fz',
    name: 'Meydan Free Zone',
    nameAr: 'منطقة ميدان الحرة',
    city: 'Dubai',
    cityAr: 'دبي',
    type: 'Free Zone',
    typeAr: 'منطقة حرة',
    tag: 'Premium Meydan Hotel Address · 3-Day Setup',
    tagAr: 'عنوان فندقي فاخر في ميدان · تأسيس خلال 3 أيام',
    baseCost: 12500,
    visaCostPerPerson: 3600,
    renewalCost: 10500,
    foreignOwnership: '100% Foreign Owned',
    foreignOwnershipAr: '100% ملكية أجنبية كاملة',
    processingTime: '24–48 Hours',
    processingTimeAr: '24-48 ساعة',
    flexiDeskIncluded: true,
    corporateTaxStatus: '0% Qualifying Free Zone Person Rate',
    corporateTaxStatusAr: '0% للشخص المؤهل في المنطقة الحرة',
    highlights: [
      'Prestige Meydan racecourse address',
      '1,500+ commercial, professional & media activities',
      'Guaranteed bank account facilitation',
      '100% remote digital incorporation'
    ],
    highlightsAr: [
      'عنوان راقٍ بالقرب من فندق ومضمار ميدان بدبي',
      'أكثر من 1500 نشاط تجاري ومهني وإعلامي متاح',
      'تسهيلات وربط مضمون لفتح الحسابات البنكية للشركات',
      'تأسيس رقمي كامل عن بعد بنسبة 100%'
    ],
    popularFor: 'International Tech, Investment Advisers, Media & Marketing',
    popularForAr: 'شركات التقنية العالمية، واستشارات الاستثمار، والإعلام والتسويق',
    authorities: ['Meydan Authority', 'ICP', 'GDRFA'],
    authoritiesAr: ['سلطة منطقة ميدان', 'الهيئة الاتحادية للهوية', 'إقامة دبي']
  },
  {
    id: 'ifza-fz',
    name: 'IFZA Dubai',
    nameAr: 'منطقة إيفزا دبي',
    city: 'Dubai',
    cityAr: 'دبي',
    type: 'Free Zone',
    typeAr: 'منطقة حرة',
    tag: 'Cost-Effective Dubai · 1,500+ Activities',
    tagAr: 'الخيار الأكثر مرونة في دبي · أكثر من 1500 نشاط',
    baseCost: 11900,
    visaCostPerPerson: 3450,
    renewalCost: 9800,
    foreignOwnership: '100% Foreign Owned',
    foreignOwnershipAr: '100% ملكية أجنبية كاملة',
    processingTime: '48 Hours',
    processingTimeAr: '48 ساعة',
    flexiDeskIncluded: true,
    corporateTaxStatus: '0% Qualifying Free Zone Person Rate',
    corporateTaxStatusAr: '0% للشخص المؤهل في المنطقة الحرة',
    highlights: [
      'Combine professional, commercial & industrial under one license',
      'No paid-up capital deposit required',
      'Modern co-working spaces and flexi-desk included',
      'Fast-track residency visa clearance'
    ],
    highlightsAr: [
      'إمكانية دمج الأنشطة المهنية والتجارية والصناعية برخصة واحدة',
      'لا يشترط إيداع رأس مال مدفوع مسبقاً في البنك',
      'مساحات عمل مشتركة ومكاتب مرنة حديثة مشمولة',
      'مسار سريع لإصدار تأشيرات الإقامة والهوية'
    ],
    popularFor: 'Digital Agencies, Software Dev, E-Commerce, Global Consulting',
    popularForAr: 'الوكالات الرقمية، وتطوير البرمجيات، والتجارة الإلكترونية، والاستشارات',
    authorities: ['IFZA', 'Dubai Silicon Oasis', 'ICP'],
    authoritiesAr: ['سلطة إيفزا', 'واحة دبي للسيليكون', 'الهيئة الاتحادية للهوية']
  },
  {
    id: 'masdar-fz',
    name: 'Masdar City Free Zone',
    nameAr: 'منطقة مدينة مصدر الحرة',
    city: 'Abu Dhabi',
    cityAr: 'أبوظبي',
    type: 'Free Zone',
    typeAr: 'منطقة حرة',
    tag: 'Sustainability & AI Innovation Hub',
    tagAr: 'مركز الاستدامة والابتكار والذكاء الاصطناعي',
    baseCost: 13200,
    visaCostPerPerson: 3750,
    renewalCost: 11200,
    foreignOwnership: '100% Foreign Owned',
    foreignOwnershipAr: '100% ملكية أجنبية كاملة',
    processingTime: '2–3 Business Days',
    processingTimeAr: '2-3 أيام عمل',
    flexiDeskIncluded: true,
    corporateTaxStatus: '0% Corporate Tax for Tech Innovators',
    corporateTaxStatusAr: '0% ضريبة شركات لمبتكري التكنولوجيا',
    highlights: [
      'Proximity to Abu Dhabi International Airport & Hub71',
      'Dual licensing option with ADDED Abu Dhabi Mainland',
      '0% import tariffs & full capital repatriation',
      'Direct access to venture capital & sustainability funds'
    ],
    highlightsAr: [
      'موقع استراتيجي قرب مطار زايد الدولي ومنظومة Hub71',
      'خيار الترخيص المزدوج مع دائرة التنمية الاقتصادية بأبوظبي',
      'إعفاء جمركي كامل بنسبة 0% وحرية تحويل الأرباح ورؤوس الأموال',
      'وصول مباشر لصناديق الاستثمار الجريء والاستدامة'
    ],
    popularFor: 'AI Research, Clean Energy, BioTech, DeepTech Startups',
    popularForAr: 'أبحاث الذكاء الاصطناعي، والطاقة النظيفة، والتكنولوجيا الحيوية، والشركات الناشئة',
    authorities: ['Masdar Authority', 'ADDED Dual License', 'ICP'],
    authoritiesAr: ['سلطة مدينة مصدر', 'رخصة اقتصادية أبوظبي المزدوجة', 'الهيئة الاتحادية للهوية']
  },
  {
    id: 'ajman-fz',
    name: 'Ajman Free Zone',
    nameAr: 'منطقة عجمان الحرة',
    city: 'Ajman',
    cityAr: 'عجمان',
    type: 'Free Zone',
    typeAr: 'منطقة حرة',
    tag: 'Cheapest Entry in the UAE · From AED 5,750',
    tagAr: 'أفضل تكلفة تأسيس في الإمارات · تبدأ من 5,750 درهم',
    baseCost: 5750,
    visaCostPerPerson: 3200,
    renewalCost: 5200,
    foreignOwnership: '100% Foreign Owned',
    foreignOwnershipAr: '100% ملكية أجنبية كاملة',
    processingTime: '24 Hours',
    processingTimeAr: '24 ساعة',
    flexiDeskIncluded: true,
    corporateTaxStatus: '0% Qualifying Free Zone Person Rate',
    corporateTaxStatusAr: '0% للشخص المؤهل في المنطقة الحرة',
    highlights: [
      'Lowest barrier to entry for solo entrepreneurs & freelancers',
      'Rapid same-day digital incorporation',
      'Low annual recurring renewal fees',
      'Flexible installment payment plans available'
    ],
    highlightsAr: [
      'أقل تكلفة تأسيس لرواد الأعمال وأصحاب العمل الحر',
      'تأسيس رقمي سريع وإصدار في نفس اليوم',
      'رسوم تجديد سنوية منخفضة واقتصادية',
      'خيارات دفع مرنة وتسهيلات سداد'
    ],
    popularFor: 'Solo Entrepreneurs, Freelancers, Dropshippers, New Founders',
    popularForAr: 'رواد الأعمال الفرديون، وأصحاب العمل الحر، والتجارة الإلكترونية، والمؤسسون الجدد',
    authorities: ['AFZA', 'ICP'],
    authoritiesAr: ['سلطة منطقة عجمان الحرة', 'الهيئة الاتحادية للهوية']
  }
];

export function calculateSetupCost(state: CalculatorState): CalculatorBreakdown {
  const selectedJurisdiction = JURISDICTIONS.find(j => j.id === state.jurisdictionId) || JURISDICTIONS[0];
  
  const licenseFee = selectedJurisdiction.baseCost;
  const visaFees = state.visaCount * selectedJurisdiction.visaCostPerPerson;
  
  let officeFee = 0;
  if (state.officeType === 'flexi') {
    officeFee = selectedJurisdiction.flexiDeskIncluded ? 0 : 2500;
  } else if (state.officeType === 'dedicated') {
    officeFee = 14000;
  } else if (state.officeType === 'warehouse') {
    officeFee = 32000;
  }
  
  const vatTaxFee = state.includeVatAndTaxRegistration ? 1500 : 0;
  const goldenVisaFee = state.includeInvestorGoldenVisa ? 4500 : 0;
  const bankingFee = state.includeCorporateBankAssistance ? 2500 : 0;
  const digitalFee = state.includeBespokeDigitalBranding ? 4900 : 0;
  
  const subtotal = licenseFee + visaFees + officeFee + vatTaxFee + goldenVisaFee + bankingFee + digitalFee;
  const vatAmount = Math.round(subtotal * 0.05);
  const totalAED = subtotal + vatAmount;
  const totalUSD = Math.round(totalAED / 3.6725);
  
  let timelineDays = '2–3 Business Days';
  if (selectedJurisdiction.id === 'ajman-fz') timelineDays = '24–48 Hours';
  if (selectedJurisdiction.id === 'dxb-mainland') timelineDays = '3–5 Business Days';
  if (state.includeInvestorGoldenVisa) timelineDays = '4–7 Business Days';
  
  return {
    licenseFee,
    visaFees,
    officeFee,
    vatTaxFee,
    goldenVisaFee,
    bankingFee,
    digitalFee,
    subtotal,
    vatAmount,
    totalAED,
    totalUSD,
    timelineDays
  };
}
