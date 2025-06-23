import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Background } from '../components/Background';
import { CustomCursor } from '../components/CustomCursor';
import { MouseProvider } from '../components/MouseContext';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.la-agency-vienna.com';

export const metadata: Metadata = {
  title: 'L.A. Agency Vienna',
  description: 'Exklusives Marketing, PR und Eventmanagement in Wien. Spezialisiert auf Marketing, Branding, Events und Content Produktion.',
  keywords: 'Marketing, PR, Eventmanagement, Wien, Austria, Branding, Content Produktion, Projektmanagement',
  authors: [{ name: 'L.A. Agency Vienna' }],
  creator: 'L.A. Agency Vienna',
  publisher: 'L.A. Agency Vienna',
  robots: 'index, follow',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'L.A. Agency Vienna',
    description: 'Exklusives Marketing, PR und Eventmanagement in Wien',
    url: siteUrl, 
    siteName: 'L.A. Agency Vienna',
    locale: 'de_AT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'L.A. Agency Vienna',
    description: 'Exklusives Marketing, PR und Eventmanagement in Wien',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} bg-[#f7f5f3] text-[#2d2d2d] antialiased cursor-none`}>
        {/* Animated Global Background */}
        <Background />
        
        {/* Global Grid Pattern */}
        <div className="fixed inset-0 bg-luxury-pattern opacity-20 pointer-events-none z-10" />
        
        <MouseProvider>
          <CustomCursor />
          {children}
        </MouseProvider>
        <Analytics />
      </body>
    </html>
  );
} 