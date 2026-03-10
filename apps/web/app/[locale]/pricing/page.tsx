import Link from 'next/link';
import { MarketingFooter } from '@/src/components/MarketingFooter';
import { MarketingHeader } from '@/src/components/MarketingHeader';
import { PageHero } from '@/src/components/PageHero';
import { getDictionary, isLocale, localizePath } from '@/src/lib/i18n';
import { notFound } from 'next/navigation';

export default function PricingPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const page = dictionary.pageTitles.pricing;

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main>
        <PageHero
          eyebrow="Plans"
          title={page.title}
          description={page.description}
          actions={<Link href={localizePath(locale, '/contact')} className="button secondary">{locale === 'ar' ? 'اطلب عرضًا' : 'Request Proposal'}</Link>}
        />
        <section className="section">
          <div className="container plans-grid">
            {dictionary.plans.map((plan) => (
              <article key={plan.name} className="pricing-card">
                <span className="eyebrow">{plan.name}</span>
                <div className="price">{plan.price}</div>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link href={localizePath(locale, '/auth/sign-up')} className="button primary">
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
