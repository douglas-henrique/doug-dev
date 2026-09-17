import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, socialLinks } from '@/lib/site'

export const SITE_TAGLINE_EN =
  'Engineer, writer, and tech lead. Notes, posts, and work.'
export const SITE_TAGLINE_PT =
  'Engenheiro, escritor e tech lead. Notas, textos e trabalho.'

export const OG_IMAGE_PATH = '/douglas.png'

export const generatedOgImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: SITE_NAME
}

export function languageAlternates(path = '') {
  const suffix = path.startsWith('/') ? path : path ? `/${path}` : ''
  return {
    canonical: `/en${suffix}`,
    languages: {
      en: `/en${suffix}`,
      pt: `/pt${suffix}`,
      'x-default': `/en${suffix}`
    }
  } satisfies Metadata['alternates']
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_TAGLINE_EN,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    shortcut: '/favicon.ico'
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [generatedOgImage]
  },
  twitter: {
    card: 'summary_large_image'
  }
}

export function githubSameAs() {
  return socialLinks.map((link) => link.url)
}
