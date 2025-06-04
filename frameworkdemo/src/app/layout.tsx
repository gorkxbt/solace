import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solace Protocol Framework Demo',
  description: 'Professional framework section demo for Twitter marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
} 