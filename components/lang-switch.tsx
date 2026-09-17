'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LOCALES, replaceLocale, type Locale } from '@/lib/site'

export function LangSwitch() {
  const pathname = usePathname() || `/${LOCALES[0]}`
  const current: Locale = pathname.startsWith('/pt') ? 'pt' : 'en'

  return (
    <nav aria-label="Language" className="flex items-center gap-3 text-sm">
      {LOCALES.map((locale) => {
        const isActive = locale === current
        return (
          <Link
            key={locale}
            href={replaceLocale(pathname, locale)}
            hrefLang={locale}
            aria-current={isActive ? 'page' : undefined}
            className={
              isActive
                ? 'cursor-pointer text-neutral-800 dark:text-neutral-200'
                : 'cursor-pointer text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300'
            }
          >
            {locale.toUpperCase()}
          </Link>
        )
      })}
    </nav>
  )
}
