'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LangSwitch } from '@/components/lang-switch'

function navClass(active: boolean) {
  return active
    ? 'cursor-pointer text-sm text-neutral-800 dark:text-neutral-200'
    : 'cursor-pointer text-sm text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300'
}

export function SiteHeader() {
  const pathname = usePathname() || '/en'
  const locale = pathname.startsWith('/pt') ? 'pt' : 'en'
  const homeHref = `/${locale}`
  const blogHref = `/${locale}/blog`
  const workHref = `/${locale}/work`
  const isHome = pathname === homeHref || pathname === `${homeHref}/`
  const isBlog = pathname === blogHref || pathname.startsWith(`${blogHref}/`)
  const isWork = pathname === workHref || pathname.startsWith(`${workHref}/`)

  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-4">
        <Link href={homeHref} className={navClass(isHome)}>
          {locale === 'pt' ? 'Início' : 'Home'}
        </Link>
        <Link href={blogHref} className={navClass(isBlog)}>
          Blog
        </Link>
        <Link href={workHref} className={navClass(isWork)}>
          {locale === 'pt' ? 'Meu trabalho' : 'Work'}
        </Link>
      </nav>
      <LangSwitch />
    </header>
  )
}
