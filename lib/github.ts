export type GithubRepo = {
  full_name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
}

export function githubOgImage(repo: string) {
  return `https://opengraph.githubassets.com/1/${repo}`
}

export async function getGithubRepo(repo: string): Promise<GithubRepo | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'doug-dev-site'
      },
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      return null
    }

    const data = (await response.json()) as GithubRepo
    return {
      full_name: data.full_name,
      html_url: data.html_url,
      description: data.description,
      language: data.language,
      stargazers_count: data.stargazers_count,
      forks_count: data.forks_count
    }
  } catch {
    return null
  }
}
