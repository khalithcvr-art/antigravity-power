export interface TranslationDictionary {
  navbar: {
    corporateMode: string;
    digitalMode: string;
    corporateSubtitle: string;
    digitalSubtitle: string;
    services: string;
    journey: string;
    jurisdictions: string;
    faq: string;
    contact: string;
    trackStatus: string;
    costEstimator: string;
    whatsappDirect: string;
  };
  hero: {
    corporate: {
      badge: string;
      titleMain: string;
      titleHighlight: string;
      subtitle: string;
      ctaEstimator: string;
      ctaTracker: string;
      stats: {
        ownership: { label: string; value: string };
        turnaround: { label: string; value: string };
        experience: { label: string; value: string };
        hiddenFees: { label: string; value: string };
      };
    };
    digital: {
      badge: string;
      titleMain: string;
      titleHighlight: string;
      subtitle: string;
      ctaStudio: string;
      ctaPortfolio: string;
      stats: {
        sla: { label: string; value: string };
        techStack: { label: string; value: string };
        aiNative: { label: string; value: string };
        speed: { label: string; value: string };
      };
    };
  };
  journey: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    stepBadge: string;
    ctaButton: string;
    steps: Array<{
      number: string;
      title: string;
      subtitle: string;
      timeline: string;
      summary: string;
      details: string[];
      authorityTag: string;
    }>;
  };
  jurisdictions: {
    badge: string;
    title: string;
    titleHighlight: string;
    filterAll: string;
    filterAuh: string;
    filterDxb: string;
    filterAjman: string;
    colJurisdiction: string;
    colTypeCity: string;
    colBaseCost: string;
    colForeignOwnership: string;
    colTurnaround: string;
    colTax: string;
    colAction: string;
    inquireBtn: string;
    learnMore: string;
    calculatorCta: string;
  };
  trustPartners: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    complianceNote: string;
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    headquartersTitle: string;
    headquartersAddress: string;
    country: string;
    phoneTitle: string;
    phoneHours: string;
    emailTitle: string;
    emailResponseTime: string;
    tradeLicenseTitle: string;
    tradeLicenseVal: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    serviceLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    orDirectWhatsApp: string;
    directWhatsAppBtn: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
  };
  footer: {
    bio: string;
    licenseTag: string;
    servicesTitle: string;
    jurisdictionsTitle: string;
    contactTitle: string;
    disclaimerTitle: string;
    disclaimerText: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsOfService: string;
    uaeCompliance: string;
  };
  estimator: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    visaSliderLabel: string;
    step3Title: string;
    step3Desc: string;
    flexiDesk: string;
    flexiDeskDesc: string;
    physicalOffice: string;
    physicalOfficeDesc: string;
    virtualOffice: string;
    virtualOfficeDesc: string;
    step4Title: string;
    taxRegLabel: string;
    taxRegDesc: string;
    goldenVisaLabel: string;
    goldenVisaDesc: string;
    bankLabel: string;
    bankDesc: string;
    digitalBrandingLabel: string;
    digitalBrandingDesc: string;
    summaryTitle: string;
    selectedJurisdiction: string;
    breakdownBase: string;
    breakdownVisas: string;
    breakdownOffice: string;
    breakdownAddons: string;
    breakdownTotal: string;
    totalLabel: string;
    officialGovFees: string;
    whatsappCta: string;
    directCallCta: string;
    disclaimerNote: string;
  };
  tracker: {
    title: string;
    subtitle: string;
    searchLabel: string;
    searchPlaceholder: string;
    searchBtn: string;
    sampleQueries: string;
    statusActive: string;
    statusCompleted: string;
    companyLabel: string;
    jurisdictionLabel: string;
    submittedOn: string;
    estCompletion: string;
    progressLabel: string;
    milestonesTitle: string;
    milestoneAuthority: string;
    milestoneRef: string;
    documentReady: string;
    downloadBtn: string;
    whatsappSupportBtn: string;
    notFoundTitle: string;
    notFoundDesc: string;
  };
  dock: {
    corporate: string;
    digital: string;
    estimator: string;
    tracker: string;
    contact: string;
    whatsapp: string;
  };
}

export const TRANSLATIONS: { en: TranslationDictionary; ar: TranslationDictionary } = {
  en: {
    navbar: {
      corporateMode: "Corporate Setup",
      digitalMode: "Digital Studio",
      corporateSubtitle: "UAE Licensing & PRO Services",
      digitalSubtitle: "Fintech & Web Engineering",
      services: "Services",
      journey: "How It Works",
      jurisdictions: "Jurisdictions",
      faq: "FAQ",
      contact: "Contact",
      trackStatus: "Track Live Application",
      costEstimator: "Cost Estimator",
      whatsappDirect: "WhatsApp Us"
    },
    hero: {
      corporate: {
        badge: "Official UAE Business Setup & Corporate PRO Architecture",
        titleMain: "Empowering Enterprises Across Abu Dhabi & Dubai",
        titleHighlight: "With 100% Foreign Ownership & Swift Turnaround",
        subtitle: "Expedia Business & Services L.L.C delivers turnkey business incorporation across ADDED Mainland, DED Dubai, and premier UAE Free Zones. Complete licensing, Golden Visas, and banking under Trade License CN-6307408.",
        ctaEstimator: "Instant Cost Calculator",
        ctaTracker: "Track Live Application",
        stats: {
          ownership: { label: "Foreign Ownership", value: "100%" },
          turnaround: { label: "License Turnaround", value: "24–48h" },
          experience: { label: "Corporate Experience", value: "12+ Yrs" },
          hiddenFees: { label: "Hidden Charges", value: "AED 0" }
        }
      },
      digital: {
        badge: "High-Performance Digital Engineering & AI Workflows",
        titleMain: "Building Sovereign Web Apps & AI Automation",
        titleHighlight: "Engineered for High-Growth UAE Businesses",
        subtitle: "From React/Next.js client portals to automated WhatsApp AI customer agents and secure cloud infrastructure, Expedia Digital Studio crafts enterprise-grade digital products.",
        ctaStudio: "Explore Digital Solutions",
        ctaPortfolio: "View Tech Capabilities",
        stats: {
          sla: { label: "Deployment Speed", value: "Sub-Second" },
          techStack: { label: "Modern Architecture", value: "Full-Stack" },
          aiNative: { label: "AI Workflows", value: "Automated" },
          speed: { label: "Uptime & Performance", value: "99.9%" }
        }
      }
    },
    journey: {
      badge: "Turnkey UAE Formation Roadmap",
      title: "The 3-Step Setup Journey:",
      titleHighlight: "From Concept to Operational Entity",
      subtitle: "A frictionless, fintech-grade progression engineered to eliminate bureaucratic latency and deliver your active commercial license, residence visas, and corporate bank account in record time.",
      stepBadge: "Step",
      ctaButton: "Calculate Your Setup Cost",
      steps: [
        {
          number: "01",
          title: "Jurisdiction & License Structuring",
          subtitle: "Mainland vs. Free Zone Activity Matrix",
          timeline: "24–48 Hours",
          summary: "Selection of optimal legal form, trade name reservation with ADDED or DED, and structuring Memorandum of Association (MoA) for 100% foreign ownership.",
          details: [
            "Strategic evaluation: Abu Dhabi Mainland, Dubai Mainland, or Free Zones (Meydan, IFZA, Masdar, Ajman)",
            "Trade name clearance and initial security approval generation",
            "Electronic MoA drafting compliant with UAE Commercial Companies Law",
            "Commercial, Professional, or Tech Activity code selection"
          ],
          authorityTag: "ADDED / DED / Freezone Authorities"
        },
        {
          number: "02",
          title: "Document Clearance & Corporate PRO",
          subtitle: "Statutory Government & Labour Liaison",
          timeline: "48–72 Hours",
          summary: "Executing all government ministry filings through TAMM, MoHRE, and ICP smart portals with full digital clearance and quota allocations.",
          details: [
            "Electronic notarization of MoA via UAE Pass & Judicial Dept",
            "Trade license issuance and commercial register certificate",
            "MoHRE establishment card file opening & WPS payroll setup",
            "ICP Immigration establishment card and quota authorization"
          ],
          authorityTag: "MoHRE / ICP / TAMM"
        },
        {
          number: "03",
          title: "Digital Brand Launch & Banking",
          subtitle: "Residency Visas, Tier-1 Banking & Web App",
          timeline: "3–5 Business Days",
          summary: "VIP residency visa stamping, corporate bank account onboarding, and simultaneous deployment of your fintech-grade digital presence.",
          details: [
            "VIP medical fitness test & Emirates ID biometric screening",
            "10-Year Golden Visa or standard investor residency stamping",
            "Corporate bank account onboarding (Emirates NBD, Wio, Mashreq)",
            "Fintech-grade bilingual web platform & local payment gateway launch"
          ],
          authorityTag: "ICP / UAE Central Bank / Expedia Studio"
        }
      ]
    },
    jurisdictions: {
      badge: "AEO Structured Comparative Matrix",
      title: "Mainland vs. Free Zone",
      titleHighlight: "Jurisdiction Decision Engine",
      filterAll: "All Hubs",
      filterAuh: "Abu Dhabi",
      filterDxb: "Dubai",
      filterAjman: "Ajman",
      colJurisdiction: "Jurisdiction & Authority",
      colTypeCity: "Type / City",
      colBaseCost: "Base Fee (AED)",
      colForeignOwnership: "Foreign Ownership",
      colTurnaround: "Turnaround",
      colTax: "Corporate Tax",
      colAction: "Direct Action",
      inquireBtn: "Inquire on WhatsApp",
      learnMore: "View License Details",
      calculatorCta: "Estimate Exact Custom Quote"
    },
    trustPartners: {
      badge: "Government & Banking Ecosystem",
      title: "Authorized Government Liaisons &",
      titleHighlight: "Tier-1 UAE Banking Partners",
      subtitle: "Expedia Business & Services operates with direct integration into federal and local UAE administrative portals and major financial institutions.",
      complianceNote: "All corporate transactions are conducted under UAE Federal Decree Law No. (32) of 2021 on Commercial Companies."
    },
    contact: {
      badge: "Abu Dhabi Corporate Headquarters",
      title: "Initiate Your UAE",
      titleHighlight: "Corporate Advisory",
      subtitle: "Connect directly with our senior PRO specialists and formation architects at our Abu Dhabi Mall headquarters or via dedicated instant WhatsApp channel.",
      headquartersTitle: "Headquarters Address",
      headquartersAddress: "Haibu, Level 1, Abu Dhabi Mall, Abu Dhabi, UAE",
      country: "United Arab Emirates",
      phoneTitle: "Direct Telephone / Hotline",
      phoneHours: "Mon - Sat: 8:30 AM - 6:00 PM (GST)",
      emailTitle: "Official Corporate Email",
      emailResponseTime: "Guaranteed Response within 2 Hours",
      tradeLicenseTitle: "Trade License / Commercial Registry",
      tradeLicenseVal: "CN-6307408 (Abu Dhabi DED Verified)",
      formTitle: "Submit Direct Inquiry",
      formSubtitle: "Receive a tailored corporate breakdown and quotation within 2 business hours.",
      nameLabel: "Full Name / Organization",
      namePlaceholder: "e.g. John Doe / Global Tech FZ",
      phoneLabel: "Phone / WhatsApp Number",
      phonePlaceholder: "+971 5X XXX XXXX",
      emailLabel: "Corporate Email Address",
      emailPlaceholder: "name@company.com",
      serviceLabel: "Required Service Category",
      messageLabel: "Project Details / Specific Requirements",
      messagePlaceholder: "Describe your intended business activity, visa count, and timeline...",
      submitBtn: "Send Consultation Request",
      orDirectWhatsApp: "Need instant assistance? Connect with our senior consultant directly on WhatsApp:",
      directWhatsAppBtn: "Chat Directly on WhatsApp (+971 58 5858 816)",
      successTitle: "Inquiry Successfully Dispatched!",
      successMessage: "Thank you for contacting Expedia Business and Services L.L.C. Our senior corporate advisor has received your details and will connect shortly.",
      sendAnother: "Submit Another Request"
    },
    footer: {
      bio: "Expedia Business and Services L.L.C is a premier UAE business setup, corporate PRO, Golden Visa, and enterprise software engineering firm operating under Trade License CN-6307408.",
      licenseTag: "Licensed & Regulated in Abu Dhabi, United Arab Emirates",
      servicesTitle: "Corporate Services",
      jurisdictionsTitle: "Popular Free Zones & Mainland",
      contactTitle: "Contact & Head Office",
      disclaimerTitle: "Regulatory Disclaimer",
      disclaimerText: "Expedia Business and Services L.L.C is an independent corporate service provider registered in Abu Dhabi. Official government fees are subject to statutory revisions by respective licensing departments (ADDED, DED, ICP, MoHRE).",
      allRightsReserved: "All Rights Reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      uaeCompliance: "UAE Commercial Law Compliance"
    },
    estimator: {
      title: "Interactive UAE License & Setup Cost Estimator",
      subtitle: "Live regulatory calculation based on 2026 official UAE government tariffs.",
      step1Title: "1. Select Jurisdiction & Hub",
      step1Desc: "Choose between Mainland (unrestricted UAE market) or leading Free Zones.",
      step2Title: "2. Investor & Employee Visa Allocation",
      step2Desc: "Include residence visas, VIP medical tests, and Emirates ID biometric processing.",
      visaSliderLabel: "Number of Residence Visas:",
      step3Title: "3. Office Space & Facility Solutions",
      step3Desc: "Select your commercial address format required for license verification.",
      flexiDesk: "Smart Desk / Flexi-Desk (Included in FZ)",
      flexiDeskDesc: "Shared workspace address suitable for 1-3 visa quotas.",
      physicalOffice: "Dedicated Physical Office Lease",
      physicalOfficeDesc: "Private commercial office with customized Tawtheeq / Ejari lease.",
      virtualOffice: "Virtual Corporate Address",
      virtualOfficeDesc: "Registered prestige address for business communications & banking.",
      step4Title: "4. Corporate Add-ons & Compliance",
      taxRegLabel: "Corporate Tax & Federal VAT Registration (FTA)",
      taxRegDesc: "Mandatory corporate tax TRN generation and compliance filing setup.",
      goldenVisaLabel: "10-Year UAE Golden Visa Fast-Track Upgrade",
      goldenVisaDesc: "VIP nomination and long-term residency processing for executive/investor.",
      bankLabel: "Guaranteed Corporate Bank Account Introduction",
      bankDesc: "Fast-tracked account opening with Emirates NBD, Wio Bank, or Mashreq Neo.",
      digitalBrandingLabel: "Bespoke Digital Brand Suite & Bilingual Website",
      digitalBrandingDesc: "Custom modern website, Google Workspace setup, and brand identity.",
      summaryTitle: "Investment Summary & Breakdown",
      selectedJurisdiction: "Selected Jurisdiction:",
      breakdownBase: "Base Commercial License & Approvals",
      breakdownVisas: "Residence Visas & VIP Medical/EID",
      breakdownOffice: "Commercial Office & Tawtheeq/Ejari",
      breakdownAddons: "Selected Compliance & Bank Add-ons",
      breakdownTotal: "Total Estimated Investment:",
      totalLabel: "Total Estimated Investment",
      officialGovFees: "Includes government fee allocations and standard processing fees.",
      whatsappCta: "Lock In Quote on WhatsApp",
      directCallCta: "Speak to Formation Specialist",
      disclaimerNote: "Final invoice figures are subject to exact activity codes and external department approvals (MOE, Civil Defense, DOH) if applicable."
    },
    tracker: {
      title: "Live UAE Corporate Application Tracker",
      subtitle: "Track real-time progress across ADDED, DED, ICP, and MoHRE smart portals.",
      searchLabel: "Enter Reference or Tracking Number:",
      searchPlaceholder: "e.g. EXP-AUH-2026, EXP-MEY-9014...",
      searchBtn: "Track Application",
      sampleQueries: "Try sample reference numbers: EXP-AUH-2026 (Mainland) or EXP-MEY-9014 (Freezone)",
      statusActive: "In Progress",
      statusCompleted: "Approved & Completed",
      companyLabel: "Registered Entity Name",
      jurisdictionLabel: "Licensing Jurisdiction",
      submittedOn: "Submission Date",
      estCompletion: "Estimated Completion",
      progressLabel: "Overall Application Progress",
      milestonesTitle: "Statutory Milestone Audit Log",
      milestoneAuthority: "Issuing Authority:",
      milestoneRef: "Reference No:",
      documentReady: "Official Document Ready for Download",
      downloadBtn: "Download Verified PDF",
      whatsappSupportBtn: "Inquire About This File on WhatsApp",
      notFoundTitle: "Record Not Found",
      notFoundDesc: "No active application matches this reference. Please check your tracking number or contact your assigned PRO consultant."
    },
    dock: {
      corporate: "Corporate Setup",
      digital: "Digital Studio",
      estimator: "Cost Calculator",
      tracker: "Status Tracker",
      contact: "Get in Touch",
      whatsapp: "Chat on WhatsApp"
    }
  },
  ar: {
    navbar: {
      corporateMode: "تأسيس الشركات",
      digitalMode: "الاستوديو الرقمي",
      corporateSubtitle: "تراخيص الأعمال وخدمات العلاقات العامة",
      digitalSubtitle: "هندسة البرمجيات والحلول الذكية",
      services: "خدماتنا",
      journey: "خطوات التأسيس",
      jurisdictions: "المناطق والتراخيص",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
      trackStatus: "تتبع حالة المعاملة",
      costEstimator: "حاسبة التكاليف",
      whatsappDirect: "تواصل عبر واتساب"
    },
    hero: {
      corporate: {
        badge: "تأسيس الشركات المعتمد في الإمارات وخدمات العلاقات العامة المؤسسية",
        titleMain: "تمكين الشركات في أبوظبي ودبي",
        titleHighlight: "بملكية أجنبية 100% وسرعة إنجاز قياسية",
        subtitle: "تقدم إكسبيديا للأعمال والخدمات ذ.م.م حلولاً متكاملة لتأسيس الشركات في البر الرئيسي (دائرة التنمية الاقتصادية بأبوظبي ودبي) وأبرز المناطق الحرة، مع استخراج الإقامات الذهبية وفتح الحسابات المصرفية بموجب الرخصة التجارية CN-6307408.",
        ctaEstimator: "حاسبة التكاليف الفورية",
        ctaTracker: "تتبع حالة معاملتك مباشرة",
        stats: {
          ownership: { label: "الملكية الأجنبية", value: "100%" },
          turnaround: { label: "إصدار الرخصة", value: "24–48 ساعة" },
          experience: { label: "سنوات الخبرة", value: "+12 عاماً" },
          hiddenFees: { label: "رسوم خفية", value: "0 درهم" }
        }
      },
      digital: {
        badge: "هندسة البرمجيات المتقدمة وأنظمة الذكاء الاصطناعي",
        titleMain: "بناء تطبيقات الويب الحديثة وحلول الأتمتة",
        titleHighlight: "مصممة خصيصاً للشركات الرائدة في دولة الإمارات",
        subtitle: "من بوابات العملاء ولوحات التحكم المتطورة إلى روبوتات خدمة العملاء الذكية عبر واتساب، يصمم استوديو إكسبيديا الرقمي منتجات رقمية فائقة الأداء.",
        ctaStudio: "استكشف الحلول الرقمية",
        ctaPortfolio: "معاينة القدرات التقنية",
        stats: {
          sla: { label: "سرعة الاستجابة", value: "فورية" },
          techStack: { label: "البنية البرمجية", value: "حديثة ومتكاملة" },
          aiNative: { label: "أتمتة الأعمال", value: "مدعومة بالذكاء الاصطناعي" },
          speed: { label: "جاهزية واستقرار", value: "99.9%" }
        }
      }
    },
    journey: {
      badge: "خارطة طريق تأسيس الأعمال في الإمارات",
      title: "رحلة تأسيس شركتك في 3 خطوات:",
      titleHighlight: "من الفكرة إلى شركة قائمة وقانونية بالكامل",
      subtitle: "مسار سلس وخالٍ من التعقيدات مصمم لتوفير رخصتك التجارية الفعالة، وتأشيرات الإقامة، وحسابك البنكي المؤسسي في وقت قياسي.",
      stepBadge: "المرحلة",
      ctaButton: "احسب تكلفة تأسيس شركتك الآن",
      steps: [
        {
          number: "01",
          title: "هيكلة الرخصة والمنطقة القضائية",
          subtitle: "المقارنة بين البر الرئيسي والمناطق الحرة",
          timeline: "24–48 ساعة",
          summary: "اختيار الشكل القانوني الأمثل، وحجز الاسم التجاري لدى دائرة التنمية الاقتصادية، وصياغة عقد التأسيس بملكية أجنبية 100%.",
          details: [
            "التقييم الاستراتيجي: بر أبوظبي الرئيسي، بر دبي، أو المناطق الحرة (ميدان، إفزا، مصدر، عجمان)",
            "حجز الاسم التجاري والحصول على الموافقة الأمنية المبدئية",
            "صياغة عقد التأسيس الإلكتروني المعتمد وفق قانون الشركات التجارية الإماراتي",
            "تحديد الأنشطة التجارية أو المهنية أو الصناعية المناسبة"
          ],
          authorityTag: "اقتصادية أبوظبي / اقتصادية دبي / سلطات المناطق الحرة"
        },
        {
          number: "02",
          title: "تخليص المعاملات الحكومية والعلاقات العامة (PRO)",
          subtitle: "التنسيق مع الوزارات وسوق العمل",
          timeline: "48–72 ساعة",
          summary: "تنفيذ وتوثيق كافة المعاملات عبر بوابات 'تم'، وزارة الموارد البشرية والتوطين، والهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ.",
          details: [
            "التوثيق الإلكتروني لعقد التأسيس عبر الهوية الرقمية (UAE Pass) ودائرة القضاء",
            "إصدار الرخصة التجارية الرسمية وشهادة السجل التجاري",
            "فتح ملف بطاقة المنشأة بوزارة الموارد البشرية ونظام حماية الأجور (WPS)",
            "إصدار بطاقة منشأة الهجرة واعتماد حصص التأشيرات"
          ],
          authorityTag: "وزارة الموارد البشرية / الهيئة الاتحادية للهوية / منصة تم"
        },
        {
          number: "03",
          title: "إصدار الإقامات وفتح الحساب البنكي والهوية الرقمية",
          subtitle: "تأشيرات الإقامة، الحسابات المصرفية، وبناء المنصة الرقمية",
          timeline: "3–5 أيام عمل",
          summary: "إصدار تأشيرات الإقامة للمستثمرين والموظفين، فتح الحساب البنكي التجاري، وإطلاق موقعك الإلكتروني الاحترافي.",
          details: [
            "الفحص الطبي السريع (VIP) وتبصيم الهوية الإماراتية",
            "إصدار الإقامة الذهبية لمدة 10 سنوات أو إقامة المستثمر والشريك",
            "فتح الحساب البنكي التجاري مع كبرى البنوك (بنك الإمارات دبي الوطني، بنك ويو، بنك المشرق)",
            "إطلاق الموقع الإلكتروني وبوابات الدفع الإلكتروني المحلية لشركتك"
          ],
          authorityTag: "الهيئة الاتحادية للهوية / مصرف الإمارات المركزي / استوديو إكسبيديا"
        }
      ]
    },
    jurisdictions: {
      badge: "مصفوفة مقارنة المناطق الاقتصادية",
      title: "البر الرئيسي مقابل المناطق الحرة",
      titleHighlight: "محرك اختيار المنطقة الأنسب لأعمالك",
      filterAll: "كافة المناطق",
      filterAuh: "أبوظبي",
      filterDxb: "دبي",
      filterAjman: "عجمان",
      colJurisdiction: "المنطقة والجهة المنظمة",
      colTypeCity: "النوع / الإمارة",
      colBaseCost: "الرسوم الأساسية (درهم)",
      colForeignOwnership: "الملكية الأجنبية",
      colTurnaround: "مدة الإنجاز",
      colTax: "ضريبة الشركات",
      colAction: "الإجراء المباشر",
      inquireBtn: "استفسر عبر واتساب",
      learnMore: "عرض تفاصيل الترخيص",
      calculatorCta: "احسب التكلفة المخصصة لشركتك"
    },
    trustPartners: {
      badge: "المنظومة الحكومية والمصرفية",
      title: "الجهات الحكومية المعتمدة و",
      titleHighlight: "الشركاء المصرفيون الرائدون في الإمارات",
      subtitle: "تعمل شركة إكسبيديا للأعمال والخدمات عبر تكامل رقمي مباشر مع المنصات الاتحادية والمحلية وكبرى المؤسسات المالية في الدولة.",
      complianceNote: "تتم كافة المعاملات والتوثيقات بموجب المرسوم بقانون اتحادي رقم (32) لسنة 2021 بشأن الشركات التجارية في دولة الإمارات."
    },
    contact: {
      badge: "المقر الرئيسي في أبوظبي",
      title: "ابدأ استشارتك لتأسيس",
      titleHighlight: "أعمالك في الإمارات اليوم",
      subtitle: "تواصل مباشرة مع كبار مستشاري التأسيس والعلاقات العامة في مقرنا بأبوظبي مول أو عبر خدمة المحادثة المباشرة على واتساب.",
      headquartersTitle: "عنوان المقر الرئيسي",
      headquartersAddress: "هايبو، الطابق الأول، أبوظبي مول، أبوظبي، الإمارات",
      country: "دولة الإمارات العربية المتحدة",
      phoneTitle: "الهاتف المباشر / الخط الساخن",
      phoneHours: "الإثنين - السبت: 8:30 صباحاً - 6:00 مساءً (توقيت الإمارات)",
      emailTitle: "البريد الإلكتروني الرسمي",
      emailResponseTime: "استجابة مضمونة خلال ساعتي عمل",
      tradeLicenseTitle: "رقم الرخصة التجارية / السجل التجاري",
      tradeLicenseVal: "CN-6307408 (معتمدة من اقتصادية أبوظبي)",
      formTitle: "إرسال طلب استشارة فورية",
      formSubtitle: "احصل على عرض أسعار وتفصيل كامل لمتطلبات رخصتك التجارية خلال ساعتين.",
      nameLabel: "الاسم الكامل / اسم الشركة",
      namePlaceholder: "مثال: محمد الشامسي / شركة الابتكار التقني",
      phoneLabel: "رقم الهاتف / واتساب",
      phonePlaceholder: "+971 5X XXX XXXX",
      emailLabel: "البريد الإلكتروني للعمل",
      emailPlaceholder: "name@company.ae",
      serviceLabel: "الخدمة المطلوبة",
      messageLabel: "تفاصيل المشروع والأنشطة المخطط لها",
      messagePlaceholder: "اذكر نوع النشاط التجاري، عدد الإقامات المطلوبة، والجدول الزمني المستهدف...",
      submitBtn: "إرسال طلب الاستشارة",
      orDirectWhatsApp: "هل تفضل الرد الفوري؟ تحدث مباشرة مع مستشارنا عبر واتساب:",
      directWhatsAppBtn: "محادثة فورية عبر واتساب (+971 58 5858 816)",
      successTitle: "تم استلام طلبك بنجاح!",
      successMessage: "شكراً لتواصلك مع إكسبيديا للأعمال والخدمات ذ.م.م. سيقوم أحد كبار مستشارينا بالتواصل معك وتزويدك بالخطة الكاملة.",
      sendAnother: "إرسال طلب آخر"
    },
    footer: {
      bio: "شركة إكسبيديا للأعمال والخدمات ذ.م.م هي شركة رائدة في تأسيس الشركات، خدمات العلاقات العامة، الإقامة الذهبية، وتطوير الحلول البرمجية الذكية بموجب الرخصة التجارية CN-6307408.",
      licenseTag: "مرخصة ومعتمدة في أبوظبي، دولة الإمارات العربية المتحدة",
      servicesTitle: "خدمات التأسيس والشركات",
      jurisdictionsTitle: "أبرز المناطق الحرة والبر الرئيسي",
      contactTitle: "الاتصال والمقر الرئيسي",
      disclaimerTitle: "إخلاء مسؤولية تنظيمي",
      disclaimerText: "إكسبيديا للأعمال والخدمات ذ.م.م هي شركة خدمات مؤسسية مستقلة مسجلة في أبوظبي. تخضع الرسوم الحكومية الرسمية للتحديثات الصادرة عن الجهات الحكومية المعنية (اقتصادية أبوظبي، اقتصادية دبي، الهيئة الاتحادية للهوية، وزارة الموارد البشرية).",
      allRightsReserved: "جميع الحقوق محفوظة.",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      uaeCompliance: "الامتثال لقوانين الشركات في الإمارات"
    },
    estimator: {
      title: "حاسبة تكاليف تأسيس الشركات في الإمارات",
      subtitle: "حساب فوري وتفاعلي وفق أحدث التعرفات الحكومية الرسمية لعام 2026.",
      step1Title: "1. اختيار المنطقة والجهة المصدرة",
      step1Desc: "اختر بين البر الرئيسي (حرية التجارة بكافة أرجاء الدولة) أو أبرز المناطق الحرة.",
      step2Title: "2. تحديد عدد تأشيرات الإقامة للمستثمرين والموظفين",
      step2Desc: "تشمل الإقامة، الفحص الطبي السريع VIP، وبطاقة الهوية الإماراتية.",
      visaSliderLabel: "عدد تأشيرات الإقامة المطلوبة:",
      step3Title: "3. خيارات مقر العمل والمساحات المكتبية",
      step3Desc: "حدد نوع العنوان التجاري المطلوب لاستيفاء اشتراطات إصدار الرخصة (توثيق / إيجاري).",
      flexiDesk: "المكتب المرن / المساحة المشتركة (مشمول بالمناطق الحرة)",
      flexiDeskDesc: "عنوان مكتب مشترك مناسب للأنشطة الرقمية وحصص التأشيرات من 1 إلى 3.",
      physicalOffice: "مكتب فعلي خاص (عقد إيجار مخصص)",
      physicalOfficeDesc: "مساحة مكتبية مستقلة مع عقد توثيق / إيجاري معتمد.",
      virtualOffice: "عنوان مؤسسي افتراضي",
      virtualOfficeDesc: "عنوان مسجل مرموق للمراسلات الرسمية وفتح الحساب البنكي.",
      step4Title: "4. الخدمات الإضافية والامتثال الضريبي والمصرفي",
      taxRegLabel: "التسجيل في ضريبة الشركات وضريبة القيمة المضافة (الهيئة الاتحادية للضرائب)",
      taxRegDesc: "استخراج الرقم الضريبي وإعداد ملف الامتثال المالي للشركة.",
      goldenVisaLabel: "ترقية الإقامة إلى الإقامة الذهبية لمدة 10 سنوات (VIP)",
      goldenVisaDesc: "ترشيح فوري وإصدار الإقامة الذهبية للمستثمرين والمديرين التنفيذيين.",
      bankLabel: "فتح الحساب البنكي التجاري المضمون",
      bankDesc: "تسهيل وتسريع فتح الحساب لدى بنك الإمارات دبي الوطني، بنك ويو، أو بنك المشرق.",
      digitalBrandingLabel: "باقة الهوية الرقمية وموقع الويب ثنائي اللغة",
      digitalBrandingDesc: "تصميم موقع إلكتروني احترافي، إعداد البريد المؤسسي، وهوية بصرية كاملة.",
      summaryTitle: "ملخص الاستثمار وتفصيل التكاليف",
      selectedJurisdiction: "المنطقة المختارة:",
      breakdownBase: "رسوم الرخصة التجارية والموافقات المبدئية",
      breakdownVisas: "تأشيرات الإقامة والفحص الطبي والهوية",
      breakdownOffice: "المقر التجاري وعقد التوثيق / الإيجاري",
      breakdownAddons: "الخدمات الإضافية والامتثال البنكي المختار",
      breakdownTotal: "إجمالي الاستثمار التقديري:",
      totalLabel: "إجمالي الاستثمار التقديري",
      officialGovFees: "يشمل المخصصات الحكومية ورسوم المعاملات القياسية.",
      whatsappCta: "تثبيت عرض الأسعار عبر واتساب",
      directCallCta: "التحدث مع مستشار تأسيس الشركات",
      disclaimerNote: "تخضع الأرقام النهائية للموافقة على الأنشطة المحددة وموافقات الجهات الخارجية (وزارة الاقتصاد، الدفاع المدني، دائرة الصحة) إن وجدت."
    },
    tracker: {
      title: "نظام تتبع المعاملات والرخص التجارية المباشر",
      subtitle: "تتبع فوري لمراحل المعاملة عبر بوابات اقتصادية أبوظبي، دبي، الهيئة الاتحادية، ووزارة العمل.",
      searchLabel: "أدخل رقم المعاملة أو الرمز المرجعي:",
      searchPlaceholder: "مثال: EXP-AUH-2026 أو EXP-MEY-9014...",
      searchBtn: "تتبع المعاملة",
      sampleQueries: "جرّب الأرقام المرجعية التجريبية: EXP-AUH-2026 (بر رئيسي) أو EXP-MEY-9014 (منطقة حرة)",
      statusActive: "قيد الإجراء والمعالجة",
      statusCompleted: "تم الاعتماد والإصدار",
      companyLabel: "اسم الشركة والمنشأة",
      jurisdictionLabel: "الجهة والمنطقة القضائية",
      submittedOn: "تاريخ التقديم",
      estCompletion: "التاريخ المتوقع للإنجاز",
      progressLabel: "نسبة اكتمال المعاملة",
      milestonesTitle: "سجل مراحل المعاملة والاعتمادات الرسمية",
      milestoneAuthority: "الجهة المصدرة:",
      milestoneRef: "الرقم المرجعي:",
      documentReady: "المستند الرسمي جاهز للتحميل",
      downloadBtn: "تحميل المستند المعتمد (PDF)",
      whatsappSupportBtn: "الاستفسار عن هذا الملف عبر واتساب",
      notFoundTitle: "لم يتم العثور على المعاملة",
      notFoundDesc: "لا يوجد طلب نشط بهذا الرقم المرجعي. يرجى التأكد من الرقم أو التواصل مع مسؤول العلاقات العامة المخصص لملفك."
    },
    dock: {
      corporate: "تأسيس الشركات",
      digital: "الاستوديو الرقمي",
      estimator: "حاسبة التكاليف",
      tracker: "تتبع المعاملة",
      contact: "اتصل بنا",
      whatsapp: "محادثة واتساب"
    }
  }
};
