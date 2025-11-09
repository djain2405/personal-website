import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Divya - Building Apps, Connecting People',
  description: 'Engineering Leader, App Builder, Speaker, Explorer, Manifestor from India to US',
  keywords: ['Divya', 'mobile engineering', 'tech speaker', 'app development', 'engineering leader'],
  authors: [{ name: 'Divya' }],
  openGraph: {
    title: 'Divya - Building Apps, Connecting People',
    description: 'Engineering Leader, App Builder, Speaker, Explorer, Manifestor',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}