import { MarketingFooter } from '@/src/components/MarketingFooter';
import { MarketingHeader } from '@/src/components/MarketingHeader';
import { PageHero } from '@/src/components/PageHero';
import { getDictionary, isLocale } from '@/src/lib/i18n';
import { notFound } from 'next/navigation';

const termsItems = [
  'MASARX تقدم طبقة تشغيل رقمية وتكاملات، ولا تعد جهة شحن بذاتها إلا إذا تم النص على خلاف ذلك.',
  'تلتزم الجهة المستخدمة بصحة بيانات الطلبات والعناوين والاتصال بالمستلمين.',
  'قد تختلف أسعار الشحن النهائية عن التقديرات الظاهرة في الحاسبة وفق العقود والتسعير الفعلي.',
  'يجب استخدام الصلاحيات والحسابات الفرعية وفق سياسات الأمان الداخلية للعميل.'
];

export default function TermsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const page = dictionary.pageTitles.terms;

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main>
        <PageHero eyebrow="Terms" title={page.title} description={page.description} />
        <section className="section">
          <div className="container timeline-card">
            <ul className="check-list">
              {termsItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
