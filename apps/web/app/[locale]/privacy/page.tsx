import { MarketingFooter } from '@/components/MarketingFooter';
import { MarketingHeader } from '@/components/MarketingHeader';
import { PageHero } from '@/components/PageHero';
import { getDictionary, isLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

const policyItems = [
  'نجمع بيانات الحساب والطلبات والشحنات فقط لتشغيل الخدمة وتحسين الأداء.',
  'يتم تقييد الوصول إلى البيانات على أساس الصلاحيات والحسابات المرتبطة.',
  'يتم حفظ سجلات الأحداث الحساسة لأغراض الأمان والتدقيق.',
  'يمكن لاحقًا تطبيق سياسات احتفاظ وتشفير ومناطق استضافة حسب الدولة أو القطاع.'
];

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const page = dictionary.pageTitles.privacy;

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main>
        <PageHero eyebrow="Privacy" title={page.title} description={page.description} />
        <section className="section">
          <div className="container timeline-card">
            <ul className="check-list">
              {policyItems.map((item) => (
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
