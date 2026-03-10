import { alertsFeed, dashboardMetrics, integrationsCards, ordersTable, shipmentsTable } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <div className="form-stack">
      <section className="metric-grid">
        {dashboardMetrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <span className={`metric-delta ${metric.tone === 'neutral' ? 'neutral' : ''}`}>{metric.delta}</span>
            <h3>{metric.label}</h3>
            <strong>{metric.value}</strong>
            <p className="table-subtitle">آخر تحديث قبل دقيقة واحدة</p>
          </article>
        ))}
      </section>

      <section className="dashboard-main">
        <article className="table-card">
          <div className="table-toolbar">
            <div>
              <h3>أحدث الطلبات</h3>
              <p className="table-subtitle">طلبات تحتاج مراجعة أو تحويل إلى شحنات.</p>
            </div>
            <span className="status-chip">Bulk actions جاهزة</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>رقم الطلب</th>
                <th>العميل</th>
                <th>المدينة</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {ordersTable.map((order) => (
                <tr key={order.orderNumber}>
                  <td>{order.orderNumber}</td>
                  <td>{order.customer}</td>
                  <td>{order.city}</td>
                  <td><span className="status-chip">{order.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="table-card">
          <div className="table-toolbar">
            <div>
              <h3>التنبيهات والتكاملات</h3>
              <p className="table-subtitle">صحة الربط وحالات الفشل والمهام العالقة.</p>
            </div>
            <span className="status-chip warning">يحتاج متابعة</span>
          </div>
          <ul className="check-list">
            {alertsFeed.map((alert) => (
              <li key={alert}>{alert}</li>
            ))}
          </ul>
          <div className="form-stack">
            {integrationsCards.slice(0, 3).map((item) => (
              <div key={item.name} className="section-card">
                <strong>{item.name}</strong>
                <p>{item.status}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <article className="table-card">
        <div className="table-toolbar">
          <div>
            <h3>أحدث الشحنات</h3>
            <p className="table-subtitle">ملخص سريع لحالة الشحنات المفتوحة.</p>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>رقم التتبع</th>
              <th>الناقل</th>
              <th>الحالة</th>
              <th>ETA</th>
              <th>التكلفة</th>
            </tr>
          </thead>
          <tbody>
            {shipmentsTable.map((shipment) => (
              <tr key={shipment.trackingNumber}>
                <td>{shipment.trackingNumber}</td>
                <td>{shipment.carrier}</td>
                <td><span className="status-chip success">{shipment.status}</span></td>
                <td>{shipment.eta}</td>
                <td>{shipment.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </div>
  );
}
