import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Greg — Your AI Chief of Staff',
  description: 'A personal AI assistant that runs on your computer, connects to your Telegram, and actually remembers things. Built for entrepreneurs.',
  openGraph: {
    title: 'Greg — Your AI Chief of Staff',
    description: 'A personal AI assistant built for entrepreneurs. Remembers everything. Handles your inbox. Runs in the background.',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
