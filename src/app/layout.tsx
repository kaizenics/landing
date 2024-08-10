import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Scroll } from "~/components/ui/Scroll";
import { Footer } from '~/components/footer';
import { Navbar } from '~/components/navbar';
import { ThemeProvider } from "~/components/theme-provider";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HCDC Information Technology Society',
  description: 'HCDC Information Technology Society Official Publication Website',


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="text-white">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
      <Scroll />
    </html>
  )
}
