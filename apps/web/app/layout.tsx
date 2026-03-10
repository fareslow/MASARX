import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

const theYearOfHandicrafts = localFont({
  src: [
    { path: './fonts/the-year-of-handicrafts/TheYearofHandicrafts-Regular.otf', weight: '400', style: 'normal' },
    { path: './fonts/the-year-of-handicrafts/TheYearofHandicrafts-Medium.otf', weight: '500', style: 'normal' },
    { path: './fonts/the-year-of-handicrafts/TheYearofHandicrafts-SemiBold.otf', weight: '600', style: 'normal' },
    { path: './fonts/the-year-of-handicrafts/TheYearofHandicrafts-Bold.otf', weight: '700', style: 'normal' },
    { path: './fonts/the-year-of-handicrafts/TheYearofHandicrafts-Black.otf', weight: '900', style: 'normal' }
  ],
  variable: '--font-handicrafts',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'MASARX | Smart Logistics Command Center',
  description: 'MASARX is a logistics SaaS platform for orders, shipping, tracking, integrations, and analytics.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={theYearOfHandicrafts.variable}>{children}</body>
    </html>
  );
}