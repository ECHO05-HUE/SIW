import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Lexend } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-headline',
});


export const metadata: Metadata = {
  title: 'Prime Audio Solution | Home Theater & Commercial AV in Ajmer',
  description: 'Prime Audio Solution specializes in custom home theater installations, commercial AV, and professional acoustic treatment in Ajmer, Rajasthan. Transform your space with expert audio-visual solutions.',
  keywords: ['home theater ajmer', 'commercial av solutions', 'acoustic treatment', 'dolby atmos installation', '4k projector setup', 'soundproofing india', 'prime audio solution'],
  authors: [{ name: 'Prime Audio Solution' }],
  creator: 'Prime Audio Solution',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Prime Audio Solution | Home Theater & Commercial AV in Ajmer',
    description: 'Expert design and installation of custom home theaters, commercial sound systems, and acoustic treatments.',
    url: 'https://primeaudiosolution.com', // Replace with your actual domain
    siteName: 'Prime Audio Solution',
    images: [
      {
        url: '/hero-image-main.jpg', // Make sure this path is correct and accessible
        width: 1200,
        height: 630,
        alt: 'High-end home theater system by Prime Audio Solution',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Audio Solution | Premium Audio-Visual Systems',
    description: 'From luxury home cinemas to professional commercial AV, Prime Audio Solution delivers unmatched quality.',
    images: ['/hero-image-main.jpg'], // Make sure this path is correct
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${lexend.variable} font-body bg-background text-foreground antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
