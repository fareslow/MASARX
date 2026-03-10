# Platform Plan

## 1. Integration Strategy

المنصة تحتاج طبقة تكاملات موحدة، لا مجموعة أكواد منفصلة لكل مزود.

### Provider Categories

- `CommerceProvider`: ربط المتاجر ومنصات البيع
- `CarrierProvider`: شركات الشحن
- `MessagingProvider`: البريد، SMS، واتساب لاحقًا

### Provider Contract Examples

كل مزود يجب أن يلتزم بواجهة موحدة على مستوى الدومين، مثل:

- `connect()`
- `disconnect()`
- `healthCheck()`
- `syncOrders()`
- `syncCatalog()` عند الحاجة
- `createShipment()`
- `cancelShipment()`
- `trackShipment()`
- `handleWebhook()`
- `getQuote()`

### Execution Rules

- لا تحفظ secrets كنص خام داخل الجداول
- كل credentials تشفر قبل التخزين
- كل sync أو webhook يعالج عبر queue
- كل مزود يكتب logs موحدة
- الأخطاء قابلة للتصنيف: auth, validation, provider_down, rate_limit

### Initial Integration Plan

إطلاق أولي موصى به لسوق KSA/GCC:

- متاجر: `Shopify`, `Salla`, `Zid` أو أي مزودين حسب الأولوية التجارية
- شحن: `SPL`, `Aramex`, `SMSA` أو مزودان على الأقل في الإطلاق الأول
- رسائل: مزود بريد واحد + مزود SMS واحد

الفكرة هنا ليست عددًا كبيرًا من المزودين، بل بنية تسمح بإضافة مزود جديد خلال أيام لا أسابيع.

## 2. Pricing & Calculator Backend

الحاسبة العامة يجب أن تستخدم نفس نواة التسعير المستخدمة داخل المنصة، حتى لا يصبح لدينا منطقان مختلفان.

### Quote Input

- origin city
- destination city
- country pair
- weight
- dimensions
- shipment type
- COD flag
- domestic/international
- account context إن وجد

### Pricing Pipeline

1. Normalize input
2. Resolve zones
3. Calculate actual vs volumetric weight
4. Load active pricing tables
5. Apply carrier/service filters
6. Apply base rate
7. Apply surcharges
8. Apply account overrides or promotions
9. Round according to strategy
10. Return quote options with ETA and breakdown

### Pricing Building Blocks

- `pricing_tables`
- `pricing_rules`
- `pricing_zones`
- `carrier_services`
- `account pricing overrides`
- `quote cache`

### Admin Capabilities Needed

- رفع جداول الأسعار
- تفعيل/تعطيل خدمة أو مزود
- تحديد صلاحية الأسعار
- تعريف المناطق والمدن
- إدارة رسوم COD والرسوم الإضافية
- معاينة quote قبل النشر

## 3. Tracking Engine Plan

نحتاج مكوّن تتبع مستقل منطقيًا داخل المنصة.

### Responsibilities

- استقبال تحديثات الحالة من الشركات
- polling الدوري عند غياب webhook
- توحيد statuses القادمة من مزودين مختلفين
- منع التكرار والتضارب
- تحديث الشحنة داخليًا
- إطلاق notifications عند التغيرات المهمة
- الاحتفاظ بـ shipment timeline كامل

### Normalized Statuses

مجموعة داخلية موحدة مثل:

- `created`
- `ready_for_pickup`
- `picked_up`
- `in_transit`
- `out_for_delivery`
- `delivered`
- `delivery_failed`
- `returned`
- `cancelled`

كل مزود يملك mapping خاصًا به نحو هذه القيم الداخلية.

## 4. RBAC & Security Plan

### Base Roles

- `owner`
- `admin`
- `operations_agent`
- `warehouse_agent`
- `customer_support`
- `analyst`

### Permission Model

نموذج `resource.action` مثل:

- `orders.view`
- `orders.create`
- `orders.update`
- `orders.export`
- `shipments.create`
- `shipments.cancel`
- `integrations.manage`
- `reports.view`
- `billing.view`
- `settings.manage`

### Security Controls

- كلمات المرور عبر `argon2`
- refresh token rotation
- جلسات HttpOnly cookies للويب
- OTP verification للبريد أو الجوال
- rate limiting على auth وtracking والنماذج العامة
- CSRF protection حيث يلزم
- input validation صارم
- file upload scanning policy
- webhook signature verification
- encryption for secrets باستخدام `KMS` أو مفتاح خادمي آمن
- audit log لكل إجراء حساس

### Tenant Isolation

- كل query تشغيلية تمر عبر `account_id`
- row access داخل service layer
- ممنوع الوصول الحر عبر IDs فقط
- internal admin routes منفصلة بصلاحيات أعلى

## 5. Admin Console Vision

### Functional Areas

- إدارة الحسابات والشركات
- إدارة المستخدمين والاشتراكات
- إدارة شركات الشحن والمتاجر المدعومة
- إدارة جداول الأسعار والخدمات
- إدارة المحتوى التسويقي والـ FAQ والصفحات العامة
- إدارة leads ونماذج التواصل
- مراقبة webhooks والqueues والsync runs
- مراجعة audit logs والأخطاء الحرجة

### UX Principles

- جداول قوية جدًا
- فلاتر محفوظة
- تفاصيل جانبية سريعة بدل كثرة التنقل
- read-only support mode
- impersonation مضبوط مع audit
- تحذيرات صريحة قبل العمليات الخطرة

## 6. Hosting & Operations

### Recommended Cloud Baseline

الاقتراح الأساسي:

- `AWS`
- `Vercel` يمكن استخدامه للويب فقط إذا أردنا سرعة في الواجهة، لكن الأفضل تشغيليًا توحيد الاستضافة في AWS عند نمو المنصة

### MVP Infrastructure on AWS

- `ECS Fargate` لتشغيل `web`, `admin`, `api`, `worker`
- `RDS PostgreSQL`
- `ElastiCache Redis`
- `S3`
- `CloudFront`
- `ALB`
- `Secrets Manager`
- `KMS`
- `CloudWatch`
- `WAF`

### Environments

- `dev`
- `staging`
- `production`

### CI/CD

- `GitHub Actions`
- lint + typecheck + tests + build
- database migration gate
- deploy per environment

### Observability

- `Sentry` للأخطاء
- `OpenTelemetry` traces
- centralized logs
- health checks
- queue metrics
- provider failure alerts

### Backup & Reliability

- RDS automated backups + point-in-time recovery
- S3 versioning
- runbooks للأعطال
- retry policies موحدة
- dead-letter handling for failed jobs

## 7. Recommended First Technical Milestones

1. تثبيت monorepo وبناء shared contracts
2. بناء auth + accounts + RBAC foundation
3. بناء marketing shell + calculator shell
4. بناء orders + shipments core domain
5. بناء provider framework قبل أي integration فعلي
6. بناء admin foundations
7. إضافة أول store provider وأول carrier provider

## 8. Product-Level Guidance

هناك أربع نقاط يجب ألا نتنازل عنها في التنفيذ:

- الحاسبة قبل التسجيل ليست مجرد widget تسويقي، بل بوابة بيع فعلية
- الجداول هي قلب التجربة اليومية، لذلك يجب تصميمها كمكوّنات reusable قوية
- كل تكامل جديد يجب أن يدخل من خلال contracts موحدة
- الموقع العام واللوحات يجب أن يشتركا في design language واحدة مع اختلاف المقام والسياق
