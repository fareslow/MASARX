import Link from 'next/link';
import { SiteDictionary, localizePath } from '@/src/lib/i18n';

export function MarketingFooter({ locale, dictionary }: { locale: string; dictionary: SiteDictionary }) {
  const currentLocale = locale === 'en' ? 'en' : 'ar';

  return (
    <footer className="marketing-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-lockup footer-brand">
            <span className="brand-mark">M</span>
            <span>
              <strong>MASARX</strong>
              <small>Built for modern shipping operations.</small>
            </span>
          </div>
          <p className="muted-paragraph">
            {currentLocale === 'ar'
              ? 'منصة واحدة للموقع التسويقي والتشغيل والربط والتتبع، مصممة للتوسع بثقة.'
              : 'One platform for acquisition, shipping operations, integrations, and tracking.'}
          </p>
        </div>

        <div>
          <h4>{currentLocale === 'ar' ? 'روابط سريعة' : 'Quick links'}</h4>
          <div className="footer-links">
            {dictionary.nav.map((item) => (
              <Link key={item.href} href={localizePath(currentLocale, item.href)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4>{currentLocale === 'ar' ? 'التواصل' : 'Contact'}</h4>
          <div className="footer-links">
            {dictionary.contactChannels.map((channel) => (
              <span key={channel.label}>
                <strong>{channel.label}:</strong> {channel.value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
