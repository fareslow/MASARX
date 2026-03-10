'use client';

import { useState } from 'react';
import { buildQuotes, domesticCities, internationalCities, QuoteInput } from '@/src/lib/quote-engine';

const initialState: QuoteInput = {
  originCity: domesticCities[0],
  destinationCity: domesticCities[1],
  weight: 2,
  length: 20,
  width: 15,
  height: 10,
  shipmentType: 'parcel',
  cashOnDelivery: true,
  scope: 'domestic'
};

export function CalculatorWidget({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<QuoteInput>(initialState);
  const destinationChoices = form.scope === 'domestic' ? domesticCities : internationalCities;
  const quotes = buildQuotes(form);

  function setField<K extends keyof QuoteInput>(field: K, value: QuoteInput[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleScopeChange(scope: QuoteInput['scope']) {
    setForm((current) => ({
      ...current,
      scope,
      destinationCity: scope === 'domestic' ? domesticCities[1] : internationalCities[0],
      originCity: domesticCities[0]
    }));
  }

  return (
    <div className={`calculator-shell ${compact ? 'compact' : ''}`}>
      <div className="calculator-form-grid">
        <label>
          <span>مدينة الاستلام</span>
          <select value={form.originCity} onChange={(event) => setField('originCity', event.target.value)}>
            {domesticCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>نطاق الشحنة</span>
          <select value={form.scope} onChange={(event) => handleScopeChange(event.target.value as QuoteInput['scope'])}>
            <option value="domestic">داخلي</option>
            <option value="international">دولي</option>
          </select>
        </label>

        <label>
          <span>مدينة التسليم</span>
          <select value={form.destinationCity} onChange={(event) => setField('destinationCity', event.target.value)}>
            {destinationChoices.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>نوع الشحنة</span>
          <select value={form.shipmentType} onChange={(event) => setField('shipmentType', event.target.value as QuoteInput['shipmentType'])}>
            <option value="parcel">طرد</option>
            <option value="document">مستند</option>
            <option value="bulky">كبيرة الحجم</option>
          </select>
        </label>

        <label>
          <span>الوزن (كجم)</span>
          <input type="number" min="0.5" step="0.5" value={form.weight} onChange={(event) => setField('weight', Number(event.target.value))} />
        </label>

        <label>
          <span>الطول (سم)</span>
          <input type="number" min="1" value={form.length} onChange={(event) => setField('length', Number(event.target.value))} />
        </label>

        <label>
          <span>العرض (سم)</span>
          <input type="number" min="1" value={form.width} onChange={(event) => setField('width', Number(event.target.value))} />
        </label>

        <label>
          <span>الارتفاع (سم)</span>
          <input type="number" min="1" value={form.height} onChange={(event) => setField('height', Number(event.target.value))} />
        </label>
      </div>

      <label className="checkbox-row">
        <input type="checkbox" checked={form.cashOnDelivery} onChange={(event) => setField('cashOnDelivery', event.target.checked)} />
        <span>الدفع عند الاستلام</span>
      </label>

      <div className="quote-results">
        {quotes.map((quote) => (
          <article key={quote.carrier} className="quote-card">
            <div className="quote-card-top">
              <div>
                <h3>{quote.carrier}</h3>
                <p>{quote.service}</p>
              </div>
              <div className="quote-price">{quote.price.toFixed(2)} SAR</div>
            </div>
            <div className="quote-meta">
              <span>ETA: {quote.eta}</span>
              <span>Billable: {quote.billableWeight} kg</span>
            </div>
            <ul>
              {quote.breakdown.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.amount.toFixed(2)} SAR</strong>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
