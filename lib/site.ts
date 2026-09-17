export const LOCALES = ['en', 'pt'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.douglaspereira.dev.br'

export const SITE_NAME = 'Douglas Pereira'
export const SITE_INITIALS = 'DH'

export const socialLinks = [
  { name: 'github', url: 'https://github.com/douglas-henrique' }
]

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale)
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split('/').filter(Boolean)[0]
  return segment && isLocale(segment) ? segment : null
}

export function replaceLocale(pathname: string, locale: Locale): string {
  const match = pathname.match(/^\/(en|pt)(\/.*)?$/)
  if (!match) {
    return `/${locale}`
  }
  return `/${locale}${match[2] ?? ''}`
}

export function preferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return DEFAULT_LOCALE
  }

  const lowered = acceptLanguage.toLowerCase()
  if (lowered.includes('pt')) {
    return 'pt'
  }
  return DEFAULT_LOCALE
}
