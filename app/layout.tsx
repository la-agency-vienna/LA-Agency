import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'L.A. Agency Vienna - Creating Moments. Building Brands.',
  description: 'Exklusives Marketing, PR und Eventmanagement in Wien. Spezialisiert auf Marketing, Branding, Events und Content Produktion.',
  keywords: 'Marketing, PR, Eventmanagement, Wien, Austria, Branding, Content Produktion, Projektmanagement',
  authors: [{ name: 'L.A. Agency Vienna' }],
  creator: 'L.A. Agency Vienna',
  publisher: 'L.A. Agency Vienna',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'L.A. Agency Vienna - Creating Moments. Building Brands.',
    description: 'Exklusives Marketing, PR und Eventmanagement in Wien',
    url: 'https://la-agency.vienna', 
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
      <body className={`${inter.className} bg-[#1a1a1a] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
} 