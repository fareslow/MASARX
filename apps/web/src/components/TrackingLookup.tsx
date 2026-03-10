'use client';

import { useState } from 'react';
import { trackingRecords } from '@/src/lib/mock-data';

export function TrackingLookup() {
  const [query, setQuery] = useState('MSX-883912');
  const record = trackingRecords[query as keyof typeof trackingRecords];

  return (
    <div className="tracking-widget">
      <div className="tracking-search">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="MSX-883912 أو ORD-10240" />
      </div>

      {record ? (
        <div className="tracking-card">
          <div className="tracking-summary">
            <div>
              <span className="eyebrow">{record.carrier}</span>
              <h3>{record.currentStatus}</h3>
              <p>المرجع: {record.reference}</p>
            </div>
            <div className="tracking-eta">ETA: {record.eta}</div>
          </div>

          <div className="timeline">
            {record.events.map((event) => (
              <div key={`${event.time}-${event.status}`} className="timeline-item">
                <span className="timeline-dot" />
                <div>
                  <strong>{event.status}</strong>
                  <p>{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="empty-state">لم يتم العثور على نتيجة. جرّب رقم تتبع تجريبي مثل `MSX-883912`.</div>
      )}
    </div>
  );
}
