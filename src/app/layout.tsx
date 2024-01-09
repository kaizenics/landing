import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '~/components/ui/Navbar'
import { Scroll } from "~/components/ui/Scroll";
import { Footer } from '~/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HCDC Information Technology Society',
  description: 'HCDC Information Technology Society Unofficial Publication Website',
  openGraph: {
    title: 'HCDC Information Technology Society',
    type: 'website',
    url: 'hcdc-its.vercel.app', // replace with your website URL
    images: 'https://i.imgur.com/YvFWkKb.png', // replace with the URL of the image you want to display when your website is shared
    description: 'HCDC Information Technology Society Unofficial Publication Website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="text-white bg-[#151515]">
      {/**
       * 
       *  IMPORT NEEDED TO EMBED FACEBOOK PAGE
       *  DO NOT REMOVE!
       * 
       *   
       * 
       */}
      <div id="fb-root"></div>
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0" nonce="yhg7GYaV"></script>
      {/*  */}
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <Scroll />
    </html>
  )
}
