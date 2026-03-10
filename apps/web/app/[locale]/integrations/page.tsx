import { MarketingFooter } from '@/src/components/MarketingFooter';
import { MarketingHeader } from '@/src/components/MarketingHeader';
import { PageHero } from '@/src/components/PageHero';
import { getDictionary, isLocale } from '@/src/lib/i18n';
import { integrationsCards } from '@/src/lib/mock-data';
import { notFound } from 'next/navigation';

export default function IntegrationsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const page = dictionary.pageTitles.integrations;

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main>
        <PageHero eyebrow="Provider Layer" title={page.title} description={page.description} />
        <section className="section">
          <div className="container integrations-grid">
            {integrationsCards.map((item) => (
              <article key={item.name} className="integrations-card">
                <span className="eyebrow">{item.type}</span>
                <h3>{item.name}</h3>
                <p>الحالة: {item.status}</p>
                <p>آخر مزامنة: {item.lastSync}</p>
              </article>
            ))}
            {dictionary.integrations.map((item) => (
              <article key={item} className="integrations-card">
                <span className="eyebrow">Future Ready</span>
                <h3>{item}</h3>
                <p>{locale === 'ar' ? 'جاهز للإضافة عبر عقد موحد للمزودات.' : 'Ready to be added through the shared provider contract.'}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
