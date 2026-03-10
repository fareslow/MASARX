import { shipmentsTable } from '@/src/lib/mock-data';

export default function ShipmentsPage() {
  return (
    <div className="form-stack">
      <section className="summary-grid">
        <article className="summary-card">
          <strong>74</strong>
          <span>شحنة قيد المعالجة</span>
        </article>
        <article className="summary-card">
          <strong>31.40 SAR</strong>
          <span>متوسط تكلفة الشحنة</span>
        </article>
      </section>

      <article className="table-card">
        <div className="table-toolbar">
          <div>
            <h3>إدارة الشحنات</h3>
            <p className="table-subtitle">إنشاء يدوي وجماعي، تتبع، إلغاء، وإعادة إنشاء ضمن بنية متعددة الناقلين.</p>
          </div>
          <div className="table-actions">
            <span className="status-chip">مقارنة أسعار</span>
            <span className="status-chip success">طباعة بوليصة</span>
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
