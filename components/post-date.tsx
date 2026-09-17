import { JsonLd, blogPostingGraph } from '@/components/json-ld'
import { SITE_URL } from '@/lib/site'

export function PostDate({
  children,
  dateTime,
  headline,
  path
}: {
  children: React.ReactNode
  dateTime: string
  headline: string
  path: string
}) {
  return (
    <>
      <JsonLd
        data={blogPostingGraph({
          headline,
          datePublished: dateTime,
          url: `${SITE_URL}${path}`
        })}
      />
      <time
        dateTime={dateTime}
        className="mt-2 mb-8 block text-sm text-neutral-400 dark:text-neutral-500"
      >
        {children}
      </time>
    </>
  )
}
