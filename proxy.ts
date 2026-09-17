import { NextRequest, NextResponse } from 'next/server'
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  preferredLocale
} from '@/lib/site'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const locale = getLocaleFromPathname(pathname)

  if (locale) {
    const headers = new Headers(request.headers)
    headers.set('x-locale', locale)
    headers.set('x-pathname', pathname)
    return NextResponse.next({ request: { headers } })
  }

  if (pathname === '/') {
    const nextLocale = preferredLocale(request.headers.get('accept-language'))
    return NextResponse.redirect(new URL(`/${nextLocale}`, request.url))
  }

  if (
    pathname === '/work' ||
    pathname === '/blog' ||
    pathname.startsWith('/n/') ||
    pathname.startsWith('/blog/')
  ) {
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)'
  ]
}
