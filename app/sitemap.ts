import { promises as fs } from 'fs'
import path from 'path'
import { LOCALES, SITE_URL } from '@/lib/site'

type SitemapEntry = {
  url: string
  lastModified: Date
  alternates: {
    languages: {
      en: string
      pt: string
      'x-default': string
    }
  }
}

function languageAlternates(pathWithoutLocale: string) {
  const suffix = pathWithoutLocale === '/' ? '' : pathWithoutLocale
  const en = `${SITE_URL}/en${suffix}`
  const pt = `${SITE_URL}/pt${suffix}`

  return {
    en,
    pt,
    'x-default': en
  }
}

function entry(locale: string, pathWithoutLocale: string, lastModified: Date): SitemapEntry {
  const suffix = pathWithoutLocale === '/' ? '' : pathWithoutLocale
  const languages = languageAlternates(pathWithoutLocale)

  return {
    url: `${SITE_URL}/${locale}${suffix}`,
    lastModified,
    alternates: { languages }
  }
}

async function fileMtime(filePath: string) {
  const stat = await fs.stat(filePath)
  return stat.mtime
}

async function getMdxPages(dir: string) {
  try {
    const entries = await fs.readdir(dir, {
      recursive: true,
      withFileTypes: true
    })

    return Promise.all(
      entries
        .filter((item) => item.isFile() && item.name === 'page.mdx')
        .map(async (item) => {
          const filePath = path.join(item.parentPath, item.name)
          const relativePath = path.relative(dir, filePath)
          const slug = path.dirname(relativePath).replace(/\\/g, '/')

          return {
            slug,
            lastModified: await fileMtime(filePath)
          }
        })
    )
  } catch {
    return []
  }
}

export default async function sitemap() {
  const staticRoutes = await Promise.all(
    LOCALES.flatMap((locale) => {
      const pages = [
        { pathWithoutLocale: '/', file: path.join(process.cwd(), 'app', locale, 'page.mdx') },
        {
          pathWithoutLocale: '/work',
          file: path.join(process.cwd(), 'app', locale, 'work', 'page.mdx')
        },
        {
          pathWithoutLocale: '/blog',
          file: path.join(process.cwd(), 'app', locale, 'blog', 'page.mdx')
        }
      ]

      return pages.map(async (page) =>
        entry(locale, page.pathWithoutLocale, await fileMtime(page.file))
      )
    })
  )

  const contentRoutes = await Promise.all(
    LOCALES.flatMap((locale) =>
      (['n', 'blog'] as const).map(async (section) => {
        const pages = await getMdxPages(
          path.join(process.cwd(), 'app', locale, section)
        )

        return pages
          .filter((page) => page.slug !== '.')
          .map((page) =>
            entry(locale, `/${section}/${page.slug}`, page.lastModified)
          )
      })
    )
  )

  return [...staticRoutes, ...contentRoutes.flat()]
}
