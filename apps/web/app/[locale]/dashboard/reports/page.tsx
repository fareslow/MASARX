import { reportHighlights } from '@/src/lib/mock-data';

export default function ReportsPage() {
  return (
    <div className="form-stack">
      <section className="metric-grid">
        {reportHighlights.map((item) => (
          <article key={item.title} className="metric-card">
            <h3>{item.title}</h3>
            <strong>{item.value}</strong>
            <p className="table-subtitle">مقارنة مع الفترة السابقة قادمة في المرحلة التالية.</p>
          </article>
        ))}
      </section>

      <section className="dashboard-main">
        <article className="table-card">
          <h3>أداء الناقلين</h3>
          <ul className="check-list">
            <li><span>MASARX Express</span><strong>96.2%</strong></li>
            <li><span>SPL Priority</span><strong>94.8%</strong></li>
            <li><span>Aramex Commerce</span><strong>91.3%</strong></li>
          </ul>
        </article>
        <article className="table-card">
          <h3>أعلى المدن شحنًا</h3>
          <ul className="check-list">
            <li><span>الرياض</span><strong>420</strong></li>
            <li><span>جدة</span><strong>288</strong></li>
            <li><span>الدمام</span><strong>166</strong></li>
          </ul>
        </article>
      </section>
    </div>
  );
}
