import Image from 'next/image'
import { getGithubRepo, githubOgImage } from '@/lib/github'

const languageColor: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5'
}

export async function GitHubCard({ repo }: { repo: string }) {
  const data = await getGithubRepo(repo)
  const href = data?.html_url ?? `https://github.com/${repo}`
  const name = data?.full_name ?? repo
  const description = data?.description
  const language = data?.language
  const stars = data?.stargazers_count ?? 0
  const forks = data?.forks_count ?? 0

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="my-6 block overflow-hidden rounded-xl border border-neutral-200 no-underline transition-[border-color] duration-200 hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-500"
    >
      <span className="relative block aspect-[2/1] bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={githubOgImage(repo)}
          alt=""
          fill
          sizes="(max-width: 42rem) 100vw, 42rem"
          className="object-cover object-top"
          unoptimized
        />
      </span>
      <span className="block space-y-2 px-4 py-3">
        <span className="flex items-center gap-2 text-sm font-medium text-neutral-800 dark:text-neutral-100">
          <GitHubMark />
          {name}
        </span>
        {description ? (
          <span className="block text-sm leading-6 text-neutral-500 dark:text-neutral-400">
            {description}
          </span>
        ) : null}
        <span className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 dark:text-neutral-500">
          {language ? (
            <span className="inline-flex items-center gap-1.5">
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: languageColor[language] ?? '#8b8b8b' }}
              />
              {language}
            </span>
          ) : null}
          <span>★ {stars}</span>
          <span>Forks {forks}</span>
        </span>
      </span>
    </a>
  )
}

function GitHubMark() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="size-4 fill-current"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  )
}
