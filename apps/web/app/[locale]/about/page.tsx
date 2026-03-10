import Link from 'next/link';
import { MarketingFooter } from '@/components/MarketingFooter';
import { MarketingHeader } from '@/components/MarketingHeader';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { getDictionary, isLocale, localizePath } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const page = dictionary.pageTitles.about;

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main>
        <PageHero
          eyebrow="MASARX"
          title={page.title}
          description={page.description}
          actions={<Link href={localizePath(locale, '/contact')} className="button primary">{locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}</Link>}
        />

        <section className="section">
          <div className="container dual-grid">
            <article className="section-card">
              <SectionHeading
                eyebrow={locale === 'ar' ? 'رؤيتنا' : 'Vision'}
                title={locale === 'ar' ? 'طبقة تشغيل موحدة بين البيع والتنفيذ.' : 'A unified operating layer between acquisition and execution.'}
                description={locale === 'ar' ? 'نريد أن تكون رحلة العميل قبل التسجيل وبعده متماسكة بصريًا ووظيفيًا، من الحاسبة إلى أول شحنة.' : 'The user journey should remain consistent from first visit to first shipment.'}
              />
              <ul className="check-list">
                <li>Marketing and dashboard under one product language</li>
                <li>Modular backend ready for scale</li>
                <li>Multi-carrier and multi-store readiness from day one</li>
              </ul>
            </article>
            <article className="section-card">
              <SectionHeading
                eyebrow={locale === 'ar' ? 'المبادئ' : 'Principles'}
                title={locale === 'ar' ? 'نطوّر بعقلية Product لا بعقلية صفحات منفصلة.' : 'We build with a product mindset, not page-by-page thinking.'}
              />
              <ul className="check-list">
                <li>{locale === 'ar' ? 'الجداول جزء أساسي من التجربة اليومية.' : 'Tables are a first-class UX surface.'}</li>
                <li>{locale === 'ar' ? 'التكاملات تدخل عبر عقود موحدة.' : 'Integrations enter through stable provider contracts.'}</li>
                <li>{locale === 'ar' ? 'التسعير والتتبع والويب هوكس تبنى كنواة قابلة للتوسع.' : 'Pricing, tracking, and webhooks are built as reusable engines.'}</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
