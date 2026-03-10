import Link from 'next/link';
import { MarketingFooter } from '@/components/MarketingFooter';
import { MarketingHeader } from '@/components/MarketingHeader';
import { PageHero } from '@/components/PageHero';
import { getDictionary, isLocale, localizePath } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const page = dictionary.pageTitles.contact;

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main>
        <PageHero
          eyebrow="Sales & Support"
          title={page.title}
          description={page.description}
          actions={<Link href={localizePath(locale, '/auth/sign-up')} className="button primary">{dictionary.hero.primaryCta}</Link>}
        />
        <section className="section">
          <div className="container contact-grid">
            <article className="contact-card">
              <h3>{locale === 'ar' ? 'نموذج التواصل' : 'Contact form'}</h3>
              <div className="contact-form">
                <label>
                  <span>{locale === 'ar' ? 'الاسم' : 'Name'}</span>
                  <input placeholder={locale === 'ar' ? 'اسمك الكامل' : 'Your full name'} />
                </label>
                <label>
                  <span>{locale === 'ar' ? 'البريد أو الجوال' : 'Email or phone'}</span>
                  <input placeholder="name@company.com" />
                </label>
                <label>
                  <span>{locale === 'ar' ? 'اسم الشركة' : 'Company name'}</span>
                  <input placeholder="MASARX Commerce" />
                </label>
                <label>
                  <span>{locale === 'ar' ? 'كيف يمكننا المساعدة؟' : 'How can we help?'}</span>
                  <textarea placeholder={locale === 'ar' ? 'أخبرنا عن حجم الطلبات، عدد المتاجر، أو شركات الشحن المطلوبة.' : 'Tell us about order volume, stores, and required carriers.'} />
                </label>
                <button className="button primary">{locale === 'ar' ? 'إرسال الطلب' : 'Send request'}</button>
              </div>
            </article>

            <article className="contact-card">
              <h3>{locale === 'ar' ? 'قنوات مباشرة' : 'Direct channels'}</h3>
              <div className="form-stack">
                {dictionary.contactChannels.map((channel) => (
                  <div key={channel.label} className="section-card">
                    <strong>{channel.label}</strong>
                    <p>{channel.value}</p>
                    <span>{channel.hint}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
