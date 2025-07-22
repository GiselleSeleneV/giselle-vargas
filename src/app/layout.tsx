import './globals.css';
import { I18nProvider } from '@/providers/I18nProvider';
import Header from '@/components/Header';
import GlowCursor from '@/components/GlowCursor';
import { cookies } from 'next/headers';

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
