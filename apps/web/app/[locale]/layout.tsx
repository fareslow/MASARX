import { notFound } from 'next/navigation';
import { isLocale } from '@/src/lib/i18n';

export default function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return <div dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>{children}</div>;
}
