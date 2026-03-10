# MVP Roadmap

## 1. MVP Goal

إطلاق نسخة أولى قوية تسمح للتاجر أو الشركة بـ:

- فهم المنتج بسرعة من الموقع العام
- التسجيل المجاني بسهولة
- إكمال onboarding بشكل تدريجي
- إدارة الطلبات والشحنات من لوحة موحدة
- ربط متجر واحد أو أكثر ومزود شحن واحد أو أكثر
- استخدام حاسبة أسعار قبل التسجيل وبعده
- تتبع الشحنات داخليًا وعبر صفحة تتبع عامة
- استخدام صلاحيات أساسية وأدمن داخلي عملي

## 2. MVP Scope

### المرحلة الأولى

- الموقع التسويقي الكامل
- صفحات: الرئيسية، من نحن، المميزات، الأسعار، الحاسبة، التكاملات، الأسئلة الشائعة، تواصل معنا، الخصوصية، الشروط
- التسجيل، الدخول، التحقق، onboarding
- dashboard أساسي
- orders
- shipments
- integrations الأساسية
- pricing calculator
- tracking
- RBAC أساسي
- admin أساسي

### خارج نطاق MVP المباشر

- محرك اشتراكات متقدم
- Marketplace / Partners
- قواعد أتمتة معقدة
- WhatsApp production workflows
- SLA analytics المتقدمة
- تطبيقات الجوال

## 3. Suggested Delivery Sequence

### Sprint 0 - Foundation

- تثبيت monorepo
- ضبط CI
- تصميم design system
- إعداد قاعدة البيانات والـ auth foundation
- تعريف contracts والموديولات

### Sprint 1 - Marketing & Acquisition

- الصفحة الرئيسية وبقية الصفحات العامة
- نماذج التواصل وطلب العرض
- الحاسبة العامة
- SEO وi18n

### Sprint 2 - Auth & Onboarding

- التسجيل، الدخول، recovery
- التحقق عبر البريد أو الجوال
- onboarding flow
- إنشاء أول account / owner

### Sprint 3 - Orders & Customers

- جداول الطلبات
- تفاصيل الطلب
- استيراد CSV
- إنشاء وتعديل يدوي
- bulk actions الأساسية

### Sprint 4 - Shipments & Pricing

- quote engine
- إنشاء الشحنة
- المقارنة بين الناقلين
- label/PDF
- tracking timeline الداخلي

### Sprint 5 - Integrations & Public Tracking

- store integration v1
- carrier integration v1
- logs, retries, sync runs
- صفحة التتبع العامة

### Sprint 6 - Admin, Reports, Hardening

- admin console الأساسي
- إعدادات الحساب
- audit log
- dashboard KPIs الأساسية
- monitoring, QA, UAT

## 4. Timeline

الجدول التالي يفترض فريقًا صغيرًا محترفًا:

- 1 Product/UX
- 2 Frontend
- 2 Backend
- 1 QA
- 1 DevOps جزئي

### مدة المرحلة الأولى

- `10 إلى 14 أسبوعًا` للوصول إلى MVP محترم

### تفاصيل أدق

- الأسبوع 1-2: Foundation & design system
- الأسبوع 3-4: Marketing, calculator, lead capture
- الأسبوع 5-6: Auth, onboarding, accounts, RBAC
- الأسبوع 7-8: Orders, customers, CSV flows
- الأسبوع 9-10: Shipments, pricing engine, labels, tracking
- الأسبوع 11-12: Integrations, admin basics, dashboard KPIs
- الأسبوع 13-14: QA, performance, bug fixing, UAT, launch prep

إذا كان التنفيذ بفريق أصغر جدًا أو فردي، فالمدى الواقعي يصبح `16 إلى 24 أسبوعًا`.

## 5. Phase 2

مدة تقديرية: `6 إلى 8 أسابيع`

- returns module
- advanced reports
- billing/subscriptions
- advanced notifications
- richer webhooks/API
- branches/warehouses improvements
- UX refinements

## 6. Phase 3

مدة تقديرية: `8 إلى 12 أسبوعًا`

- partner / marketplace model
- advanced automation rules
- SLA analytics
- mobile support considerations
- deeper warehouse operations
- custom branded tracking and returns portals

## 7. MVP Success Metrics

- visitor to signup conversion
- calculator usage rate
- onboarding completion rate
- time to first shipment
- shipment creation success rate
- integration sync success rate
- delivery success rate by carrier
- support ticket volume during first 30 days

## 8. Recommended Build Order

إذا أردنا التنفيذ بأعلى أثر وأقل مخاطرة:

1. Foundation + design system + data model
2. Marketing + calculator
3. Auth + onboarding
4. Orders + shipments
5. Integrations + tracking
6. Admin + reports + hardening
