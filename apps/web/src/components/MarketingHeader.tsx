import Link from 'next/link';
import { SiteDictionary, localizePath } from '@/lib/i18n';

export function MarketingHeader({ locale, dictionary }: { locale: string; dictionary: SiteDictionary }) {
  const currentLocale = locale === 'en' ? 'en' : 'ar';
  const alternateLocale = currentLocale === 'ar' ? 'en' : 'ar';

  return (
    <header className="marketing-header">
      <div className="container nav-shell">
        <Link href={localizePath(currentLocale, '/')} className="brand-lockup">
          <span className="brand-mark">M</span>
          <span>
            <strong>MASARX</strong>
            <small>Logistics Operating Layer</small>
          </span>
        </Link>

        <nav className="nav-links">
          {dictionary.nav.map((item) => (
            <Link key={item.href} href={localizePath(currentLocale, item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href={`/${alternateLocale}`} className="locale-link">
            {alternateLocale.toUpperCase()}
          </Link>
          <Link href={localizePath(currentLocale, '/auth/sign-in')} className="button ghost">
            {currentLocale === 'ar' ? 'دخول' : 'Sign In'}
          </Link>
          <Link href={localizePath(currentLocale, '/auth/sign-up')} className="button primary">
            {dictionary.hero.primaryCta}
          </Link>
        </div>
      </div>
    </header>
  );
}
