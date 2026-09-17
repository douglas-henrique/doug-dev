import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { headers } from 'next/headers'
import { SiteHeader } from '@/components/site-header'
import { JsonLd } from '@/components/json-ld'
import { rootMetadata } from '@/lib/seo'
import {
  DEFAULT_LOCALE,
  isLocale,
  socialLinks
} from '@/lib/site'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export const metadata: Metadata = rootMetadata

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const headerList = await headers()
  const headerLocale = headerList.get('x-locale')
  const locale = headerLocale && isLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE

  return (
    <html lang={locale} className={poppins.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col justify-between bg-white p-6 text-neutral-800 sm:p-12 md:px-16 md:py-14 dark:bg-[#111] dark:text-neutral-200">
          <div className="mx-auto w-full max-w-[42rem] space-y-8">
            <SiteHeader />
            <main className="space-y-4">{children}</main>
          </div>
          <Footer />
          <JsonLd />
          <Analytics />
        </div>
      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
