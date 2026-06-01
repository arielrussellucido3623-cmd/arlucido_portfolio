import type { Metadata } from 'next'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Lucido | Portfolio',
  description: 'Personal portfolio website of Lucido — developer, creator, and lifelong learner.',
  keywords: ['portfolio', 'developer', 'web development', 'Next.js'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
