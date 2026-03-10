import Link from 'next/link';
import { MarketingFooter } from '@/components/MarketingFooter';
import { MarketingHeader } from '@/components/MarketingHeader';
import { getDictionary, isLocale, localizePath } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export default function SignUpPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dictionary = getDictionary(locale);
  const auth = dictionary.auth;

  return (
    <>
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main className="section">
        <div className="container auth-shell">
          <article className="auth-card">
            <span className="eyebrow">Start Free</span>
            <h1>{auth.signUpTitle}</h1>
            <p>{auth.signUpDescription}</p>
            <div className="auth-form">
              <label>
                <span>{locale === 'ar' ? 'الاسم' : 'Name'}</span>
                <input placeholder={locale === 'ar' ? 'الاسم الكامل' : 'Full name'} />
              </label>
              <label>
                <span>{locale === 'ar' ? 'البريد أو رقم الجوال' : 'Email or phone'}</span>
                <input placeholder="name@company.com" />
              </label>
              <label>
                <span>{locale === 'ar' ? 'كلمة المرور' : 'Password'}</span>
                <input type="password" placeholder="********" />
              </label>
              <label>
                <span>{locale === 'ar' ? 'اسم الشركة أو المتجر' : 'Company or store name'}</span>
                <input placeholder="MASARX Store" />
              </label>
              <Link href={localizePath(locale, '/onboarding')} className="button primary">
                {locale === 'ar' ? 'إنشاء الحساب' : 'Create account'}
              </Link>
            </div>
          </article>
        </div>
      </main>
      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
