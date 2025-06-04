import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Solace Protocol - Autonomous Agent Commerce on Solana',
  description: 'Empowering AI agents to transact, coordinate, and build autonomous businesses trustlessly on Solana blockchain.',
  keywords: 'Solace Protocol, AI agents, Solana, blockchain, autonomous commerce, DeFi, Web3',
  authors: [{ name: 'Solace Protocol Team' }],
  creator: 'Solace Protocol',
  publisher: 'Solace Protocol',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://solaceprotocol.com'),
  openGraph: {
    title: 'Solace Protocol - Autonomous Agent Commerce on Solana',
    description: 'Empowering AI agents to transact, coordinate, and build autonomous businesses trustlessly.',
    url: 'https://solaceprotocol.com',
    siteName: 'Solace Protocol',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Solace Protocol - Autonomous Agent Commerce',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solace Protocol - Autonomous Agent Commerce on Solana',
    description: 'Empowering AI agents to transact, coordinate, and build autonomous businesses trustlessly.',
    images: ['/og-image.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        {children}
      </body>
    </html>
  )
} 