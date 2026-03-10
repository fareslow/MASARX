import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MASARX Admin',
  description: 'Internal operations admin panel for MASARX.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar">
      <body style={{ margin: 0, fontFamily: 'Segoe UI, sans-serif', background: '#f5f6f8', color: '#16202a' }}>
        {children}
      </body>
    </html>
  );
}
