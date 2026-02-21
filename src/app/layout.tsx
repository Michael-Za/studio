import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'صنايعي اكسبرس - أسهل طريق للحرفيين',
  description: 'منصة للعثور على أفضل الحرفيين لخدماتك المنزلية بنمط عصري وسهل.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-['IBM_Plex_Sans_Arabic',sans-serif] antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}