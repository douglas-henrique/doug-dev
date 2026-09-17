'use client'

import { usePathname, useSearchParams } from 'next/navigation'

export const DEFAULT_PAGE_SIZE = 5

export function usePagination<T>(
  items: T[],
  pageSize = DEFAULT_PAGE_SIZE,
  param = 'page'
) {
  const pathname = usePathname() || '/'
  const searchParams = useSearchParams()
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize) || 1)
  const requested = Number(searchParams.get(param)) || 1
  const page = Math.min(Math.max(1, requested), pageCount)
  const slice = items.slice((page - 1) * pageSize, page * pageSize)

  function hrefFor(next: number) {
    const params = new URLSearchParams(searchParams.toString())
    if (next <= 1) {
      params.delete(param)
    } else {
      params.set(param, String(next))
    }
    const query = params.toString()
    return query ? `${pathname}?${query}` : pathname
  }

  return { page, pageCount, slice, hrefFor }
}
