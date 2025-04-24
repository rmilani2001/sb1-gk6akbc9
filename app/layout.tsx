import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundCanvas from '@/components/BackgroundCanvas';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mixmastermilani.com'),
  title: {
    default: 'House DJ Napa Valley | MixMasterMilani (Napa/Sonoma, CA)',
    template: '%s | MixMasterMilani'
  },
  description: "Napa Valley's premier house DJ, MixMasterMilani, specializing in sophisticated electronic and house music for upscale events and wineries. Book now for your next event!",
  keywords: ['house dj napa', 'MixMasterMilani', 'napa valley dj', 'wine country dj', 'house music napa', 'electronic music california'],
  openGraph: {
    title: 'House DJ Napa Valley | MixMasterMilani',
    description: "Napa Valley's premier house DJ, specializing in sophisticated electronic and house music for upscale events and wineries.",
    url: 'https://mixmastermilani.com',
    siteName: 'MixMasterMilani',
    images: [
      {
        url: 'https://mixmastermilani.com/images/mixmastermilani.jpg',
        width: 1200,
        height: 630,
        alt: 'MixMasterMilani'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House DJ Napa Valley | MixMasterMilani',
    description: "Napa Valley's premier house DJ, specializing in sophisticated electronic and house music for upscale events and wineries.",
    images: ['https://mixmastermilani.com/images/mixmastermilani.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        <BackgroundCanvas />
        <Navbar />
        <main className="flex-1 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}