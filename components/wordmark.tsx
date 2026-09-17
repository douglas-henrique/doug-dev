export function Wordmark({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-12 pt-10 text-5xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
      {children}
    </h1>
  )
}
