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
  title: 'Home Theater & Dolby Atmos Installation in Ajmer | Prime Audio Solution',
  description: 'Expert home theater and cinema installation in Ajmer. We specialize in custom Dolby Atmos installation and complete audio-visual solutions for your home. Contact us for a quote.',
  keywords: ['home theater installation in ajmer', 'cinema installation in ajmer', 'dolby atmos installation in ajmer', 'home theater ajmer', 'commercial av solutions', 'acoustic treatment', 'prime audio solution'],
  authors: [{ name: 'Prime Audio Solution' }],
  creator: 'Prime Audio Solution',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Home Theater & Dolby Atmos Installation in Ajmer | Prime Audio Solution',
    description: 'Professional cinema and Dolby Atmos installation services in Ajmer. Transform your space with our expert home theater solutions.',
    url: 'https://primeaudiosolution.in',
    siteName: 'Prime Audio Solution',
    images: [
      {
        url: '/hero-image-main.jpg',
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
    title: 'Expert Home Theater Installation in Ajmer | Prime Audio Solution',
    description: 'Looking for home theater, cinema, or Dolby Atmos installation in Ajmer? Prime Audio Solution delivers unmatched quality and service.',
    images: ['/hero-image-main.jpg'], 
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Prime Audio Solution',
  image: 'https://primeaudiosolution.in/hero-image-main.jpg',
  '@id': 'https://primeaudiosolution.in',
  url: 'https://primeaudiosolution.in',
  telephone: '+91 93510 68346',
  email: 'akshay.primeaudiosolution@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'House No. 6, Shyam Nagar, Madarpura',
    addressLocality: 'Ajmer',
    postalCode: '305001',
    addressRegion: 'Rajasthan',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.4678191,
    longitude: 74.55734894335937,
  },
  description: 'Specialists in home theater, cinema, and Dolby Atmos installation in Ajmer. We also offer commercial AV solutions and professional acoustic treatment.',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
  servesCuisine: '',
  priceRange: '$$',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${lexend.variable} font-body bg-background text-foreground antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
