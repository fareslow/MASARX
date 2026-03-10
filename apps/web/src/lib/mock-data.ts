export const dashboardMetrics = [
  { label: 'الطلبات الجديدة', value: '186', delta: '+12%', tone: 'positive' },
  { label: 'الشحنات قيد المعالجة', value: '74', delta: '+8%', tone: 'neutral' },
  { label: 'تم التسليم', value: '1,240', delta: '+19%', tone: 'positive' },
  { label: 'المرتجعات', value: '29', delta: '-4%', tone: 'positive' }
] as const;

export const ordersTable = [
  { orderNumber: 'ORD-10241', customer: 'متجر روازن', city: 'الرياض', status: 'جديد', payment: 'COD', branch: 'الفرع الرئيسي' },
  { orderNumber: 'ORD-10240', customer: 'مؤسسة مدار', city: 'جدة', status: 'جاهز للشحن', payment: 'مدفوع', branch: 'مستودع جدة' },
  { orderNumber: 'ORD-10239', customer: 'متجر واصل', city: 'الدمام', status: 'في المراجعة', payment: 'COD', branch: 'مستودع الشرقية' },
  { orderNumber: 'ORD-10238', customer: 'شركة لين', city: 'المدينة', status: 'تم إنشاء الشحنة', payment: 'مدفوع', branch: 'الفرع الرئيسي' }
] as const;

export const shipmentsTable = [
  { trackingNumber: 'MSX-883912', carrier: 'MASARX Express', status: 'في الطريق', eta: 'غدًا', cost: '32 SAR' },
  { trackingNumber: 'SPL-119320', carrier: 'SPL Priority', status: 'بانتظار الاستلام', eta: 'اليوم', cost: '27 SAR' },
  { trackingNumber: 'ARX-550381', carrier: 'Aramex Commerce', status: 'تم التسليم', eta: 'تم', cost: '41 SAR' }
] as const;

export const integrationsCards = [
  { name: 'Shopify', status: 'متصل', lastSync: 'منذ 4 دقائق', type: 'متجر' },
  { name: 'Salla', status: 'يحتاج إعداد', lastSync: 'غير متصل', type: 'متجر' },
  { name: 'SPL', status: 'متصل', lastSync: 'منذ دقيقة', type: 'ناقل' },
  { name: 'Aramex', status: 'خطأ مزامنة', lastSync: 'منذ 13 دقيقة', type: 'ناقل' }
] as const;

export const alertsFeed = [
  'فشل مزامنة ناقل واحد ويتطلب إعادة محاولة.',
  '13 طلبًا جديدًا لم يتم تحويلها إلى شحنات بعد.',
  'هناك 4 شحنات تجاوزت SLA المتوقع اليوم.'
] as const;

export const reportHighlights = [
  { title: 'معدل النجاح في التسليم', value: '94.8%' },
  { title: 'متوسط وقت التجهيز', value: '3.2 ساعة' },
  { title: 'متوسط وقت التسليم', value: '1.8 يوم' },
  { title: 'تكلفة الشحن هذا الشهر', value: '48,200 SAR' }
] as const;

export const trackingRecords = {
  'MSX-883912': {
    reference: 'ORD-10241',
    carrier: 'MASARX Express',
    currentStatus: 'في الطريق',
    eta: '2026-03-11',
    events: [
      { time: '2026-03-10 08:20', status: 'تم استلام الشحنة من المستودع' },
      { time: '2026-03-10 10:05', status: 'في مركز الفرز الرئيسي' },
      { time: '2026-03-10 13:40', status: 'غادرت المركز باتجاه مدينة التسليم' }
    ]
  },
  'ORD-10240': {
    reference: 'SPL-119320',
    carrier: 'SPL Priority',
    currentStatus: 'بانتظار الاستلام',
    eta: '2026-03-10',
    events: [
      { time: '2026-03-10 09:10', status: 'تم إنشاء الشحنة' },
      { time: '2026-03-10 09:20', status: 'تم إرسال الطلب إلى الناقل' }
    ]
  }
} as const;

export const onboardingSteps = [
  'اختيار نوع النشاط التجاري',
  'إضافة بيانات الشركة الأساسية',
  'إضافة عنوان الشحن الافتراضي',
  'ربط متجر أو اختيار الإدخال اليدوي',
  'ربط شركة شحن أو تفعيل مزود افتراضي',
  'الوصول إلى لوحة التحكم'
] as const;
