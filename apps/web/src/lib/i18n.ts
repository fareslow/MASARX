export const locales = ['ar', 'en'] as const;
export type Locale = (typeof locales)[number];

export type SiteDictionary = {
  dir: 'rtl' | 'ltr';
  localeName: string;
  nav: Array<{ href: string; label: string }>;
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
  };
  heroMetrics: Array<{ value: string; label: string }>;
  valueProps: Array<{ title: string; description: string }>;
  steps: Array<{ title: string; description: string }>;
  modules: Array<{ title: string; description: string }>;
  integrations: string[];
  plans: Array<{ name: string; price: string; description: string; features: string[]; cta: string }>;
  faqs: Array<{ question: string; answer: string }>;
  contactChannels: Array<{ label: string; value: string; hint: string }>;
  pageTitles: Record<string, { title: string; description: string }>;
  dashboard: {
    title: string;
    subtitle: string;
  };
  auth: {
    signInTitle: string;
    signInDescription: string;
    signUpTitle: string;
    signUpDescription: string;
    onboardingTitle: string;
    onboardingDescription: string;
  };
};

const pageTitlesAr = {
  about: {
    title: 'من نحن',
    description: 'نبني طبقة تشغيل لوجستية تجعل التاجر والشركة يديران الطلبات والشحن والتتبع والتكاملات من مكان واحد.'
  },
  features: {
    title: 'المميزات',
    description: 'قدرات تشغيلية وتسويقية مصممة لتقليل العمل اليدوي وتسريع التنفيذ ورفع جودة الخدمة.'
  },
  pricing: {
    title: 'الأسعار',
    description: 'نموذج اشتراك مرن يبدأ بسهولة ويكبر مع نمو العمليات والتكاملات.'
  },
  calculator: {
    title: 'حاسبة الأسعار',
    description: 'احسب السعر التقريبي ومدة التوصيل وقارن بين الخيارات قبل التسجيل أو بعده.'
  },
  integrations: {
    title: 'التكاملات',
    description: 'ربط المتاجر وشركات الشحن ومزودي الرسائل عبر طبقة موحدة قابلة للتوسع.'
  },
  faq: {
    title: 'الأسئلة الشائعة',
    description: 'إجابات سريعة على أكثر الأسئلة شيوعًا قبل التسجيل.'
  },
  contact: {
    title: 'تواصل معنا',
    description: 'احجز عرضًا، اطلب تسعيرة، أو تواصل مع فريق المبيعات والدعم.'
  },
  privacy: {
    title: 'سياسة الخصوصية',
    description: 'إطار أولي يوضح كيف نتعامل مع البيانات والحماية والاحتفاظ بالسجلات.'
  },
  terms: {
    title: 'الشروط والأحكام',
    description: 'إطار أولي يوضح شروط الاستخدام، المسؤوليات، وحدود الخدمة.'
  },
  track: {
    title: 'تتبع الشحنة',
    description: 'أدخل رقم التتبع أو رقم الطلب لمشاهدة آخر حالة ومخطط التسلسل الزمني.'
  },
  dashboard: {
    title: 'لوحة التحكم',
    description: 'نظرة تشغيلية فورية على الطلبات والشحنات والتكاملات والأداء.'
  }
} satisfies Record<string, { title: string; description: string }>;

const pageTitlesEn = {
  about: {
    title: 'About',
    description: 'We are building the logistics operating layer that unifies orders, shipping, tracking, and integrations.'
  },
  features: {
    title: 'Features',
    description: 'Operational modules built to reduce manual work and improve shipping execution.'
  },
  pricing: {
    title: 'Pricing',
    description: 'Flexible plans that start simple and grow with shipment volume and integrations.'
  },
  calculator: {
    title: 'Shipping Calculator',
    description: 'Estimate rates, delivery time, and compare options before or after signup.'
  },
  integrations: {
    title: 'Integrations',
    description: 'A unified integration layer for commerce platforms, carriers, and messaging providers.'
  },
  faq: {
    title: 'FAQ',
    description: 'Quick answers to common questions before signup.'
  },
  contact: {
    title: 'Contact Us',
    description: 'Request a demo, ask for a proposal, or reach sales and support.'
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'A starter privacy framework for data handling, protection, and retention.'
  },
  terms: {
    title: 'Terms & Conditions',
    description: 'A starter terms framework for service use, responsibilities, and limits.'
  },
  track: {
    title: 'Track Shipment',
    description: 'Enter the tracking number or order number to view the latest shipment progress.'
  },
  dashboard: {
    title: 'Dashboard',
    description: 'An operational overview of orders, shipments, integrations, and performance.'
  }
} satisfies Record<string, { title: string; description: string }>;

export const dictionaries: Record<Locale, SiteDictionary> = {
  ar: {
    dir: 'rtl',
    localeName: 'العربية',
    nav: [
      { href: '/', label: 'الرئيسية' },
      { href: '/features', label: 'المميزات' },
      { href: '/pricing', label: 'الأسعار' },
      { href: '/calculator', label: 'الحاسبة' },
      { href: '/integrations', label: 'التكاملات' },
      { href: '/faq', label: 'الأسئلة الشائعة' },
      { href: '/contact', label: 'تواصل معنا' }
    ],
    hero: {
      badge: 'منصة تشغيل لوجستية للتجار والشركات',
      title: 'أدر الطلبات والشحن والربط والتتبع من لوحة واحدة سريعة وواضحة.',
      description: 'MASARX تمنح المتاجر والشركات مركز تحكم موحدًا لإنشاء الشحنات، مقارنة الأسعار، متابعة الحالات، وإدارة التشغيل بكفاءة أعلى وأخطاء أقل.',
      primaryCta: 'ابدأ مجانًا',
      secondaryCta: 'احسب السعر',
      tertiaryCta: 'اطلب عرضًا'
    },
    heroMetrics: [
      { value: '+12', label: 'مؤشر تشغيلي في شاشة واحدة' },
      { value: '3 دقائق', label: 'حتى أول شحنة بعد التهيئة' },
      { value: 'متعدد', label: 'متاجر وناقلون من لوحة واحدة' }
    ],
    valueProps: [
      { title: 'ربط المتجر بسهولة', description: 'ابدأ بمزامنة الطلبات من متجرك أو أدخل الطلبات يدويًا ثم توسع تدريجيًا.' },
      { title: 'مقارنة أسعار الشحن', description: 'اعرض الخيارات المتاحة، فرق السعر، ومدة التوصيل قبل تأكيد إنشاء الشحنة.' },
      { title: 'إنشاء الشحنات بسرعة', description: 'أنشئ شحنة من الطلب مباشرة واطبع البوليصة وابدأ التتبع خلال ثوان.' },
      { title: 'إدارة المرتجعات', description: 'جهّز بنية مرتجعات قابلة للتوسع مع سياسات وأسباب وربط بالشحنات والطلبات.' },
      { title: 'تقارير تشغيلية حقيقية', description: 'شاهد النجاح والفشل، تكلفة الشحن، COD، وأكثر المدن أداءً من شاشة واحدة.' },
      { title: 'تقليل العمل اليدوي', description: 'قلل تكرار إدخال البيانات والأخطاء الناتجة عن الانتقال بين أكثر من أداة أو مزود.' }
    ],
    steps: [
      { title: 'أنشئ حسابك', description: 'ابدأ بالاسم ووسيلة التواصل واسم المتجر أو الشركة.' },
      { title: 'أكمل التهيئة', description: 'أضف بيانات النشاط والعنوان الأساسي ثم اختر أسلوب إضافة الطلبات.' },
      { title: 'اربط متجرك والناقل', description: 'فعّل التكاملات الأساسية أو ابدأ يدويًا حتى تكون جاهزًا للتوسع.' },
      { title: 'أنشئ الشحنات', description: 'حوّل الطلبات إلى شحنات مع مقارنة السعر ووقت التسليم.' },
      { title: 'تتبّع الأداء', description: 'راقب الحالات، المرتجعات، والتقارير من لوحة تشغيل واحدة.' }
    ],
    modules: [
      { title: 'إدارة الطلبات', description: 'جداول احترافية، استيراد وتصدير، بحث سريع، وحالات قابلة للتطوير.' },
      { title: 'إدارة الشحنات', description: 'إنشاء يدوي وجماعي، طباعة البوليصات، إعادة الجدولة، وتتبع التغييرات.' },
      { title: 'التتبع المباشر', description: 'صفحة تتبع عامة وسجل داخلي كامل للأحداث مع توحيد حالات الناقلين.' },
      { title: 'الربط عبر API', description: 'طبقة تكاملات موحدة تسمح بإضافة متاجر وناقلين ومزودي رسائل بسهولة.' },
      { title: 'صلاحيات الفريق', description: 'أدوار وصلاحيات دقيقة مع سجل نشاط واضح لكل إجراء حساس.' },
      { title: 'الفروع والمستودعات', description: 'جاهزية تشغيلية للتوسع في المستودعات والفروع والتجهيز مستقبلًا.' }
    ],
    integrations: ['Shopify', 'Salla', 'Zid', 'WooCommerce', 'SPL', 'Aramex', 'SMSA', 'Email', 'SMS'],
    plans: [
      {
        name: 'Launch',
        price: 'ابدأ مجانًا',
        description: 'مثالية لإثبات القيمة وتشغيل أول تدفق طلبات وشحنات.',
        features: ['موقع + حاسبة أسعار', 'مستخدمون أساسيون', 'طلبات وشحنات', 'تكاملات أساسية', 'تتبع عام وداخلي'],
        cta: 'ابدأ الآن'
      },
      {
        name: 'Growth',
        price: 'تواصل معنا',
        description: 'للعمليات الأعلى حجمًا والاحتياج إلى صلاحيات وتقارير أعمق.',
        features: ['تكاملات متعددة', 'تقارير متقدمة', 'فروع ومستودعات', 'سياسات مخصصة', 'إدارة تشغيل موسعة'],
        cta: 'اطلب عرضًا'
      }
    ],
    faqs: [
      { question: 'هل يوجد تسجيل مجاني؟', answer: 'نعم، صممنا التدفق ليبدأ العميل بسرعة ثم يكمل الإعدادات تدريجيًا بدون احتكاك كبير.' },
      { question: 'هل أستطيع الربط مع متجري؟', answer: 'نعم، البنية مصممة لربط منصات البيع عبر طبقة موحدة مع دعم التوسع في المزودين.' },
      { question: 'هل يمكن الربط مع أكثر من شركة شحن؟', answer: 'نعم، المنصة مبنية للمقارنة والتشغيل عبر عدة ناقلين من نفس الحساب.' },
      { question: 'هل يوجد تتبع للعملاء النهائيين؟', answer: 'نعم، توجد صفحة تتبع عامة بالإضافة إلى سجل تتبع داخلي كامل داخل لوحة التحكم.' },
      { question: 'هل يوجد API؟', answer: 'البنية الخلفية مهيأة لواجهة API نظيفة مع versioning وwebhooks وتوسعات مستقبلية.' }
    ],
    contactChannels: [
      { label: 'واتساب', value: '+966 50 000 0000', hint: 'للاستفسارات السريعة وطلب العروض.' },
      { label: 'البريد الإلكتروني', value: 'sales@masarx.com', hint: 'للعروض التجارية وتفاصيل التكاملات.' },
      { label: 'الديمو', value: 'احجز جلسة تعريفية', hint: 'عرض حي على سير العمل والموديولات الأساسية.' }
    ],
    pageTitles: pageTitlesAr,
    dashboard: {
      title: 'مركز القيادة التشغيلي',
      subtitle: 'راقب الطلبات والشحنات والإنذارات والتكاملات من شاشة واحدة.'
    },
    auth: {
      signInTitle: 'تسجيل الدخول',
      signInDescription: 'الوصول إلى مركز التشغيل وإدارة الطلبات والشحنات والتقارير.',
      signUpTitle: 'أنشئ حسابك مجانًا',
      signUpDescription: 'ابدأ خلال دقائق ثم أكمل التهيئة بخطوات مرنة وقابلة للتخطي.',
      onboardingTitle: 'التهيئة الأولية',
      onboardingDescription: 'أكمل بيانات الشركة والعنوان والربط حتى تصل إلى أول شحنة بسرعة.'
    }
  },
  en: {
    dir: 'ltr',
    localeName: 'English',
    nav: [
      { href: '/', label: 'Home' },
      { href: '/features', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/calculator', label: 'Calculator' },
      { href: '/integrations', label: 'Integrations' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' }
    ],
    hero: {
      badge: 'Logistics SaaS for merchants and operations teams',
      title: 'Run orders, shipping, integrations, and tracking from one command center.',
      description: 'MASARX helps stores and logistics teams create shipments faster, compare carrier rates, track updates, and scale operations with less manual work.',
      primaryCta: 'Start Free',
      secondaryCta: 'Calculate Price',
      tertiaryCta: 'Request Demo'
    },
    heroMetrics: [
      { value: '12+', label: 'Operational KPIs in one place' },
      { value: '3 min', label: 'To first shipment after onboarding' },
      { value: 'Multi', label: 'Stores and carriers in one panel' }
    ],
    valueProps: [
      { title: 'Connect your store fast', description: 'Sync orders from your commerce platform or start with manual order entry.' },
      { title: 'Compare carrier prices', description: 'See rate differences, ETA, and available options before shipment creation.' },
      { title: 'Create shipments quickly', description: 'Turn orders into shipments, print labels, and start tracking in seconds.' },
      { title: 'Returns-ready foundation', description: 'Build returns policies, reasons, and reverse shipment flows on a scalable core.' },
      { title: 'Actionable analytics', description: 'Track success rates, failures, costs, COD, and top cities from one dashboard.' },
      { title: 'Less manual work', description: 'Reduce copy-paste operations and execution mistakes across systems.' }
    ],
    steps: [
      { title: 'Create account', description: 'Start with name, contact details, and company name.' },
      { title: 'Complete onboarding', description: 'Add company basics and a default shipping address.' },
      { title: 'Connect store and carrier', description: 'Enable integrations or start with manual operations.' },
      { title: 'Create shipments', description: 'Turn orders into carrier-ready shipments with rate comparison.' },
      { title: 'Track performance', description: 'Monitor statuses, returns, and KPIs from one operating layer.' }
    ],
    modules: [
      { title: 'Orders Management', description: 'Professional tables, CSV import/export, fast search, and structured statuses.' },
      { title: 'Shipment Operations', description: 'Manual and bulk creation, labels, rescheduling, and full activity history.' },
      { title: 'Live Tracking', description: 'Public tracking page and internal event timeline with normalized statuses.' },
      { title: 'API Integrations', description: 'Unified contracts for stores, carriers, and messaging providers.' },
      { title: 'Team Permissions', description: 'Role-based access control with activity logging for sensitive operations.' },
      { title: 'Branches & Warehouses', description: 'Operational readiness for deeper warehouse flows and multi-branch setups.' }
    ],
    integrations: ['Shopify', 'Salla', 'Zid', 'WooCommerce', 'SPL', 'Aramex', 'SMSA', 'Email', 'SMS'],
    plans: [
      {
        name: 'Launch',
        price: 'Start Free',
        description: 'Designed to prove value and start real shipment operations quickly.',
        features: ['Marketing site + calculator', 'Core users', 'Orders and shipments', 'Core integrations', 'Public and internal tracking'],
        cta: 'Get Started'
      },
      {
        name: 'Growth',
        price: 'Contact Us',
        description: 'For teams that need deeper analytics, permissions, and operational controls.',
        features: ['Multiple integrations', 'Advanced reporting', 'Branches and warehouses', 'Custom policies', 'Expanded operations controls'],
        cta: 'Request Proposal'
      }
    ],
    faqs: [
      { question: 'Is there a free signup?', answer: 'Yes. The onboarding flow starts with low friction and lets teams complete setup gradually.' },
      { question: 'Can I connect my store?', answer: 'Yes. The platform is built around a unified integration layer for commerce platforms.' },
      { question: 'Can I use multiple carriers?', answer: 'Yes. MASARX is designed for multi-carrier comparison and execution.' },
      { question: 'Do you support public tracking?', answer: 'Yes. There is a branded public tracking page plus internal shipment event history.' },
      { question: 'Will there be an API?', answer: 'Yes. The backend foundation is designed for versioned APIs, webhooks, and future expansion.' }
    ],
    contactChannels: [
      { label: 'WhatsApp', value: '+966 50 000 0000', hint: 'Fast answers and commercial inquiries.' },
      { label: 'Email', value: 'sales@masarx.com', hint: 'Sales proposals and integration discussions.' },
      { label: 'Demo', value: 'Book a walkthrough', hint: 'Live walkthrough of the product and operating flows.' }
    ],
    pageTitles: pageTitlesEn,
    dashboard: {
      title: 'Operations Command Center',
      subtitle: 'Monitor orders, shipments, alerts, and integrations from one place.'
    },
    auth: {
      signInTitle: 'Sign In',
      signInDescription: 'Access the operating layer for orders, shipments, and reporting.',
      signUpTitle: 'Create Your Free Account',
      signUpDescription: 'Get started in minutes, then complete onboarding in flexible steps.',
      onboardingTitle: 'Initial Onboarding',
      onboardingDescription: 'Add company details, shipping address, and integrations to reach your first shipment faster.'
    }
  }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: string): SiteDictionary {
  return isLocale(locale) ? dictionaries[locale] : dictionaries.ar;
}

export function localizePath(locale: string, href: string) {
  const normalizedLocale = locale === 'en' ? 'en' : 'ar';
  return href === '/' ? `/${normalizedLocale}` : `/${normalizedLocale}${href}`;
}
