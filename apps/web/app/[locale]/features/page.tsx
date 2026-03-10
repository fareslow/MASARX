import { MarketingFooter } from '@/src/components/MarketingFooter';
import { MarketingHeader } from '@/src/components/MarketingHeader';
import { PageHero } from '@/src/components/PageHero';
import { getDictionary, isLocale } from '@/src/lib/i18n';
import { notFound } from 'next/navigation';

export default function FeaturesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const page = dictionary.pageTitles.features;

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main>
        <PageHero eyebrow="Platform" title={page.title} description={page.description} />
        <section className="section">
          <div className="container modules-grid">
            {dictionary.modules.concat(dictionary.valueProps).map((item) => (
              <article key={item.title} className="module-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
