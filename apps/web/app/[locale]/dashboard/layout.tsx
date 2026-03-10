import Link from 'next/link';
import { DashboardSidebar } from '@/src/components/DashboardSidebar';
import { getDictionary, isLocale, localizePath } from '@/src/lib/i18n';
import { notFound } from 'next/navigation';

export default function DashboardLayout({ children, params }: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale;
  const dictionary = getDictionary(locale);

  return (
    <main className="container dashboard-layout">
      <DashboardSidebar locale={locale} />
      <section className="dashboard-content">
        <div className="dashboard-topbar">
          <div>
            <span className="eyebrow">MASARX Workspace</span>
            <h1>{dictionary.dashboard.title}</h1>
            <p className="table-subtitle">{dictionary.dashboard.subtitle}</p>
          </div>
          <div className="table-actions">
            <Link href={localizePath(locale, '/dashboard/orders')} className="button secondary">
              {locale === 'ar' ? 'إنشاء طلب' : 'Create Order'}
            </Link>
            <Link href={localizePath(locale, '/dashboard/shipments')} className="button primary">
              {locale === 'ar' ? 'إنشاء شحنة' : 'Create Shipment'}
            </Link>
          </div>
        </div>
        {children}
      </section>
    </main>
  );
}
