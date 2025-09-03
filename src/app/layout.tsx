
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Poppins, PT_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '600', '700', '800'],
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '700'],
});


export const metadata: Metadata = {
  title: 'Home Theater & Sound System Installation in Ajmer | Acoustica Vista',
  description: 'Expert home theater, cinema, Dolby Atmos, and commercial sound system installation in Ajmer. We offer custom audio system setup, surround sound, and acoustic treatment for homes, halls, and businesses.',
  keywords: [
    'home theater installation in Ajmer',
    'sound system installation in Ajmer',
    'audio system setup in Ajmer',
    'Dolby digital installation in Ajmer',
    'Dolby Atmos installation in Ajmer',
    'surround sound setup in Ajmer',
    'home cinema installation in Ajmer',
    'living room home theater setup Ajmer',
    'commercial AV solutions',
    'hall sound system setup in Ajmer',
    'conference room sound system Ajmer',
    'restaurant sound system installation Ajmer',
    'professional sound installation in Ajmer',
    'Acoustica Vista',
  ],
  authors: [{ name: 'Acoustica Vista' }],
  creator: 'Acoustica Vista',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Professional Home Theater & Sound System Installation in Ajmer | Acoustica Vista',
    description: 'From custom home cinema design to commercial sound systems for restaurants and halls, Acoustica Vista is your trusted installer in Ajmer.',
    url: 'https://primeaudiosolution.in',
    siteName: 'Acoustica Vista',
    images: [
      {
        url: '/hero-image-main.jpg',
        width: 1200,
        height: 630,
        alt: 'High-end home theater system by Acoustica Vista in Ajmer',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Audio & Video Installation in Ajmer | Acoustica Vista',
    description: 'Looking for home theater, Dolby Atmos, or commercial sound system installation in Ajmer? Acoustica Vista delivers unmatched quality and service.',
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
  name: 'Acoustica Vista',
  image: 'https://primeaudiosolution.in/hero-image-main.jpg',
  '@id': 'https://primeaudiosolution.in',
  url: 'https://primeaudiosolution.in',
  telephone: '+91 98288 02930',
  email: 'akshay.primeaudiosolution@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jaipur, Rajasthan',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.9124, 
    longitude: 75.7873,
  },
  description: 'Specialists in home theater, cinema, Dolby Atmos, and commercial sound system installation in Ajmer. We also offer professional acoustic treatment for residential and commercial spaces.',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${ptSans.variable} ${poppins.variable} font-body bg-background text-foreground antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
