import type { Metadata } from 'next'
import { SITE_NAME } from '@/lib/site'
import { generatedOgImage, SITE_TAGLINE_EN } from '@/lib/seo'

export const metadata: Metadata = {
  description: SITE_TAGLINE_EN,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [generatedOgImage]
  }
}

export default function EnLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
