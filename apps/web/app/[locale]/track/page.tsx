import { MarketingFooter } from '@/src/components/MarketingFooter';
import { MarketingHeader } from '@/src/components/MarketingHeader';
import { PageHero } from '@/src/components/PageHero';
import { TrackingLookup } from '@/src/components/TrackingLookup';
import { getDictionary, isLocale } from '@/src/lib/i18n';
import { notFound } from 'next/navigation';

export default function TrackPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const page = dictionary.pageTitles.track;

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main>
        <PageHero eyebrow="Tracking" title={page.title} description={page.description} />
        <section className="section">
          <div className="container">
            <TrackingLookup />
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
