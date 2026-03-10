import { CalculatorWidget } from '@/src/components/CalculatorWidget';
import { MarketingFooter } from '@/src/components/MarketingFooter';
import { MarketingHeader } from '@/src/components/MarketingHeader';
import { PageHero } from '@/src/components/PageHero';
import { getDictionary, isLocale } from '@/src/lib/i18n';
import { notFound } from 'next/navigation';

export default function CalculatorPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const page = dictionary.pageTitles.calculator;

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main>
        <PageHero eyebrow="Pricing Engine" title={page.title} description={page.description} />
        <section className="section">
          <div className="container dual-grid">
            <CalculatorWidget />
            <article className="timeline-card">
              <h3>{locale === 'ar' ? 'كيف تعمل هذه النسخة؟' : 'How does this version work?'}</h3>
              <ul className="check-list">
                <li>{locale === 'ar' ? 'تحسب الوزن الفعلي والوزن الحجمي.' : 'It computes actual and volumetric weight.'}</li>
                <li>{locale === 'ar' ? 'تطبّق نطاق داخلي أو دولي مع رسوم إضافية.' : 'It applies domestic or international zone logic.'}</li>
                <li>{locale === 'ar' ? 'تظهر مقارنة تقريبية بين أكثر من ناقل.' : 'It shows estimated carrier comparison output.'}</li>
                <li>{locale === 'ar' ? 'يمكن لاحقًا ربطها بجداول أسعار من لوحة الأدمن.' : 'Later it can be wired to admin-managed pricing tables.'}</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
