import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '~/components/ui/Navbar'
import { Scroll } from "~/components/ui/Scroll";
import { Footer } from '~/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HCDC Information Technology Society',
  description: 'HCDC Information Technology Society Official Publication Website',

  // meta tags for social share links
  openGraph: {
    title: 'HCDC Information Technology Society',
    type: 'website',
    url: 'hcdc-its.vercel.app',
    images: 'https://i.imgur.com/YvFWkKb.png',
    description: 'HCDC Information Technology Society Official Publication Website',
  },


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="text-white bg-[#151515]">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <Scroll />
    </html>
  )
}
