import Link from 'next/link';
import { MarketingFooter } from '@/src/components/MarketingFooter';
import { MarketingHeader } from '@/src/components/MarketingHeader';
import { getDictionary, isLocale, localizePath } from '@/src/lib/i18n';
import { notFound } from 'next/navigation';

export default function SignInPage({ params }: { params: { locale: string } }) {
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
            <span className="eyebrow">MASARX Access</span>
            <h1>{auth.signInTitle}</h1>
            <p>{auth.signInDescription}</p>
            <div className="auth-form">
              <label>
                <span>{locale === 'ar' ? 'البريد أو الجوال' : 'Email or phone'}</span>
                <input placeholder="name@company.com" />
              </label>
              <label>
                <span>{locale === 'ar' ? 'كلمة المرور' : 'Password'}</span>
                <input type="password" placeholder="********" />
              </label>
              <Link href={localizePath(locale, '/dashboard')} className="button primary">
                {auth.signInTitle}
              </Link>
            </div>
          </article>
        </div>
      </main>
      <MarketingFooter locale={locale} dictionary={dictionary} />
    </>
  );
}
