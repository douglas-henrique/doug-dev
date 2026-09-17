import Link from 'next/link'
import { SITE_NAME } from '@/lib/site'
import { Avatar } from '@/components/avatar'

export function Author({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 text-neutral-600 no-underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
    >
      <Avatar />
      <span className="underline decoration-neutral-300 underline-offset-4 dark:decoration-neutral-600">
        {SITE_NAME}
      </span>
    </Link>
  )
}
