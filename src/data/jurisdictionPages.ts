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

export const DEDICATED_PAGES: Record<string, DedicatedPageData> = {
  'meydan-free-zone': {
    slug: 'meydan-free-zone',
    meta: {
      titleEn: 'Meydan Free Zone Dubai Setup & License Cost 2026 | Authorized Channel Partner',
      titleAr: 'تأسيس الشركات في منطقة ميدان الحرة دبي 2026 | شريك معتمد وأسعار الرخص',
      descriptionEn: 'Official Meydan Free Zone company formation guide by Expedia Business Services. Base license from AED 12,500, 100% foreign ownership, guaranteed UAE bank account support.',
      descriptionAr: 'الدليل الرسمي لتأسيس الشركات في منطقة ميدان الحرة دبي عبر شركة إكسبيديا لخدمات الأعمال. رخصة تجارية تبدأ من 12,500 درهم مع ملكية أجنبية 100% وحساب بنكي مضمون.',
      keywords: [
        'Meydan Free Zone setup cost',
        'Meydan Free Zone license Dubai',
        'Meydan Free Zone authorized partner',
        'Dubai freezone company formation',
        'Meydan visa cost 2026',
        'Expedia Business Services Meydan partner'
      ],
      canonicalUrl: 'https://www.expediaservices.ae/meydan-free-zone'
    },
    hero: {
      badgeEn: 'Official Authorized Channel Partner • Meydan Free Zone Dubai',
      badgeAr: 'شريك قنوات معتمد رسمياً • منطقة ميدان الحرة دبي',
      h1En: 'Meydan Free Zone Dubai Company Formation',
      h1Ar: 'تأسيس الشركات في منطقة ميدان الحرة دبي',
      highlightEn: 'Prime Central Dubai Location with Fast-Track 48-Hour Issuance',
      highlightAr: 'موقع استراتيجي في قلب دبي مع إصدار سريع خلال 48 ساعة',
      subtitleEn: 'Incorporate your business in Dubai’s prestigious racecourse district. Enjoy 100% foreign ownership, zero corporate tax on qualifying income, 1,500+ commercial activities, and turnkey PRO execution.',
      subtitleAr: 'أسس شركتك في أرقى مناطق دبي بجوار مضمار ميدان العالمي. تمتع بملكية أجنبية 100%، وإعفاء ضريبي على الدخل المؤهل، وأكثر من 1500 نشاط تجاري مع دعم إجرائي شامل.',
      startingPriceAed: 12500,
      turnaroundEn: '24–48 Hours',
      turnaroundAr: '24–48 ساعة',
      ownershipEn: '100% Foreign Ownership',
      ownershipAr: 'ملكية أجنبية بنسبة 100%'
    },
    keyHighlights: [
      {
        titleEn: '100% Foreign Capital Ownership',
        titleAr: 'ملكية أجنبية كاملة 100%',
        descEn: 'Full legal ownership with zero requirement for a local Emirati nominee or sponsor.',
        descAr: 'ملكية قانونية كاملة دون الحاجة إلى كفيل أو شريك مواطن.',
        iconName: 'ShieldCheck'
      },
      {
        titleEn: 'Central Dubai Prestige Address',
        titleAr: 'عنوان مرموق في قلب دبي',
        descEn: 'Located at The Meydan Hotel, 15 minutes from Downtown Dubai and DIFC financial center.',
        descAr: 'موقع استراتيجي في فندق ميدان، على بعد 15 دقيقة فقط من وسط دبي ومركز دبي المالي العالمي.',
        iconName: 'Building2'
      },
      {
        titleEn: 'Guaranteed Tier-1 Bank IBAN',
        titleAr: 'فتح حساب بنكي مصرفي مضمون',
        descEn: 'Direct introduction and VIP compliance pre-clearance with Emirates NBD, Wio Bank, and Mashreq.',
        descAr: 'تنسيق مباشر مع بنك الإمارات دبي الوطني وبنك ويو وبنك المشرق لفتح الحساب بسلاسة.',
        iconName: 'Landmark'
      },
      {
        titleEn: 'Qualifying 0% Corporate Tax',
        titleAr: 'ضريبة شركات 0% على الدخل المؤهل',
        descEn: 'Structured in full compliance with UAE Federal Decree-Law No. (47) of 2022 on Corporate Taxation.',
        descAr: 'هيكلة متوافقة تماماً مع قانون المعاملات الضريبية في دولة الإمارات لتحقيق الإعفاء القانوني.',
        iconName: 'ReceiptPercent'
      }
    ],
    costBreakdown: {
      titleEn: '2026 Transparent Tariff Breakdown',
      titleAr: 'جدول الرسوم والتكاليف الرسمية لعام 2026',
      subtitleEn: 'No hidden government fees. All figures reflect statutory tariffs and direct partner processing.',
      subtitleAr: 'بدون أي رسوم مخفية. جميع الأرقام تعكس التعرفة الحكومية الرسمية لشركاء القنوات المعتمدين.',
      items: [
        {
          categoryEn: 'Base Commercial Trade License (Zero Visa)',
          categoryAr: 'الرخصة التجارية الأساسية (بدون تأشيرة)',
          costAed: 12500,
          notesEn: 'Includes up to 3 business activities, trade name reservation, and digital lease.',
          notesAr: 'تشمل حتى 3 أنشطة تجارية، حجز الاسم التجاري، وعقد الإيجار الذكي.'
        },
        {
          categoryEn: '1-Visa Allocation Package',
          categoryAr: 'باقة الرخصة متضمنة تأشيرة إقامة واحدة',
          costAed: 14500,
          notesEn: 'License fee + allocation quota for 1 investor or partner residence visa.',
          notesAr: 'رسوم الرخصة مع تخصيص حصة تأشيرة مستثمر أو شريك.'
        },
        {
          categoryEn: 'Investor Residence Visa (Per Person)',
          categoryAr: 'تأشيرة إقامة المستثمر (لكل شخص)',
          costAed: 3850,
          notesEn: 'Covers Entry Permit, Status Change, VIP Medical Fitness, and 2-Year Emirates ID.',
          notesAr: 'تشمل إذن الدخول، تعديل الوضع، الفحص الطبي لكبار الشخصيات، والهوية الإماراتية لمدة عامين.'
        },
        {
          categoryEn: 'Establishment / Immigration Card',
          categoryAr: 'بطاقة المنشأة / الإدارة العامة للإقامة',
          costAed: 2200,
          notesEn: 'Mandatory file registration with General Directorate of Residency & Foreigners Affairs (GDRFA).',
          notesAr: 'تسجيل ملف المنشأة لدى الإدارة العامة للإقامة وشؤون الأجانب بدبي.'
        },
        {
          categoryEn: 'E-Commerce / Payment Gateway NOC',
          categoryAr: 'عدم ممانعة بوابات الدفع الإلكتروني',
          costAed: 'Included (AED 0)',
          notesEn: 'Standard Meydan free zone inclusion for digital businesses and Stripe/Checkout integration.',
          notesAr: 'مشمولة مجاناً للشركات الرقمية للربط مع بوابات الدفع العالمية مثل سترايب.'
        }
      ]
    },
    stepByStepProcess: [
      {
        step: '01',
        titleEn: 'Activity Selection & Name Reservation',
        titleAr: 'تحديد الأنشطة وحجز الاسم التجاري',
        descEn: 'We verify your 1,500+ allowed activities and secure official Meydan trade name approval within 2 hours.',
        descAr: 'نقوم بالتحقق من الأنشطة المطلوبة وحجز الاسم التجاري الرسمي لدى سلطة ميدان في غضون ساعتين.',
        durationEn: '2 Hours',
        durationAr: 'ساعتان'
      },
      {
        step: '02',
        titleEn: 'Digital KYC & License Issuance',
        titleAr: 'التحقق الرقمي وإصدار الرخصة التجارية',
        descEn: 'Submission of passport copies and digital biometric signatures. Commercial license is published instantly.',
        descAr: 'تقديم صور جوازات السفر والتوقيع الإلكتروني ليتم إصدار الرخصة وعقد التأسيس فوراً.',
        durationEn: '24–48 Hours',
        durationAr: '24–48 ساعة'
      },
      {
        step: '03',
        titleEn: 'Establishment Card & Visa Entry Permit',
        titleAr: 'بطاقة المنشأة وإذن الدخول الإلكتروني',
        descEn: 'Immigration file opened and electronic entry visa generated for international or in-country applicants.',
        descAr: 'فتح الملف لدى الجوازات وإصدار إذن الدخول الإلكتروني للإقامة.',
        durationEn: '2–3 Days',
        durationAr: '2–3 أيام'
      },
      {
        step: '04',
        titleEn: 'VIP Medical, Emirates ID & Bank Account',
        titleAr: 'الفحص الطبي السريع والهوية والحساب البنكي',
        descEn: 'Expedited VIP medical testing at premium lounge, Emirates ID biometrics, and dedicated corporate bank IBAN activation.',
        descAr: 'فحص طبي سريع في صالة كبار الشخصيات، تبصيم الهوية الإماراتية، وتفعيل الحساب المصرفي للشركة.',
        durationEn: '3–5 Days',
        durationAr: '3–5 أيام'
      }
    ],
    activityCategories: [
      {
        nameEn: 'Consultancy & Professional Services',
        nameAr: 'الاستشارات والخدمات المهنية',
        examplesEn: ['Management Consulting', 'IT Consulting', 'Marketing Strategy', 'Human Resources Advisory'],
        examplesAr: ['استشارات إدارية', 'استشارات تقنية المعلومات', 'استراتيجيات التسويق', 'استشارات الموارد البشرية']
      },
      {
        nameEn: 'Trading & E-Commerce',
        nameAr: 'التجارة والتجارة الإلكترونية',
        examplesEn: ['General Trading', 'E-Marketplace Operator', 'Luxury Goods Import/Export', 'Consumer Products Distribution'],
        examplesAr: ['تجارة عامة', 'إدارة المتاجر الإلكترونية', 'استيراد وتصدير السلع الفاخرة', 'توزيع المنتجات الاستهلاكية']
      },
      {
        nameEn: 'Digital Media & Software Engineering',
        nameAr: 'الإعلام الرقمي وهندسة البرمجيات',
        examplesEn: ['Software Development', 'AI Systems Architecture', 'Digital Content Production', 'Cloud Services Portal'],
        examplesAr: ['تطوير البرمجيات', 'هندسة نظم الذكاء الاصطناعي', 'إنتاج المحتوى الرقمي', 'خدمات الحوسبة السحابية']
      }
    ],
    faqList: [
      {
        questionEn: 'How much does a Meydan Free Zone license cost in 2026?',
        questionAr: 'كم تبلغ تكلفة رخصة منطقة ميدان الحرة في دبي لعام 2026؟',
        answerEn: 'A zero-visa Meydan Free Zone license starts at AED 12,500 per year. A 1-visa license package is approximately AED 14,500. Total setup including 1 investor visa, VIP medical, Emirates ID, and immigration card averages AED 20,500 to AED 21,500 turnkey through Expedia Business Services.',
        answerAr: 'تبدأ تكلفة رخصة منطقة ميدان الحرة بدون تأشيرة من 12,500 درهم سنوياً. وتبلغ باقة التأشيرة الواحدة 14,500 درهم. وتبلغ التكلفة الإجمالية الشاملة لرخصة وتأشيرة المستثمر مع الفحص الطبي السريع والهوية وبطاقة المنشأة حوالي 20,500 إلى 21,500 درهم.'
      },
      {
        questionEn: 'Do I need to live in the UAE to maintain a Meydan Free Zone company?',
        questionAr: 'هل يجب علي الإقامة الدائمة في الإمارات للحفاظ على شركة ميدان؟',
        answerEn: 'No. You do not need to reside in the UAE permanently. However, to maintain your UAE residence visa validity, you only need to enter the UAE at least once every 180 days (or once every 365 days if granted an Investor Visa or Golden Visa).',
        answerAr: 'لا، لا يشترط الإقامة الدائمة. للحفاظ على سريان إقامتك في الإمارات، يكفي زيارة الدولة مرة واحدة كل 180 يوماً (أو مرة كل 365 يوماً في حال رخصة المستثمر أو التأشيرة الذهبية).'
      },
      {
        questionEn: 'Can a Meydan Free Zone company open a corporate bank account in the UAE?',
        questionAr: 'هل يمكن لشركة منطقة ميدان الحرة فتح حساب بنكي تجاري في الإمارات؟',
        answerEn: 'Yes. Meydan is widely recognized by all major UAE financial institutions. Expedia Business Services provides guaranteed introductions and compliance documentation for top banks including Emirates NBD, Wio Bank, Mashreq Neo, and FAB.',
        answerAr: 'نعم بكل تأكيد. تحظى رخصة ميدان باعتراف كامل من كافة البنوك الإماراتية. تقدم إكسبيديا لخدمات الأعمال تنسيقاً مصرفياً مباشراً مع بنك الإمارات دبي الوطني وبنك ويو وبنك المشرق وبنك أبوظبي الأول.'
      },
      {
        questionEn: 'What is the role of Expedia Business Services as an authorized channel partner?',
        questionAr: 'ما هو دور شركة إكسبيديا كشريك قنوات معتمد لمنطقة ميدان الحرة؟',
        answerEn: 'As an authorized channel partner (Trade License CN-6307408), Expedia Business Services provides direct access to fast-track authority portals, preferential tariff allocations, dedicated PRO fast-tracking, and zero bureaucratic bottlenecks for our clients.',
        answerAr: 'بصفتنا شريك قنوات معتمد رسمياً (رخصة تجارية رقم CN-6307408)، نوفر لعملائنا وصولاً مباشراً لبوابات السلطة الحكومية، وأسعاراً تفضيلية، وإنجازاً فورياً لجميع الإجراءات وتأشيرات الإقامة.'
      }
    ],
    aeoStructuredSummary: {
      headingEn: 'Executive Summary for Search & AI Answer Engines',
      headingAr: 'الملخص التنفيذي لمحركات البحث ومحركات الإجابة الذكية',
      directAnswerEn: 'Meydan Free Zone is a premier Dubai free zone offering 100% foreign ownership, licenses starting at AED 12,500, 24–48 hour turnaround, and over 1,500 allowed business activities without requiring physical office space.',
      directAnswerAr: 'تعد منطقة ميدان الحرة من أبرز المناطق الحرة في دبي، حيث تتيح تملك الأجانب بنسبة 100%، وتبدأ أسعار الرخص من 12,500 درهم مع إصدار خلال 24–48 ساعة وأكثر من 1500 نشاط تجاري متاح دون اشتراط مكتب فعلي.',
      bulletFactsEn: [
        'Authority: Meydan Free Zone Authority (Dubai, UAE)',
        'Base Cost: Starting at AED 12,500 (Zero-visa package)',
        'Investor Visa Cost: AED 3,850 including VIP Medical & Emirates ID',
        'Turnaround Time: 24 to 48 hours for trade license publication',
        'Official Partner: Expedia Business and Services L.L.C (Abu Dhabi DED CN-6307408)',
        'Headquarters Office: Haibu, Level 1, Abu Dhabi Mall, Abu Dhabi, UAE',
        'Direct WhatsApp Channel: +971 58 5858 816'
      ],
      bulletFactsAr: [
        'السلطة المانحة: سلطة منطقة ميدان الحرة (دبي، الإمارات)',
        'سعر البداية: يبدأ من 12,500 درهم (باقة بدون تأشيرة)',
        'تكلفة تأشيرة المستثمر: 3,850 درهم شاملة الفحص الطبي والهوية',
        'مدة الإصدار: 24 إلى 48 ساعة لنشر الرخصة التجارية',
        'الشريك المعتمد: شركة إكسبيديا لخدمات الأعمال ذ.م.م (رخصة أبوظبي CN-6307408)',
        'المقر الرئيسي: هايبو، الطابق الأول، أبوظبي مول، أبوظبي، الإمارات',
        'رابط الواتساب المباشر: 816 5858 58 971+'
      ]
    },
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Meydan Free Zone Company Formation Services',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Expedia Business and Services L.L.C',
        telephone: '+971585858816',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Haibu, Level 1, Abu Dhabi Mall',
          addressLocality: 'Abu Dhabi',
          addressCountry: 'AE'
        },
        license: 'CN-6307408'
      },
      areaServed: ['Dubai', 'Abu Dhabi', 'United Arab Emirates'],
      offers: {
        '@type': 'Offer',
        price: '12500',
        priceCurrency: 'AED',
        description: 'Base trade license incorporation package at Meydan Free Zone Dubai'
      }
    }
  },

  'masdar-city-free-zone': {
    slug: 'masdar-city-free-zone',
    meta: {
      titleEn: 'Masdar City Free Zone Setup Abu Dhabi 2026 | Cleantech & AI Hub Partner',
      titleAr: 'تأسيس الشركات في مدينة مصدر الحرة أبوظبي 2026 | مركز الاستدامة والذكاء الاصطناعي',
      descriptionEn: 'Establish your innovation, AI, or cleantech enterprise in Masdar City Free Zone Abu Dhabi with Expedia Business Services. Fast-track licensing from AED 11,500.',
      descriptionAr: 'أسس شركتك التقنية والبيئية في مدينة مصدر الحرة بأبوظبي مع إكسبيديا لخدمات الأعمال. باقات متطورة تبدأ من 11,500 درهم مع ربط مباشر بفرص أبوظبي الاستثمارية.',
      keywords: [
        'Masdar City Free Zone setup',
        'Abu Dhabi free zone company formation',
        'Masdar City license cost 2026',
        'Cleantech business setup UAE',
        'Expedia Business Services Masdar City'
      ],
      canonicalUrl: 'https://www.expediaservices.ae/masdar-city-free-zone'
    },
    hero: {
      badgeEn: 'Official Authorized Channel Partner • Masdar City Free Zone Abu Dhabi',
      badgeAr: 'شريك قنوات معتمد رسمياً • مدينة مصدر الحرة أبوظبي',
      h1En: 'Masdar City Free Zone Abu Dhabi Company Setup',
      h1Ar: 'تأسيس الشركات في مدينة مصدر الحرة أبوظبي',
      highlightEn: 'The Middle East’s Flagship Hub for Cleantech, AI & Advanced R&D',
      highlightAr: 'المركز الرائد في الشرق الأوسط لتقنيات المستقبل والطاقة النظيفة والذكاء الاصطناعي',
      subtitleEn: 'Position your business in Abu Dhabi’s global sustainability district. Benefit from 100% foreign ownership, 0% import duties, access to ADIO grants, and direct synergy with government innovation ecosystems.',
      subtitleAr: 'ضع شركتك في قلب عاصمة الاستدامة والابتكار في أبوظبي. استفد من ملكية أجنبية 100%، وإعفاء جمركي، وبرامج دعم مكتب أبوظبي للاستثمار وتكامل تام مع الجهات الحكومية.',
      startingPriceAed: 11500,
      turnaroundEn: '3–5 Working Days',
      turnaroundAr: '3–5 أيام عمل',
      ownershipEn: '100% Foreign Ownership',
      ownershipAr: 'ملكية أجنبية بنسبة 100%'
    },
    keyHighlights: [
      {
        titleEn: 'Abu Dhabi Capital Advantage',
        titleAr: 'ميزة العاصمة أبوظبي الاستراتيجية',
        descEn: 'Direct proximity to Abu Dhabi International Airport (Zayed International) and key sovereign entities.',
        descAr: 'موقع استراتيجي بالقرب من مطار زايد الدولي والمؤسسات السيادية الرائدة في العاصمة.',
        iconName: 'Building2'
      },
      {
        titleEn: 'Innovation & Research Ecosystem',
        titleAr: 'بيئة متطورة للبحث والابتكار',
        descEn: 'Ideal for renewable energy, sustainability consultants, AI startups, and medical technology enterprises.',
        descAr: 'بيئة مثالية لشركات الطاقة النظيفة، الاستدامة، الذكاء الاصطناعي والتقنيات الطبية.',
        iconName: 'Sparkles'
      },
      {
        titleEn: 'Golden Visa Fast-Track Pathway',
        titleAr: 'مسار سريع للحصول على الإقامة الذهبية',
        descEn: 'Special nomination support for executive directors, researchers, and tech founders.',
        descAr: 'ترشيح وتسهيل الحصول على الإقامة الذهبية لمدة 10 سنوات للمدراء والمبتكرين.',
        iconName: 'Award'
      },
      {
        titleEn: 'Full 100% Capital Repatriation',
        titleAr: 'تحويل كامل للأرباح ورؤوس الأموال 100%',
        descEn: 'Zero currency restrictions and 100% repatriation of company capital and earnings.',
        descAr: 'حرية مالية مطلقة بدون أي قيود على تحويل العملات والأرباح إلى الخارج.',
        iconName: 'Coins'
      }
    ],
    costBreakdown: {
      titleEn: 'Official 2026 Masdar City Fee Schedule',
      titleAr: 'جدول الرسوم الرسمية لمدينة مصدر الحرة 2026',
      subtitleEn: 'Specialized packages tailored for innovative startups, international branch offices, and holding entities.',
      subtitleAr: 'باقات متخصصة للشركات الناشئة المبتكرة، الفروع الدولية، والشركات القابضة.',
      items: [
        {
          categoryEn: 'Startup / Entrepreneur License Package',
          categoryAr: 'باقة رواد الأعمال والشركات الناشئة',
          costAed: 11500,
          notesEn: 'Special promotional tariff for innovative tech, research, and consultancy startups.',
          notesAr: 'تعرفة تشجيعية خاصة للشركات الناشئة في مجالات التقنية والبحث والاستشارات.'
        },
        {
          categoryEn: 'Standard Corporate Trade License',
          categoryAr: 'الرخصة التجارية القياسية للشركات',
          costAed: 15000,
          notesEn: 'For established enterprises, commercial service providers, and regional holding offices.',
          notesAr: 'للشركات الراسخة ومقدمي الخدمات التجارية والمكاتب الإقليمية.'
        },
        {
          categoryEn: 'Flexi-Desk Facility Lease',
          categoryAr: 'عقد إيجار مكتب مرن (فلكسي ديسك)',
          costAed: 6000,
          notesEn: 'Dedicated shared workspace at Masdar City Accelerator Building.',
          notesAr: 'مساحة عمل مشتركة مخصصة في مبنى مسرعات الأعمال بمدينة مصدر.'
        },
        {
          categoryEn: 'Investor / Executive Residence Visa',
          categoryAr: 'تأشيرة إقامة المستثمر / المدير التنفيذي',
          costAed: 3950,
          notesEn: 'Covers Abu Dhabi ICP immigration fees, medical fitness, and 2-year Emirates ID.',
          notesAr: 'تشمل رسوم الهيئة الاتحادية للهوية والجنسية بأبوظبي والفحص الطبي والهوية.'
        }
      ]
    },
    stepByStepProcess: [
      {
        step: '01',
        titleEn: 'Business Model Review & Initial Approval',
        titleAr: 'تقييم نموذج العمل والموافقة المبدئية',
        descEn: 'We align your technology/business activities with Masdar City Free Zone criteria for immediate initial clearance.',
        descAr: 'نقوم بمواءمة أنشطة عملك مع معايير مدينة مصدر الحرة للحصول على الموافقة المبدئية السريعة.',
        durationEn: '1–2 Days',
        durationAr: '1–2 أيام'
      },
      {
        step: '02',
        titleEn: 'Corporate Documentation & Lease Allocation',
        titleAr: 'توثيق المستندات وتخصيص المساحة المكتبية',
        descEn: 'Drafting Articles of Association and finalizing smart workspace or office tenancy agreement.',
        descAr: 'صياغة عقد التأسيس واعتماد اتفاقية إيجار المكتب الذكي أو المستقل.',
        durationEn: '2 Days',
        durationAr: 'يومان'
      },
      {
        step: '03',
        titleEn: 'Trade License Publication',
        titleAr: 'إصدار ونشر الرخصة التجارية الرسمية',
        descEn: 'Issuance of commercial certificate, Masdar City Chamber affiliation, and tax ID eligibility.',
        descAr: 'إصدار الشهادة التجارية الرسمية، شهادة العضوية في غرفة التجارة، وملف الرقم الضريبي.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة'
      },
      {
        step: '04',
        titleEn: 'Abu Dhabi ICP Immigration & Residency',
        titleAr: 'إصدار الإقامات عبر الهيئة الاتحادية للهوية والجنسية',
        descEn: 'Complete visa stamping, biometric Emirates ID registration, and corporate banking onboarding.',
        descAr: 'تثبيت تأشيرة الإقامة، تبصيم الهوية الإماراتية، وبدء فتح الحساب المصرفي للشركة في أبوظبي.',
        durationEn: '3–4 Days',
        durationAr: '3–4 أيام'
      }
    ],
    activityCategories: [
      {
        nameEn: 'Renewable Energy & Cleantech',
        nameAr: 'الطاقة المتجددة والتكنولوجيا النظيفة',
        examplesEn: ['Solar Power Consulting', 'Carbon Offsetting Technologies', 'Waste-to-Energy Solutions', 'Sustainable Architecture'],
        examplesAr: ['استشارات الطاقة الشمسية', 'تقنيات خفض الانبعاثات الكربونية', 'حلول تحويل النفايات إلى طاقة', 'العمارة المستدامة']
      },
      {
        nameEn: 'Artificial Intelligence & Software',
        nameAr: 'الذكاء الاصطناعي والبرمجيات',
        examplesEn: ['AI Model Training & Research', 'Data Science & Analytics', 'Autonomous Systems Software', 'Smart City Platforms'],
        examplesAr: ['أبحاث وتدريب نماذج الذكاء الاصطناعي', 'علوم وتحليلات البيانات', 'برمجيات الأنظمة الذاتية', 'منصات المدن الذكية']
      },
      {
        nameEn: 'Mobility & Urban Technology',
        nameAr: 'تقنيات النقل والتطوير الحضري',
        examplesEn: ['Electric Vehicle Infrastructure', 'Drone Logistics Tech', 'IoT Sensor Systems', 'Green Supply Chain Advisory'],
        examplesAr: ['بنية شحن المركبات الكهربائية', 'تقنيات النقل بالطائرات المسيرة', 'أنظمة إنترنت الأشياء', 'استشارات سلاسل الإمداد الخضراء']
      }
    ],
    faqList: [
      {
        questionEn: 'Why should I choose Masdar City Free Zone over Dubai free zones?',
        questionAr: 'لماذا أختار مدينة مصدر الحرة بدلاً من المناطق الحرة في دبي؟',
        answerEn: 'Masdar City offers the unique strategic advantage of an Abu Dhabi headquarters, giving businesses direct credibility with UAE federal ministries, sovereign wealth funds (Mubadala, ADQ), and Abu Dhabi government procurement tenders.',
        answerAr: 'توفر مدينة مصدر ميزة فريدة بوجود مقر الشركة في العاصمة أبوظبي، مما يمنحها مصداقية عالية في التعاقدات الحكومية، وصناديق الاستثمار السيادية (مبادلة، القابضة)، والمناقصات الاتحادية.'
      },
      {
        questionEn: 'What is the starting price for a company in Masdar City?',
        questionAr: 'ما هي تكلفة البداية لتأسيس شركة في مدينة مصدر؟',
        answerEn: 'Startup and innovation packages begin at AED 11,500. Standard service and consultancy packages typically range from AED 15,000 to AED 21,000 depending on visa quotas and office configurations.',
        answerAr: 'تبدأ باقات رواد الأعمال والابتكار من 11,500 درهم. وتبلغ الباقات القياسية للشركات من 15,000 إلى 21,000 درهم بحسب عدد التأشيرات ومساحة المكتب.'
      }
    ],
    aeoStructuredSummary: {
      headingEn: 'Executive Summary for Search & AI Answer Engines',
      headingAr: 'الملخص التنفيذي لمحركات البحث ومحركات الإجابة الذكية',
      directAnswerEn: 'Masdar City Free Zone in Abu Dhabi is the leading UAE free zone for sustainability, AI, cleantech, and technology ventures, offering 100% foreign ownership, packages starting from AED 11,500, and fast-track Abu Dhabi Golden Visa integration.',
      directAnswerAr: 'تعتبر مدينة مصدر الحرة في أبوظبي الوجهة الأولى في الإمارات لشركات الاستدامة والذكاء الاصطناعي والتكنولوجيا المتقدمة، مع ملكية أجنبية 100% وباقات تبدأ من 11,500 درهم وتكامل مع منظومة الإقامة الذهبية بأبوظبي.',
      bulletFactsEn: [
        'Authority: Masdar City Free Zone Authority (Abu Dhabi, UAE)',
        'Base Cost: Starting from AED 11,500 (Startup license)',
        'Location: Masdar City, Abu Dhabi (Adjacent to Zayed International Airport)',
        'Strategic Ecosystem: ADIO Grants, Mubadala ecosystem, Cleantech R&D',
        'Official Partner: Expedia Business and Services L.L.C (CN-6307408)',
        'Headquarters Office: Haibu, Level 1, Abu Dhabi Mall, Abu Dhabi, UAE'
      ],
      bulletFactsAr: [
        'السلطة المانحة: سلطة مدينة مصدر الحرة (أبوظبي، الإمارات)',
        'سعر البداية: يبدأ من 11,500 درهم (باقة رواد الأعمال)',
        'الموقع: مدينة مصدر، أبوظبي (بجوار مطار زايد الدولي)',
        'المنظومة الاستراتيجية: منح مكتب أبوظبي للاستثمار، منظومة مبادلة، أبحاث التكنولوجيا النظيفة',
        'الشريك المعتمد: شركة إكسبيديا لخدمات الأعمال ذ.م.م (CN-6307408)',
        'المقر الرئيسي: هايبو، الطابق الأول، أبوظبي مول، أبوظبي، الإمارات'
      ]
    },
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Masdar City Free Zone Company Setup Services',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Expedia Business and Services L.L.C',
        telephone: '+971585858816',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Haibu, Level 1, Abu Dhabi Mall',
          addressLocality: 'Abu Dhabi',
          addressCountry: 'AE'
        },
        license: 'CN-6307408'
      },
      offers: {
        '@type': 'Offer',
        price: '11500',
        priceCurrency: 'AED'
      }
    }
  },

  'ifza': {
    slug: 'ifza',
    meta: {
      titleEn: 'IFZA Free Zone Dubai Company Formation 2026 | 1500+ Activities & Costs',
      titleAr: 'تأسيس الشركات في منطقة إيفزا الحرة دبي 2026 | أكثر من 1500 نشاط والأسعار الرسمية',
      descriptionEn: 'Complete IFZA (International Free Zone Authority) Dubai setup guide by Expedia Business Services. Flexible packages from AED 12,900, combine up to 7 activities.',
      descriptionAr: 'دليل تأسيس الشركات في سلطة المنطقة الحرة الدولية إيفزا دبي عبر إكسبيديا لخدمات الأعمال. باقات مرنة تبدأ من 12,900 درهم مع دمج حتى 7 أنشطة على رخصة واحدة.',
      keywords: [
        'IFZA Dubai company setup',
        'IFZA license cost 2026',
        'IFZA vs Meydan Free Zone',
        'International Free Zone Authority Dubai',
        'Expedia Business Services IFZA partner'
      ],
      canonicalUrl: 'https://www.expediaservices.ae/ifza'
    },
    hero: {
      badgeEn: 'Official Authorized Channel Partner • IFZA Dubai Free Zone',
      badgeAr: 'شريك قنوات معتمد رسمياً • سلطة المنطقة الحرة الدولية إيفزا دبي',
      h1En: 'IFZA Dubai Free Zone Company Formation',
      h1Ar: 'تأسيس الشركات في منطقة إيفزا الحرة دبي',
      highlightEn: '1,500+ Multi-Disciplinary Activities with Dynamic Multi-Year Discounts',
      highlightAr: 'أكثر من 1500 نشاط تجاري مع إمكانية دمج الأنشطة وخصومات السنوات المتعددة',
      subtitleEn: 'Launch your international trading, professional consultancy, or holding company with Dubai Silicon Oasis’ most adaptable free zone authority. Combine commercial and professional activities on a single trade license.',
      subtitleAr: 'أطلق شركتك التجارية أو الاستشارية أو القابضة في إحدى أكثر المناطق الحرة مرونة وسرعة في دبي. اجمع بين الأنشطة التجارية والمهنية على رخصة واحدة بكل سهولة.',
      startingPriceAed: 12900,
      turnaroundEn: '2–4 Working Days',
      turnaroundAr: '2–4 أيام عمل',
      ownershipEn: '100% Foreign Ownership',
      ownershipAr: 'ملكية أجنبية بنسبة 100%'
    },
    keyHighlights: [
      {
        titleEn: 'Combine Commercial & Professional',
        titleAr: 'دمج الأنشطة التجارية والمهنية',
        descEn: 'Group up to 7 diverse business activities across commercial, service, and consultancy sectors under one license.',
        descAr: 'دمج حتى 7 أنشطة متنوعة تشمل التجارة والخدمات والاستشارات على رخصة تجارية واحدة.',
        iconName: 'Layers'
      },
      {
        titleEn: 'Zero Physical Presence Required',
        titleAr: 'تأسيس رقمي دون اشتراط التواجد الفعلي',
        descEn: 'Complete end-to-end incorporation remotely from anywhere in the world with digital passport verification.',
        descAr: 'إتمام كامل إجراءات التأسيس عن بعد من أي مكان في العالم عبر التحقق الرقمي من جواز السفر.',
        iconName: 'Globe'
      },
      {
        titleEn: 'Multi-Year Licensing Discounts',
        titleAr: 'خصومات مميزة على الرخص متعددة السنوات',
        descEn: 'Save up to 30% on official authority fees when locking in 2, 3, or 5-year trade license renewals.',
        descAr: 'وفّر حتى 30% من الرسوم الحكومية عند حجز رخص لمدة سنتين أو 3 أو 5 سنوات مقدماً.',
        iconName: 'BadgePercent'
      },
      {
        titleEn: 'Rapid Residence Visa Stamping',
        titleAr: 'سرعة إصدار تأشيرات الإقامة',
        descEn: 'Fast-track medical fitness, VIP biometric processing, and 2-year UAE residence visa issuance.',
        descAr: 'إصدار سريع لإذن الدخول، الفحص الطبي لكبار الشخصيات، وبطاقة الهوية الإماراتية.',
        iconName: 'UserCheck'
      }
    ],
    costBreakdown: {
      titleEn: '2026 Official IFZA Tariff Matrix',
      titleAr: 'جدول أسعار وباقات منطقة إيفزا الحرة 2026',
      subtitleEn: 'Transparent package tiers based on visa allocation requirements and multi-year commitments.',
      subtitleAr: 'باقات شفافة محددة بحسب عدد تأشيرات الإقامة وسنوات الترخيص.',
      items: [
        {
          categoryEn: 'Zero-Visa License Package',
          categoryAr: 'باقة الرخصة بدون تأشيرة',
          costAed: 12900,
          notesEn: 'Includes trade license, up to 3 activities, and virtual office lease agreement.',
          notesAr: 'تشمل الرخصة التجارية، حتى 3 أنشطة، وعقد المكتب الافتراضي.'
        },
        {
          categoryEn: '1-Visa License Package',
          categoryAr: 'باقة الرخصة مع حصة تأشيرة واحدة',
          costAed: 16900,
          notesEn: 'License fee + allocation for 1 residence visa quota.',
          notesAr: 'رسوم الرخصة التجارية مع تخصيص حصة تأشيرة إقامة واحدة.'
        },
        {
          categoryEn: '2-Visa License Package',
          categoryAr: 'باقة الرخصة مع حصتي تأشيرة',
          costAed: 19900,
          notesEn: 'License fee + allocation for 2 residence visa quotas.',
          notesAr: 'رسوم الرخصة التجارية مع تخصيص حصتي تأشيرة إقامة.'
        },
        {
          categoryEn: 'Investor Residence Visa Fee',
          categoryAr: 'رسوم تأشيرة إقامة المستثمر',
          costAed: 3750,
          notesEn: 'Per person fee covering immigration approval, medical VIP, and Emirates ID.',
          notesAr: 'لكل شخص شاملة موافقة الجوازات، الفحص الطبي، والهوية الإماراتية.'
        }
      ]
    },
    stepByStepProcess: [
      {
        step: '01',
        titleEn: 'Activity Selection & Application Submission',
        titleAr: 'اختيار الأنشطة وتقديم الطلب الرقمي',
        descEn: 'We guide you in combining up to 7 activities and submit passport scans to IFZA authority.',
        descAr: 'نساعدك في اختيار ودمج حتى 7 أنشطة متوافقة وتقديم الطلب إلكترونياً.',
        durationEn: '1 Day',
        durationAr: 'يوم واحد'
      },
      {
        step: '02',
        titleEn: 'Security Approval & Incorporation Signing',
        titleAr: 'الموافقة الأمنية وتوقيع عقد التأسيس',
        descEn: 'Digital signature on Memorandum of Association (MOA) and lease registration.',
        descAr: 'التوقيع الإلكتروني على عقد التأسيس وتسجيل عقد المساحة المكتبية الذكية.',
        durationEn: '24–48 Hours',
        durationAr: '24–48 ساعة'
      },
      {
        step: '03',
        titleEn: 'Trade License Publishing',
        titleAr: 'إصدار وثائق الرخصة التجارية الرسمية',
        descEn: 'Delivery of official electronic trade license and Certificate of Formation.',
        descAr: 'استلام الرخصة التجارية الرسمية الإلكترونية وشهادة تأسيس الشركة.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة'
      },
      {
        step: '04',
        titleEn: 'Immigration & Bank Account Setup',
        titleAr: 'ملف الإقامة وفتح الحساب البنكي التجاري',
        descEn: 'Issuance of establishment card, residence visa processing, and bank account onboarding.',
        descAr: 'إصدار بطاقة المنشأة، استخراج الإقامات، والبدء في فتح الحساب البنكي للشركة.',
        durationEn: '3–5 Days',
        durationAr: '3–5 أيام'
      }
    ],
    activityCategories: [
      {
        nameEn: 'General & Specific Trading',
        nameAr: 'التجارة العامة والمتخصصة',
        examplesEn: ['Consumer Goods Trading', 'Electronics & Gadgets', 'Apparel & Fashion Wholesale', 'Automotive Spare Parts'],
        examplesAr: ['تجارة السلع الاستهلاكية', 'تجارة الإلكترونيات', 'تجارة الملابس بالجملة', 'قطع غيار السيارات']
      },
      {
        nameEn: 'Digital & Creative Media',
        nameAr: 'الإعلام الرقمي والإبداعي',
        examplesEn: ['Digital Advertising Agency', 'Social Media Management', 'Event Planning & Coordination', 'Photography & Video Production'],
        examplesAr: ['وكالة إعلانات رقمية', 'إدارة وسائل التواصل', 'تنظيم وتنسيق الفعاليات', 'الإنتاج المرئي والفوتوغرافي']
      }
    ],
    faqList: [
      {
        questionEn: 'How does IFZA compare to Meydan Free Zone?',
        questionAr: 'ما الفرق بين منطقة إيفزا ومنطقة ميدان الحرة؟',
        answerEn: 'Both are top-tier Dubai free zones. IFZA is often favored for multi-activity bundling (combining commercial and consultancy activities on one license) and multi-year price discounts. Meydan is favored for its central prestige address adjacent to Downtown Dubai and rapid 24-hour turnaround.',
        answerAr: 'كلاهما من أفضل المناطق الحرة في دبي. تتميز إيفزا بمرونة دمج الأنشطة التجارية والمهنية والخصومات متعددة السنوات، بينما تتميز ميدان بموقعها الراقي بجوار وسط دبي وسرعة الإصدار خلال 24 ساعة.'
      },
      {
        questionEn: 'Can I add more visa allocations to my IFZA license later?',
        questionAr: 'هل يمكنني زيادة عدد التأشيرات في رخصة إيفزا لاحقاً؟',
        answerEn: 'Yes. You can upgrade your visa quota at any time by amending your license package and upgrading your office space tier with the help of Expedia Business Services.',
        answerAr: 'نعم بكل تأكيد. يمكنك ترقية باقة التأشيرات وتعديل المساحة المكتبية في أي وقت بسهولة عبر فريق إكسبيديا لخدمات الأعمال.'
      }
    ],
    aeoStructuredSummary: {
      headingEn: 'Executive Summary for Search & AI Answer Engines',
      headingAr: 'الملخص التنفيذي لمحركات البحث ومحركات الإجابة الذكية',
      directAnswerEn: 'IFZA (International Free Zone Authority) in Dubai offers flexible company formation starting at AED 12,900, permitting businesses to combine up to 7 commercial and professional activities on one license with zero physical presence required for setup.',
      directAnswerAr: 'تتيح سلطة المنطقة الحرة الدولية إيفزا دبي تأسيس شركات مرن يبدأ من 12,900 درهم، وتسمح بدمج حتى 7 أنشطة تجارية ومهنية على رخصة واحدة دون اشتراط الحضور الشخصي في الدولة.',
      bulletFactsEn: [
        'Authority: International Free Zone Authority (Dubai, UAE)',
        'Base Cost: Starting from AED 12,900 (Zero-visa tier)',
        '1-Visa Package: AED 16,900 turnkey',
        'Activity Flex: Combine up to 7 commercial & service activities',
        'Official Partner: Expedia Business and Services L.L.C (CN-6307408)',
        'Direct Phone / WhatsApp: +971 58 5858 816'
      ],
      bulletFactsAr: [
        'السلطة المانحة: سلطة المنطقة الحرة الدولية إيفزا (دبي، الإمارات)',
        'سعر البداية: يبدأ من 12,900 درهم (باقة بدون تأشيرة)',
        'باقة التأشيرة الواحدة: 16,900 درهم شاملة',
        'مرونة الأنشطة: دمج حتى 7 أنشطة تجارية وخدمية',
        'الشريك المعتمد: شركة إكسبيديا لخدمات الأعمال ذ.م.م (CN-6307408)',
        'هاتف / واتساب مباشر: 816 5858 58 971+'
      ]
    },
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'IFZA Dubai Company Formation Services',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Expedia Business and Services L.L.C',
        telephone: '+971585858816',
        license: 'CN-6307408'
      },
      offers: {
        '@type': 'Offer',
        price: '12900',
        priceCurrency: 'AED'
      }
    }
  },

  'ajman-free-zone': {
    slug: 'ajman-free-zone',
    meta: {
      titleEn: 'Ajman Free Zone Setup 2026 | Low-Cost License Packages from AED 5,999',
      titleAr: 'تأسيس الشركات في منطقة عجمان الحرة 2026 | أرخص باقات الرخص تبدأ من 5,999 درهم',
      descriptionEn: 'Start your UAE business at Ajman Free Zone with Expedia Business Services. Affordable company packages from AED 5,999, seaport connectivity, 100% foreign ownership.',
      descriptionAr: 'أسس عملك بأقل تكلفة في منطقة عجمان الحرة عبر إكسبيديا لخدمات الأعمال. باقات اقتصادية تبدأ من 5,999 درهم مع ربط مباشر بالميناء وملكية أجنبية 100%.',
      keywords: [
        'Ajman Free Zone license cost',
        'Cheapest UAE free zone 2026',
        'Ajman company formation',
        'Low cost business setup UAE',
        'Expedia Business Services Ajman Free Zone'
      ],
      canonicalUrl: 'https://www.expediaservices.ae/ajman-free-zone'
    },
    hero: {
      badgeEn: 'Official Authorized Channel Partner • Ajman Free Zone (AFZ)',
      badgeAr: 'شريك قنوات معتمد رسمياً • منطقة عجمان الحرة',
      h1En: 'Ajman Free Zone Company Setup',
      h1Ar: 'تأسيس الشركات في منطقة عجمان الحرة',
      highlightEn: 'The UAE’s Most Cost-Effective Setup with Direct Seaport & Logistics Hubs',
      highlightAr: 'الوجهة الأكثر توفيراً في الإمارات مع ربط مباشر بالموانئ البحرية وشبكات النقل اللوجستي',
      subtitleEn: 'Ideal for e-commerce entrepreneurs, freelancers, industrial operators, and small businesses seeking low capital expenditure, flexible installment terms, and rapid commercial licensing.',
      subtitleAr: 'الخيار الأمثل لرواد التجارة الإلكترونية، المستقلين، والشركات الصغيرة الراغبة في أقل تكلفة تشغيلية، وتسهيلات سداد ميسرة، وترخيص تجاري سريع.',
      startingPriceAed: 5999,
      turnaroundEn: '24–48 Hours',
      turnaroundAr: '24–48 ساعة',
      ownershipEn: '100% Foreign Ownership',
      ownershipAr: 'ملكية أجنبية بنسبة 100%'
    },
    keyHighlights: [
      {
        titleEn: 'Lowest Entry Capital Requirement',
        titleAr: 'أقل تكلفة تأسيس في دولة الإمارات',
        descEn: 'Entry packages starting from just AED 5,999, making AFZ the most accessible business destination in the country.',
        descAr: 'باقات رخص تبدأ من 5,999 درهم فقط، مما يجعلها الخيار الأكثر توفيراً وسهولة.',
        iconName: 'BadgePercent'
      },
      {
        titleEn: 'Seaport & Industrial Infrastructure',
        titleAr: 'بنية تحتية صناعية وميناء بحري مباشر',
        descEn: 'Direct access to Ajman Port and custom warehousing facilities for import, export, and manufacturing.',
        descAr: 'اتصال مباشر بميناء عجمان ومستودعات تخزين مجهزة لعمليات الاستيراد والتصدير والتصنيع.',
        iconName: 'Anchor'
      },
      {
        titleEn: 'Flexible Installment Payment Plans',
        titleAr: 'تسهيلات دفع بالأقساط الميسرة',
        descEn: 'Option to pay official government fees in multiple installments across the calendar year.',
        descAr: 'إمكانية سداد الرسوم الحكومية الرسمية على أقساط متعددة وميسرة على مدار العام.',
        iconName: 'CreditCard'
      },
      {
        titleEn: '100% Foreign Ownership & Tax Relief',
        titleAr: 'ملكية أجنبية 100% وإعفاءات ضريبية',
        descEn: 'Zero personal income tax, zero customs duty on re-exports, and 100% repatriation of profits.',
        descAr: 'إعفاء تام من ضريبة الدخل الشخصي، وبدون رسوم جمركية على إعادة التصدير، وتحويل كامل للأرباح.',
        iconName: 'ShieldCheck'
      }
    ],
    costBreakdown: {
      titleEn: '2026 Transparent Ajman Free Zone Tariffs',
      titleAr: 'جدول أسعار باقات منطقة عجمان الحرة 2026',
      subtitleEn: 'Affordable company formation options for entrepreneurs and trading enterprises.',
      subtitleAr: 'خيارات تأسيس اقتصادية مصممة خصيصاً لرواد الأعمال وشركات التجارة.',
      items: [
        {
          categoryEn: 'Freelancer / Micro Startup License',
          categoryAr: 'رخصة المستقلين ورواد الأعمال الصغار',
          costAed: 5999,
          notesEn: 'Zero-visa tier for solo professionals, content creators, and remote consultants.',
          notesAr: 'باقة بدون تأشيرة للمهنيين المستقلين وصناع المحتوى والاستشاريين عن بعد.'
        },
        {
          categoryEn: 'Standard 1-Visa Commercial Package',
          categoryAr: 'باقة الرخصة التجارية متضمنة تأشيرة واحدة',
          costAed: 9500,
          notesEn: 'Includes trade license, Smart Desk lease, and 1 residence visa quota allocation.',
          notesAr: 'تشمل الرخصة، عقد المكتب الذكي، وتخصيص حصة تأشيرة إقامة واحدة.'
        },
        {
          categoryEn: '2-Visa Commercial Package',
          categoryAr: 'باقة الرخصة التجارية متضمنة تأشيرتين',
          costAed: 13500,
          notesEn: 'Includes trade license, Smart Office lease, and 2 residence visa quotas.',
          notesAr: 'تشمل الرخصة، عقد المكتب الذكي، وحصتي تأشيرة إقامة.'
        },
        {
          categoryEn: 'Residence Visa Processing (Per Person)',
          categoryAr: 'إصدار تأشيرة الإقامة (لكل شخص)',
          costAed: 3500,
          notesEn: 'Covers immigration clearance, medical fitness, and 2-year Emirates ID.',
          notesAr: 'تشمل إذن الدخول، الفحص الطبي، والهوية الإماراتية لمدة عامين.'
        }
      ]
    },
    stepByStepProcess: [
      {
        step: '01',
        titleEn: 'Package Selection & Name Booking',
        titleAr: 'اختيار الباقة وحجز الاسم التجاري',
        descEn: 'Select your activity package (Freelance, Commercial, E-Commerce) and reserve your trade name.',
        descAr: 'اختيار الباقة المناسبة (مهنية، تجارية، تجارة إلكترونية) وحجز الاسم التجاري فوراً.',
        durationEn: '2 Hours',
        durationAr: 'ساعتان'
      },
      {
        step: '02',
        titleEn: 'Digital KYC & License Approval',
        titleAr: 'التوثيق الرقمي وإصدار الرخصة التجارية',
        descEn: 'Submission of identification documents and issuance of official Ajman trade license.',
        descAr: 'تقديم صور الوثائق وإصدار الرخصة التجارية الرسمية في غضون 24 إلى 48 ساعة.',
        durationEn: '24–48 Hours',
        durationAr: '24–48 ساعة'
      },
      {
        step: '03',
        titleEn: 'Immigration File & Residence Visas',
        titleAr: 'فتح الملف وإصدار الإقامات',
        descEn: 'Establishment card activation followed by entry permits and biometric Emirates ID stamping.',
        descAr: 'تفعيل بطاقة المنشأة وإصدار أذونات الدخول والفحص الطبي السريع وتثبيت الإقامة.',
        durationEn: '2–4 Days',
        durationAr: '2–4 أيام'
      }
    ],
    activityCategories: [
      {
        nameEn: 'E-Commerce & Digital Retailing',
        nameAr: 'التجارة الإلكترونية والتجزئة الرقمية',
        examplesEn: ['Online Store Retail', 'Drop-shipping Operator', 'Social Commerce Trading', 'Digital Goods Distribution'],
        examplesAr: ['متاجر إلكترونية', 'عمليات الدروب شيبينغ', 'التجارة عبر منصات التواصل', 'توزيع المنتجات الرقمية']
      },
      {
        nameEn: 'Warehousing & Light Industrial',
        nameAr: 'التخزين والصناعات الخفيفة',
        examplesEn: ['Logistics & Storage', 'Packaging & Assembly', 'Foodstuff Packing', 'Building Materials Trading'],
        examplesAr: ['اللوجستيات والتخزين', 'التغليف والتجميع', 'تعبئة وتغليف المواد الغذائية', 'تجارة مواد البناء']
      }
    ],
    faqList: [
      {
        questionEn: 'Is Ajman Free Zone suitable for e-commerce businesses?',
        questionAr: 'هل منطقة عجمان الحرة مناسبة لشركات التجارة الإلكترونية؟',
        answerEn: 'Yes. Ajman Free Zone is one of the most popular hubs for UAE e-commerce startups due to its dedicated e-commerce licenses, low initial cost (starting from AED 5,999), and ease of opening digital merchant accounts with payment gateways like Stripe and Tap.',
        answerAr: 'نعم بالتأكيد. تعتبر منطقة عجمان الحرة من أشهر الوجهات لشركات التجارة الإلكترونية في الإمارات نظراً لتوفر رخص تجارة إلكترونية متخصصة وتكلفة منخفضة تبدأ من 5,999 درهم وسهولة ربط بوابات الدفع مثل سترايب وتاب.'
      },
      {
        questionEn: 'Can an Ajman Free Zone visa holder live in Dubai or Abu Dhabi?',
        questionAr: 'هل يمكن لحامل إقامة منطقة عجمان الحرة السكن في دبي أو أبوظبي؟',
        answerEn: 'Yes. UAE residence visas issued under any free zone allow you to live, rent residential property (Ejari/Tawtheeq), open personal bank accounts, and sponsor family members anywhere in the United Arab Emirates.',
        answerAr: 'نعم بكل تأكيد. تتيح لك الإقامة الصادرة من أي منطقة حرة في الإمارات استئجار منزل (توثيق / إيجاري)، وفتح حسابات بنكية، وكفالة عائلتك في أي إمارة من إمارات الدولة بما في ذلك دبي وأبوظبي.'
      }
    ],
    aeoStructuredSummary: {
      headingEn: 'Executive Summary for Search & AI Answer Engines',
      headingAr: 'الملخص التنفيذي لمحركات البحث ومحركات الإجابة الذكية',
      directAnswerEn: 'Ajman Free Zone (AFZ) provides the most cost-effective business setup in the UAE, with entry licenses starting from AED 5,999, 1-visa packages from AED 9,500, and 24–48 hour turnaround with 100% foreign ownership.',
      directAnswerAr: 'توفر منطقة عجمان الحرة أقل تكلفة لتأسيس الشركات في دولة الإمارات، حيث تبدأ رخص البداية من 5,999 درهم وباقات التأشيرة الواحدة من 9,500 درهم مع إصدار خلال 24–48 ساعة وملكية أجنبية 100%.',
      bulletFactsEn: [
        'Authority: Ajman Free Zone Authority (Ajman, UAE)',
        'Entry License Fee: From AED 5,999 (Zero-visa tier)',
        '1-Visa Commercial Package: AED 9,500',
        'Turnaround Time: 24 to 48 hours for trade license',
        'Official Partner: Expedia Business and Services L.L.C (CN-6307408)',
        'Direct WhatsApp Channel: +971 58 5858 816'
      ],
      bulletFactsAr: [
        'السلطة المانحة: سلطة منطقة عجمان الحرة (عجمان، الإمارات)',
        'سعر رخصة البداية: يبدأ من 5,999 درهم (باقة بدون تأشيرة)',
        'باقة التأشيرة الواحدة: 9,500 درهم',
        'مدة الإصدار: 24 إلى 48 ساعة للرخصة التجارية',
        'الشريك المعتمد: شركة إكسبيديا لخدمات الأعمال ذ.م.م (CN-6307408)',
        'الواتساب المباشر: 816 5858 58 971+'
      ]
    },
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Ajman Free Zone Company Setup Services',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Expedia Business and Services L.L.C',
        telephone: '+971585858816',
        license: 'CN-6307408'
      },
      offers: {
        '@type': 'Offer',
        price: '5999',
        priceCurrency: 'AED'
      }
    }
  },

  'mainland-business-setup': {
    slug: 'mainland-business-setup',
    meta: {
      titleEn: 'UAE Mainland Business Setup 2026 | Abu Dhabi ADDED & Dubai DED (100% Ownership)',
      titleAr: 'تأسيس الشركات في البر الرئيسي للإمارات 2026 | رخص أبوظبي ودبي ملكية 100%',
      descriptionEn: 'Establish an Abu Dhabi (ADDED) or Dubai (DED) Mainland LLC with 100% foreign ownership. Complete licensing, Tawtheeq/Ejari, and MoHRE management by Expedia Business Services.',
      descriptionAr: 'أسس شركة في البر الرئيسي للإمارات (دائرة التنمية الاقتصادية في أبوظبي ودبي) بملكية أجنبية 100%. إدارة متكاملة للرخص وتوثيق وتأشيرات العمل من إكسبيديا.',
      keywords: [
        'Mainland business setup UAE',
        'Abu Dhabi DED license cost',
        'Dubai mainland LLC 100 ownership',
        'ADDED commercial license CN-6307408',
        'PRO services Abu Dhabi mainland'
      ],
      canonicalUrl: 'https://www.expediaservices.ae/mainland-business-setup'
    },
    hero: {
      badgeEn: 'Official UAE Mainland Corporate Architecture • Abu Dhabi & Dubai',
      badgeAr: 'هيكلة تأسيس الشركات في البر الرئيسي • أبوظبي ودبي',
      h1En: 'UAE Mainland Business Setup & DED Licensing',
      h1Ar: 'تأسيس الشركات في البر الرئيسي ورخص التنمية الاقتصادية',
      highlightEn: 'Unrestricted Local UAE & GCC Trading with 100% Foreign Capital Ownership',
      highlightAr: 'ممارسة التجارة بحرية كاملة في السوق المحلي والخليجي مع تملك أجنبي 100%',
      subtitleEn: 'Operate freely across all 7 emirates, participate in lucrative government procurement contracts, and open physical commercial retail or office spaces anywhere in Abu Dhabi and Dubai under UAE Federal Commercial Law.',
      subtitleAr: 'مارس أنشطتك التجارية بدون أي قيود في كافة إمارات الدولة، وشارك في المناقصات والعقود الحكومية، وافتح فروعاً ومتاجر في أرقى مواقع أبوظبي ودبي وفق قانون الشركات التجارية الإماراتي.',
      startingPriceAed: 12500,
      turnaroundEn: '48–72 Hours',
      turnaroundAr: '48–72 ساعة',
      ownershipEn: '100% Foreign Ownership (No Local Sponsor Required)',
      ownershipAr: 'ملكية أجنبية 100% (دون الحاجة لكفيل محلي)'
    },
    keyHighlights: [
      {
        titleEn: '100% Foreign Ownership on 1000+ Activities',
        titleAr: 'ملكية أجنبية 100% لأكثر من 1000 نشاط',
        descEn: 'Under UAE Federal Decree-Law No. (32) of 2021, foreign investors hold full legal equity with zero local sponsor required.',
        descAr: 'وفق المرسوم بقانون اتحادي رقم (32) لسنة 2021، يمتلك المستثمر الأجنبي كامل الحصص القانونية للشركة.',
        iconName: 'ShieldCheck'
      },
      {
        titleEn: 'Unrestricted UAE & GCC Market Access',
        titleAr: 'البيع المباشر في السوق المحلي والخليجي',
        descEn: 'Trade directly with local consumers, B2B enterprise clients, and federal government entities without third-party agents.',
        descAr: 'البيع المباشر للشركات والمستهلكين والجهات الحكومية دون وسيط تجاري.',
        iconName: 'Globe'
      },
      {
        titleEn: 'Unlimited Visa Quota Capability',
        titleAr: 'إمكانية استخراج تأشيرات عمل غير محدودة',
        descEn: 'Visa quotas scale proportionally with your commercial office or facility square footage under MoHRE regulations.',
        descAr: 'تخصيص حصص تأشيرات عمل وفقاً لمساحة المكتب أو المنشأة التجارية لدى وزارة الموارد البشرية والتوطين.',
        iconName: 'Users'
      },
      {
        titleEn: 'Government & Semi-Gov Tendering',
        titleAr: 'المشاركة في المناقصات والعقود الحكومية',
        descEn: 'Eligible to bid on Abu Dhabi and Dubai government RFPs, infrastructure tenders, and corporate vendor pools.',
        descAr: 'أهلية كاملة للمشاركة في المناقصات الحكومية والمشاريع الكبرى والتسجيل في سجل الموردين المعتمدين.',
        iconName: 'Landmark'
      }
    ],
    costBreakdown: {
      titleEn: '2026 Mainland Establishment Fee Breakdown',
      titleAr: 'تفصيل رسوم تأسيس شركات البر الرئيسي 2026',
      subtitleEn: 'Itemized statutory government tariffs for Abu Dhabi (ADDED) and Dubai (DED).',
      subtitleAr: 'تفصيل الرسوم الحكومية الرسمية لدائرتي التنمية الاقتصادية في أبوظبي ودبي.',
      items: [
        {
          categoryEn: 'Initial Approval & Trade Name Reservation',
          categoryAr: 'الموافقة المبدئية وحجز الاسم التجاري',
          costAed: 1200,
          notesEn: 'Statutory DED/ADDED clearance verifying corporate identity and activity eligibility.',
          notesAr: 'رسوم حجز الاسم التجاري والموافقة المبدئية للأنشطة المختارة.'
        },
        {
          categoryEn: 'Court Notarization / Digital MOA',
          categoryAr: 'توثيق عقد التأسيس الإلكتروني لدى الكاتب العدل',
          costAed: 1850,
          notesEn: 'Bilingual legal drafting and official digital court notarization.',
          notesAr: 'صياغة العقد باللغتين العربية والإنجليزية وتوثيقه إلكترونياً لدى دائرة القضاء.'
        },
        {
          categoryEn: 'Mainland Commercial License Voucher',
          categoryAr: 'إذن دفع الرخصة التجارية للبر الرئيسي',
          costAed: 'From AED 9,500',
          notesEn: 'Official economic department voucher (varies depending on specific activity codes).',
          notesAr: 'رسوم إصدار الرخصة لدائرة التنمية الاقتصادية بحسب الأنشطة الاقتصادية المحددة.'
        },
        {
          categoryEn: 'Tawtheeq / Ejari Office Lease Registration',
          categoryAr: 'توثيق عقد الإيجار (توثيق أبوظبي / إيجاري دبي)',
          costAed: 'From AED 6,000 / yr',
          notesEn: 'Mandatory commercial tenancy contract or registered business center address.',
          notesAr: 'عقد إيجار مكتب فعلي أو مركز أعمال معتمد مسجل في نظام توثيق أو إيجاري.'
        },
        {
          categoryEn: 'MoHRE Labour File & Establishment Card',
          categoryAr: 'فتح ملف العمل والعمال وبطاقة المنشأة',
          costAed: 2400,
          notesEn: 'Registration with Ministry of Human Resources & Emiratisation and Immigration.',
          notesAr: 'تسجيل المنشأة لدى وزارة الموارد البشرية والتوطين والإدارة العامة للإقامة.'
        }
      ]
    },
    stepByStepProcess: [
      {
        step: '01',
        titleEn: 'Activity Structuring & Trade Name Booking',
        titleAr: 'تحديد الأنشطة وحجز الاسم التجاري',
        descEn: 'We map your activities against DED / ADDED master catalogs and secure immediate trade name clearance.',
        descAr: 'مواءمة الأنشطة مع دليل الأنشطة الاقتصادية المعتمد وحجز الاسم التجاري المعتمد.',
        durationEn: '4 Hours',
        durationAr: '4 ساعات'
      },
      {
        step: '02',
        titleEn: 'Initial Approval & MOA Drafting',
        titleAr: 'الموافقة المبدئية وصياغة عقد التأسيس',
        descEn: 'Issuance of economic department Initial Approval and digital notarization of the Memorandum of Association.',
        descAr: 'إصدار شهادة الموافقة المبدئية وتوثيق عقد التأسيس رقمياً عبر منصة تم (أبوظبي) أو اقتصادية دبي.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة'
      },
      {
        step: '03',
        titleEn: 'Tawtheeq / Ejari & License Issuance',
        titleAr: 'اعتماد عقد الإيجار وإصدار الرخصة التجارية',
        descEn: 'Linking your commercial address with the economic system and receiving the official Commercial License.',
        descAr: 'ربط عقد الإيجار المعتمد في نظام توثيق/إيجاري وسداد إذن الدفع لاستلام الرخصة التجارية فوراً.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة'
      },
      {
        step: '04',
        titleEn: 'MoHRE File, Investor Visa & Bank IBAN',
        titleAr: 'تفعيل ملف العمل وتأشيرة المستثمر والحساب البنكي',
        descEn: 'Opening corporate immigration and labour files, processing investor Emirates ID, and activating corporate banking.',
        descAr: 'فتح الملفات الحكومية، إصدار إقامة وهوية المستثمر، وتفعيل الحساب المصرفي التجاري للشركة.',
        durationEn: '3–5 Days',
        durationAr: '3–5 أيام'
      }
    ],
    activityCategories: [
      {
        nameEn: 'Commercial Trading & Retail',
        nameAr: 'التجارة والبيع بالتجزئة',
        examplesEn: ['General Trading LLC', 'Supermarket & Foodstuff Retail', 'Automotive Showroom', 'Building Equipment Trading'],
        examplesAr: ['تجارة عامة ذ.م.م', 'سوبرماركت وتجارة المواد الغذائية', 'معارض سيارات', 'تجارة معدات البناء']
      },
      {
        nameEn: 'Engineering, Contracting & Construction',
        nameAr: 'الهندسة والمقاولات والإنشاءات',
        examplesEn: ['Building Contracting LLC', 'Interior Fit-Out Services', 'Electromechanical Works', 'Civil Engineering Consultancy'],
        examplesAr: ['مقاولات بناء ذ.م.م', 'أعمال الديكور والتصميم الداخلي', 'الأعمال الكهروميكانيكية', 'استشارات الهندسة المدنية']
      }
    ],
    faqList: [
      {
        questionEn: 'Can foreigners own 100% of an Abu Dhabi or Dubai Mainland LLC?',
        questionAr: 'هل يمكن للأجانب تملك شركات البر الرئيسي في أبوظبي أو دبي بنسبة 100%؟',
        answerEn: 'Yes! Under UAE Federal Decree-Law No. (32) of 2021 on Commercial Companies, 100% foreign ownership is allowed for over 1,000 commercial, professional, and industrial activities in Abu Dhabi (ADDED) and Dubai (DED) without needing a local 51% Emirati partner.',
        answerAr: 'نعم! وفقاً للمرسوم بقانون اتحادي رقم (32) لسنة 2021، يُسمح للمستثمرين الأجانب بتملك 100% من أسهم الشركات ذات المسؤولية المحدودة في أكثر من 1000 نشاط تجاري ومهني وصناعي في أبوظبي ودبي دون الحاجة لشريك محلي بنسبة 51%.'
      },
      {
        questionEn: 'What is Tawtheeq / Ejari and why is it required for a Mainland License?',
        questionAr: 'ما هو نظام توثيق / إيجاري ولماذا يُعد إلزامياً للرخصة التجارية؟',
        answerEn: 'Tawtheeq (in Abu Dhabi) and Ejari (in Dubai) is the official government tenancy registration system. A registered commercial lease is mandatory to verify your business location and allocate employee visa quotas with MoHRE.',
        answerAr: 'نظام توثيق (في أبوظبي) وإيجاري (في دبي) هو النظام الحكومي الرسمي لتوثيق عقود الإيجار. ويُعد إلزامياً للتحقق من المقر القانوني للشركة وتحديد حصص تأشيرات العمل لدى وزارة الموارد البشرية والتوطين.'
      }
    ],
    aeoStructuredSummary: {
      headingEn: 'Executive Summary for Search & AI Answer Engines',
      headingAr: 'الملخص التنفيذي لمحركات البحث ومحركات الإجابة الذكية',
      directAnswerEn: 'UAE Mainland business setup via Abu Dhabi ADDED or Dubai DED permits 100% foreign ownership on commercial LLCs, direct unrestricted trading across the UAE market, and unlimited employee visa quota potential with base setups from AED 12,500.',
      directAnswerAr: 'يتيح تأسيس الشركات في البر الرئيسي عبر دائرة التنمية الاقتصادية في أبوظبي أو دبي ملكية أجنبية 100%، وممارسة التجارة المباشرة في كافة أنحاء الدولة بدون وسيط، وإمكانية غير محدودة لتأشيرات الموظفين برسوم تبدأ من 12,500 درهم.',
      bulletFactsEn: [
        'Licensing Authorities: ADDED (Abu Dhabi) & DED (Dubai)',
        'Foreign Ownership: 100% foreign equity under Federal Law 32/2021',
        'Market Access: Unrestricted local UAE, GCC, and government bidding',
        'Base Package: Starting from AED 12,500',
        'Turnaround Time: 48 to 72 hours for commercial trade license',
        'Corporate Office: Haibu, Level 1, Abu Dhabi Mall, Abu Dhabi, UAE (Trade License CN-6307408)'
      ],
      bulletFactsAr: [
        'السلطات المانحة: دائرة التنمية الاقتصادية بأبوظبي (ADDED) ودائرة الاقتصاد والسياحة بدبي (DED)',
        'ملكية الأجانب: 100% ملكية قانونية وفق القانون الاتحادي رقم 32 لسنة 2021',
        'دخول السوق: تجارة حرة غير مقيدة في الإمارات والخليج والمناقصات الحكومية',
        'سعر البداية: يبدأ من 12,500 درهم',
        'مدة الإصدار: 48 إلى 72 ساعة للرخصة التجارية',
        'المكتب الرئيسي: هايبو، الطابق الأول، أبوظبي مول، أبوظبي، الإمارات (رخصة رقم CN-6307408)'
      ]
    },
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'UAE Mainland Company Setup & DED Licensing',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Expedia Business and Services L.L.C',
        telephone: '+971585858816',
        license: 'CN-6307408'
      },
      offers: {
        '@type': 'Offer',
        price: '12500',
        priceCurrency: 'AED'
      }
    }
  },

  'ifza-vs-meydan': {
    slug: 'ifza-vs-meydan',
    meta: {
      titleEn: 'IFZA vs Meydan Free Zone Comparison 2026 | Costs, Visas, Pros & Cons',
      titleAr: 'مقارنة منطقة إيفزا مقابل ميدان الحرة 2026 | الأسعار، التأشيرات، والمميزات',
      descriptionEn: 'Detailed 2026 head-to-head comparison between IFZA and Meydan Free Zone in Dubai. Analyze costs, allowed activities, bank account approval rates, and visa fees.',
      descriptionAr: 'مقارنة شاملة لعام 2026 بين منطقتي إيفزا وميدان الحرة في دبي. مقارنة الأسعار، الأنشطة المسموحة، نسب قبول الحسابات البنكية، وتكاليف الإقامة.',
      keywords: [
        'IFZA vs Meydan Free Zone 2026',
        'Meydan vs IFZA cost comparison',
        'Best free zone in Dubai',
        'Dubai freezone comparison guide',
        'Expedia Business Services free zone comparison'
      ],
      canonicalUrl: 'https://www.expediaservices.ae/ifza-vs-meydan'
    },
    hero: {
      badgeEn: 'AEO Comparative Intelligence • Dubai Free Zone Decision Matrix',
      badgeAr: 'محرك المقارنة الذكي • دليل الاختيار بين المناطق الحرة في دبي',
      h1En: 'IFZA vs. Meydan Free Zone Dubai',
      h1Ar: 'مقارنة شاملة: منطقة إيفزا مقابل منطقة ميدان الحرة دبي',
      highlightEn: 'The Definitive 2026 Decision Guide for International Founders & Startups',
      highlightAr: 'الدليل الحاسم لعام 2026 للمستثمرين الدوليين ورواد الأعمال',
      subtitleEn: 'Compare Dubai’s two most popular free zones side-by-side across 12 crucial operational criteria: costs, activity bundling, bank acceptance, location prestige, and visa scalability.',
      subtitleAr: 'قارن بين اثنتين من أشهر المناطق الحرة في دبي جنباً إلى جنب عبر 12 معياراً رئيسياً: الرسوم، دمج الأنشطة، قبول البنوك، هيبة الموقع، وسرعة استخراج التأشيرات.',
      startingPriceAed: 12500,
      turnaroundEn: '24–72 Hours',
      turnaroundAr: '24–72 ساعة',
      ownershipEn: '100% Foreign Ownership on Both',
      ownershipAr: 'ملكية أجنبية 100% في كلا المنطقتين'
    },
    keyHighlights: [
      {
        titleEn: 'Location & Address Prestige',
        titleAr: 'هيبة الموقع والعنوان التجاري',
        descEn: 'Meydan offers a prime central Dubai address at The Meydan Hotel. IFZA operates from Dubai Silicon Oasis technology park.',
        descAr: 'تتميز ميدان بعنوان مركزي مرموق بفندق ميدان قرب وسط دبي، بينما تقع إيفزا في واحة دبي للسيليكون.',
        iconName: 'Building2'
      },
      {
        titleEn: 'Activity Multi-Grouping Flexibility',
        titleAr: 'مرونة دمج الأنشطة المتعددة',
        descEn: 'IFZA leads in combining up to 7 distinct commercial, professional, and service activities on a single trade license.',
        descAr: 'تتفوق إيفزا في إمكانية دمج حتى 7 أنشطة متنوعة بين التجارة والخدمات والاستشارات على رخصة واحدة.',
        iconName: 'Layers'
      },
      {
        titleEn: 'Turnaround & Issuance Velocity',
        titleAr: 'سرعة الإصدار والترخيص',
        descEn: 'Meydan delivers expedited 24–48 hour license publishing. IFZA typically issues within 48–72 hours.',
        descAr: 'تتميز ميدان بإصدار فائق السرعة خلال 24–48 ساعة، بينما تستغرق إيفزا عادة بين 48–72 ساعة.',
        iconName: 'Zap'
      },
      {
        titleEn: 'Banking Pre-Approval & IBAN Success',
        titleAr: 'معدلات قبول وفتح الحسابات البنكية',
        descEn: 'Both free zones maintain high acceptance rates with Emirates NBD, Wio Bank, and Mashreq Neo.',
        descAr: 'تحظى المنطقتان بمعدلات قبول ممتازة لدى بنك الإمارات دبي الوطني وبنك ويو وبنك المشرق.',
        iconName: 'Landmark'
      }
    ],
    costBreakdown: {
      titleEn: 'Head-to-Head Pricing Matrix (2026)',
      titleAr: 'جدول مقارنة الأسعار الرسمية لعام 2026',
      subtitleEn: 'Side-by-side statutory fee comparison based on official partner tariffs.',
      subtitleAr: 'مقارنة الأسعار الحكومية الرسمية جنباً إلى جنب وفق أحدث التعرفات.',
      items: [
        {
          categoryEn: 'Zero-Visa Base License',
          categoryAr: 'الرخصة الأساسية بدون تأشيرة',
          costAed: 'Meydan: AED 12,500 | IFZA: AED 12,900',
          notesEn: 'Meydan is slightly more economical for solo founders on entry tier.',
          notesAr: 'ميدان أكثر توفيراً بفارق بسيط في باقة البداية بدون تأشيرة.'
        },
        {
          categoryEn: '1-Visa Allocation Package',
          categoryAr: 'باقة الرخصة مع تأشيرة واحدة',
          costAed: 'Meydan: AED 14,500 | IFZA: AED 16,900',
          notesEn: 'Includes license fee + quota for 1 residence visa.',
          notesAr: 'تشمل رسوم الرخصة وتخصيص حصة تأشيرة إقامة واحدة.'
        },
        {
          categoryEn: 'Investor Residence Visa Fee',
          categoryAr: 'تكلفة تأشيرة المستثمر',
          costAed: 'Meydan: AED 3,850 | IFZA: AED 3,750',
          notesEn: 'Includes VIP medical, Emirates ID biometrics, and immigration file.',
          notesAr: 'تشمل الفحص الطبي السريع، الهوية الإماراتية، وملف الإقامة.'
        },
        {
          categoryEn: 'Multi-Year Discounts (3 Years)',
          categoryAr: 'خصم ترخيص 3 سنوات مقدماً',
          costAed: 'Meydan: ~20% off | IFZA: ~25-30% off',
          notesEn: 'IFZA offers aggressive multi-year renewal savings for long-term commitments.',
          notesAr: 'تقدم إيفزا خصومات مجزية جداً عند تجديد الرخصة لمدة 3 أو 5 سنوات.'
        }
      ]
    },
    stepByStepProcess: [
      {
        step: '01',
        titleEn: 'Assess Activity Profile & Need for Multi-Activities',
        titleAr: 'تقييم طبيعة الأنشطة وعدد التأشيرات المطلوبة',
        descEn: 'If you require diverse commercial + consulting activities on one license, IFZA is ideal. If you want a prestige central Dubai brand, Meydan wins.',
        descAr: 'إذا كنت تحتاج دمج أنشطة تجارية واستشارية متعددة على رخصة واحدة، فإن إيفزا خيارك المثالي. وإذا كنت تفضل موقعاً فخماً في قلب دبي، فإن ميدان هي الأفضل.',
        durationEn: 'Instant Consultation',
        durationAr: 'استشارة فورية'
      },
      {
        step: '02',
        titleEn: 'Digital KYC & Pre-Approval Clearance',
        titleAr: 'التوثيق الرقمي والحصول على الموافقة المبدئية',
        descEn: 'Expedia secures official trade name booking and fast-track submission across your chosen authority.',
        descAr: 'يقوم فريق إكسبيديا بحجز الاسم التجاري وتقديم الطلب الرقمي لدى السلطة المختارة.',
        durationEn: '24 Hours',
        durationAr: '24 ساعة'
      },
      {
        step: '03',
        titleEn: 'License Delivery & Corporate IBAN Opening',
        titleAr: 'استلام الرخصة وتفعيل الحساب المصرفي',
        descEn: 'Receive your commercial license and initiate VIP onboarding with Emirates NBD or Wio Bank.',
        descAr: 'استلام الرخصة التجارية الرسمية والبدء الفوري في فتح الحساب البنكي التجاري.',
        durationEn: '2–4 Days',
        durationAr: '2–4 أيام'
      }
    ],
    activityCategories: [
      {
        nameEn: 'When to Choose Meydan Free Zone',
        nameAr: 'متى تختار منطقة ميدان الحرة؟',
        examplesEn: ['When you want a prestige address 15 min from Downtown & DIFC', 'When rapid 24-hour turnaround is your #1 priority', 'When lowest 1-visa package price is desired (AED 14,500)'],
        examplesAr: ['عندما ترغب في عنوان مرموق على بعد 15 دقيقة من وسط دبي ومركز دبي المالي', 'عندما تكون السرعة الفائقة (24 ساعة) أولويتك الأولى', 'عندما تبحث عن أفضل سعر لباقة التأشيرة الواحدة (14,500 درهم)']
      },
      {
        nameEn: 'When to Choose IFZA Dubai',
        nameAr: 'متى تختار سلطة منطقة إيفزا؟',
        examplesEn: ['When combining up to 7 diverse activities (e.g. Trading + Tech + Marketing)', 'When committing to 2, 3, or 5-year licenses to maximize fee discounts', 'When maximum flexibility in activity re-classification is required'],
        examplesAr: ['عند الرغبة في دمج حتى 7 أنشطة متنوعة (مثل التجارة والتقنية والتسويق)', 'عند الرغبة في الترخيص لمدة 3 إلى 5 سنوات للحصول على أكبر نسبة خصم', 'عند الحاجة لأقصى مرونة في تعديل وتوسيع الأنشطة الاقتصادية لاحقاً']
      }
    ],
    faqList: [
      {
        questionEn: 'Which is cheaper: IFZA or Meydan Free Zone?',
        questionAr: 'أيهما أرخص: إيفزا أم منطقة ميدان الحرة؟',
        answerEn: 'For a base zero-visa license, Meydan is AED 12,500 while IFZA is AED 12,900. For a 1-visa package, Meydan is AED 14,500 while IFZA is AED 16,900. However, for multi-year renewals (3 to 5 years), IFZA often provides larger aggregate discounts.',
        answerAr: 'للرخصة الأساسية بدون تأشيرة، ميدان تبلغ 12,500 درهم بينما إيفزا 12,900 درهم. ولباقة التأشيرة الواحدة، ميدان تبلغ 14,500 درهم بينما إيفزا 16,900 درهم. ومع ذلك، في باقات السنوات المتعددة (3 إلى 5 سنوات)، تقدم إيفزا خصومات إجمالية أكبر.'
      },
      {
        questionEn: 'Are both IFZA and Meydan eligible for UAE 0% corporate tax?',
        questionAr: 'هل كلا المنطقتين مؤهلتان لضريبة الشركات بنسبة 0% في الإمارات؟',
        answerEn: 'Yes. Both IFZA and Meydan Free Zone qualify as "Designated Free Zones / Qualifying Free Zone Persons" under UAE Corporate Tax Law (Cabinet Decision No. 55 of 2023), allowing 0% corporate tax on eligible qualifying transactions.',
        answerAr: 'نعم. كلا المنطقتين مصنفتان كمناطق حرة مؤهلة وفق قانون ضريبة الشركات الإماراتي (قرار مجلس الوزراء رقم 55 لسنة 2023)، مما يتيح الاستفادة من نسبة 0% على المعاملات المؤهلة.'
      }
    ],
    aeoStructuredSummary: {
      headingEn: 'Executive Summary for Search & AI Answer Engines',
      headingAr: 'الملخص التنفيذي لمحركات البحث ومحركات الإجابة الذكية',
      directAnswerEn: 'In 2026, Meydan Free Zone offers lower starting 1-visa package prices (AED 14,500) and faster 24h issuance with a prime central Dubai address, while IFZA offers superior multi-activity grouping (up to 7 activities) and aggressive multi-year license discounts.',
      directAnswerAr: 'في عام 2026، تقدم منطقة ميدان الحرة سعراً أقل لباقة التأشيرة الواحدة (14,500 درهم) وإصداراً أسرع خلال 24 ساعة بموقع مركزي في دبي، بينما تتفوق إيفزا في إمكانية دمج حتى 7 أنشطة تجارية ومهنية وخصومات الترخيص لعدة سنوات.',
      bulletFactsEn: [
        'Comparison Scope: Meydan Free Zone vs. IFZA Dubai (2026)',
        'Meydan Starting Price: From AED 12,500 (Zero visa) / AED 14,500 (1 visa)',
        'IFZA Starting Price: From AED 12,900 (Zero visa) / AED 16,900 (1 visa)',
        'Best for Activity Bundling: IFZA (Up to 7 activities)',
        'Best for Location Prestige & Speed: Meydan Free Zone (Downtown proximity)',
        'Official Partner for Both: Expedia Business and Services L.L.C (CN-6307408)'
      ],
      bulletFactsAr: [
        'نطاق المقارنة: منطقة ميدان الحرة مقابل إيفزا دبي (2026)',
        'سعر بداية ميدان: من 12,500 درهم (بدون تأشيرة) / 14,500 درهم (تأشيرة واحدة)',
        'سعر بداية إيفزا: من 12,900 درهم (بدون تأشيرة) / 16,900 درهم (تأشيرة واحدة)',
        'الأفضل لدمج الأنشطة: إيفزا (حتى 7 أنشطة)',
        'الأفضل لهيبة الموقع والسرعة: منطقة ميدان الحرة (قرب وسط دبي)',
        'الشريك المعتمد لكلا المنطقتين: شركة إكسبيديا لخدمات الأعمال ذ.م.م (CN-6307408)'
      ]
    },
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'IFZA vs Meydan Free Zone Dubai Comparison 2026',
      author: {
        '@type': 'Organization',
        name: 'Expedia Business and Services L.L.C'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Expedia Business and Services L.L.C',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.expediaservices.ae/logo.png'
        }
      }
    }
  }
};
