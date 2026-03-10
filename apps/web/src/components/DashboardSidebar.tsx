'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const labels = {
  ar: [
    { href: '/dashboard', label: 'لوحة التحكم' },
    { href: '/dashboard/orders', label: 'الطلبات' },
    { href: '/dashboard/shipments', label: 'الشحنات' },
    { href: '/dashboard/integrations', label: 'التكاملات' },
    { href: '/dashboard/tracking', label: 'التتبع' },
    { href: '/dashboard/reports', label: 'التقارير' }
  ],
  en: [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/orders', label: 'Orders' },
    { href: '/dashboard/shipments', label: 'Shipments' },
    { href: '/dashboard/integrations', label: 'Integrations' },
    { href: '/dashboard/tracking', label: 'Tracking' },
    { href: '/dashboard/reports', label: 'Reports' }
  ]
};

export function DashboardSidebar({ locale }: { locale: string }) {
  const pathname = usePathname();
  const currentLocale = locale === 'en' ? 'en' : 'ar';

  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-brand">
        <span className="brand-mark">M</span>
        <div>
          <strong>MASARX</strong>
          <small>{currentLocale === 'ar' ? 'مركز القيادة' : 'Command Center'}</small>
        </div>
      </div>

      <nav className="sidebar-nav">
        {labels[currentLocale].map((item) => {
          const href = `/${currentLocale}${item.href}`;
          const active = pathname === href;
          return (
            <Link key={item.href} href={href} className={active ? 'active' : ''}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
