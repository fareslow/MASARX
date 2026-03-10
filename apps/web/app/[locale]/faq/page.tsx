import { MarketingFooter } from '@/components/MarketingFooter';
import { MarketingHeader } from '@/components/MarketingHeader';
import { PageHero } from '@/components/PageHero';
import { getDictionary, isLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export default function FaqPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const page = dictionary.pageTitles.faq;

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main>
        <PageHero eyebrow="FAQ" title={page.title} description={page.description} />
        <section className="section">
          <div className="container form-stack">
            {dictionary.faqs.map((item) => (
              <details key={item.question} open>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
