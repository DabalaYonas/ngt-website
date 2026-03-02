import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Next General Trading | IT, Construction & Trading Solutions in Ethiopia',
    template: '%s | Next General Trading',
  },
  description: 'Next General Trading - Your trusted partner for IT solutions, construction services, and trading in Ethiopia since 2010. Specializing in Smart Systems, Networking, Software Development, Data Centers, Security, and more.',
  keywords: ['IT solutions Ethiopia', 'construction services Addis Ababa', 'smart systems', 'networking', 'software development', 'data centers', 'security systems', 'Next General Trading'],
  authors: [{ name: 'Next General Trading' }],
  creator: 'Next General Trading',
  publisher: 'Next General Trading',
  metadataBase: new URL('https://ngtechet.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Next General Trading',
    title: 'Next General Trading | IT, Construction & Trading Solutions',
    description: 'Your trusted partner for IT solutions, construction services, and trading in Ethiopia since 2010.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next General Trading | IT, Construction & Trading Solutions',
    description: 'Your trusted partner for IT solutions, construction services, and trading in Ethiopia since 2010.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
