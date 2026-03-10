import { TrackingLookup } from '@/components/TrackingLookup';

export default function DashboardTrackingPage() {
  return (
    <div className="form-stack">
      <article className="table-card">
        <h3>مركز التتبع</h3>
        <p className="table-subtitle">ابحث برقم الطلب أو التتبع، وراجع الـ timeline الداخلي الموحّد.</p>
      </article>
      <TrackingLookup />
    </div>
  );
}
