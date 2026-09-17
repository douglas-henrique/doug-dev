import { githubSameAs, OG_IMAGE_PATH } from '@/lib/seo'
import { SITE_NAME, SITE_URL } from '@/lib/site'

type JsonLdValue = Record<string, unknown> | Record<string, unknown>[]

export function personAndWebsiteGraph(): JsonLdValue {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}${OG_IMAGE_PATH}`,
      jobTitle: 'Tech Lead',
      sameAs: githubSameAs()
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: ['en', 'pt']
    }
  ]
}

export function blogPostingGraph({
  headline,
  datePublished,
  url
}: {
  headline: string
  datePublished: string
  url: string
}): JsonLdValue {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    datePublished,
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL
    },
    image: `${SITE_URL}${OG_IMAGE_PATH}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  }
}

export function JsonLd({ data }: { data?: JsonLdValue } = {}) {
  const graph = data ?? personAndWebsiteGraph()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
