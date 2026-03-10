import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MASARX | Smart Logistics Command Center',
  description: 'MASARX is a logistics SaaS platform for orders, shipping, tracking, integrations, and analytics.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
