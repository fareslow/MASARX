const stats = [
  { label: 'الحسابات النشطة', value: '128' },
  { label: 'تكاملات تحتاج متابعة', value: '7' },
  { label: 'ويب هوكس فاشلة', value: '19' },
  { label: 'طلبات عروض جديدة', value: '14' }
];

const modules = [
  'إدارة الحسابات والاشتراكات',
  'إدارة المزودين وجداول الأسعار',
  'إدارة المحتوى التسويقي وFAQ',
  'مراقبة الويب هوكس والصفوف',
  'سجلات النظام والأخطاء الحرجة'
];

export default function AdminPage() {
  return (
    <main style={{ width: 'min(1200px, calc(100% - 32px))', margin: '0 auto', padding: '32px 0 48px' }}>
      <section style={{ background: '#fff', borderRadius: 24, padding: 28, boxShadow: '0 18px 48px rgba(22,32,42,.08)' }}>
        <span style={{ display: 'inline-flex', padding: '8px 12px', borderRadius: 999, background: 'rgba(15,93,94,.1)', color: '#0f5d5e' }}>Admin Console</span>
        <h1 style={{ fontSize: '3rem', marginBottom: 8 }}>لوحة الأدمن الداخلية</h1>
        <p style={{ color: '#5b6871', maxWidth: 780 }}>واجهة تشغيل عليا لإدارة الحسابات والمزودين وجداول الأسعار والمحتوى والسجلات الحرجة بشكل يدعم التشغيل الفعلي لا مجرد المتابعة الشكلية.</p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 16, marginTop: 24 }}>
        {stats.map((stat) => (
          <article key={stat.label} style={{ background: '#fff', borderRadius: 20, padding: 22, boxShadow: '0 14px 32px rgba(22,32,42,.06)' }}>
            <div style={{ color: '#5b6871', marginBottom: 12 }}>{stat.label}</div>
            <strong style={{ fontSize: '2rem' }}>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 16, marginTop: 24 }}>
        <article style={{ background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 14px 32px rgba(22,32,42,.06)' }}>
          <h2>الموديولات التشغيلية</h2>
          <ul style={{ paddingInlineStart: 20, lineHeight: 2 }}>
            {modules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article style={{ background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 14px 32px rgba(22,32,42,.06)' }}>
          <h2>أولويات اليوم</h2>
          <ul style={{ paddingInlineStart: 20, lineHeight: 2 }}>
            <li>مراجعة أسعار ناقل جديد قبل النشر.</li>
            <li>التعامل مع فشل webhook في مزود تتبع.</li>
            <li>تفعيل حسابين جديدين من فريق المبيعات.</li>
            <li>مراجعة صفحة الأسعار العامة وتحديث FAQ.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
