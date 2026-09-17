import type { Metadata } from 'next'
import { SITE_NAME } from '@/lib/site'
import { generatedOgImage, SITE_TAGLINE_PT } from '@/lib/seo'

export const metadata: Metadata = {
  description: SITE_TAGLINE_PT,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'pt_BR',
    images: [generatedOgImage]
  }
}

export default function PtLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
