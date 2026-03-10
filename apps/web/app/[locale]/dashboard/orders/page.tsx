import { ordersTable } from '@/src/lib/mock-data';

export default function OrdersPage() {
  return (
    <article className="table-card">
      <div className="table-toolbar">
        <div>
          <h3>إدارة الطلبات</h3>
          <p className="table-subtitle">بحث سريع، فلترة، حالات واضحة، وإجراءات جماعية من جدول واحد.</p>
        </div>
        <div className="table-actions">
          <span className="status-chip">CSV Import</span>
          <span className="status-chip success">Export Excel</span>
        </div>
      </div>
      <div className="filter-row">
        <span className="integration-pill">اليوم</span>
        <span className="integration-pill">المراجعة</span>
        <span className="integration-pill">فرع رئيسي</span>
        <span className="integration-pill">COD</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>رقم الطلب</th>
            <th>العميل</th>
            <th>المدينة</th>
            <th>الدفع</th>
            <th>الفرع</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {ordersTable.map((order) => (
            <tr key={order.orderNumber}>
              <td>{order.orderNumber}</td>
              <td>{order.customer}</td>
              <td>{order.city}</td>
              <td>{order.payment}</td>
              <td>{order.branch}</td>
              <td><span className="status-chip">{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
