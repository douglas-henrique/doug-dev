'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Pagination({
  page,
  pageCount,
  hrefFor
}: {
  page: number
  pageCount: number
  hrefFor: (page: number) => string
}) {
  const pathname = usePathname() || '/en'
  const locale = pathname.startsWith('/pt') ? 'pt' : 'en'
  const prevLabel = locale === 'pt' ? 'Anterior' : 'Previous'
  const nextLabel = locale === 'pt' ? 'Próximo' : 'Next'

  if (pageCount <= 1) {
    return null
  }

  return (
    <nav
      aria-label={locale === 'pt' ? 'Paginação' : 'Pagination'}
      className="mt-8 flex items-center justify-between text-sm"
    >
      <PaginationLink
        href={hrefFor(page - 1)}
        disabled={page <= 1}
        label={prevLabel}
      />
      <span className="text-neutral-400 dark:text-neutral-500">
        {page} / {pageCount}
      </span>
      <PaginationLink
        href={hrefFor(page + 1)}
        disabled={page >= pageCount}
        label={nextLabel}
      />
    </nav>
  )
}

function PaginationLink({
  href,
  disabled,
  label
}: {
  href: string
  disabled: boolean
  label: string
}) {
  if (disabled) {
    return (
      <span className="text-neutral-300 dark:text-neutral-700" aria-disabled="true">
        {label}
      </span>
    )
  }

  return (
    <Link
      href={href}
      className="cursor-pointer text-neutral-500 no-underline hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
    >
      {label}
    </Link>
  )
}
