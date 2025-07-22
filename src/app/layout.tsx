import './globals.css';
import { I18nProvider } from '@/providers/I18nProvider';
import Header from '@/components/Header';
import GlowCursor from '@/components/GlowCursor';
import { cookies } from 'next/headers';

export const metadata = {
  title: "Giselle Vargas",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get('NEXT_LOCALE')?.value;

  const lang: 'en' | 'es' = cookieLang === 'es' ? 'es' : 'en';

  return (
    <html lang={lang}>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      <body className="home-bg">
        <I18nProvider lang={lang}>
          <Header />
          <GlowCursor />
          <div>{children}</div>
        </I18nProvider>
      </body>
    </html>
  );
}
