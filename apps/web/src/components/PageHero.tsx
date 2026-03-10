import { ReactNode } from 'react';

export function PageHero({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description: string; actions?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-shell">
        <div>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {actions ? <div className="page-hero-actions">{actions}</div> : null}
      </div>
    </section>
  );
}
