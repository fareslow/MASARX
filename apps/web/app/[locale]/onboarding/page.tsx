import Link from 'next/link';
import { MarketingFooter } from '@/components/MarketingFooter';
import { MarketingHeader } from '@/components/MarketingHeader';
import { getDictionary, isLocale, localizePath } from '@/lib/i18n';
import { onboardingSteps } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

export default function OnboardingPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const auth = dictionary.auth;

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main className="section">
        <div className="container dual-grid">
          <article className="auth-card">
            <span className="eyebrow">Onboarding</span>
            <h1>{auth.onboardingTitle}</h1>
            <p>{auth.onboardingDescription}</p>
            <div className="form-stack">
              {onboardingSteps.map((step, index) => (
                <div key={step} className="section-card">
                  <strong>0{index + 1}</strong>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="auth-card">
            <h3>{locale === 'ar' ? 'نموذج التهيئة السريعة' : 'Quick setup form'}</h3>
            <div className="auth-form">
              <label>
                <span>{locale === 'ar' ? 'نوع النشاط' : 'Business type'}</span>
                <select>
                  <option>{locale === 'ar' ? 'متجر إلكتروني' : 'Online store'}</option>
                  <option>{locale === 'ar' ? 'موزع / جملة' : 'Distributor / wholesale'}</option>
                  <option>{locale === 'ar' ? 'شركة تشغيل' : 'Operations company'}</option>
                </select>
              </label>
              <label>
                <span>{locale === 'ar' ? 'العنوان الأساسي' : 'Primary shipping address'}</span>
                <input placeholder={locale === 'ar' ? 'الرياض - حي الربيع' : 'Riyadh - Al Rabie'} />
              </label>
              <label>
                <span>{locale === 'ar' ? 'طريقة إدخال الطلبات' : 'How will you add orders?'}</span>
                <select>
                  <option>{locale === 'ar' ? 'ربط متجر' : 'Connect store'}</option>
                  <option>{locale === 'ar' ? 'إضافة يدوية' : 'Manual entry'}</option>
                </select>
              </label>
              <div className="hero-actions">
                <Link href={localizePath(locale, '/dashboard')} className="button primary">
                  {locale === 'ar' ? 'ادخل إلى اللوحة' : 'Enter dashboard'}
                </Link>
                <Link href={localizePath(locale, '/dashboard/integrations')} className="button ghost">
                  {locale === 'ar' ? 'إكمال الربط لاحقًا' : 'Connect later'}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
