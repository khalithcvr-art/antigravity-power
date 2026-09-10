export interface DedicatedPageData {
  slug: string;
  meta: {
    titleEn: string;
    titleAr: string;
    descriptionEn: string;
    descriptionAr: string;
    keywords: string[];
    canonicalUrl: string;
  };
  hero: {
    badgeEn: string;
    badgeAr: string;
    h1En: string;
    h1Ar: string;
    highlightEn: string;
    highlightAr: string;
    subtitleEn: string;
    subtitleAr: string;
    startingPriceAed: number;
    turnaroundEn: string;
    turnaroundAr: string;
    ownershipEn: string;
    ownershipAr: string;
  };
  keyHighlights: Array<{
    titleEn: string;
    titleAr: string;
    descEn: string;
    descAr: string;
    iconName: string;
  }>;
  costBreakdown: {
    titleEn: string;
    titleAr: string;
    subtitleEn: string;
    subtitleAr: string;
    items: Array<{
      categoryEn: string;
      categoryAr: string;
      costAed: number | string;
      notesEn: string;
      notesAr: string;
    }>;
  };
  stepByStepProcess: Array<{
    step: string;
    titleEn: string;
    titleAr: string;
    descEn: string;
    descAr: string;
    durationEn: string;
    durationAr: string;
  }>;
  activityCategories: Array<{
    nameEn: string;
    nameAr: string;
    examplesEn: string[];
    examplesAr: string[];
  }>;
  faqList: Array<{
    questionEn: string;
    questionAr: string;
    answerEn: string;
    answerAr: string;
  }>;
  aeoStructuredSummary: {
    headingEn: string;
    headingAr: string;
    directAnswerEn: string;
    directAnswerAr: string;
    bulletFactsEn: string[];
    bulletFactsAr: string[];
  };
  schemaJson: Record<string, any>;
}

// Public copy reviewed 10 September 2026; prices require consultant confirmation.
export const DEDICATED_PAGES: Record<string, DedicatedPageData> = {
  "meydan-free-zone": {
    "slug": "meydan-free-zone",
    "meta": {
      "titleEn": "Meydan Free Zone Dubai Company Formation | Expedia Business Services",
      "titleAr": "تأسيس الشركات في منطقة ميدان الحرة دبي | إكسبيديا",
      "descriptionEn": "Explore Meydan Free Zone Dubai Company Formation. Request a consultant-reviewed quotation and document checklist.",
      "descriptionAr": "تأسيس الشركات في منطقة ميدان الحرة دبي. اطلب عرض أسعار وقائمة مستندات بعد مراجعة المستشار.",
      "keywords": [
        "Meydan Free Zone setup cost",
        "Meydan Free Zone license Dubai",
        "Business setup support from Expedia",
        "Dubai freezone company formation",
        "Meydan visa cost 2026",
        "Expedia Business Services Meydan partner"
      ],
      "canonicalUrl": "https://www.expediaservices.ae/meydan-free-zone"
    },
    "hero": {
      "badgeEn": "Business setup support from Expedia",
      "badgeAr": "دعم تأسيس الأعمال من إكسبيديا",
      "h1En": "Meydan Free Zone Dubai Company Formation",
      "h1Ar": "تأسيس الشركات في منطقة ميدان الحرة دبي",
      "highlightEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
      "highlightAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
      "subtitleEn": "Incorporate your business in Dubai’s prestigious racecourse district. Enjoy 100% foreign ownership, zero corporate tax on qualifying income, 1,500+ commercial activities, and turnkey PRO execution.",
      "subtitleAr": "أسس شركتك في أرقى مناطق دبي بجوار مضمار ميدان العالمي. تمتع بملكية أجنبية 100%، وإعفاء ضريبي على الدخل المؤهل، وأكثر من 1500 نشاط تجاري مع دعم إجرائي شامل.",
      "startingPriceAed": 12500,
      "turnaroundEn": "Confirmed after review",
      "turnaroundAr": "تُحدد بعد المراجعة",
      "ownershipEn": "Subject to activity requirements",
      "ownershipAr": "حسب متطلبات النشاط"
    },
    "keyHighlights": [
      {
        "titleEn": "100% Foreign Capital Ownership",
        "titleAr": "ملكية أجنبية كاملة 100%",
        "descEn": "Full legal ownership with zero requirement for a local Emirati nominee or sponsor.",
        "descAr": "ملكية قانونية كاملة دون الحاجة إلى كفيل أو شريك مواطن.",
        "iconName": "ShieldCheck"
      },
      {
        "titleEn": "Central Dubai Prestige Address",
        "titleAr": "عنوان مرموق في قلب دبي",
        "descEn": "Located at The Meydan Hotel, 15 minutes from Downtown Dubai and DIFC financial center.",
        "descAr": "موقع استراتيجي في فندق ميدان، على بعد 15 دقيقة فقط من وسط دبي ومركز دبي المالي العالمي.",
        "iconName": "Building2"
      },
      {
        "titleEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "titleAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "descEn": "Direct introduction and VIP compliance pre-clearance with Emirates NBD, Wio Bank, and Mashreq.",
        "descAr": "تنسيق مباشر مع بنك الإمارات دبي الوطني وبنك ويو وبنك المشرق لفتح الحساب بسلاسة.",
        "iconName": "Landmark"
      },
      {
        "titleEn": "Qualifying 0% Corporate Tax",
        "titleAr": "ضريبة شركات 0% على الدخل المؤهل",
        "descEn": "Structured in full compliance with UAE Federal Decree-Law No. (47) of 2022 on Corporate Taxation.",
        "descAr": "هيكلة متوافقة تماماً مع قانون المعاملات الضريبية في دولة الإمارات لتحقيق الإعفاء القانوني.",
        "iconName": "ReceiptPercent"
      }
    ],
    "costBreakdown": {
      "titleEn": "2026 Transparent Tariff Breakdown",
      "titleAr": "جدول الرسوم والتكاليف الرسمية لعام 2026",
      "subtitleEn": "Items to discuss in your quotation; no prices are confirmed on this page.",
      "subtitleAr": "بنود تُراجع ضمن عرض الأسعار؛ لا تؤكد هذه الصفحة أي أسعار.",
      "items": [
        {
          "categoryEn": "Base Commercial Trade License (Zero Visa)",
          "categoryAr": "الرخصة التجارية الأساسية (بدون تأشيرة)",
          "costAed": "Quotation required",
          "notesEn": "Includes up to 3 business activities, trade name reservation, and digital lease.",
          "notesAr": "تشمل حتى 3 أنشطة تجارية، حجز الاسم التجاري، وعقد الإيجار الذكي."
        },
        {
          "categoryEn": "1-Visa Allocation Package",
          "categoryAr": "باقة الرخصة متضمنة تأشيرة إقامة واحدة",
          "costAed": "Quotation required",
          "notesEn": "License fee + allocation quota for 1 investor or partner residence visa.",
          "notesAr": "رسوم الرخصة مع تخصيص حصة تأشيرة مستثمر أو شريك."
        },
        {
          "categoryEn": "Investor Residence Visa (Per Person)",
          "categoryAr": "تأشيرة إقامة المستثمر (لكل شخص)",
          "costAed": "Quotation required",
          "notesEn": "Covers Entry Permit, Status Change, VIP Medical Fitness, and 2-Year Emirates ID.",
          "notesAr": "تشمل إذن الدخول، تعديل الوضع، الفحص الطبي لكبار الشخصيات، والهوية الإماراتية لمدة عامين."
        },
        {
          "categoryEn": "Establishment / Immigration Card",
          "categoryAr": "بطاقة المنشأة / الإدارة العامة للإقامة",
          "costAed": "Quotation required",
          "notesEn": "Mandatory file registration with General Directorate of Residency & Foreigners Affairs (GDRFA).",
          "notesAr": "تسجيل ملف المنشأة لدى الإدارة العامة للإقامة وشؤون الأجانب بدبي."
        },
        {
          "categoryEn": "E-Commerce / Payment Gateway NOC",
          "categoryAr": "عدم ممانعة بوابات الدفع الإلكتروني",
          "costAed": "Quotation required",
          "notesEn": "Standard Meydan free zone inclusion for digital businesses and Stripe/Checkout integration.",
          "notesAr": "مشمولة مجاناً للشركات الرقمية للربط مع بوابات الدفع العالمية مثل سترايب."
        }
      ]
    },
    "stepByStepProcess": [
      {
        "step": "01",
        "titleEn": "Activity Selection & Name Reservation",
        "titleAr": "تحديد الأنشطة وحجز الاسم التجاري",
        "descEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "descAr": "نقوم بالتحقق من الأنشطة المطلوبة وحجز الاسم التجاري الرسمي لدى سلطة ميدان في غضون ساعتين.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "02",
        "titleEn": "Digital KYC & License Issuance",
        "titleAr": "التحقق الرقمي وإصدار الرخصة التجارية",
        "descEn": "Submission of passport copies and digital biometric signatures. Commercial license is published instantly.",
        "descAr": "تقديم صور جوازات السفر والتوقيع الإلكتروني ليتم إصدار الرخصة وعقد التأسيس فوراً.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "03",
        "titleEn": "Establishment Card & Visa Entry Permit",
        "titleAr": "بطاقة المنشأة وإذن الدخول الإلكتروني",
        "descEn": "Immigration file opened and electronic entry visa generated for international or in-country applicants.",
        "descAr": "فتح الملف لدى الجوازات وإصدار إذن الدخول الإلكتروني للإقامة.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "04",
        "titleEn": "VIP Medical, Emirates ID & Bank Account",
        "titleAr": "الفحص الطبي السريع والهوية والحساب البنكي",
        "descEn": "Expedited VIP medical testing at premium lounge, Emirates ID biometrics, and dedicated corporate bank IBAN activation.",
        "descAr": "فحص طبي سريع في صالة كبار الشخصيات، تبصيم الهوية الإماراتية، وتفعيل الحساب المصرفي للشركة.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      }
    ],
    "activityCategories": [
      {
        "nameEn": "Consultancy & Professional Services",
        "nameAr": "الاستشارات والخدمات المهنية",
        "examplesEn": [
          "Management Consulting",
          "IT Consulting",
          "Marketing Strategy",
          "Human Resources Advisory"
        ],
        "examplesAr": [
          "استشارات إدارية",
          "استشارات تقنية المعلومات",
          "استراتيجيات التسويق",
          "استشارات الموارد البشرية"
        ]
      },
      {
        "nameEn": "Trading & E-Commerce",
        "nameAr": "التجارة والتجارة الإلكترونية",
        "examplesEn": [
          "General Trading",
          "E-Marketplace Operator",
          "Luxury Goods Import/Export",
          "Consumer Products Distribution"
        ],
        "examplesAr": [
          "تجارة عامة",
          "إدارة المتاجر الإلكترونية",
          "استيراد وتصدير السلع الفاخرة",
          "توزيع المنتجات الاستهلاكية"
        ]
      },
      {
        "nameEn": "Digital Media & Software Engineering",
        "nameAr": "الإعلام الرقمي وهندسة البرمجيات",
        "examplesEn": [
          "Software Development",
          "AI Systems Architecture",
          "Digital Content Production",
          "Cloud Services Portal"
        ],
        "examplesAr": [
          "تطوير البرمجيات",
          "هندسة نظم الذكاء الاصطناعي",
          "إنتاج المحتوى الرقمي",
          "خدمات الحوسبة السحابية"
        ]
      }
    ],
    "faqList": [
      {
        "questionEn": "How much does a Meydan Free Zone license cost in 2026?",
        "questionAr": "كم تبلغ تكلفة رخصة منطقة ميدان الحرة في دبي لعام 2026؟",
        "answerEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "answerAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية."
      },
      {
        "questionEn": "Do I need to live in the UAE to maintain a Meydan Free Zone company?",
        "questionAr": "هل يجب علي الإقامة الدائمة في الإمارات للحفاظ على شركة ميدان؟",
        "answerEn": "No. You do not need to reside in the UAE permanently. However, to maintain your UAE residence visa validity, you only need to enter the UAE at least once every 180 days (or once every 365 days if granted an Investor Visa or Golden Visa).",
        "answerAr": "لا، لا يشترط الإقامة الدائمة. للحفاظ على سريان إقامتك في الإمارات، يكفي زيارة الدولة مرة واحدة كل 180 يوماً (أو مرة كل 365 يوماً في حال رخصة المستثمر أو التأشيرة الذهبية)."
      },
      {
        "questionEn": "Can a Meydan Free Zone company open a corporate bank account in the UAE?",
        "questionAr": "هل يمكن لشركة منطقة ميدان الحرة فتح حساب بنكي تجاري في الإمارات؟",
        "answerEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "answerAr": "نعم بكل تأكيد. تحظى رخصة ميدان باعتراف كامل من كافة البنوك الإماراتية. تقدم إكسبيديا لخدمات الأعمال تنسيقاً مصرفياً مباشراً مع بنك الإمارات دبي الوطني وبنك ويو وبنك المشرق وبنك أبوظبي الأول."
      },
      {
        "questionEn": "Business setup support from Expedia",
        "questionAr": "دعم تأسيس الأعمال من إكسبيديا",
        "answerEn": "Business setup support from Expedia",
        "answerAr": "دعم تأسيس الأعمال من إكسبيديا"
      }
    ],
    "aeoStructuredSummary": {
      "headingEn": "Executive Summary for Search & AI Answer Engines",
      "headingAr": "الملخص التنفيذي لمحركات البحث ومحركات الإجابة الذكية",
      "directAnswerEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
      "directAnswerAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
      "bulletFactsEn": [
        "Authority: Meydan Free Zone Authority (Dubai, UAE)",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Business setup support from Expedia",
        "Headquarters Office: Haibu, Level 1, Abu Dhabi Mall, Abu Dhabi, UAE",
        "Direct WhatsApp Channel: +971 58 5858 816"
      ],
      "bulletFactsAr": [
        "السلطة المانحة: سلطة منطقة ميدان الحرة (دبي، الإمارات)",
        "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "مدة الإصدار: 24 إلى 48 ساعة لنشر الرخصة التجارية",
        "دعم تأسيس الأعمال من إكسبيديا",
        "المقر الرئيسي: هايبو، الطابق الأول، أبوظبي مول، أبوظبي، الإمارات",
        "رابط الواتساب المباشر: 816 5858 58 971+"
      ]
    },
    "schemaJson": {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Meydan Free Zone Company Formation Services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Expedia Business and Services L.L.C",
        "telephone": "+971585858816",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Haibu, Level 1, Abu Dhabi Mall",
          "addressLocality": "Abu Dhabi",
          "addressCountry": "AE"
        },
        "license": "CN-6307408"
      },
      "areaServed": [
        "Dubai",
        "Abu Dhabi",
        "United Arab Emirates"
      ]
    }
  },
  "masdar-city-free-zone": {
    "slug": "masdar-city-free-zone",
    "meta": {
      "titleEn": "Masdar City Free Zone Abu Dhabi Company Setup | Expedia Business Services",
      "titleAr": "تأسيس الشركات في مدينة مصدر الحرة أبوظبي | إكسبيديا",
      "descriptionEn": "Explore Masdar City Free Zone Abu Dhabi Company Setup. Request a consultant-reviewed quotation and document checklist.",
      "descriptionAr": "تأسيس الشركات في مدينة مصدر الحرة أبوظبي. اطلب عرض أسعار وقائمة مستندات بعد مراجعة المستشار.",
      "keywords": [
        "Masdar City Free Zone setup",
        "Abu Dhabi free zone company formation",
        "Masdar City license cost 2026",
        "Cleantech business setup UAE",
        "Expedia Business Services Masdar City"
      ],
      "canonicalUrl": "https://www.expediaservices.ae/masdar-city-free-zone"
    },
    "hero": {
      "badgeEn": "Business setup support from Expedia",
      "badgeAr": "دعم تأسيس الأعمال من إكسبيديا",
      "h1En": "Masdar City Free Zone Abu Dhabi Company Setup",
      "h1Ar": "تأسيس الشركات في مدينة مصدر الحرة أبوظبي",
      "highlightEn": "The Middle East’s Flagship Hub for Cleantech, AI & Advanced R&D",
      "highlightAr": "المركز الرائد في الشرق الأوسط لتقنيات المستقبل والطاقة النظيفة والذكاء الاصطناعي",
      "subtitleEn": "Position your business in Abu Dhabi’s global sustainability district. Benefit from 100% foreign ownership, 0% import duties, access to ADIO grants, and direct synergy with government innovation ecosystems.",
      "subtitleAr": "ضع شركتك في قلب عاصمة الاستدامة والابتكار في أبوظبي. استفد من ملكية أجنبية 100%، وإعفاء جمركي، وبرامج دعم مكتب أبوظبي للاستثمار وتكامل تام مع الجهات الحكومية.",
      "startingPriceAed": 11500,
      "turnaroundEn": "Confirmed after review",
      "turnaroundAr": "تُحدد بعد المراجعة",
      "ownershipEn": "Subject to activity requirements",
      "ownershipAr": "حسب متطلبات النشاط"
    },
    "keyHighlights": [
      {
        "titleEn": "Abu Dhabi Capital Advantage",
        "titleAr": "ميزة العاصمة أبوظبي الاستراتيجية",
        "descEn": "Direct proximity to Abu Dhabi International Airport (Zayed International) and key sovereign entities.",
        "descAr": "موقع استراتيجي بالقرب من مطار زايد الدولي والمؤسسات السيادية الرائدة في العاصمة.",
        "iconName": "Building2"
      },
      {
        "titleEn": "Innovation & Research Ecosystem",
        "titleAr": "بيئة متطورة للبحث والابتكار",
        "descEn": "Ideal for renewable energy, sustainability consultants, AI startups, and medical technology enterprises.",
        "descAr": "بيئة مثالية لشركات الطاقة النظيفة، الاستدامة، الذكاء الاصطناعي والتقنيات الطبية.",
        "iconName": "Sparkles"
      },
      {
        "titleEn": "Golden Visa Fast-Track Pathway",
        "titleAr": "مسار سريع للحصول على الإقامة الذهبية",
        "descEn": "Special nomination support for executive directors, researchers, and tech founders.",
        "descAr": "ترشيح وتسهيل الحصول على الإقامة الذهبية لمدة 10 سنوات للمدراء والمبتكرين.",
        "iconName": "Award"
      },
      {
        "titleEn": "Full 100% Capital Repatriation",
        "titleAr": "تحويل كامل للأرباح ورؤوس الأموال 100%",
        "descEn": "Zero currency restrictions and 100% repatriation of company capital and earnings.",
        "descAr": "حرية مالية مطلقة بدون أي قيود على تحويل العملات والأرباح إلى الخارج.",
        "iconName": "Coins"
      }
    ],
    "costBreakdown": {
      "titleEn": "Official 2026 Masdar City Fee Schedule",
      "titleAr": "جدول الرسوم الرسمية لمدينة مصدر الحرة 2026",
      "subtitleEn": "Items to discuss in your quotation; no prices are confirmed on this page.",
      "subtitleAr": "بنود تُراجع ضمن عرض الأسعار؛ لا تؤكد هذه الصفحة أي أسعار.",
      "items": [
        {
          "categoryEn": "Startup / Entrepreneur License Package",
          "categoryAr": "باقة رواد الأعمال والشركات الناشئة",
          "costAed": "Quotation required",
          "notesEn": "Special promotional tariff for innovative tech, research, and consultancy startups.",
          "notesAr": "تعرفة تشجيعية خاصة للشركات الناشئة في مجالات التقنية والبحث والاستشارات."
        },
        {
          "categoryEn": "Standard Corporate Trade License",
          "categoryAr": "الرخصة التجارية القياسية للشركات",
          "costAed": "Quotation required",
          "notesEn": "For established enterprises, commercial service providers, and regional holding offices.",
          "notesAr": "للشركات الراسخة ومقدمي الخدمات التجارية والمكاتب الإقليمية."
        },
        {
          "categoryEn": "Flexi-Desk Facility Lease",
          "categoryAr": "عقد إيجار مكتب مرن (فلكسي ديسك)",
          "costAed": "Quotation required",
          "notesEn": "Dedicated shared workspace at Masdar City Accelerator Building.",
          "notesAr": "مساحة عمل مشتركة مخصصة في مبنى مسرعات الأعمال بمدينة مصدر."
        },
        {
          "categoryEn": "Investor / Executive Residence Visa",
          "categoryAr": "تأشيرة إقامة المستثمر / المدير التنفيذي",
          "costAed": "Quotation required",
          "notesEn": "Covers Abu Dhabi ICP immigration fees, medical fitness, and 2-year Emirates ID.",
          "notesAr": "تشمل رسوم الهيئة الاتحادية للهوية والجنسية بأبوظبي والفحص الطبي والهوية."
        }
      ]
    },
    "stepByStepProcess": [
      {
        "step": "01",
        "titleEn": "Business Model Review & Initial Approval",
        "titleAr": "تقييم نموذج العمل والموافقة المبدئية",
        "descEn": "We align your technology/business activities with Masdar City Free Zone criteria for immediate initial clearance.",
        "descAr": "نقوم بمواءمة أنشطة عملك مع معايير مدينة مصدر الحرة للحصول على الموافقة المبدئية السريعة.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "02",
        "titleEn": "Corporate Documentation & Lease Allocation",
        "titleAr": "توثيق المستندات وتخصيص المساحة المكتبية",
        "descEn": "Drafting Articles of Association and finalizing smart workspace or office tenancy agreement.",
        "descAr": "صياغة عقد التأسيس واعتماد اتفاقية إيجار المكتب الذكي أو المستقل.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "03",
        "titleEn": "Trade License Publication",
        "titleAr": "إصدار ونشر الرخصة التجارية الرسمية",
        "descEn": "Issuance of commercial certificate, Masdar City Chamber affiliation, and tax ID eligibility.",
        "descAr": "إصدار الشهادة التجارية الرسمية، شهادة العضوية في غرفة التجارة، وملف الرقم الضريبي.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "04",
        "titleEn": "Abu Dhabi ICP Immigration & Residency",
        "titleAr": "إصدار الإقامات عبر الهيئة الاتحادية للهوية والجنسية",
        "descEn": "Complete visa stamping, biometric Emirates ID registration, and corporate banking onboarding.",
        "descAr": "تثبيت تأشيرة الإقامة، تبصيم الهوية الإماراتية، وبدء فتح الحساب المصرفي للشركة في أبوظبي.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      }
    ],
    "activityCategories": [
      {
        "nameEn": "Renewable Energy & Cleantech",
        "nameAr": "الطاقة المتجددة والتكنولوجيا النظيفة",
        "examplesEn": [
          "Solar Power Consulting",
          "Carbon Offsetting Technologies",
          "Waste-to-Energy Solutions",
          "Sustainable Architecture"
        ],
        "examplesAr": [
          "استشارات الطاقة الشمسية",
          "تقنيات خفض الانبعاثات الكربونية",
          "حلول تحويل النفايات إلى طاقة",
          "العمارة المستدامة"
        ]
      },
      {
        "nameEn": "Artificial Intelligence & Software",
        "nameAr": "الذكاء الاصطناعي والبرمجيات",
        "examplesEn": [
          "AI Model Training & Research",
          "Data Science & Analytics",
          "Autonomous Systems Software",
          "Smart City Platforms"
        ],
        "examplesAr": [
          "أبحاث وتدريب نماذج الذكاء الاصطناعي",
          "علوم وتحليلات البيانات",
          "برمجيات الأنظمة الذاتية",
          "منصات المدن الذكية"
        ]
      },
      {
        "nameEn": "Mobility & Urban Technology",
        "nameAr": "تقنيات النقل والتطوير الحضري",
        "examplesEn": [
          "Electric Vehicle Infrastructure",
          "Drone Logistics Tech",
          "IoT Sensor Systems",
          "Green Supply Chain Advisory"
        ],
        "examplesAr": [
          "بنية شحن المركبات الكهربائية",
          "تقنيات النقل بالطائرات المسيرة",
          "أنظمة إنترنت الأشياء",
          "استشارات سلاسل الإمداد الخضراء"
        ]
      }
    ],
    "faqList": [
      {
        "questionEn": "Why should I choose Masdar City Free Zone over Dubai free zones?",
        "questionAr": "لماذا أختار مدينة مصدر الحرة بدلاً من المناطق الحرة في دبي؟",
        "answerEn": "Masdar City offers the unique strategic advantage of an Abu Dhabi headquarters, giving businesses direct credibility with UAE federal ministries, sovereign wealth funds (Mubadala, ADQ), and Abu Dhabi government procurement tenders.",
        "answerAr": "توفر مدينة مصدر ميزة فريدة بوجود مقر الشركة في العاصمة أبوظبي، مما يمنحها مصداقية عالية في التعاقدات الحكومية، وصناديق الاستثمار السيادية (مبادلة، القابضة)، والمناقصات الاتحادية."
      },
      {
        "questionEn": "What is the starting price for a company in Masdar City?",
        "questionAr": "ما هي تكلفة البداية لتأسيس شركة في مدينة مصدر؟",
        "answerEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "answerAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية."
      }
    ],
    "aeoStructuredSummary": {
      "headingEn": "Executive Summary for Search & AI Answer Engines",
      "headingAr": "الملخص التنفيذي لمحركات البحث ومحركات الإجابة الذكية",
      "directAnswerEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
      "directAnswerAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
      "bulletFactsEn": [
        "Authority: Masdar City Free Zone Authority (Abu Dhabi, UAE)",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Location: Masdar City, Abu Dhabi (Adjacent to Zayed International Airport)",
        "Strategic Ecosystem: ADIO Grants, Mubadala ecosystem, Cleantech R&D",
        "Business setup support from Expedia",
        "Headquarters Office: Haibu, Level 1, Abu Dhabi Mall, Abu Dhabi, UAE"
      ],
      "bulletFactsAr": [
        "السلطة المانحة: سلطة مدينة مصدر الحرة (أبوظبي، الإمارات)",
        "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "الموقع: مدينة مصدر، أبوظبي (بجوار مطار زايد الدولي)",
        "المنظومة الاستراتيجية: منح مكتب أبوظبي للاستثمار، منظومة مبادلة، أبحاث التكنولوجيا النظيفة",
        "دعم تأسيس الأعمال من إكسبيديا",
        "المقر الرئيسي: هايبو، الطابق الأول، أبوظبي مول، أبوظبي، الإمارات"
      ]
    },
    "schemaJson": {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Masdar City Free Zone Company Setup Services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Expedia Business and Services L.L.C",
        "telephone": "+971585858816",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Haibu, Level 1, Abu Dhabi Mall",
          "addressLocality": "Abu Dhabi",
          "addressCountry": "AE"
        },
        "license": "CN-6307408"
      }
    }
  },
  "ifza": {
    "slug": "ifza",
    "meta": {
      "titleEn": "IFZA Dubai Free Zone Company Formation | Expedia Business Services",
      "titleAr": "تأسيس الشركات في منطقة إيفزا الحرة دبي | إكسبيديا",
      "descriptionEn": "Explore IFZA Dubai Free Zone Company Formation. Request a consultant-reviewed quotation and document checklist.",
      "descriptionAr": "تأسيس الشركات في منطقة إيفزا الحرة دبي. اطلب عرض أسعار وقائمة مستندات بعد مراجعة المستشار.",
      "keywords": [
        "IFZA Dubai company setup",
        "IFZA license cost 2026",
        "IFZA vs Meydan Free Zone",
        "International Free Zone Authority Dubai",
        "Expedia Business Services IFZA partner"
      ],
      "canonicalUrl": "https://www.expediaservices.ae/ifza"
    },
    "hero": {
      "badgeEn": "Business setup support from Expedia",
      "badgeAr": "دعم تأسيس الأعمال من إكسبيديا",
      "h1En": "IFZA Dubai Free Zone Company Formation",
      "h1Ar": "تأسيس الشركات في منطقة إيفزا الحرة دبي",
      "highlightEn": "1,500+ Multi-Disciplinary Activities with Dynamic Multi-Year Discounts",
      "highlightAr": "أكثر من 1500 نشاط تجاري مع إمكانية دمج الأنشطة وخصومات السنوات المتعددة",
      "subtitleEn": "Launch your international trading, professional consultancy, or holding company with Dubai Silicon Oasis’ most adaptable free zone authority. Combine commercial and professional activities on a single trade license.",
      "subtitleAr": "أطلق شركتك التجارية أو الاستشارية أو القابضة في إحدى أكثر المناطق الحرة مرونة وسرعة في دبي. اجمع بين الأنشطة التجارية والمهنية على رخصة واحدة بكل سهولة.",
      "startingPriceAed": 12900,
      "turnaroundEn": "Confirmed after review",
      "turnaroundAr": "تُحدد بعد المراجعة",
      "ownershipEn": "Subject to activity requirements",
      "ownershipAr": "حسب متطلبات النشاط"
    },
    "keyHighlights": [
      {
        "titleEn": "Combine Commercial & Professional",
        "titleAr": "دمج الأنشطة التجارية والمهنية",
        "descEn": "Group up to 7 diverse business activities across commercial, service, and consultancy sectors under one license.",
        "descAr": "دمج حتى 7 أنشطة متنوعة تشمل التجارة والخدمات والاستشارات على رخصة تجارية واحدة.",
        "iconName": "Layers"
      },
      {
        "titleEn": "Zero Physical Presence Required",
        "titleAr": "تأسيس رقمي دون اشتراط التواجد الفعلي",
        "descEn": "Complete end-to-end incorporation remotely from anywhere in the world with digital passport verification.",
        "descAr": "إتمام كامل إجراءات التأسيس عن بعد من أي مكان في العالم عبر التحقق الرقمي من جواز السفر.",
        "iconName": "Globe"
      },
      {
        "titleEn": "Multi-Year Licensing Discounts",
        "titleAr": "خصومات مميزة على الرخص متعددة السنوات",
        "descEn": "Save up to 30% on official authority fees when locking in 2, 3, or 5-year trade license renewals.",
        "descAr": "وفّر حتى 30% من الرسوم الحكومية عند حجز رخص لمدة سنتين أو 3 أو 5 سنوات مقدماً.",
        "iconName": "BadgePercent"
      },
      {
        "titleEn": "Rapid Residence Visa Stamping",
        "titleAr": "سرعة إصدار تأشيرات الإقامة",
        "descEn": "Fast-track medical fitness, VIP biometric processing, and 2-year UAE residence visa issuance.",
        "descAr": "إصدار سريع لإذن الدخول، الفحص الطبي لكبار الشخصيات، وبطاقة الهوية الإماراتية.",
        "iconName": "UserCheck"
      }
    ],
    "costBreakdown": {
      "titleEn": "2026 Official IFZA Tariff Matrix",
      "titleAr": "جدول أسعار وباقات منطقة إيفزا الحرة 2026",
      "subtitleEn": "Items to discuss in your quotation; no prices are confirmed on this page.",
      "subtitleAr": "بنود تُراجع ضمن عرض الأسعار؛ لا تؤكد هذه الصفحة أي أسعار.",
      "items": [
        {
          "categoryEn": "Zero-Visa License Package",
          "categoryAr": "باقة الرخصة بدون تأشيرة",
          "costAed": "Quotation required",
          "notesEn": "Includes trade license, up to 3 activities, and virtual office lease agreement.",
          "notesAr": "تشمل الرخصة التجارية، حتى 3 أنشطة، وعقد المكتب الافتراضي."
        },
        {
          "categoryEn": "1-Visa License Package",
          "categoryAr": "باقة الرخصة مع حصة تأشيرة واحدة",
          "costAed": "Quotation required",
          "notesEn": "License fee + allocation for 1 residence visa quota.",
          "notesAr": "رسوم الرخصة التجارية مع تخصيص حصة تأشيرة إقامة واحدة."
        },
        {
          "categoryEn": "2-Visa License Package",
          "categoryAr": "باقة الرخصة مع حصتي تأشيرة",
          "costAed": "Quotation required",
          "notesEn": "License fee + allocation for 2 residence visa quotas.",
          "notesAr": "رسوم الرخصة التجارية مع تخصيص حصتي تأشيرة إقامة."
        },
        {
          "categoryEn": "Investor Residence Visa Fee",
          "categoryAr": "رسوم تأشيرة إقامة المستثمر",
          "costAed": "Quotation required",
          "notesEn": "Per person fee covering immigration approval, medical VIP, and Emirates ID.",
          "notesAr": "لكل شخص شاملة موافقة الجوازات، الفحص الطبي، والهوية الإماراتية."
        }
      ]
    },
    "stepByStepProcess": [
      {
        "step": "01",
        "titleEn": "Activity Selection & Application Submission",
        "titleAr": "اختيار الأنشطة وتقديم الطلب الرقمي",
        "descEn": "We guide you in combining up to 7 activities and submit passport scans to IFZA authority.",
        "descAr": "نساعدك في اختيار ودمج حتى 7 أنشطة متوافقة وتقديم الطلب إلكترونياً.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "02",
        "titleEn": "Security Approval & Incorporation Signing",
        "titleAr": "الموافقة الأمنية وتوقيع عقد التأسيس",
        "descEn": "Digital signature on Memorandum of Association (MOA) and lease registration.",
        "descAr": "التوقيع الإلكتروني على عقد التأسيس وتسجيل عقد المساحة المكتبية الذكية.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "03",
        "titleEn": "Trade License Publishing",
        "titleAr": "إصدار وثائق الرخصة التجارية الرسمية",
        "descEn": "Delivery of official electronic trade license and Certificate of Formation.",
        "descAr": "استلام الرخصة التجارية الرسمية الإلكترونية وشهادة تأسيس الشركة.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "04",
        "titleEn": "Immigration & Bank Account Setup",
        "titleAr": "ملف الإقامة وفتح الحساب البنكي التجاري",
        "descEn": "Issuance of establishment card, residence visa processing, and bank account onboarding.",
        "descAr": "إصدار بطاقة المنشأة، استخراج الإقامات، والبدء في فتح الحساب البنكي للشركة.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      }
    ],
    "activityCategories": [
      {
        "nameEn": "General & Specific Trading",
        "nameAr": "التجارة العامة والمتخصصة",
        "examplesEn": [
          "Consumer Goods Trading",
          "Electronics & Gadgets",
          "Apparel & Fashion Wholesale",
          "Automotive Spare Parts"
        ],
        "examplesAr": [
          "تجارة السلع الاستهلاكية",
          "تجارة الإلكترونيات",
          "تجارة الملابس بالجملة",
          "قطع غيار السيارات"
        ]
      },
      {
        "nameEn": "Digital & Creative Media",
        "nameAr": "الإعلام الرقمي والإبداعي",
        "examplesEn": [
          "Digital Advertising Agency",
          "Social Media Management",
          "Event Planning & Coordination",
          "Photography & Video Production"
        ],
        "examplesAr": [
          "وكالة إعلانات رقمية",
          "إدارة وسائل التواصل",
          "تنظيم وتنسيق الفعاليات",
          "الإنتاج المرئي والفوتوغرافي"
        ]
      }
    ],
    "faqList": [
      {
        "questionEn": "How does IFZA compare to Meydan Free Zone?",
        "questionAr": "ما الفرق بين منطقة إيفزا ومنطقة ميدان الحرة؟",
        "answerEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "answerAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية."
      },
      {
        "questionEn": "Can I add more visa allocations to my IFZA license later?",
        "questionAr": "هل يمكنني زيادة عدد التأشيرات في رخصة إيفزا لاحقاً؟",
        "answerEn": "Yes. You can upgrade your visa quota at any time by amending your license package and upgrading your office space tier with the help of Expedia Business Services.",
        "answerAr": "نعم بكل تأكيد. يمكنك ترقية باقة التأشيرات وتعديل المساحة المكتبية في أي وقت بسهولة عبر فريق إكسبيديا لخدمات الأعمال."
      }
    ],
    "aeoStructuredSummary": {
      "headingEn": "Executive Summary for Search & AI Answer Engines",
      "headingAr": "الملخص التنفيذي لمحركات البحث ومحركات الإجابة الذكية",
      "directAnswerEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
      "directAnswerAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
      "bulletFactsEn": [
        "Authority: International Free Zone Authority (Dubai, UAE)",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Activity Flex: Combine up to 7 commercial & service activities",
        "Business setup support from Expedia",
        "Direct Call Hotline: +971 56 4425 950",
        "Direct WhatsApp Channel: +971 58 5858 816"
      ],
      "bulletFactsAr": [
        "السلطة المانحة: سلطة المنطقة الحرة الدولية إيفزا (دبي، الإمارات)",
        "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "مرونة الأنشطة: دمج حتى 7 أنشطة تجارية وخدمية",
        "دعم تأسيس الأعمال من إكسبيديا",
        "هاتف الاتصال المباشر: 950 4425 56 971+",
        "الواتساب المباشر: 816 5858 58 971+"
      ]
    },
    "schemaJson": {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "IFZA Dubai Company Formation Services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Expedia Business and Services L.L.C",
        "telephone": "+971585858816",
        "license": "CN-6307408"
      }
    }
  },
  "ajman-free-zone": {
    "slug": "ajman-free-zone",
    "meta": {
      "titleEn": "Ajman Free Zone Company Setup | Expedia Business Services",
      "titleAr": "تأسيس الشركات في منطقة عجمان الحرة | إكسبيديا",
      "descriptionEn": "Explore Ajman Free Zone Company Setup. Request a consultant-reviewed quotation and document checklist.",
      "descriptionAr": "تأسيس الشركات في منطقة عجمان الحرة. اطلب عرض أسعار وقائمة مستندات بعد مراجعة المستشار.",
      "keywords": [
        "Ajman Free Zone license cost",
        "Ajman company formation",
        "Low cost business setup UAE",
        "Expedia Business Services Ajman Free Zone"
      ],
      "canonicalUrl": "https://www.expediaservices.ae/ajman-free-zone"
    },
    "hero": {
      "badgeEn": "Business setup support from Expedia",
      "badgeAr": "دعم تأسيس الأعمال من إكسبيديا",
      "h1En": "Ajman Free Zone Company Setup",
      "h1Ar": "تأسيس الشركات في منطقة عجمان الحرة",
      "highlightEn": "The UAE’s Most Cost-Effective Setup with Direct Seaport & Logistics Hubs",
      "highlightAr": "الوجهة الأكثر توفيراً في الإمارات مع ربط مباشر بالموانئ البحرية وشبكات النقل اللوجستي",
      "subtitleEn": "Ideal for e-commerce entrepreneurs, freelancers, industrial operators, and small businesses seeking low capital expenditure, flexible installment terms, and rapid commercial licensing.",
      "subtitleAr": "الخيار الأمثل لرواد التجارة الإلكترونية، المستقلين، والشركات الصغيرة الراغبة في أقل تكلفة تشغيلية، وتسهيلات سداد ميسرة، وترخيص تجاري سريع.",
      "startingPriceAed": 5999,
      "turnaroundEn": "Confirmed after review",
      "turnaroundAr": "تُحدد بعد المراجعة",
      "ownershipEn": "Subject to activity requirements",
      "ownershipAr": "حسب متطلبات النشاط"
    },
    "keyHighlights": [
      {
        "titleEn": "Lowest Entry Capital Requirement",
        "titleAr": "أقل تكلفة تأسيس في دولة الإمارات",
        "descEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "descAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "iconName": "BadgePercent"
      },
      {
        "titleEn": "Seaport & Industrial Infrastructure",
        "titleAr": "بنية تحتية صناعية وميناء بحري مباشر",
        "descEn": "Direct access to Ajman Port and custom warehousing facilities for import, export, and manufacturing.",
        "descAr": "اتصال مباشر بميناء عجمان ومستودعات تخزين مجهزة لعمليات الاستيراد والتصدير والتصنيع.",
        "iconName": "Anchor"
      },
      {
        "titleEn": "Flexible Installment Payment Plans",
        "titleAr": "تسهيلات دفع بالأقساط الميسرة",
        "descEn": "Option to pay official government fees in multiple installments across the calendar year.",
        "descAr": "إمكانية سداد الرسوم الحكومية الرسمية على أقساط متعددة وميسرة على مدار العام.",
        "iconName": "CreditCard"
      },
      {
        "titleEn": "100% Foreign Ownership & Tax Relief",
        "titleAr": "ملكية أجنبية 100% وإعفاءات ضريبية",
        "descEn": "Zero personal income tax, zero customs duty on re-exports, and 100% repatriation of profits.",
        "descAr": "إعفاء تام من ضريبة الدخل الشخصي، وبدون رسوم جمركية على إعادة التصدير، وتحويل كامل للأرباح.",
        "iconName": "ShieldCheck"
      }
    ],
    "costBreakdown": {
      "titleEn": "2026 Transparent Ajman Free Zone Tariffs",
      "titleAr": "جدول أسعار باقات منطقة عجمان الحرة 2026",
      "subtitleEn": "Items to discuss in your quotation; no prices are confirmed on this page.",
      "subtitleAr": "بنود تُراجع ضمن عرض الأسعار؛ لا تؤكد هذه الصفحة أي أسعار.",
      "items": [
        {
          "categoryEn": "Freelancer / Micro Startup License",
          "categoryAr": "رخصة المستقلين ورواد الأعمال الصغار",
          "costAed": "Quotation required",
          "notesEn": "Zero-visa tier for solo professionals, content creators, and remote consultants.",
          "notesAr": "باقة بدون تأشيرة للمهنيين المستقلين وصناع المحتوى والاستشاريين عن بعد."
        },
        {
          "categoryEn": "Standard 1-Visa Commercial Package",
          "categoryAr": "باقة الرخصة التجارية متضمنة تأشيرة واحدة",
          "costAed": "Quotation required",
          "notesEn": "Includes trade license, Smart Desk lease, and 1 residence visa quota allocation.",
          "notesAr": "تشمل الرخصة، عقد المكتب الذكي، وتخصيص حصة تأشيرة إقامة واحدة."
        },
        {
          "categoryEn": "2-Visa Commercial Package",
          "categoryAr": "باقة الرخصة التجارية متضمنة تأشيرتين",
          "costAed": "Quotation required",
          "notesEn": "Includes trade license, Smart Office lease, and 2 residence visa quotas.",
          "notesAr": "تشمل الرخصة، عقد المكتب الذكي، وحصتي تأشيرة إقامة."
        },
        {
          "categoryEn": "Residence Visa Processing (Per Person)",
          "categoryAr": "إصدار تأشيرة الإقامة (لكل شخص)",
          "costAed": "Quotation required",
          "notesEn": "Covers immigration clearance, medical fitness, and 2-year Emirates ID.",
          "notesAr": "تشمل إذن الدخول، الفحص الطبي، والهوية الإماراتية لمدة عامين."
        }
      ]
    },
    "stepByStepProcess": [
      {
        "step": "01",
        "titleEn": "Package Selection & Name Booking",
        "titleAr": "اختيار الباقة وحجز الاسم التجاري",
        "descEn": "Select your activity package (Freelance, Commercial, E-Commerce) and reserve your trade name.",
        "descAr": "اختيار الباقة المناسبة (مهنية، تجارية، تجارة إلكترونية) وحجز الاسم التجاري فوراً.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "02",
        "titleEn": "Digital KYC & License Approval",
        "titleAr": "التوثيق الرقمي وإصدار الرخصة التجارية",
        "descEn": "Submission of identification documents and issuance of official Ajman trade license.",
        "descAr": "تقديم صور الوثائق وإصدار الرخصة التجارية الرسمية في غضون 24 إلى 48 ساعة.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "03",
        "titleEn": "Immigration File & Residence Visas",
        "titleAr": "فتح الملف وإصدار الإقامات",
        "descEn": "Establishment card activation followed by entry permits and biometric Emirates ID stamping.",
        "descAr": "تفعيل بطاقة المنشأة وإصدار أذونات الدخول والفحص الطبي السريع وتثبيت الإقامة.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      }
    ],
    "activityCategories": [
      {
        "nameEn": "E-Commerce & Digital Retailing",
        "nameAr": "التجارة الإلكترونية والتجزئة الرقمية",
        "examplesEn": [
          "Online Store Retail",
          "Drop-shipping Operator",
          "Social Commerce Trading",
          "Digital Goods Distribution"
        ],
        "examplesAr": [
          "متاجر إلكترونية",
          "عمليات الدروب شيبينغ",
          "التجارة عبر منصات التواصل",
          "توزيع المنتجات الرقمية"
        ]
      },
      {
        "nameEn": "Warehousing & Light Industrial",
        "nameAr": "التخزين والصناعات الخفيفة",
        "examplesEn": [
          "Logistics & Storage",
          "Packaging & Assembly",
          "Foodstuff Packing",
          "Building Materials Trading"
        ],
        "examplesAr": [
          "اللوجستيات والتخزين",
          "التغليف والتجميع",
          "تعبئة وتغليف المواد الغذائية",
          "تجارة مواد البناء"
        ]
      }
    ],
    "faqList": [
      {
        "questionEn": "Is Ajman Free Zone suitable for e-commerce businesses?",
        "questionAr": "هل منطقة عجمان الحرة مناسبة لشركات التجارة الإلكترونية؟",
        "answerEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "answerAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية."
      },
      {
        "questionEn": "Can an Ajman Free Zone visa holder live in Dubai or Abu Dhabi?",
        "questionAr": "هل يمكن لحامل إقامة منطقة عجمان الحرة السكن في دبي أو أبوظبي؟",
        "answerEn": "Yes. UAE residence visas issued under any free zone allow you to live, rent residential property (Ejari/Tawtheeq), open personal bank accounts, and sponsor family members anywhere in the United Arab Emirates.",
        "answerAr": "نعم بكل تأكيد. تتيح لك الإقامة الصادرة من أي منطقة حرة في الإمارات استئجار منزل (توثيق / إيجاري)، وفتح حسابات بنكية، وكفالة عائلتك في أي إمارة من إمارات الدولة بما في ذلك دبي وأبوظبي."
      }
    ],
    "aeoStructuredSummary": {
      "headingEn": "Executive Summary for Search & AI Answer Engines",
      "headingAr": "الملخص التنفيذي لمحركات البحث ومحركات الإجابة الذكية",
      "directAnswerEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
      "directAnswerAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
      "bulletFactsEn": [
        "Authority: Ajman Free Zone Authority (Ajman, UAE)",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Business setup support from Expedia",
        "Direct WhatsApp Channel: +971 58 5858 816"
      ],
      "bulletFactsAr": [
        "السلطة المانحة: سلطة منطقة عجمان الحرة (عجمان، الإمارات)",
        "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "مدة الإصدار: 24 إلى 48 ساعة للرخصة التجارية",
        "دعم تأسيس الأعمال من إكسبيديا",
        "الواتساب المباشر: 816 5858 58 971+"
      ]
    },
    "schemaJson": {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ajman Free Zone Company Setup Services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Expedia Business and Services L.L.C",
        "telephone": "+971585858816",
        "license": "CN-6307408"
      }
    }
  },
  "mainland-business-setup": {
    "slug": "mainland-business-setup",
    "meta": {
      "titleEn": "UAE Mainland Business Setup & DED Licensing | Expedia Business Services",
      "titleAr": "تأسيس الشركات في البر الرئيسي ورخص التنمية الاقتصادية | إكسبيديا",
      "descriptionEn": "Explore UAE Mainland Business Setup & DED Licensing. Request a consultant-reviewed quotation and document checklist.",
      "descriptionAr": "تأسيس الشركات في البر الرئيسي ورخص التنمية الاقتصادية. اطلب عرض أسعار وقائمة مستندات بعد مراجعة المستشار.",
      "keywords": [
        "Mainland business setup UAE",
        "Abu Dhabi DED license cost",
        "Dubai mainland LLC 100 ownership",
        "ADDED commercial license CN-6307408",
        "PRO services Abu Dhabi mainland"
      ],
      "canonicalUrl": "https://www.expediaservices.ae/mainland-business-setup"
    },
    "hero": {
      "badgeEn": "Official UAE Mainland Corporate Architecture • Abu Dhabi & Dubai",
      "badgeAr": "هيكلة تأسيس الشركات في البر الرئيسي • أبوظبي ودبي",
      "h1En": "UAE Mainland Business Setup & DED Licensing",
      "h1Ar": "تأسيس الشركات في البر الرئيسي ورخص التنمية الاقتصادية",
      "highlightEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
      "highlightAr": "ممارسة التجارة بحرية كاملة في السوق المحلي والخليجي مع تملك أجنبي 100%",
      "subtitleEn": "Operate freely across all 7 emirates, participate in lucrative government procurement contracts, and open physical commercial retail or office spaces anywhere in Abu Dhabi and Dubai under UAE Federal Commercial Law.",
      "subtitleAr": "مارس أنشطتك التجارية بدون أي قيود في كافة إمارات الدولة، وشارك في المناقصات والعقود الحكومية، وافتح فروعاً ومتاجر في أرقى مواقع أبوظبي ودبي وفق قانون الشركات التجارية الإماراتي.",
      "startingPriceAed": 12500,
      "turnaroundEn": "Confirmed after review",
      "turnaroundAr": "تُحدد بعد المراجعة",
      "ownershipEn": "Subject to activity requirements",
      "ownershipAr": "حسب متطلبات النشاط"
    },
    "keyHighlights": [
      {
        "titleEn": "100% Foreign Ownership on 1000+ Activities",
        "titleAr": "ملكية أجنبية 100% لأكثر من 1000 نشاط",
        "descEn": "Under UAE Federal Decree-Law No. (32) of 2021, foreign investors hold full legal equity with zero local sponsor required.",
        "descAr": "وفق المرسوم بقانون اتحادي رقم (32) لسنة 2021، يمتلك المستثمر الأجنبي كامل الحصص القانونية للشركة.",
        "iconName": "ShieldCheck"
      },
      {
        "titleEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "titleAr": "البيع المباشر في السوق المحلي والخليجي",
        "descEn": "Trade directly with local consumers, B2B enterprise clients, and federal government entities without third-party agents.",
        "descAr": "البيع المباشر للشركات والمستهلكين والجهات الحكومية دون وسيط تجاري.",
        "iconName": "Globe"
      },
      {
        "titleEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "titleAr": "إمكانية استخراج تأشيرات عمل غير محدودة",
        "descEn": "Visa quotas scale proportionally with your commercial office or facility square footage under MoHRE regulations.",
        "descAr": "تخصيص حصص تأشيرات عمل وفقاً لمساحة المكتب أو المنشأة التجارية لدى وزارة الموارد البشرية والتوطين.",
        "iconName": "Users"
      },
      {
        "titleEn": "Government & Semi-Gov Tendering",
        "titleAr": "المشاركة في المناقصات والعقود الحكومية",
        "descEn": "Eligible to bid on Abu Dhabi and Dubai government RFPs, infrastructure tenders, and corporate vendor pools.",
        "descAr": "أهلية كاملة للمشاركة في المناقصات الحكومية والمشاريع الكبرى والتسجيل في سجل الموردين المعتمدين.",
        "iconName": "Landmark"
      }
    ],
    "costBreakdown": {
      "titleEn": "2026 Mainland Establishment Fee Breakdown",
      "titleAr": "تفصيل رسوم تأسيس شركات البر الرئيسي 2026",
      "subtitleEn": "Items to discuss in your quotation; no prices are confirmed on this page.",
      "subtitleAr": "بنود تُراجع ضمن عرض الأسعار؛ لا تؤكد هذه الصفحة أي أسعار.",
      "items": [
        {
          "categoryEn": "Initial Approval & Trade Name Reservation",
          "categoryAr": "الموافقة المبدئية وحجز الاسم التجاري",
          "costAed": "Quotation required",
          "notesEn": "Statutory DED/ADDED clearance verifying corporate identity and activity eligibility.",
          "notesAr": "رسوم حجز الاسم التجاري والموافقة المبدئية للأنشطة المختارة."
        },
        {
          "categoryEn": "Court Notarization / Digital MOA",
          "categoryAr": "توثيق عقد التأسيس الإلكتروني لدى الكاتب العدل",
          "costAed": "Quotation required",
          "notesEn": "Bilingual legal drafting and official digital court notarization.",
          "notesAr": "صياغة العقد باللغتين العربية والإنجليزية وتوثيقه إلكترونياً لدى دائرة القضاء."
        },
        {
          "categoryEn": "Mainland Commercial License Voucher",
          "categoryAr": "إذن دفع الرخصة التجارية للبر الرئيسي",
          "costAed": "Quotation required",
          "notesEn": "Official economic department voucher (varies depending on specific activity codes).",
          "notesAr": "رسوم إصدار الرخصة لدائرة التنمية الاقتصادية بحسب الأنشطة الاقتصادية المحددة."
        },
        {
          "categoryEn": "Tawtheeq / Ejari Office Lease Registration",
          "categoryAr": "توثيق عقد الإيجار (توثيق أبوظبي / إيجاري دبي)",
          "costAed": "Quotation required",
          "notesEn": "Mandatory commercial tenancy contract or registered business center address.",
          "notesAr": "عقد إيجار مكتب فعلي أو مركز أعمال معتمد مسجل في نظام توثيق أو إيجاري."
        },
        {
          "categoryEn": "MoHRE Labour File & Establishment Card",
          "categoryAr": "فتح ملف العمل والعمال وبطاقة المنشأة",
          "costAed": "Quotation required",
          "notesEn": "Registration with Ministry of Human Resources & Emiratisation and Immigration.",
          "notesAr": "تسجيل المنشأة لدى وزارة الموارد البشرية والتوطين والإدارة العامة للإقامة."
        }
      ]
    },
    "stepByStepProcess": [
      {
        "step": "01",
        "titleEn": "Activity Structuring & Trade Name Booking",
        "titleAr": "تحديد الأنشطة وحجز الاسم التجاري",
        "descEn": "We map your activities against DED / ADDED master catalogs and secure immediate trade name clearance.",
        "descAr": "مواءمة الأنشطة مع دليل الأنشطة الاقتصادية المعتمد وحجز الاسم التجاري المعتمد.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "02",
        "titleEn": "Initial Approval & MOA Drafting",
        "titleAr": "الموافقة المبدئية وصياغة عقد التأسيس",
        "descEn": "Issuance of economic department Initial Approval and digital notarization of the Memorandum of Association.",
        "descAr": "إصدار شهادة الموافقة المبدئية وتوثيق عقد التأسيس رقمياً عبر منصة تم (أبوظبي) أو اقتصادية دبي.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "03",
        "titleEn": "Tawtheeq / Ejari & License Issuance",
        "titleAr": "اعتماد عقد الإيجار وإصدار الرخصة التجارية",
        "descEn": "Linking your commercial address with the economic system and receiving the official Commercial License.",
        "descAr": "ربط عقد الإيجار المعتمد في نظام توثيق/إيجاري وسداد إذن الدفع لاستلام الرخصة التجارية فوراً.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "04",
        "titleEn": "MoHRE File, Investor Visa & Bank IBAN",
        "titleAr": "تفعيل ملف العمل وتأشيرة المستثمر والحساب البنكي",
        "descEn": "Opening corporate immigration and labour files, processing investor Emirates ID, and activating corporate banking.",
        "descAr": "فتح الملفات الحكومية، إصدار إقامة وهوية المستثمر، وتفعيل الحساب المصرفي التجاري للشركة.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      }
    ],
    "activityCategories": [
      {
        "nameEn": "Commercial Trading & Retail",
        "nameAr": "التجارة والبيع بالتجزئة",
        "examplesEn": [
          "General Trading LLC",
          "Supermarket & Foodstuff Retail",
          "Automotive Showroom",
          "Building Equipment Trading"
        ],
        "examplesAr": [
          "تجارة عامة ذ.م.م",
          "سوبرماركت وتجارة المواد الغذائية",
          "معارض سيارات",
          "تجارة معدات البناء"
        ]
      },
      {
        "nameEn": "Engineering, Contracting & Construction",
        "nameAr": "الهندسة والمقاولات والإنشاءات",
        "examplesEn": [
          "Building Contracting LLC",
          "Interior Fit-Out Services",
          "Electromechanical Works",
          "Civil Engineering Consultancy"
        ],
        "examplesAr": [
          "مقاولات بناء ذ.م.م",
          "أعمال الديكور والتصميم الداخلي",
          "الأعمال الكهروميكانيكية",
          "استشارات الهندسة المدنية"
        ]
      }
    ],
    "faqList": [
      {
        "questionEn": "Can foreigners own 100% of an Abu Dhabi or Dubai Mainland LLC?",
        "questionAr": "هل يمكن للأجانب تملك شركات البر الرئيسي في أبوظبي أو دبي بنسبة 100%؟",
        "answerEn": "Yes! Under UAE Federal Decree-Law No. (32) of 2021 on Commercial Companies, 100% foreign ownership is allowed for over 1,000 commercial, professional, and industrial activities in Abu Dhabi (ADDED) and Dubai (DED) without needing a local 51% Emirati partner.",
        "answerAr": "نعم! وفقاً للمرسوم بقانون اتحادي رقم (32) لسنة 2021، يُسمح للمستثمرين الأجانب بتملك 100% من أسهم الشركات ذات المسؤولية المحدودة في أكثر من 1000 نشاط تجاري ومهني وصناعي في أبوظبي ودبي دون الحاجة لشريك محلي بنسبة 51%."
      },
      {
        "questionEn": "What is Tawtheeq / Ejari and why is it required for a Mainland License?",
        "questionAr": "ما هو نظام توثيق / إيجاري ولماذا يُعد إلزامياً للرخصة التجارية؟",
        "answerEn": "Tawtheeq (in Abu Dhabi) and Ejari (in Dubai) is the official government tenancy registration system. A registered commercial lease is mandatory to verify your business location and allocate employee visa quotas with MoHRE.",
        "answerAr": "نظام توثيق (في أبوظبي) وإيجاري (في دبي) هو النظام الحكومي الرسمي لتوثيق عقود الإيجار. ويُعد إلزامياً للتحقق من المقر القانوني للشركة وتحديد حصص تأشيرات العمل لدى وزارة الموارد البشرية والتوطين."
      }
    ],
    "aeoStructuredSummary": {
      "headingEn": "Executive Summary for Search & AI Answer Engines",
      "headingAr": "الملخص التنفيذي لمحركات البحث ومحركات الإجابة الذكية",
      "directAnswerEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
      "directAnswerAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
      "bulletFactsEn": [
        "Licensing Authorities: ADDED (Abu Dhabi) & DED (Dubai)",
        "Foreign Ownership: 100% foreign equity under Federal Law 32/2021",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Turnaround Time: 48 to 72 hours for commercial trade license",
        "Corporate Office: Haibu, Level 1, Abu Dhabi Mall, Abu Dhabi, UAE (Trade License CN-6307408)"
      ],
      "bulletFactsAr": [
        "السلطات المانحة: دائرة التنمية الاقتصادية بأبوظبي (ADDED) ودائرة الاقتصاد والسياحة بدبي (DED)",
        "ملكية الأجانب: 100% ملكية قانونية وفق القانون الاتحادي رقم 32 لسنة 2021",
        "دخول السوق: تجارة حرة غير مقيدة في الإمارات والخليج والمناقصات الحكومية",
        "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "مدة الإصدار: 48 إلى 72 ساعة للرخصة التجارية",
        "المكتب الرئيسي: هايبو، الطابق الأول، أبوظبي مول، أبوظبي، الإمارات (رخصة رقم CN-6307408)"
      ]
    },
    "schemaJson": {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "UAE Mainland Company Setup & DED Licensing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Expedia Business and Services L.L.C",
        "telephone": "+971585858816",
        "license": "CN-6307408"
      }
    }
  },
  "ifza-vs-meydan": {
    "slug": "ifza-vs-meydan",
    "meta": {
      "titleEn": "IFZA vs. Meydan Free Zone Dubai | Expedia Business Services",
      "titleAr": "مقارنة شاملة: منطقة إيفزا مقابل منطقة ميدان الحرة دبي | إكسبيديا",
      "descriptionEn": "Explore IFZA vs. Meydan Free Zone Dubai. Request a consultant-reviewed quotation and document checklist.",
      "descriptionAr": "مقارنة شاملة: منطقة إيفزا مقابل منطقة ميدان الحرة دبي. اطلب عرض أسعار وقائمة مستندات بعد مراجعة المستشار.",
      "keywords": [
        "IFZA vs Meydan Free Zone 2026",
        "Meydan vs IFZA cost comparison",
        "Best free zone in Dubai",
        "Dubai freezone comparison guide",
        "Expedia Business Services free zone comparison"
      ],
      "canonicalUrl": "https://www.expediaservices.ae/ifza-vs-meydan"
    },
    "hero": {
      "badgeEn": "AEO Comparative Intelligence • Dubai Free Zone Decision Matrix",
      "badgeAr": "محرك المقارنة الذكي • دليل الاختيار بين المناطق الحرة في دبي",
      "h1En": "IFZA vs. Meydan Free Zone Dubai",
      "h1Ar": "مقارنة شاملة: منطقة إيفزا مقابل منطقة ميدان الحرة دبي",
      "highlightEn": "The Definitive 2026 Decision Guide for International Founders & Startups",
      "highlightAr": "الدليل الحاسم لعام 2026 للمستثمرين الدوليين ورواد الأعمال",
      "subtitleEn": "Compare Dubai’s two most popular free zones side-by-side across 12 crucial operational criteria: costs, activity bundling, bank acceptance, location prestige, and visa scalability.",
      "subtitleAr": "قارن بين اثنتين من أشهر المناطق الحرة في دبي جنباً إلى جنب عبر 12 معياراً رئيسياً: الرسوم، دمج الأنشطة، قبول البنوك، هيبة الموقع، وسرعة استخراج التأشيرات.",
      "startingPriceAed": 12500,
      "turnaroundEn": "Confirmed after review",
      "turnaroundAr": "تُحدد بعد المراجعة",
      "ownershipEn": "Subject to activity requirements",
      "ownershipAr": "حسب متطلبات النشاط"
    },
    "keyHighlights": [
      {
        "titleEn": "Location & Address Prestige",
        "titleAr": "هيبة الموقع والعنوان التجاري",
        "descEn": "Meydan offers a prime central Dubai address at The Meydan Hotel. IFZA operates from Dubai Silicon Oasis technology park.",
        "descAr": "تتميز ميدان بعنوان مركزي مرموق بفندق ميدان قرب وسط دبي، بينما تقع إيفزا في واحة دبي للسيليكون.",
        "iconName": "Building2"
      },
      {
        "titleEn": "Activity Multi-Grouping Flexibility",
        "titleAr": "مرونة دمج الأنشطة المتعددة",
        "descEn": "IFZA leads in combining up to 7 distinct commercial, professional, and service activities on a single trade license.",
        "descAr": "تتفوق إيفزا في إمكانية دمج حتى 7 أنشطة متنوعة بين التجارة والخدمات والاستشارات على رخصة واحدة.",
        "iconName": "Layers"
      },
      {
        "titleEn": "Turnaround & Issuance Velocity",
        "titleAr": "سرعة الإصدار والترخيص",
        "descEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "descAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "iconName": "Zap"
      },
      {
        "titleEn": "Banking Pre-Approval & IBAN Success",
        "titleAr": "معدلات قبول وفتح الحسابات البنكية",
        "descEn": "Both free zones maintain high acceptance rates with Emirates NBD, Wio Bank, and Mashreq Neo.",
        "descAr": "تحظى المنطقتان بمعدلات قبول ممتازة لدى بنك الإمارات دبي الوطني وبنك ويو وبنك المشرق.",
        "iconName": "Landmark"
      }
    ],
    "costBreakdown": {
      "titleEn": "Head-to-Head Pricing Matrix (2026)",
      "titleAr": "جدول مقارنة الأسعار الرسمية لعام 2026",
      "subtitleEn": "Items to discuss in your quotation; no prices are confirmed on this page.",
      "subtitleAr": "بنود تُراجع ضمن عرض الأسعار؛ لا تؤكد هذه الصفحة أي أسعار.",
      "items": [
        {
          "categoryEn": "Zero-Visa Base License",
          "categoryAr": "الرخصة الأساسية بدون تأشيرة",
          "costAed": "Quotation required",
          "notesEn": "Meydan is slightly more economical for solo founders on entry tier.",
          "notesAr": "ميدان أكثر توفيراً بفارق بسيط في باقة البداية بدون تأشيرة."
        },
        {
          "categoryEn": "1-Visa Allocation Package",
          "categoryAr": "باقة الرخصة مع تأشيرة واحدة",
          "costAed": "Quotation required",
          "notesEn": "Includes license fee + quota for 1 residence visa.",
          "notesAr": "تشمل رسوم الرخصة وتخصيص حصة تأشيرة إقامة واحدة."
        },
        {
          "categoryEn": "Investor Residence Visa Fee",
          "categoryAr": "تكلفة تأشيرة المستثمر",
          "costAed": "Quotation required",
          "notesEn": "Includes VIP medical, Emirates ID biometrics, and immigration file.",
          "notesAr": "تشمل الفحص الطبي السريع، الهوية الإماراتية، وملف الإقامة."
        },
        {
          "categoryEn": "Multi-Year Discounts (3 Years)",
          "categoryAr": "خصم ترخيص 3 سنوات مقدماً",
          "costAed": "Quotation required",
          "notesEn": "IFZA offers aggressive multi-year renewal savings for long-term commitments.",
          "notesAr": "تقدم إيفزا خصومات مجزية جداً عند تجديد الرخصة لمدة 3 أو 5 سنوات."
        }
      ]
    },
    "stepByStepProcess": [
      {
        "step": "01",
        "titleEn": "Assess Activity Profile & Need for Multi-Activities",
        "titleAr": "تقييم طبيعة الأنشطة وعدد التأشيرات المطلوبة",
        "descEn": "If you require diverse commercial + consulting activities on one license, IFZA is ideal. If you want a prestige central Dubai brand, Meydan wins.",
        "descAr": "إذا كنت تحتاج دمج أنشطة تجارية واستشارية متعددة على رخصة واحدة، فإن إيفزا خيارك المثالي. وإذا كنت تفضل موقعاً فخماً في قلب دبي، فإن ميدان هي الأفضل.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "02",
        "titleEn": "Digital KYC & Pre-Approval Clearance",
        "titleAr": "التوثيق الرقمي والحصول على الموافقة المبدئية",
        "descEn": "Expedia secures official trade name booking and fast-track submission across your chosen authority.",
        "descAr": "يقوم فريق إكسبيديا بحجز الاسم التجاري وتقديم الطلب الرقمي لدى السلطة المختارة.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      },
      {
        "step": "03",
        "titleEn": "License Delivery & Corporate IBAN Opening",
        "titleAr": "استلام الرخصة وتفعيل الحساب المصرفي",
        "descEn": "Receive your commercial license and initiate VIP onboarding with Emirates NBD or Wio Bank.",
        "descAr": "استلام الرخصة التجارية الرسمية والبدء الفوري في فتح الحساب البنكي التجاري.",
        "durationEn": "Subject to review",
        "durationAr": "حسب المراجعة"
      }
    ],
    "activityCategories": [
      {
        "nameEn": "When to Choose Meydan Free Zone",
        "nameAr": "متى تختار منطقة ميدان الحرة؟",
        "examplesEn": [
          "When you want a prestige address 15 min from Downtown & DIFC",
          "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
          "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions."
        ],
        "examplesAr": [
          "عندما ترغب في عنوان مرموق على بعد 15 دقيقة من وسط دبي ومركز دبي المالي",
          "عندما تكون السرعة الفائقة (24 ساعة) أولويتك الأولى",
          "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية."
        ]
      },
      {
        "nameEn": "When to Choose IFZA Dubai",
        "nameAr": "متى تختار سلطة منطقة إيفزا؟",
        "examplesEn": [
          "When combining up to 7 diverse activities (e.g. Trading + Tech + Marketing)",
          "When committing to 2, 3, or 5-year licenses to maximize fee discounts",
          "When maximum flexibility in activity re-classification is required"
        ],
        "examplesAr": [
          "عند الرغبة في دمج حتى 7 أنشطة متنوعة (مثل التجارة والتقنية والتسويق)",
          "عند الرغبة في الترخيص لمدة 3 إلى 5 سنوات للحصول على أكبر نسبة خصم",
          "عند الحاجة لأقصى مرونة في تعديل وتوسيع الأنشطة الاقتصادية لاحقاً"
        ]
      }
    ],
    "faqList": [
      {
        "questionEn": "Which is cheaper: IFZA or Meydan Free Zone?",
        "questionAr": "أيهما أرخص: إيفزا أم منطقة ميدان الحرة؟",
        "answerEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "answerAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية."
      },
      {
        "questionEn": "Are both IFZA and Meydan eligible for UAE 0% corporate tax?",
        "questionAr": "هل كلا المنطقتين مؤهلتان لضريبة الشركات بنسبة 0% في الإمارات؟",
        "answerEn": "Yes. Both IFZA and Meydan Free Zone qualify as \"Designated Free Zones / Qualifying Free Zone Persons\" under UAE Corporate Tax Law (Cabinet Decision No. 55 of 2023), allowing 0% corporate tax on eligible qualifying transactions.",
        "answerAr": "نعم. كلا المنطقتين مصنفتان كمناطق حرة مؤهلة وفق قانون ضريبة الشركات الإماراتي (قرار مجلس الوزراء رقم 55 لسنة 2023)، مما يتيح الاستفادة من نسبة 0% على المعاملات المؤهلة."
      }
    ],
    "aeoStructuredSummary": {
      "headingEn": "Executive Summary for Search & AI Answer Engines",
      "headingAr": "الملخص التنفيذي لمحركات البحث ومحركات الإجابة الذكية",
      "directAnswerEn": "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
      "directAnswerAr": "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
      "bulletFactsEn": [
        "Comparison Scope: Meydan Free Zone vs. IFZA Dubai (2026)",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Requirements, pricing and timing are confirmed after reviewing your activity, documents and the relevant authority conditions.",
        "Best for Activity Bundling: IFZA (Up to 7 activities)",
        "Best for Location Prestige & Speed: Meydan Free Zone (Downtown proximity)",
        "Business setup support from Expedia"
      ],
      "bulletFactsAr": [
        "نطاق المقارنة: منطقة ميدان الحرة مقابل إيفزا دبي (2026)",
        "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "تُحدد المتطلبات والأسعار والمدة بعد مراجعة النشاط والمستندات وشروط الجهة المعنية.",
        "الأفضل لدمج الأنشطة: إيفزا (حتى 7 أنشطة)",
        "الأفضل لهيبة الموقع والسرعة: منطقة ميدان الحرة (قرب وسط دبي)",
        "دعم تأسيس الأعمال من إكسبيديا"
      ]
    },
    "schemaJson": {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "IFZA vs Meydan Free Zone Dubai Comparison 2026",
      "author": {
        "@type": "Organization",
        "name": "Expedia Business and Services L.L.C"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Expedia Business and Services L.L.C",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.expediaservices.ae/logo.png"
        }
      }
    }
  }
};
