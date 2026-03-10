import { integrationsCards } from '@/src/lib/mock-data';

export default function IntegrationsDashboardPage() {
  return (
    <div className="integrations-grid">
      {integrationsCards.map((item) => (
        <article key={item.name} className="integrations-card">
          <span className="eyebrow">{item.type}</span>
          <h3>{item.name}</h3>
          <p>الحالة: {item.status}</p>
          <p>آخر مزامنة: {item.lastSync}</p>
          <div className="hero-actions">
            <span className="status-chip">Logs</span>
            <span className="status-chip success">Retry</span>
          </div>
        </article>
      ))}
    </div>
  );
}
