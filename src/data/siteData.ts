import { ServiceItem, FaqItem, ChannelPartnerItem, AuthorityItem } from '../types';

export const COMPANY_INFO = {
  legalName: "Expedia Business and Services L.L.C",
  brandName: "Expedia Business Services",
  brandNameAr: "إكسبيديا لخدمات الأعمال",
  tradeLicense: "CN-6307408",
  phone: "+971 56 4425 950",
  whatsapp: "+971 58 5858 816",
  whatsappNumber: "971585858816",
  email: "info@expediaservices.ae",
  officeAddress: "Haibu, Level 1, Abu Dhabi Mall, Abu Dhabi, UAE",
  officeAddressAr: "هايبو، الطابق الأول، أبوظبي مول، أبوظبي، الإمارات العربية المتحدة",
  instagram: "@expedia_biz_hub",
  linkedin: "exbizhub",
  hours: "Mon - Sat: 8:30 AM - 6:00 PM (GST)",
  hoursAr: "الإثنين - السبت: 8:30 صباحاً - 6:00 مساءً (توقيت الإمارات)",
  stats: {
    experienceYears: "12+",
    businessesLaunched: "500+",
    officialPartnerships: "4 Free Zones",
    officialPartnershipsAr: "4 مناطق حرة",
    governmentDepts: "7 Entities",
    governmentDeptsAr: "7 دوائر حكومية",
    licenseTurnaround: "24–48h",
    licenseTurnaroundAr: "24-48 ساعة",
    foreignOwnership: "100%",
    foreignOwnershipAr: "100%",
    hiddenFees: "AED 0",
    hiddenFeesAr: "0 درهم",
  }
};

export const CORPORATE_SERVICES: ServiceItem[] = [
  {
    id: 'business-setup',
    number: 1,
    title: 'Business Setup & Licensing',
    titleAr: 'تأسيس الشركات والتراخيص التجارية',
    category: 'formation',
    anchorId: 'business-setup',
    shortDesc: 'Mainland, Freezone & Offshore company formation with 100% foreign ownership and expedited trade license issuance.',
    shortDescAr: 'تأسيس شركات البر الرئيسي والمناطق الحرة والأوفشور بملكية أجنبية 100% وإصدار فوري للرخص التجارية.',
    fullDesc: 'End-to-end company formation advisory across Abu Dhabi Mainland (ADDED), Dubai Mainland (DED), and premier UAE Free Zones. We structure your Memorandum of Association (MoA), secure initial approvals, reserve trade names, and issue commercial trade licenses within 24 to 48 hours.',
    fullDescAr: 'خدمات استشارية متكاملة لتأسيس الشركات في بر أبوظبي الرئيسي (دائرة التنمية الاقتصادية)، ودبي، وأبرز المناطق الحرة. نصيغ عقد التأسيس، ونستخرج الموافقات المبدئية وحجز الاسم التجاري، ونصدر الرخصة التجارية خلال 24 إلى 48 ساعة.',
    directAnswerAEO: 'A Mainland Trade License in Abu Dhabi allows 100% foreign ownership across commercial and industrial sectors, issued by ADDED with unrestricted UAE and international trading rights.',
    directAnswerAEOAr: 'تمنح رخصة البر الرئيسي في أبوظبي ملكية أجنبية بنسبة 100% في الأنشطة التجارية والصناعية صادرة عن دائرة التنمية الاقتصادية مع حق التجارة غير المقيد محلياً ودولياً.',
    deliverables: [
      'Trade name reservation & security approval',
      'Initial approval certificate from ADDED / DED',
      'Bilingual MoA & Articles of Association drafting',
      'Commercial, Professional, or Industrial Trade License',
      'Establishment Card for immigration file',
      '100% Foreign Ownership structure without local sponsor',
      'Guaranteed corporate bank account introduction'
    ],
    deliverablesAr: [
      'حجز الاسم التجاري والحصول على الموافقة الأمنية',
      'شهادة الموافقة المبدئية من التنمية الاقتصادية (ADDED / DED)',
      'صياغة وتوثيق عقد التأسيس والنظام الأساسي ثنائي اللغة',
      'إصدار الرخصة التجارية أو المهنية أو الصناعية',
      'استخراج بطاقة المنشأة لفتح ملف الهجرة والإقامة',
      'هيكلة الملكية الأجنبية الكاملة 100% دون كفيل محلي',
      'تسهيل وربط فتح الحساب البنكي التجاري للشركات'
    ],
    highlightBadge: 'Fast-Track 24–48h',
    highlightBadgeAr: 'مسار سريع 24–48 ساعة',
    iconName: 'Building2',
    metric: '100% Ownership',
    metricAr: 'ملكية 100%',
    timeline: '1-3 Business Days',
    timelineAr: '1-3 أيام عمل'
  },
  {
    id: 'pro-government',
    number: 2,
    title: 'Corporate PRO & Government Liaison',
    titleAr: 'خدمات العلاقات العامة والمعاملات الحكومية',
    category: 'pro',
    anchorId: 'pro-government',
    shortDesc: 'Dedicated government liaison across MoHRE, ICP, TAMM, GDRFA, and municipality departments.',
    shortDescAr: 'تمثيل حكومي متخصص ومتابعة كافة المعاملات لدى وزارة الموارد البشرية، والهوية، ومنصة تم، والجوازات، والبلديات.',
    fullDesc: 'Full-spectrum Public Relations Officer (PRO) operational support handling corporate document legalizations, embassy attestations, regulatory compliance filings, and municipal clearances with complete digital tracking.',
    fullDescAr: 'دعم تشغيلي شامل من مندوبي العلاقات العامة المعتمدين لتصديق المستندات، وتوثيق السفارات، والمعاملات البلدية، ومتابعة متطلبات الامتثال مع لوحة تحكم رقمية لمتابعة حالة المعاملة لحظة بلحظة.',
    directAnswerAEO: 'Corporate PRO services in the UAE encompass all statutory liaison transactions with government ministries including MoHRE labour quotas, ICP immigration clearances, and embassy attestation.',
    directAnswerAEOAr: 'تشمل خدمات العلاقات العامة للشركات في الإمارات جميع المعاملات الرسمية مع الوزارات بما في ذلك كوتا العمالة، وتصاريح الإقامة، وتصديقات الخارجية والسفارات.',
    deliverables: [
      'Document attestation with MOFA & Justice Ministry',
      'Municipal & civil defense security clearances',
      'Chamber of Commerce registration & renewals',
      'Notary public and legal translation assistance',
      'Power of Attorney (POA) document execution',
      'Regulatory compliance audits and quota extensions',
      'Real-time status updates via dedicated client dashboard'
    ],
    deliverablesAr: [
      'تصديق الوثائق لدى وزارة الخارجية ووزارة العدل',
      'استخراج تصاريح البلدية والدفاع المدني والموافقات الأمنية',
      'التسجيل وتجديد العضوية في غرف التجارة والصناعة',
      'خدمات الكاتب العدل والترجمة القانونية المعتمدة',
      'صياغة وتوثيق الوكالات القانونية الرسمية للشركات',
      'تدقيق الامتثال وتوسيع كوتا تصاريح العمل',
      'تحديثات فورية لحالة المعاملة عبر لوحة تتبع مخصصة'
    ],
    highlightBadge: 'Direct TAMM & ICP Access',
    highlightBadgeAr: 'ربط مباشر مع تم والهوية',
    iconName: 'ShieldCheck',
    metric: '7 Ministries',
    metricAr: '7 دوائر حكومية',
    timeline: 'Same-Day Clearance',
    timelineAr: 'إنجاز في نفس اليوم'
  },
  {
    id: 'golden-visa',
    number: 10,
    title: 'UAE Golden Visa Services (10-Year)',
    titleAr: 'خدمات الإقامة الذهبية (10 سنوات)',
    category: 'compliance',
    anchorId: 'golden-visa',
    shortDesc: 'Nomination, VIP medical screening, and 10-year residency visa processing for investors, executives, and property owners.',
    shortDescAr: 'إجراءات الترشيح، والفحص الطبي لكبار الشخصيات، وإصدار الإقامة الذهبية لمدة 10 سنوات للمستثمرين والتنفيذيين والملاك.',
    fullDesc: 'Seamless processing for the UAE 10-Year Golden Visa category under the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP). Covers investors, senior executive directors, real estate owners, and specialized tech talents with 100% dependent sponsorship.',
    fullDescAr: 'إجراءات متكاملة لإصدار الإقامة الذهبية لمدة 10 سنوات الصادرة عن الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ للمستثمرين العقاريين والتنفيذيين وأصحاب المواهب مع كفالة كاملة لأفراد الأسرة.',
    directAnswerAEO: 'The UAE 10-Year Golden Visa grants long-term residency without a national sponsor to property investors (AED 2M+), entrepreneurs, and senior executives earning AED 30,000+ monthly.',
    directAnswerAEOAr: 'تمنح الإقامة الذهبية الإماراتية لمدة 10 سنوات إقامة طويلة الأمد دون ضامن لمستثمري العقار (2 مليون درهم+) ورواد الأعمال والمدراء براتب 30 ألف درهم+ شهرياً.',
    deliverables: [
      'Eligibility audit & documentation pre-assessment',
      'ICP nomination and pre-approval submission',
      'VIP fast-track medical fitness test & Emirates ID biometrics',
      'Issuance of 10-year Golden Visa residency sticker / e-visa',
      'Family & domestic staff sponsorship facilitation',
      'Zero-exit requirement preservation guidance'
    ],
    deliverablesAr: [
      'تدقيق معايير الأهلية وتقييم المستندات قبل التقديم',
      'رفع طلب الترشيح والموافقة المبدئية لدى الهيئة الاتحادية',
      'فحص طبي سريع VIP وموعد البصمة البيومترية للهوية',
      'إصدار الإقامة الذهبية الإلكترونية لمدة 10 سنوات',
      'كفالة وتأشيرات أفراد الأسرة والعمالة المساعدة',
      'إرشادات الحفاظ على الإقامة دون اشتراط مدة البقاء خارج الدولة'
    ],
    highlightBadge: 'VIP Fast-Track',
    highlightBadgeAr: 'مسار كبار الشخصيات VIP',
    iconName: 'Crown',
    metric: '10-Year Residency',
    metricAr: 'إقامة 10 سنوات',
    timeline: '3-5 Business Days',
    timelineAr: '3-5 أيام عمل'
  },
  {
    id: 'visa-compliance',
    number: 6,
    title: 'Investor, Partner & Employment Visas',
    titleAr: 'تأشيرات المستثمرين والموظفين وتصاريح العمل',
    category: 'compliance',
    anchorId: 'visa-compliance',
    shortDesc: 'Complete lifecycle processing for investor visas, partner visas, employee quotas, and dependent family visas.',
    shortDescAr: 'إدارة شاملة لدورة التأشيرات للمستثمرين والشركاء، وكوتا الموظفين، وإقامات عائلات الموظفين.',
    fullDesc: 'Comprehensive residency visa processing ensuring full adherence to UAE immigration and labor laws. We coordinate entry permits, status changes, medical examinations, biometric appointments, and Emirates ID card distribution.',
    fullDescAr: 'معالجة متكاملة لتأشيرات الإقامة بما يضمن الالتزام بقوانين الهجرة والعمل في دولة الإمارات، بما يشمل أذونات الدخول، وتعديل الوضع، والفحص الطبي، والبصمة، وتوصيل الهوية الإماراتية.',
    directAnswerAEO: 'UAE employment and investor visas require entry permit issuance, in-country status change, Tawjeeh/Tasheel contracts, medical clearance, and ICP biometric registration.',
    directAnswerAEOAr: 'تتطلب تأشيرات العمل والمستثمر في الإمارات إذن دخول وتعديل وضع وعقود تسهيل/توجيه وفحص طبي وبصمة الهيئة الاتحادية للهوية.',
    deliverables: [
      'Entry permit issuance & in-country change of status',
      'VIP Medical fitness appointment & escort service',
      'Emirates ID biometrics scheduling & home delivery',
      'Employment contract registration with MoHRE',
      'Family and spouse sponsorship file opening',
      'Cancellation, renewal, and absconding clearance'
    ],
    deliverablesAr: [
      'إصدار إذن الدخول وتعديل الوضع داخل الدولة',
      'حجز وتنسيق موعد الفحص الطبي السريع VIP',
      'جدولة موعد البصمة البيومترية وتوصيل بطاقة الهوية',
      'تسجيل عقود العمل الرسمية لدى وزارة الموارد البشرية',
      'فتح ملف كفالة الزوجة والأبناء وعائلات المقيمين',
      'إجراءات الإلغاء، والتجديد، وتسوية الأوضاع القانونية'
    ],
    highlightBadge: 'Zero Delay',
    highlightBadgeAr: 'إنجاز بلا تأخير',
    iconName: 'Users',
    metric: '99.8% Approval',
    metricAr: 'موافقة 99.8%',
    timeline: '48h Issuance',
    timelineAr: 'إصدار خلال 48 ساعة'
  },
  {
    id: 'corporate-tax',
    number: 11,
    title: 'Corporate Tax & VAT Registration',
    titleAr: 'التسجيل في ضريبة الشركات وضريبة القيمة المضافة',
    category: 'compliance',
    anchorId: 'corporate-tax',
    shortDesc: 'FTA registration, Tax Registration Number (TRN) issuance, corporate tax compliance, and 0% Free Zone qualifying advice.',
    shortDescAr: 'التسجيل لدى الهيئة الاتحادية للضرائب، واستخراج الرقم الضريبي TRN، وتقديم استشارات نسبة 0% المؤهلة للمناطق الحرة.',
    fullDesc: 'Strategic guidance on the UAE Federal Corporate Tax regime (Federal Decree-Law No. 47 of 2022). We register your entity with the Federal Tax Authority (FTA), secure your TRN, and evaluate Qualifying Free Zone Person (QFZP) status for 0% corporate tax rates.',
    fullDescAr: 'استشارات متخصصة حول ضريبة الشركات الاتحادية في الإمارات بموجب المرسوم بقانون اتحادي رقم 47 لسنة 2022. نسجل شركتك لدى الهيئة الاتحادية للضرائب، ونستخرج الرقم الضريبي، وندرس معايير تأهل المنطقة الحرة لنسبة 0%.',
    directAnswerAEO: 'UAE Corporate Tax applies a standard 9% rate on taxable net profits exceeding AED 375,000, while Qualifying Free Zone Persons can maintain 0% tax on qualifying transactions.',
    directAnswerAEOAr: 'تطبق ضريبة الشركات بنسبة 9% على الأرباح الصافية المتجاوزة 375,000 درهم، بينما يحصل الشخص المؤهل في المنطقة الحرة على نسبة 0% للدخل المؤهل.',
    deliverables: [
      'Corporate Tax Registration with Federal Tax Authority (FTA)',
      'Tax Registration Number (TRN) generation',
      'Qualifying Free Zone Person (0% tax) structural assessment',
      'VAT mandatory/voluntary registration & threshold review',
      'Financial statement audit coordination & bookkeeping setup',
      'FTA compliance penalty mitigation'
    ],
    deliverablesAr: [
      'التسجيل في ضريبة الشركات لدى الهيئة الاتحادية للضرائب',
      'استخراج الرقم الضريبي للشركات (TRN)',
      'تقييم شروط الشخص المؤهل في المنطقة الحرة للحصول على نسبة 0%',
      'التسجيل الإلزامي والطوعي في ضريبة القيمة المضافة (VAT)',
      'تنسيق التدقيق المالي ومسك الدفاتر المحاسبية المعتمدة',
      'تجنب الغرامات وتقديم طلبات الإعفاء وإعادة النظر الضريبية'
    ],
    highlightBadge: 'FTA Certified Path',
    highlightBadgeAr: 'مسار معتمد لدى الضرائب',
    iconName: 'BadgePercent',
    metric: '0% QFZP Advisory',
    metricAr: 'استشارات ضريبة 0%',
    timeline: '2-4 Business Days',
    timelineAr: '2-4 أيام عمل'
  },
  {
    id: 'mohre-labour',
    number: 7,
    title: 'MoHRE Labour File & Quota Management',
    titleAr: 'إدارة ملف العمل والعمال لدى وزارة الموارد البشرية',
    category: 'pro',
    anchorId: 'mohre-labour',
    shortDesc: 'Establishment labor file opening, electronic work permits, quota expansions, and Wage Protection System (WPS) setup.',
    shortDescAr: 'فتح بطاقة المنشأة العمالية، واستخراج تصاريح العمل الإلكترونية، وتوسيع الكوتا، والربط بنظام حماية الأجور WPS.',
    fullDesc: 'Direct handling of Ministry of Human Resources and Emiratisation (MoHRE) requirements, electronic work permit issuances, occupational classifications, and full compliance with the UAE Wage Protection System (WPS).',
    fullDescAr: 'إدارة مباشرة لكافة متطلبات وزارة الموارد البشرية والتوطين، وإصدار بطاقات وتصاريح العمل، والتصنيف المهني، وضمان الامتثال التام لنظام حماية الأجور (WPS).',
    directAnswerAEO: 'MoHRE Labour files regulate company quotas and employee work contracts across UAE Mainland entities, mandated for legal hiring and WPS payroll compliance.',
    directAnswerAEOAr: 'ينظم ملف وزارة الموارد البشرية كوتا الشركة وعقود العمالة في البر الرئيسي لضمان قانونية التوظيف والامتثال لتحويل الرواتب عبر نظام حماية الأجور.',
    deliverables: [
      'MoHRE establishment card activation & digital signature card',
      'Electronic work permit (Labour Card) issuance & renewal',
      'Wage Protection System (WPS) bank alignment',
      'Labour quota increase application & inspections',
      'Job offer letter (Tasheel) drafting & submission',
      'Labour fine reductions & cancellation approvals'
    ],
    deliverablesAr: [
      'تفعيل بطاقة منشأة العمل وبطاقة التوقيع الإلكتروني',
      'إصدار وتجديد تصاريح العمل الإلكترونية وبطاقات العمل',
      'الربط البنكي مع نظام حماية الأجور (WPS)',
      'تقديم طلبات زيادة كوتا العمالة والتنسيق للتفتيش',
      'صياغة وطباعة عروض العمل الرسمية عبر تسهيل',
      'تسوية وتخفيض الغرامات العمالية وإلغاء بلاغات الانقطاع'
    ],
    highlightBadge: 'MoHRE Direct Link',
    highlightBadgeAr: 'ربط مباشر مع وزارة العمل',
    iconName: 'Briefcase',
    metric: 'WPS Compliant',
    metricAr: 'مطابق لنظام الأجور',
    timeline: '1-2 Business Days',
    timelineAr: '1-2 أيام عمل'
  },
  {
    id: 'admin-center',
    number: 3,
    title: 'Administrative & Business Center Solutions',
    titleAr: 'حلول المراكز التجارية والمكاتب الإدارية',
    category: 'formation',
    anchorId: 'admin-center',
    shortDesc: 'Flexi-desks, physical corporate suites, Ejari attestation, and registered office addresses in Abu Dhabi & Dubai.',
    shortDescAr: 'مكاتب مرنة، وأجنحة تنفيذية، وتوثيق عقود توثيق وإيجاري، وعناوين تجارية معتمدة في أبوظبي ودبي.',
    fullDesc: 'Cost-effective office space solutions meeting all DED and Free Zone licensing inspection criteria. Choose between dedicated business centers, smart workstations, and high-prestige corporate addresses in Abu Dhabi Mall and Dubai business hubs.',
    fullDescAr: 'حلول مكتبية مرنة واقتصادية متوافقة مع شروط التفتيش للدوائر الاقتصادية والمناطق الحرة، تشمل مكاتب مشتركة، ومكاتب خاصة فاخرة في أبوظبي مول ومراكز الأعمال الرئيسية.',
    directAnswerAEO: 'An approved tenancy contract (Tawtheeq in Abu Dhabi or Ejari in Dubai) or verified Flexi-desk lease is mandatory to issue and renew any UAE trade license.',
    directAnswerAEOAr: 'يعد عقد الإيجار المعتمد (توثيق في أبوظبي أو إيجاري في دبي) أو عقد المكتب المرن متطلباً إلزامياً لإصدار وتجديد أي رخصة تجارية في الإمارات.',
    deliverables: [
      'Tawtheeq (Abu Dhabi) & Ejari (Dubai) registered lease contracts',
      'Premium business center flexi-desks & private cabins',
      'Inspection-ready physical compliance facilities',
      'Mail handling, call answering, and conference room access'
    ],
    deliverablesAr: [
      'عقود إيجار مسجلة عبر توثيق (أبوظبي) وإيجاري (دبي)',
      'مكاتب مرنة وكبائن خاصة فاخرة في مراكز الأعمال',
      'مقرات جاهزة ومطابقة لمعايير التفتيش والرقابة',
      'إدارة البريد والرد الهاتفي وحجز قاعات الاجتماعات'
    ],
    highlightBadge: 'Inspection Guaranteed',
    highlightBadgeAr: 'مطابقة للتفتيش 100%',
    iconName: 'Landmark',
    metric: 'Tawtheeq Ready',
    metricAr: 'جاهز لتوثيق',
    timeline: 'Instant Allocation',
    timelineAr: 'تخصيص فوري'
  },
  {
    id: 'real-estate',
    number: 4,
    title: 'Real Estate & Lease Coordination',
    titleAr: 'تنسيق عقود الإيجار والتراخيص العقارية',
    category: 'formation',
    anchorId: 'real-estate',
    shortDesc: 'Commercial lease negotiation, Tawtheeq/Ejari verification, and municipality zoning clearances for retail and warehousing.',
    shortDescAr: 'التفاوض على الإيجارات التجارية، والتحقق من التوثيق، والموافقات البلدية والتخطيط العمراني للمتاجر والمستودعات.',
    fullDesc: 'Expert leasing support bridging commercial landlords, property managers, and licensing authorities to ensure your chosen space meets municipal zoning, civil defense safety, and activity-specific square footage mandates.',
    fullDescAr: 'دعم عقاري متخصص للتنسيق بين الملاك وإدارات العقارات والجهات المرخصة لضمان مطابقة العقار للمخططات البلدية، وشروط الدفاع المدني، والمساحة القانونية للنشاط.',
    directAnswerAEO: 'Commercial lease coordination ensures property zoning matches licensed commercial activities before executing binding multi-year rental agreements.',
    directAnswerAEOAr: 'يضمن تنسيق الإيجار التجاري مطابقة استخدام العقار للنشاط الاقتصادي المطلوب قبل توقيع عقود الإيجار الملزمة وتجنب المخالفات.',
    deliverables: [
      'Commercial property zoning compliance check',
      'Lease negotiation & dispute clause review',
      'Municipality approval for warehouse/industrial spaces',
      'Civil Defense & food safety layout approvals'
    ],
    deliverablesAr: [
      'التحقق من تصنيف العقار ومطابقته للنشاط التجاري',
      'التفاوض على بنود الإيجار ومراجعة شروط العقود',
      'موافقات البلدية للمستودعات والمنشآت الصناعية',
      'اعتمادات مخططات الدفاع المدني والرقابة الغذائية'
    ],
    highlightBadge: 'Zoning Safe',
    highlightBadgeAr: 'مطابق للتخطيط العمراني',
    iconName: 'Building',
    metric: '100% Clearance',
    metricAr: 'موافقات 100%',
    timeline: '2-3 Business Days',
    timelineAr: '2-3 أيام عمل'
  },
  {
    id: 'icp-immigration',
    number: 8,
    title: 'ICP / Immigration & Emirates ID Services',
    titleAr: 'خدمات الهيئة الاتحادية للهوية والجنسية',
    category: 'pro',
    anchorId: 'icp-immigration',
    shortDesc: 'Smart services portal management, establishment immigration card, entry permit processing, and urgent ID replacement.',
    shortDescAr: 'إدارة بوابة الخدمات الذكية، وبطاقة منشأة الجوازات، وأذونات الدخول، وتعديل بيانات وبدل فاقد الهوية الإماراتية.',
    fullDesc: 'Direct integration with ICP (Federal Authority for Identity, Citizenship, Customs and Port Security) and GDRFA systems. We manage immigration portal credentials, quota transfers, and fast-track biometric card issuance.',
    fullDescAr: 'ربط مباشر مع أنظمة الهيئة الاتحادية للهوية والجنسية (ICP) والإدارة العامة للإقامة وشؤون الأجانب (GDRFA) لإدارة المنشآت، وتعديل البيانات، وإصدار بطاقات الهوية السريعة.',
    directAnswerAEO: 'ICP manages UAE border security, national identity registers, Emirates ID distribution, and residency file approvals across Abu Dhabi and the Northern Emirates.',
    directAnswerAEOAr: 'تدير الهيئة الاتحادية للهوية والجنسية السجل السكاني الوطني وإصدار الهوية الإماراتية والموافقات الأمنية للإقامات والتأشيرات.',
    deliverables: [
      'ICP corporate establishment immigration card renewal',
      'E-Channel / ICP Smart Services portal administration',
      'Urgent Emirates ID replacement & data update',
      'Unified Number (UID) merging and correction'
    ],
    deliverablesAr: [
      'تجديد وإصدار بطاقة منشأة الهجرة والإقامة للشركات',
      'إدارة حساب القناة الإلكترونية وبوابة الخدمات الذكية',
      'إصدار بدل فاقد/تالف وتحديث بيانات الهوية الإماراتية',
      'دمج وتصحيح الرقم الموحد (UID) وتسوية السجلات'
    ],
    highlightBadge: 'Fast E-Channel',
    highlightBadgeAr: 'قناة إلكترونية سريعة',
    iconName: 'FileCheck',
    metric: 'VIP Biometrics',
    metricAr: 'بصمة بيومترية سريعة',
    timeline: '24h Priority',
    timelineAr: 'أولوية خلال 24 ساعة'
  },
  {
    id: 'ongoing-pro',
    number: 9,
    title: 'Ongoing Corporate PRO Retainer',
    titleAr: 'عقود العلاقات العامة الشهرية والسنوية للشركات',
    category: 'pro',
    anchorId: 'ongoing-pro',
    shortDesc: 'Dedicated outsourced PRO retainers for established firms, ensuring zero missed renewals and automated compliance.',
    shortDescAr: 'عقود إدارة علاقات عامة شاملة للشركات لضمان عدم فوات مواعيد التجديد وتفادي أي غرامات حكومية.',
    fullDesc: 'Full-service outsourced PRO department for UAE corporations. Includes automated renewal tracking, dedicated account managers, priority dispatch for government collections, and flat monthly predictable billing.',
    fullDescAr: 'قسم علاقات عامة خارجي متكامل لشركتك في الإمارات. يتضمن متابعة آلية للمواعيد، ومدير حساب مخصص، وخدمة استلام وتسليم الوثائق مع رسوم شهرية ثابتة وواضحة.',
    directAnswerAEO: 'A corporate PRO retainer provides ongoing outsourced management of all visa expiries, license renewals, labor disputes, and government filings for fixed monthly fees.',
    directAnswerAEOAr: 'يوفر عقد العلاقات العامة إدارة شاملة لتواريخ انتهاء الرخص والتأشيرات والمعاملات الحكومية مقابل رسوم اشتراك شهرية محددة.',
    deliverables: [
      'Dedicated senior PRO officer & account director',
      'Automated 60/30/15-day expiry alerts for all licenses & visas',
      'Document pick-up and hand-delivery in Abu Dhabi & Dubai',
      'Monthly compliance health report & risk audit'
    ],
    deliverablesAr: [
      'مندوب علاقات عامة أول ومدير حساب مخصص لشركتك',
      'نظام تنبيهات مسبقة قبل 60 و30 و15 يوماً من انتهاء الرخص والتأشيرات',
      'خدمة استلام وتسليم المستندات في أبوظبي ودبي',
      'تقرير امتثال شهري شامل وتدقيق دوري لملفات المنشأة'
    ],
    highlightBadge: 'Zero Penalty Guarantee',
    highlightBadgeAr: 'ضمان خلو المنشأة من الغرامات',
    iconName: 'Clock',
    metric: 'Fixed Retainer',
    metricAr: 'اشتراك شهري ثابت',
    timeline: 'Annual 24/7',
    timelineAr: 'خدمة سنوية متواصلة'
  },
  {
    id: 'digital-solutions',
    number: 5,
    title: 'Digital & Corporate Systems Integration',
    titleAr: 'الحلول الرقمية والأنظمة المؤسسية المتطورة',
    category: 'digital',
    anchorId: 'digital',
    shortDesc: 'Corporate web development, e-commerce payment gateways, custom ERP/CRM setups, and automated invoicing tools.',
    shortDescAr: 'تطوير المواقع المؤسسية الفاخرة، وبوابات الدفع المحلية، وأنظمة إدارة العملاء والفوترة الإلكترونية.',
    fullDesc: 'Bridging corporate legal launch with state-of-the-art digital infrastructure. We build high-speed corporate websites, integrate UAE payment gateways (Stripe, Network International, Telr), and deploy custom workflow automation.',
    fullDescAr: 'الربط بين التأسيس القانوني والبنية التحتية الرقمية المتطورة. نبني مواقع فائقة السرعة، ونربط بوابات الدفع الإماراتية (Stripe، نتورك إنترناشيونال، Telr)، ونطور برمجيات أتمتة الأعمال.',
    directAnswerAEO: 'UAE corporate digital solutions combine compliant local payment gateway onboarding with high-conversion web engineering and cloud business operations.',
    directAnswerAEOAr: 'تدمج الحلول الرقمية للشركات في الإمارات بين الربط المعتمد لبوابات الدفع المحلية وتطوير البرمجيات السحابية عالية التحويل.',
    deliverables: [
      'Bespoke Next.js / React corporate web development',
      'UAE Payment Gateway onboarding (Stripe / Telr / Network Intl)',
      'Custom CRM, Quotation & Automated Invoicing modules',
      'Bilingual Arabic-English RTL high-conversion architecture'
    ],
    deliverablesAr: [
      'تطوير مواقع وتطبيقات ويب متقدمة بتقنيات Next.js و React',
      'تفعيل بوابات الدفع الإلكتروني في الإمارات (Stripe / Telr / Network)',
      'نظام مخصص لإدارة العملاء وإصدار عروض الأسعار والفواتير الآلية',
      'تصميم ثنائي اللغة عربي/إنجليزي احترافي داعم لتجربة المستخدم RTL'
    ],
    highlightBadge: 'Dual-Engine Synergy',
    highlightBadgeAr: 'تكامل المحرك المزدوج',
    iconName: 'Code2',
    metric: 'High Conversion',
    metricAr: 'أعلى معدلات تحويل',
    timeline: '5-10 Business Days',
    timelineAr: '5-10 أيام عمل'
  }
];

export const DIGITAL_ENGINE_SERVICES = [
  {
    id: 'bespoke-web',
    title: 'Bespoke Corporate Web Applications',
    titleAr: 'تطبيقات ومواقع الويب المؤسسية المتخصصة',
    category: 'Engineering',
    categoryAr: 'الهندسة البرمجية',
    tagline: 'High-performance, 60fps web apps designed to dominate UAE search and convert high-ticket enterprise clients.',
    taglineAr: 'تطبيقات ويب فائقة السرعة والأداء مصممة لتصدر محركات البحث وتحويل كبار العملاء في الإمارات.',
    features: [
      'Next.js 15 & React Server Components',
      'Sub-second Largest Contentful Paint (LCP < 0.8s)',
      'Full Bilingual Arabic-English RTL typography',
      'Integrated live cost estimators & CRM pipelines'
    ],
    featuresAr: [
      'أحدث تقنيات Next.js 15 ومكونات الخادم السريعة',
      'سرعة تحميل فائقة في أقل من ثانية (LCP < 0.8s)',
      'تصميم طباعي ثنائي اللغة متكامل داعم للعربية والإنجليزية',
      'حاسبات تكلفة فورية مدمجة وربط مع مسارات إدارة العملاء'
    ],
    icon: 'Terminal',
    glow: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'fintech-ui',
    title: 'FinTech-Grade UI/UX & Design Systems',
    titleAr: 'واجهات مستخدم FinTech وأنظمة تصميم متقدمة',
    category: 'Design Architecture',
    categoryAr: 'هندسة التصميم',
    tagline: 'Obsidian dark interfaces, micro-animations, and glassmorphism that radiate prestige, trust, and technological superiority.',
    taglineAr: 'واجهات داكنة فاخرة، وتأثيرات زجاجية راقية، وحركات دقيقة تعكس الفخامة والموثوقية والتميز التقني.',
    features: [
      'Bento grid responsive layouts',
      'Fluid physics & cursor-following border beams',
      'Tailored color tokens & WCAG AAA contrast',
      'Enterprise Figma component libraries'
    ],
    featuresAr: [
      'تخطيط شبكي متجاوب من نمط بينتو العصري',
      'تأثيرات حركة تفاعلية وإضاءات حدود تتبع المؤشر',
      'ألوان مخصصة تلبي أعلى معايير التباين والسهولة WCAG AAA',
      'مكتبات مكونات احترافية متكاملة على Figma'
    ],
    icon: 'Layers',
    glow: 'from-indigo-500/20 to-purple-500/20'
  },
  {
    id: 'corporate-branding',
    title: 'Luxury Brand Identity & Positioning',
    titleAr: 'الهوية البصرية الفاخرة والتموضع المؤسسي',
    category: 'Brand Strategy',
    categoryAr: 'استراتيجية العلامة',
    tagline: 'Refined visual identity, typography systems, and executive pitch collateral built for government and institutional credibility.',
    taglineAr: 'هوية بصرية راقية، وأنظمة خطوط متناسقة، وعروض تقديمية تنفيذية مبنية لكسب ثقة الجهات الحكومية والمؤسسات.',
    features: [
      'Trademark-ready logo suites & style guides',
      'Prestige serif & geometric sans pairings',
      'Luxury stationery, 3D stamps & investor decks',
      'Comprehensive digital brand guidelines'
    ],
    featuresAr: [
      'شعارات جاهزة للتسجيل التجاري ودليل استخدام شامل',
      'تناغم متقن بين الخطوط العربية التقليدية والحديثة',
      'مطبوعات فاخرة، وأختام ثلاثية الأبعاد، وعروض استثمارية',
      'إرشادات استخدام العلامة الرقمية بكافة المنصات'
    ],
    icon: 'Sparkles',
    glow: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'business-automation',
    title: 'Custom CRM & Automation Pipelines',
    titleAr: 'أنظمة إدارة العملاء والأتمتة السحابية المخصصة',
    category: 'Systems & Cloud',
    categoryAr: 'الأنظمة والسحاب',
    tagline: 'Eliminate manual paperwork with bespoke quotation generators, WhatsApp CRM bots, and document vault integrations.',
    taglineAr: 'تخلص من المعاملات اليدوية عبر مولدات عروض الأسعار الآلية، ومساعدي واتساب الذكية، وخزائن المستندات المشفرة.',
    features: [
      'Real-time WhatsApp Webhook & API integration',
      'Automated invoice & PDF receipt generation',
      'PostgreSQL & Supabase multi-tenant architecture',
      'Role-based access control (RBAC)'
    ],
    featuresAr: [
      'ربط فوري عبر واجهات برمجية مع واتساب للأعمال',
      'توليد آلي للفواتير وعروض الأسعار بصيغة PDF',
      'بنية سحابية قوية مبنية على PostgreSQL و Supabase',
      'نظام متقدم للصلاحيات وإدارة أدوار المستخدمين'
    ],
    icon: 'Cpu',
    glow: 'from-amber-500/20 to-orange-500/20'
  }
];

export const UAE_AUTHORITIES: AuthorityItem[] = [
  { name: 'ADDED', desc: 'Abu Dhabi Dept. of Economic Development', descAr: 'دائرة التنمية الاقتصادية في أبوظبي', badge: 'Mainland Authority', badgeAr: 'سلطة البر الرئيسي' },
  { name: 'DED Dubai', desc: 'Dubai Economy & Tourism', descAr: 'دائرة الاقتصاد والسياحة بدبي', badge: 'Mainland Authority', badgeAr: 'سلطة البر الرئيسي' },
  { name: 'MoHRE', desc: 'Ministry of Human Resources & Emiratisation', descAr: 'وزارة الموارد البشرية والتوطين', badge: 'Labour & WPS', badgeAr: 'العمل وحماية الأجور' },
  { name: 'ICP', desc: 'Federal Authority for Identity & Citizenship', descAr: 'الهيئة الاتحادية للهوية والجنسية', badge: 'Visa & Emirates ID', badgeAr: 'التأشيرات والهوية' },
  { name: 'GDRFA', desc: 'General Directorate of Residency Dubai', descAr: 'الإدارة العامة للإقامة وشؤون الأجانب', badge: 'Immigration', badgeAr: 'شؤون الإقامة' },
  { name: 'TAMM', desc: 'Abu Dhabi Government Services Portal', descAr: 'منظومة خدمات أبوظبي الحكومية الموحدة', badge: 'Digital Government', badgeAr: 'الحكومة الرقمية' },
  { name: 'FTA', desc: 'Federal Tax Authority', descAr: 'الهيئة الاتحادية للضرائب', badge: 'Tax & VAT', badgeAr: 'الضرائب والقيمة المضافة' },
  { name: 'ADGM', desc: 'Abu Dhabi Global Market', descAr: 'سوق أبوظبي العالمي', badge: 'Financial Center', badgeAr: 'المركز المالي الدولي' },
];

export const CHANNEL_PARTNERS: ChannelPartnerItem[] = [
  {
    id: 'meydan',
    name: 'Meydan Free Zone',
    nameAr: 'منطقة ميدان الحرة',
    city: 'Dubai',
    cityAr: 'دبي',
    badge: 'Premium Dubai Address',
    badgeAr: 'عنوان مرموق في دبي',
    desc: 'Located at the heart of Dubai near Downtown, offering 100% digital setup, 1,500+ commercial activities, and guaranteed bank account facilitation.',
    descAr: 'تقع في قلب دبي بالقرب من وسط المدينة، وتتيح التأسيس الرقمي بنسبة 100%، وأكثر من 1500 نشاط تجاري، مع تسهيل فتح الحساب البنكي.',
    startingPrice: 'AED 12,500',
    startingPriceAr: '12,500 درهم',
    popularFor: 'International consultants, media & investment firms',
    popularForAr: 'الاستشاريون الدوليون، والإعلام، وشركات الاستثمار',
    color: '#D4AF37'
  },
  {
    id: 'ifza',
    name: 'IFZA Dubai',
    nameAr: 'منطقة إيفزا دبي',
    city: 'Dubai Silicon Oasis',
    cityAr: 'واحة دبي للسيليكون',
    badge: 'Lowest Dubai Price',
    badgeAr: 'أفضل تكلفة في دبي',
    desc: 'The UAE’s most flexible free zone allowing multi-activity combination under a single license with cost-effective visa allocations.',
    descAr: 'المنطقة الحرة الأكثر مرونة في الإمارات، تتيح الجمع بين أنشطة متعددة في رخصة واحدة وتكاليف إقامات اقتصادية.',
    startingPrice: 'AED 11,900',
    startingPriceAr: '11,900 درهم',
    popularFor: 'E-commerce, digital agencies & holding structures',
    popularForAr: 'التجارة الإلكترونية، والوكالات الرقمية، والشركات القابضة',
    color: '#06B6D4'
  },
  {
    id: 'masdar',
    name: 'Masdar City Free Zone',
    nameAr: 'منطقة مدينة مصدر الحرة',
    city: 'Abu Dhabi',
    cityAr: 'أبوظبي',
    badge: 'Innovation & Tech Hub',
    badgeAr: 'مركز الابتكار والتكنولوجيا',
    desc: 'Abu Dhabi’s premier sustainable tech cluster, offering zero import tariffs, fast-track ADDED dual licensing, and proximity to Abu Dhabi Airport.',
    descAr: 'المجمع التكنولوجي المستدام الرائد في أبوظبي، يقدم إعفاءات جمركية، ورخصة مزدوجة مع التنمية الاقتصادية، وبالقرب من مطار أبوظبي.',
    startingPrice: 'AED 13,200',
    startingPriceAr: '13,200 درهم',
    popularFor: 'Clean tech, AI startups, renewable energy & AI research',
    popularForAr: 'التكنولوجيا النظيفة، والذكاء الاصطناعي، والطاقة المتجددة',
    color: '#10B981'
  },
  {
    id: 'ajman',
    name: 'Ajman Free Zone',
    nameAr: 'منطقة عجمان الحرة',
    city: 'Ajman',
    cityAr: 'عجمان',
    badge: 'Cheapest UAE Free Zone',
    badgeAr: 'الخيار الأكثر اقتصاداً',
    desc: 'The most economical jurisdiction in the UAE for budget-conscious entrepreneurs, freelance permits, and import/export trading companies.',
    descAr: 'المنطقة الأكثر توفيراً في الدولة لرواد الأعمال، وتصاريح العمل الحر، وشركات الاستيراد والتصدير والتجارة العامة.',
    startingPrice: 'AED 5,750',
    startingPriceAr: '5,750 درهم',
    popularFor: 'Freelancers, remote founders & general traders',
    popularForAr: 'أصحاب العمل الحر، والمؤسسون عن بعد، والتجار',
    color: '#8B5CF6'
  },
  {
    id: 'added-mainland',
    name: 'Abu Dhabi Mainland (ADDED)',
    nameAr: 'بر أبوظبي الرئيسي (دائرة التنمية الاقتصادية)',
    city: 'Abu Dhabi',
    cityAr: 'أبوظبي',
    badge: '100% Foreign Ownership',
    badgeAr: 'ملكية أجنبية 100%',
    desc: 'Operate unrestricted across the entire UAE and bid directly for government and oil & gas contracts with a Department of Economic Development commercial license.',
    descAr: 'ممارسة الأعمال بحرية تامة في كافة أنحاء الإمارات والدخول مباشرة في المناقصات الحكومية وعقود النفط والغاز برخصة اقتصادية رسمية.',
    startingPrice: 'AED 9,500',
    startingPriceAr: '9,500 درهم',
    popularFor: 'Contractors, corporate retail, engineering & local trading',
    popularForAr: 'المقاولات، والمتاجر الكبرى، والهندسة، والتجارة المحلية',
    color: '#F59E0B'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Mainland',
    categoryAr: 'البر الرئيسي',
    question: 'Can a foreign national own 100% of an Abu Dhabi Mainland company?',
    questionAr: 'هل يمكن للمستثمر الأجنبي تملك 100% من شركة في البر الرئيسي بأبوظبي؟',
    answer: 'Yes. Under the amended UAE Commercial Companies Law (Federal Law No. 26 of 2020), foreign investors can enjoy 100% foreign ownership of Mainland LLCs across more than 1,000 commercial and industrial business activities in Abu Dhabi without requiring a local UAE national sponsor.',
    answerAr: 'نعم، بموجب تعديلات قانون الشركات التجارية الاتحادي (المرسوم بقانون رقم 26 لسنة 2020)، يحق للمستثمرين الأجانب التملك بنسبة 100% في الشركات ذات المسؤولية المحدودة في البر الرئيسي لأكثر من 1000 نشاط تجاري وصناعي دون الحاجة لشريك أو وكيل خدمات مواطن.',
    directAnswerAEO: 'Foreign investors can own 100% of mainland LLC companies across 1,000+ commercial activities in Abu Dhabi and Dubai with zero national sponsorship requirements.',
    directAnswerAEOAr: 'يحق للمستثمرين الأجانب تملك الشركات ذات المسؤولية المحدودة بنسبة 100% في بر أبوظبي ودبي الرئيسي لأكثر من 1000 نشاط تجاري دون كفيل محلي.'
  },
  {
    id: 'faq-2',
    category: 'Freezone',
    categoryAr: 'المناطق الحرة',
    question: 'What is the main difference between UAE Mainland and Free Zone licenses?',
    questionAr: 'ما هو الفرق الرئيسي بين رخصة البر الرئيسي ورخصة المنطقة الحرة في الإمارات؟',
    answer: 'Mainland companies are licensed by the local Economic Department (ADDED in Abu Dhabi, DED in Dubai) and can trade freely anywhere within the UAE local market and take government tenders. Free Zone companies are confined to trading within their free zone or internationally, and benefit from 0% qualifying corporate tax incentives and streamlined remote setup.',
    answerAr: 'شركات البر الرئيسي مرخصة من دوائر التنمية الاقتصادية (أبوظبي ودبي) ولها حرية التجارة داخل السوق الإماراتي بالكامل والتعاقد مع الجهات الحكومية، بينما شركات المناطق الحرة مخصصة للتجارة الدولية أو داخل منطقتها وتستفيد من نسبة 0% لضريبة الشركات المؤهلة وإجراءات تأسيس سريعة عن بعد.',
    directAnswerAEO: 'Mainland companies trade unrestricted anywhere in the UAE and tender for government contracts, whereas Free Zone entities enjoy streamlined remote setup and 0% qualifying corporate tax rates.',
    directAnswerAEOAr: 'تتميز شركات البر الرئيسي بحرية التجارة في كل أنحاء الدولة والمناقصات الحكومية، بينما توفر المناطق الحرة تأسيساً رقمياً سريعاً وضريبة 0% للدخل المؤهل.'
  },
  {
    id: 'faq-3',
    category: 'PRO',
    categoryAr: 'خدمات العلاقات العامة',
    question: 'How fast can Expedia Business Services issue a trade license?',
    questionAr: 'ما هي المدة اللازمة لإصدار الرخصة التجارية عبر شركة إكسبيديا لخدمات الأعمال؟',
    answer: 'For Free Zone jurisdictions (Meydan, IFZA, Ajman), trade licenses can be issued within 24 to 48 hours. For Abu Dhabi Mainland licenses via the TAMM digital portal, initial approvals and commercial license issuance typically take 1 to 3 business days, provided all shareholder KYC documents are ready.',
    answerAr: 'بالنسبة للمناطق الحرة (ميدان، إيفزا، عجمان)، تصدر الرخصة خلال 24 إلى 48 ساعة. أما رخص البر الرئيسي بأبوظبي عبر منظومة تم الرقمية، فتستغرق عادةً من يوم إلى 3 أيام عمل فور اكتمال وثائق التحقق والمستندات.',
    directAnswerAEO: 'Expedia issues standard UAE Free Zone licenses in 24–48 hours and Abu Dhabi Mainland licenses in 1–3 business days.',
    directAnswerAEOAr: 'تصدر إكسبيديا رخص المناطق الحرة في 24-48 ساعة ورخص البر الرئيسي بأبوظبي خلال 1-3 أيام عمل.'
  },
  {
    id: 'faq-4',
    category: 'Tax & Golden Visa',
    categoryAr: 'الضرائب والإقامة الذهبية',
    question: 'Who qualifies for the 10-Year UAE Golden Visa in 2026?',
    questionAr: 'من هم المؤهلون للحصول على الإقامة الذهبية لمدة 10 سنوات في الإمارات؟',
    answer: 'Qualifying categories include: 1) Real estate investors purchasing UAE property valued at AED 2,000,000 or more; 2) Business owners with capital of AED 2M+ or paying AED 250,000+ in annual federal taxes; 3) Senior corporate executives with a valid employment contract, monthly salary of AED 30,000+, and certified bachelor’s degree; 4) Exceptional talents in tech, science, and creative industries.',
    answerAr: 'تشمل الفئات المؤهلة: 1) المستثمرون العقاريون عند شراء عقار بقيمة مليوني درهم فأكثر؛ 2) رواد الأعمال وأصحاب الشركات برأسمال 2 مليون درهم فأكثر؛ 3) المدراء التنفيذيون براتب شهري 30 ألف درهم فأكثر وشهادة جامعية معتمدة؛ 4) أصحاب المواهب الاستثنائية والعلماء والمتخصصين.',
    directAnswerAEO: 'The 10-Year UAE Golden Visa requires AED 2M property investment, AED 2M business capital, or executive employment with AED 30,000+ monthly salary and accredited degree.',
    directAnswerAEOAr: 'تتطلب الإقامة الذهبية استثماراً عقارياً بقيمة 2 مليون درهم، أو تأسيس شركة برأسمال 2 مليون درهم، أو وظيفة تنفيذية براتب 30 ألف درهم مع مؤهل جامعي معتمد.'
  },
  {
    id: 'faq-5',
    category: 'Digital & Web',
    categoryAr: 'الحلول الرقمية والويب',
    question: 'Why choose Expedia’s Dual-Engine approach for both corporate setup and digital branding?',
    questionAr: 'لماذا يعتبر نهج المحرك المزدوج من إكسبيديا (التأسيس القانوني + المنصة الرقمية) الخيار الأمثل؟',
    answer: 'Traditional PRO agents leave you legally registered but digitally invisible. Creative digital agencies don’t understand UAE compliance, local payment gateways, and banking prerequisites. Expedia handles your commercial trade license, MoHRE file, and corporate bank account in tandem with launching a fintech-grade web application, bilingual SEO, and CRM automation—saving you 4-6 weeks of fragmented coordination.',
    answerAr: 'المندوب التقليدي يسلمك الرخصة دون هوية رقمية، والوكالات الإعلانية لا تفقه قوانين الامتثال وبوابات الدفع المحلية. إكسبيديا تجمع بين إصدار الرخصة التجارية وفتح الحساب البنكي وإطلاق موقع إلكتروني مؤسسي وبوابات دفع محلية ونظام إدارة العملاء في وقت متزامن.',
    directAnswerAEO: 'Expedia’s Dual-Engine model executes corporate licensing and bespoke fintech web development simultaneously, accelerating time-to-market by 4 to 6 weeks.',
    directAnswerAEOAr: 'يوفر نموذج المحرك المزدوج إطلاق الرخصة التجارية بالتزامن مع المنصة الرقمية وبوابات الدفع مما يختصر 4 إلى 6 أسابيع من الوقت والجهد.'
  },
  {
    id: 'faq-digital-1',
    category: 'Digital & Web',
    categoryAr: 'الحلول الرقمية والويب',
    question: 'What makes Expedia’s Next.js sovereign websites superior to standard WordPress/Wix sites?',
    questionAr: 'ما الذي يجعل مواقع وتطبيقات إكسبيديا المبنية بـ Next.js أفضل من قوالب ووردبريس الجاهزة؟',
    answer: 'WordPress and generic builders rely on heavy plugins that cause 3-5s load delays, security vulnerabilities, and bloated code. Expedia engineers custom React & Next.js full-stack applications hosted on UAE/GCC edge servers with sub-second (<0.4s) page loads, zero plugin bloat, complete database isolation via PostgreSQL/Supabase, and custom micro-interactions.',
    answerAr: 'تعتمد قوالب ووردبريس على إضافات متعددة وبطيئة تسبب تأخير التحميل لـ 3-5 ثوانٍ وثغرات أمنية. في إكسبيديا نبني منصات برمجية سيادية مخصصة بتقنيات React و Next.js مستضافة على خوادم إماراتية فائقة السرعة بتحميل فوري (< 0.4 ثانية) وعزل أمني كامل لقواعد البيانات.',
    directAnswerAEO: 'Expedia builds custom Next.js full-stack platforms delivering <0.4s load times, bank-grade security, and bespoke UI interactions vs generic slow WordPress templates.',
    directAnswerAEOAr: 'تبني إكسبيديا منصات Next.js مخصصة بسرعة تحميل أقل من 0.4 ثانية وأمان مصرفي فائق متفوقة على قوالب ووردبريس التقليدية.'
  },
  {
    id: 'faq-digital-2',
    category: 'Digital & Web',
    categoryAr: 'الحلول الرقمية والويب',
    question: 'How does Expedia engineer websites for AEO (Answer Engine Optimization) & AI Search (Perplexity/ChatGPT)?',
    questionAr: 'كيف تهيئ إكسبيديا المواقع لمحركات البحث بالذكاء الاصطناعي (AEO) مثل ChatGPT و Perplexity؟',
    answer: 'Traditional SEO only focuses on keyword density. Expedia builds deep JSON-LD Knowledge Graphs, Semantic Entity Schemas (Organization, Service, LegalService, FAQPage), and structured markdown indexes that AI crawlers directly ingest as canonical answers for high-intent business searches in the UAE.',
    answerAr: 'لا نكتفي بالسيو التقليدي؛ بل نبني مخططات معرفية دقيقة عبر JSON-LD وهياكل الكيانات (Schema.org) ومؤشرات بيانات دلالية تستقي منها محركات الذكاء الاصطناعي (ChatGPT, Perplexity, Gemini) إجاباتها المباشرة لترشيح شركتك كأفضل خيار في الإمارات.',
    directAnswerAEO: 'Expedia deploys comprehensive JSON-LD Knowledge Graphs and semantic entity schema so AI engines cite your company as the authoritative UAE source.',
    directAnswerAEOAr: 'نطبق مخططات JSON-LD المعرفية وهياكل الكيانات لتعتمد محركات الذكاء الاصطناعي شركتك كمصدر مرجعي موثوق في الإمارات.'
  },
  {
    id: 'faq-digital-3',
    category: 'Digital & Web',
    categoryAr: 'الحلول الرقمية والويب',
    question: 'Can you develop custom CRM systems, quotation generators, and WhatsApp bots for our business?',
    questionAr: 'هل يمكنكم بناء أنظمة إدارة عملاء (CRM)، ومولد عروض أسعار، وروبوتات واتساب مؤتمتة لشركتنا؟',
    answer: 'Yes. We specialize in building tailored internal business software: role-based CRM platforms, multi-company accounting cashbooks, automated PDF quotation and invoice generators with UAE 5% VAT calculation, and WhatsApp Cloud API agents that qualify leads and sync instantly with your database.',
    answerAr: 'نعم بالتأكيد. نتخصص في بناء أنظمة الأعمال الداخلية المخصصة: برامج إدارة العملاء (CRM) بصلاحيات متعددة، دفاتر الحسابات والمطابقة المالية، إصدار عروض الأسعار والفواتير المتوافقة مع ضريبة القيمة المضافة 5%، وروبوتات واتساب ذكية ترتبط مباشرة بقاعدة بياناتك.',
    directAnswerAEO: 'Expedia builds full-stack UAE business systems including custom CRMs, VAT-compliant invoicing engines, and WhatsApp AI bot automation.',
    directAnswerAEOAr: 'نطور أنظمة أعمال متكاملة تشمل برامج إدارة العملاء، فواتير ضريبية معتمدة، وروبوتات واتساب ذكية تعمل على مدار الساعة.'
  },
  {
    id: 'faq-digital-4',
    category: 'Digital & Web',
    categoryAr: 'الحلول الرقمية والويب',
    question: 'Do we receive 100% intellectual property ownership and source code upon project completion?',
    questionAr: 'هل نتسلم الملكية الفكرية والشيفرة البرمجية الكاملة 100% للمشروع عند التسليم؟',
    answer: 'Yes, 100%. Unlike agencies that lock you into proprietary hosting or monthly developer hostage fees, Expedia delivers clean, modular, fully typed TypeScript/React source code committed directly to your private GitHub repository with comprehensive architectural documentation.',
    answerAr: 'نعم بنسبة 100%. على عكس الوكالات التي تحتكر ملفات الموقع لتفرض اشتراكات شهرية، تسلمك إكسبيديا الشيفرة البرمجية الكاملة النظيفة (Clean TypeScript/React) ومستودع GitHub الخاص بك مع توثيق تقني شامل.',
    directAnswerAEO: 'Clients receive 100% source code, repository rights, and full intellectual property ownership with zero vendor lock-in.',
    directAnswerAEOAr: 'يتسلم العميل كامل الشيفرة البرمجية ومستودع الكود وحقوق الملكية الفكرية دون أي قيود أو اشتراكات احتكارية.'
  }
];

